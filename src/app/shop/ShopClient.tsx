"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, Product } from "@/data/products";
import ShopHeader, { SortOption } from "@/components/shop/ShopHeader";
import CategoryTabs from "@/components/shop/CategoryTabs";
import FilterSidebar, { FilterState } from "@/components/shop/FilterSidebar";
import MobileFilterDrawer from "@/components/shop/MobileFilterDrawer";
import ProductGrid from "@/components/shop/ProductGrid";

const COLOR_HEX_MAP: Record<string, string> = {
  Black: "#1A1A1A",
  Maroon: "#641C22",
  Ivory: "#FDFBF7",
  Olive: "#556B2F",
  Pink: "#E89CAE",
  Blue: "#1E3F66",
  Yellow: "#E5A93B",
  Green: "#2E5D4B",
  Red: "#9E2A2B",
  Beige: "#D8C5A8",
  White: "#FFFFFF",
  Brown: "#6E473B",
  Multi: "#8E7395",
};

const PAGE_SIZE = 24;

export default function ShopClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL state synchronization
  const initialCategory = searchParams.get("category") || "";
  const initialType = searchParams.get("type") || "";
  const initialPrice = searchParams.get("price") || "";
  const initialColor = searchParams.get("color") || "";
  const initialStyle = searchParams.get("style") || "";
  const initialSort = (searchParams.get("sort") as SortOption) || "featured";
  const initialSearch = searchParams.get("search") || "";

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    productType: initialType,
    priceRange: initialPrice,
    color: initialColor,
    style: initialStyle,
  });

  const [sortOption, setSortOption] = useState<SortOption>(initialSort);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Sync state changes with URL
  const updateUrl = useCallback(
    (newFilters: FilterState, newSort: SortOption, newSearch: string) => {
      const params = new URLSearchParams();
      if (newFilters.category) params.set("category", newFilters.category);
      if (newFilters.productType) params.set("type", newFilters.productType);
      if (newFilters.priceRange) params.set("price", newFilters.priceRange);
      if (newFilters.color) params.set("color", newFilters.color);
      if (newFilters.style) params.set("style", newFilters.style);
      if (newSort && newSort !== "featured") params.set("sort", newSort);
      if (newSearch) params.set("search", newSearch);

      const queryString = params.toString();
      const newUrl = queryString ? `/shop?${queryString}` : "/shop";
      router.replace(newUrl, { scroll: false });
    },
    [router]
  );

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    setVisibleCount(PAGE_SIZE);
    updateUrl(updated, sortOption, searchQuery);
  };

  const handleClearFilters = () => {
    const resetFilters: FilterState = {
      category: "",
      productType: "",
      priceRange: "",
      color: "",
      style: "",
    };
    setFilters(resetFilters);
    setSearchQuery("");
    setVisibleCount(PAGE_SIZE);
    updateUrl(resetFilters, sortOption, "");
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortOption(newSort);
    updateUrl(filters, newSort, searchQuery);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setVisibleCount(PAGE_SIZE);
    updateUrl(filters, sortOption, q);
  };

  // Compute available colors and styles from catalog
  const { availableColors, availableStyles, categoryCounts, productTypeCounts, priceRangeCounts } =
    useMemo(() => {
      const colorsMap: Record<string, number> = {};
      const stylesMap: Record<string, number> = {};
      const catCounts: Record<string, number> = { All: products.length };
      const typeCounts: Record<string, number> = {
        SINGLE_PIECE: 0,
        TWO_PIECE: 0,
        THREE_PIECE: 0,
      };
      const priceCounts: Record<string, number> = {
        "under-500": 0,
        "500-899": 0,
        "900-1099": 0,
        "1100-1299": 0,
      };

      products.forEach((p) => {
        // Color
        if (p.color) {
          colorsMap[p.color] = (colorsMap[p.color] || 0) + 1;
        }

        // Style
        if (Array.isArray(p.style)) {
          p.style.forEach((s) => {
            stylesMap[s] = (stylesMap[s] || 0) + 1;
          });
        }

        // Category
        if (Array.isArray(p.category)) {
          p.category.forEach((c) => {
            catCounts[c] = (catCounts[c] || 0) + 1;
          });
        } else if (typeof p.category === "string") {
          catCounts[p.category] = (catCounts[p.category] || 0) + 1;
        }

        // Product Type
        if (p.productType && typeCounts[p.productType] !== undefined) {
          typeCounts[p.productType]++;
        }

        // Price Tier
        if (p.price <= 500) priceCounts["under-500"]++;
        else if (p.price <= 899) priceCounts["500-899"]++;
        else if (p.price <= 1099) priceCounts["900-1099"]++;
        else if (p.price <= 1299) priceCounts["1100-1299"]++;
      });

      const colorList = Object.keys(colorsMap).map((name) => ({
        name,
        hex: COLOR_HEX_MAP[name] || "#B18A52",
        count: colorsMap[name],
      }));

      const styleList = Object.keys(stylesMap).map((name) => ({
        name,
        count: stylesMap[name],
      }));

      const categoryList = Object.keys(catCounts).map((name) => ({
        name,
        count: catCounts[name],
      }));

      return {
        availableColors: colorList,
        availableStyles: styleList,
        categoryCounts: catCounts,
        productTypeCounts: typeCounts,
        priceRangeCounts: priceCounts,
      };
    },
    [products]
  );

  // Apply active filters, search, and sorting
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.productCode.toLowerCase().includes(q) ||
          (p.color && p.color.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q) ||
          (Array.isArray(p.category) &&
            p.category.some((c) => c.toLowerCase().includes(q))) ||
          (Array.isArray(p.style) &&
            p.style.some((s) => s.toLowerCase().includes(q)))
      );
    }

    // Category filter
    if (filters.category) {
      result = result.filter(
        (p) =>
          Array.isArray(p.category) && p.category.includes(filters.category)
      );
    }

    // Product Type filter
    if (filters.productType) {
      result = result.filter((p) => p.productType === filters.productType);
    }

    // Price Range filter
    if (filters.priceRange) {
      if (filters.priceRange === "under-500") {
        result = result.filter((p) => p.price <= 500);
      } else if (filters.priceRange === "500-899") {
        result = result.filter((p) => p.price > 500 && p.price <= 899);
      } else if (filters.priceRange === "900-1099") {
        result = result.filter((p) => p.price >= 900 && p.price <= 1099);
      } else if (filters.priceRange === "1100-1299") {
        result = result.filter((p) => p.price >= 1100 && p.price <= 1299);
      }
    }

    // Color filter
    if (filters.color) {
      result = result.filter((p) => p.color === filters.color);
    }

    // Style filter
    if (filters.style) {
      result = result.filter(
        (p) => Array.isArray(p.style) && p.style.includes(filters.style)
      );
    }

    // Sorting
    result.sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "name-az") return a.name.localeCompare(b.name);
      if (sortOption === "newest") return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortOption === "bestsellers") return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      return 0; // featured default
    });

    return result;
  }, [filters, sortOption, searchQuery]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <div className="bg-[#FCFAF7] min-h-screen py-6 sm:py-10">
      <div className="site-container space-y-6 sm:space-y-8">
        {/* Editorial Header */}
        <ShopHeader
          totalCount={products.length}
          filteredCount={filteredProducts.length}
          sortOption={sortOption}
          onSortChange={handleSortChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onOpenMobileFilters={() => setIsMobileFiltersOpen(true)}
          activeFilterCount={activeFilterCount}
        />

        {/* Category Horizontal Bar */}
        <CategoryTabs
          selectedCategory={filters.category}
          onSelectCategory={(cat) => handleFilterChange("category", cat)}
          categoryCounts={categoryCounts}
        />

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="flex items-start gap-8 lg:gap-10">
          {/* Desktop Left Sidebar */}
          <div className="hidden lg:block w-64 shrink-0 bg-white p-5 rounded-2xl border border-[#E6DDD3] shadow-2xs sticky top-24">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              availableColors={availableColors}
              availableStyles={availableStyles}
              productTypeCounts={productTypeCounts}
              priceRangeCounts={priceRangeCounts}
              activeCount={activeFilterCount}
            />
          </div>

          {/* Right Product Grid Column */}
          <div className="flex-1 min-w-0">
            <ProductGrid
              products={filteredProducts}
              totalFiltered={filteredProducts.length}
              visibleCount={visibleCount}
              onLoadMore={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              onClearFilters={handleClearFilters}
              hasMore={hasMore}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filters Slide-over / Bottom Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFiltersOpen}
        onClose={() => setIsMobileFiltersOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        availableColors={availableColors}
        availableStyles={availableStyles}
        productTypeCounts={productTypeCounts}
        priceRangeCounts={priceRangeCounts}
        totalFiltered={filteredProducts.length}
      />
    </div>
  );
}
