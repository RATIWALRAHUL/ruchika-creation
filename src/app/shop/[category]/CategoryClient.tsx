"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products, Product } from "@/data/products";
import ShopHeader, { SortOption } from "@/components/shop/ShopHeader";
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

interface CategoryClientProps {
  title: string;
  subtitle: string;
  slug: string;
  initialFilters: Partial<FilterState>;
}

export default function CategoryClient({
  title,
  subtitle,
  slug,
  initialFilters,
}: CategoryClientProps) {
  const router = useRouter();

  const [filters, setFilters] = useState<FilterState>({
    category: initialFilters.category || "",
    productType: initialFilters.productType || "",
    priceRange: initialFilters.priceRange || "",
    color: initialFilters.color || "",
    style: initialFilters.style || "",
  });

  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setVisibleCount(PAGE_SIZE);
  };

  const handleClearFilters = () => {
    setFilters({
      category: initialFilters.category || "",
      productType: initialFilters.productType || "",
      priceRange: "",
      color: "",
      style: "",
    });
    setSearchQuery("");
    setVisibleCount(PAGE_SIZE);
  };

  // Compute available facet counts
  const { availableColors, availableStyles, productTypeCounts, priceRangeCounts } =
    useMemo(() => {
      const colorsMap: Record<string, number> = {};
      const stylesMap: Record<string, number> = {};
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
        if (p.color) colorsMap[p.color] = (colorsMap[p.color] || 0) + 1;
        if (Array.isArray(p.style)) {
          p.style.forEach((s) => (stylesMap[s] = (stylesMap[s] || 0) + 1));
        }
        if (p.productType && typeCounts[p.productType] !== undefined) {
          typeCounts[p.productType]++;
        }
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

      return {
        availableColors: colorList,
        availableStyles: styleList,
        productTypeCounts: typeCounts,
        priceRangeCounts: priceCounts,
      };
    }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(q);
        const codeMatch = p.productCode.toLowerCase().includes(q);
        const colorMatch = p.color ? p.color.toLowerCase().includes(q) : false;
        const descMatch = p.description.toLowerCase().includes(q);
        const typeMatch = p.productType.toLowerCase().replace("_", " ").includes(q);
        const catMatch = Array.isArray(p.category)
          ? p.category.some((c) => c.toLowerCase().includes(q))
          : false;

        return nameMatch || codeMatch || colorMatch || descMatch || typeMatch || catMatch;
      });
    }

    // Category filter
    if (filters.category && filters.category !== "All") {
      result = result.filter((p) => {
        if (filters.category === "New Arrivals") return p.isNewArrival;
        if (filters.category === "Best Sellers") return p.isBestSeller;
        if (Array.isArray(p.category)) {
          return p.category.includes(filters.category as any);
        }
        return p.category === filters.category;
      });
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
      if (sortOption === "bestsellers") return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0;
    });

    return result;
  }, [filters, sortOption, searchQuery]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <div className="bg-[#FCFAF7] min-h-screen py-6 sm:py-10">
      <div className="site-container space-y-6 sm:space-y-8">
        {/* Editorial Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li>
              <Link href="/" className="hover:text-[#641C22] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E6DDD3]">
              /
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#641C22] transition-colors">
                Shop
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E6DDD3]">
              /
            </li>
            <li className="text-[#241D1B] font-medium" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E6DDD3]">
          <div>
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B18A52] block mb-1.5">
              RUCHIKA CREATION
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#241D1B] leading-tight mb-2">
              {title}
            </h1>
            <p className="text-xs sm:text-sm font-sans text-[#514744] max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-sans text-[#817771]">
              <strong className="text-[#241D1B]">{filteredProducts.length}</strong> Products
            </span>
          </div>
        </div>

        {/* Layout: Filter Sidebar + Product Grid */}
        <div className="flex items-start gap-8 lg:gap-10">
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
