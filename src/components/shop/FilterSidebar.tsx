"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

export interface FilterState {
  category: string;
  productType: string;
  priceRange: string;
  color: string;
  style: string;
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
  availableColors: { name: string; hex: string; count: number }[];
  availableStyles: { name: string; count: number }[];
  productTypeCounts: Record<string, number>;
  priceRangeCounts: Record<string, number>;
  activeCount: number;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  onClearFilters,
  availableColors,
  availableStyles,
  productTypeCounts,
  priceRangeCounts,
  activeCount,
}: FilterSidebarProps) {
  return (
    <aside className="w-full space-y-6 text-[#241D1B] text-xs font-sans">
      {/* Header with Clear Button */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E6DDD3]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm tracking-wider uppercase text-[#241D1B]">
            Filters
          </span>
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#641C22] text-white text-[10px] font-bold flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={onClearFilters}
            className="text-[11px] text-[#641C22] hover:text-[#4B151A] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <FontAwesomeIcon icon={faRotateLeft} className="text-[10px]" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Product Type Filter */}
      <div className="space-y-3 pb-5 border-b border-[#E6DDD3]">
        <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#817771]">
          Product Type
        </h4>
        <div className="space-y-2">
          {[
            { label: "All Types", value: "" },
            { label: "Single Piece (₹499)", value: "SINGLE_PIECE", key: "SINGLE_PIECE" },
            { label: "Two Piece (₹899)", value: "TWO_PIECE", key: "TWO_PIECE" },
            { label: "Three Piece (₹1,099 - ₹1,299)", value: "THREE_PIECE", key: "THREE_PIECE" },
          ].map((type) => {
            const isSelected = filters.productType === type.value;
            const count = type.key ? productTypeCounts[type.key] : undefined;

            return (
              <label
                key={type.label}
                className="flex items-center justify-between cursor-pointer py-1 group"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="productType"
                    checked={isSelected}
                    onChange={() => onFilterChange("productType", type.value)}
                    className="accent-[#641C22] w-3.5 h-3.5 cursor-pointer"
                  />
                  <span
                    className={`text-[12.5px] transition-colors ${
                      isSelected
                        ? "font-semibold text-[#641C22]"
                        : "text-[#514744] group-hover:text-[#241D1B]"
                    }`}
                  >
                    {type.label}
                  </span>
                </div>
                {typeof count === "number" && (
                  <span className="text-[11px] text-[#817771]">({count})</span>
                )}
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3 pb-5 border-b border-[#E6DDD3]">
        <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#817771]">
          Price Tier
        </h4>
        <div className="space-y-2">
          {[
            { label: "All Prices", value: "" },
            { label: "Under ₹500", value: "under-500", key: "under-500" },
            { label: "₹500 – ₹899", value: "500-899", key: "500-899" },
            { label: "₹900 – ₹1,099", value: "900-1099", key: "900-1099" },
            { label: "₹1,100 – ₹1,299", value: "1100-1299", key: "1100-1299" },
          ].map((range) => {
            const isSelected = filters.priceRange === range.value;
            const count = range.key ? priceRangeCounts[range.key] : undefined;

            return (
              <label
                key={range.label}
                className="flex items-center justify-between cursor-pointer py-1 group"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={isSelected}
                    onChange={() => onFilterChange("priceRange", range.value)}
                    className="accent-[#641C22] w-3.5 h-3.5 cursor-pointer"
                  />
                  <span
                    className={`text-[12.5px] transition-colors ${
                      isSelected
                        ? "font-semibold text-[#641C22]"
                        : "text-[#514744] group-hover:text-[#241D1B]"
                    }`}
                  >
                    {range.label}
                  </span>
                </div>
                {typeof count === "number" && (
                  <span className="text-[11px] text-[#817771]">({count})</span>
                )}
              </label>
            );
          })}
        </div>
      </div>

      {/* Color Filter */}
      <div className="space-y-3 pb-5 border-b border-[#E6DDD3]">
        <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#817771]">
          Color
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onFilterChange("color", "")}
            className={`px-2.5 py-1.5 rounded-lg border text-left text-[11.5px] flex items-center justify-between transition-colors cursor-pointer ${
              !filters.color
                ? "border-[#641C22] bg-[#FAF6F0] font-semibold text-[#641C22]"
                : "border-[#E6DDD3] hover:border-[#817771] text-[#514744]"
            }`}
          >
            <span>All Colors</span>
            {!filters.color && <FontAwesomeIcon icon={faCheck} className="text-[10px]" />}
          </button>
          {availableColors.map((c) => {
            const isSelected = filters.color === c.name;
            return (
              <button
                key={c.name}
                onClick={() => onFilterChange("color", isSelected ? "" : c.name)}
                className={`px-2.5 py-1.5 rounded-lg border text-left text-[11.5px] flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? "border-[#641C22] bg-[#FAF6F0] font-semibold text-[#641C22]"
                    : "border-[#E6DDD3] hover:border-[#817771] text-[#514744]"
                }`}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span
                    className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="truncate">{c.name}</span>
                </div>
                <span className="text-[10px] text-[#817771]">({c.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Style Filter */}
      <div className="space-y-3 pb-5">
        <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#817771]">
          Style / Detailing
        </h4>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onFilterChange("style", "")}
            className={`px-2.5 py-1 rounded-md text-[11.5px] border transition-colors cursor-pointer ${
              !filters.style
                ? "bg-[#641C22] text-white border-[#641C22]"
                : "bg-white text-[#514744] border-[#E6DDD3] hover:border-[#817771]"
            }`}
          >
            All Styles
          </button>
          {availableStyles.map((s) => {
            const isSelected = filters.style === s.name;
            return (
              <button
                key={s.name}
                onClick={() => onFilterChange("style", isSelected ? "" : s.name)}
                className={`px-2.5 py-1 rounded-md text-[11.5px] border transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#641C22] text-white border-[#641C22]"
                    : "bg-white text-[#514744] border-[#E6DDD3] hover:border-[#817771]"
                }`}
              >
                {s.name} <span className="opacity-70">({s.count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
