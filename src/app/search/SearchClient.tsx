"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import ProductGrid from "@/components/shop/ProductGrid";
import FilterSidebar, { FilterState } from "@/components/shop/FilterSidebar";
import MobileFilterDrawer from "@/components/shop/MobileFilterDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faSliders,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { SortOption } from "@/components/shop/ShopHeader";

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

export default function SearchClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [activeQuery, setActiveQuery] = useState(initialQuery);

  const [filters, setFilters] = useState<FilterState>({
    category: "",
    productType: "",
    priceRange: "",
    color: "",
    style: "",
  });

  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    setActiveQuery(q);
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveQuery(query);
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.replace(`/search?${params.toString()}`, { scroll: false });
  };

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setVisibleCount(PAGE_SIZE);
  };

  const handleClearFilters = () => {
    setFilters({
      category: "",
      productType: "",
      priceRange: "",
      color: "",
      style: "",
    });
    setQuery("");
    setActiveQuery("");
    router.replace("/search", { scroll: false });
  };

  // Facet counts
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
        else if (p.price <= 1199) priceCounts["900-1199"]++;
        else priceCounts["1200-above"]++;
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

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Global query search across name, code, color, style, type, category
    if (activeQuery.trim()) {
      const q = activeQuery.toLowerCase().trim();
      result = result.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(q);
        const codeMatch = p.productCode.toLowerCase().includes(q);
        const colorMatch = p.color ? p.color.toLowerCase().includes(q) : false;
        const descMatch = p.description.toLowerCase().includes(q);
        const typeMatch = p.productType.toLowerCase().replace("_", " ").includes(q);
        const catMatch = Array.isArray(p.category)
          ? p.category.some((c) => c.toLowerCase().includes(q))
          : false;
        const styleMatch = Array.isArray(p.style)
          ? p.style.some((s) => s.toLowerCase().includes(q))
          : false;

        return nameMatch || codeMatch || colorMatch || descMatch || typeMatch || catMatch || styleMatch;
      });
    }

    // Category
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

    // Product Type
    if (filters.productType) {
      result = result.filter((p) => p.productType === filters.productType);
    }

    // Price
    if (filters.priceRange) {
      if (filters.priceRange === "under-500") {
        result = result.filter((p) => p.price <= 500);
      } else if (filters.priceRange === "500-899") {
        result = result.filter((p) => p.price > 500 && p.price <= 899);
      } else if (filters.priceRange === "900-1199") {
        result = result.filter((p) => p.price >= 900 && p.price <= 1199);
      } else if (filters.priceRange === "1200-above") {
        result = result.filter((p) => p.price >= 1200);
      }
    }

    // Color
    if (filters.color) {
      result = result.filter((p) => p.color === filters.color);
    }

    // Style
    if (filters.style) {
      result = result.filter(
        (p) => Array.isArray(p.style) && p.style.includes(filters.style)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "name-az") return a.name.localeCompare(b.name);
      if (sortOption === "newest") return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortOption === "bestsellers") return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0;
    });

    return result;
  }, [activeQuery, filters, sortOption]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <div className="bg-[#FCFAF7] min-h-screen py-6 sm:py-10">
      <div className="site-container space-y-6 sm:space-y-8">
        {/* Breadcrumb */}
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
              Search
            </li>
          </ol>
        </nav>

        {/* Search Header Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] shadow-2xs space-y-4">
          <div>
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B18A52] block mb-1">
              CATALOG SEARCH
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#241D1B]">
              {activeQuery ? `Search Results for “${activeQuery}”` : "Search Our Collection"}
            </h1>
            <p className="text-xs sm:text-sm font-sans text-[#817771] mt-1">
              Search by product name, product code (e.g. <strong className="text-[#641C22]">RC-KRT-001</strong>), color, style or category.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-xl">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search kurtis, sets, colors or product code..."
                className="w-full bg-[#FCFAF7] border border-[#E6DDD3] rounded-xl pl-10 pr-10 py-3 text-xs sm:text-sm font-sans text-[#241D1B] placeholder:text-[#817771] focus:outline-none focus:border-[#641C22] transition-colors"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#817771]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveQuery("");
                    router.replace("/search", { scroll: false });
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#817771] hover:text-[#241D1B]"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-xs" />
                </button>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#641C22] hover:bg-[#4B151A] text-white px-5 py-3 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Quick Filter Tags */}
          <div className="flex items-center gap-2 flex-wrap text-xs text-[#817771] pt-1">
            <span>Popular:</span>
            {["RC-KRT-001", "Black", "Embroidered", "Two Piece", "Festive", "Maroon", "Chikankari"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setQuery(tag);
                  setActiveQuery(tag);
                  router.replace(`/search?q=${encodeURIComponent(tag)}`, { scroll: false });
                }}
                className="px-2.5 py-1 bg-[#FAF6F0] hover:bg-[#F8F3EC] border border-[#E6DDD3] rounded-full text-[11px] font-sans text-[#514744] hover:text-[#641C22] transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Bar & Sort / Filter controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E6DDD3]">
          <div className="text-xs font-sans text-[#514744]">
            Showing <strong className="text-[#241D1B]">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "result" : "results"}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E6DDD3] rounded-lg text-xs font-sans font-semibold text-[#241D1B]"
            >
              <FontAwesomeIcon icon={faSliders} className="text-xs text-[#641C22]" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#641C22] text-white text-[9px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="relative min-w-[150px]">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="w-full appearance-none bg-white border border-[#E6DDD3] rounded-lg pl-3 pr-8 py-2 text-xs font-sans font-medium text-[#241D1B] cursor-pointer focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest</option>
                <option value="bestsellers">Sort: Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-az">Name: A to Z</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#817771] pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
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
