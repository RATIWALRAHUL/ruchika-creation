"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faChevronDown,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export type SortOption =
  | "featured"
  | "newest"
  | "price-low"
  | "price-high"
  | "name-az"
  | "bestsellers";

interface ShopHeaderProps {
  totalCount: number;
  filteredCount: number;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenMobileFilters: () => void;
  activeFilterCount: number;
}

export default function ShopHeader({
  totalCount,
  filteredCount,
  sortOption,
  onSortChange,
  searchQuery,
  onSearchChange,
  onOpenMobileFilters,
  activeFilterCount,
}: ShopHeaderProps) {
  return (
    <div className="w-full">
      {/* Editorial Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
        <ol className="flex items-center gap-2 text-[11px] sm:text-[12px] font-sans text-[#817771]">
          <li>
            <Link
              href="/"
              className="hover:text-[#641C22] transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#E6DDD3]">
            /
          </li>
          <li className="text-[#241D1B] font-medium" aria-current="page">
            Shop All
          </li>
        </ol>
      </nav>

      {/* Main Editorial Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E6DDD3]">
        {/* Left: Brand Eyebrow, Main Title, Subheading */}
        <div className="max-w-2xl">
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B18A52] block mb-2">
            THE RUCHIKA EDIT
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#241D1B] leading-tight tracking-tight mb-2 sm:mb-3">
            Shop Our Collection
          </h1>
          <p className="text-[13px] sm:text-[14.5px] font-sans text-[#514744] font-normal leading-relaxed">
            Timeless silhouettes, thoughtful details and effortless Indian elegance.
            Discover our curated catalog of {totalCount} signature creations.
          </p>
        </div>

        {/* Right: Search, Filter Toggle (Mobile/Tablet), Sort Dropdown */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-64 min-w-[200px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search kurtis, sets, colors..."
              className="w-full bg-white border border-[#E6DDD3] rounded-lg pl-9 pr-8 py-2.5 text-xs font-sans text-[#241D1B] placeholder:text-[#817771] focus:outline-none focus:border-[#641C22] transition-colors shadow-2xs"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#817771]"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#817771] hover:text-[#241D1B] p-1 text-xs"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            )}
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={onOpenMobileFilters}
            className="lg:hidden flex items-center gap-2 px-3.5 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-xs font-sans font-semibold text-[#241D1B] hover:border-[#641C22] transition-colors cursor-pointer shadow-2xs"
          >
            <FontAwesomeIcon icon={faSliders} className="text-xs text-[#641C22]" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#641C22] text-white text-[10px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort By Dropdown */}
          <div className="relative min-w-[150px]">
            <select
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              aria-label="Sort products"
              className="w-full appearance-none bg-white border border-[#E6DDD3] rounded-lg pl-3 pr-8 py-2.5 text-xs font-sans font-medium text-[#241D1B] hover:border-[#641C22] focus:outline-none focus:border-[#641C22] transition-colors shadow-2xs cursor-pointer"
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
    </div>
  );
}
