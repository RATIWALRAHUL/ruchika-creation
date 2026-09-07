"use client";

import React from "react";

export const SHOP_CATEGORIES = [
  "All",
  "Kurtis",
  "Two Piece Sets",
  "Three Piece Sets",
  "Embroidered",
  "Printed",
  "Everyday",
  "Festive",
  "New Arrivals",
  "Best Sellers",
] as const;

export type CategoryFilterType = (typeof SHOP_CATEGORIES)[number];

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categoryCounts?: Record<string, number>;
}

export default function CategoryTabs({
  selectedCategory,
  onSelectCategory,
  categoryCounts = {},
}: CategoryTabsProps) {
  return (
    <div className="w-full border-b border-[#E6DDD3] py-2">
      <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar py-1">
        {SHOP_CATEGORIES.map((cat) => {
          const isActive =
            cat === "All"
              ? !selectedCategory || selectedCategory === "All"
              : selectedCategory === cat;
          const count = categoryCounts[cat];

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat === "All" ? "" : cat)}
              className={`relative py-2.5 px-3 text-[12px] sm:text-[13px] font-sans tracking-[0.04em] uppercase font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-[#641C22]"
                  : "text-[#514744] hover:text-[#641C22]"
              }`}
            >
              <span>{cat}</span>
              {typeof count === "number" && (
                <span className="ml-1.5 text-[10px] text-[#817771] font-normal">
                  ({count})
                </span>
              )}

              {/* Active Indicator Underline */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#641C22] rounded-full animate-in fade-in duration-150" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
