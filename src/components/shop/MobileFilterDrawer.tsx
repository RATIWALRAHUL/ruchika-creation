"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FilterState } from "./FilterSidebar";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
  availableColors: { name: string; hex: string; count: number }[];
  availableStyles: { name: string; count: number }[];
  productTypeCounts: Record<string, number>;
  priceRangeCounts: Record<string, number>;
  totalFiltered: number;
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearFilters,
  availableColors,
  availableStyles,
  productTypeCounts,
  priceRangeCounts,
  totalFiltered,
}: MobileFilterDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-[#FCFAF7] h-full flex flex-col z-10 shadow-2xl animate-in slide-in-from-right duration-250">
        {/* Header */}
        <div className="p-4 border-b border-[#E6DDD3] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-medium text-[#241D1B]">
              Filters
            </span>
            <span className="text-xs text-[#817771]">({totalFiltered} items)</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close filters"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#514744] hover:bg-[#F8F3EC] transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </div>

        {/* Scrollable Filters Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 text-xs font-sans">
          {/* Product Type Filter */}
          <div className="space-y-2.5 pb-4 border-b border-[#E6DDD3]">
            <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#817771]">
              Product Type
            </h4>
            <div className="space-y-2">
              {[
                { label: "All Types", value: "" },
                { label: "Single Piece Kurtis", value: "SINGLE_PIECE", key: "SINGLE_PIECE" },
                { label: "Two Piece Sets", value: "TWO_PIECE", key: "TWO_PIECE" },
                { label: "Three Piece Sets", value: "THREE_PIECE", key: "THREE_PIECE" },
              ].map((type) => {
                const isSelected = filters.productType === type.value;
                const count = type.key ? productTypeCounts[type.key] : undefined;

                return (
                  <label
                    key={type.label}
                    className="flex items-center justify-between cursor-pointer py-1"
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="mobileProductType"
                        checked={isSelected}
                        onChange={() => onFilterChange("productType", type.value)}
                        className="accent-[#641C22] w-4 h-4 cursor-pointer"
                      />
                      <span
                        className={`text-[13px] ${
                          isSelected
                            ? "font-semibold text-[#641C22]"
                            : "text-[#514744]"
                        }`}
                      >
                        {type.label}
                      </span>
                    </div>
                    {typeof count === "number" && (
                      <span className="text-xs text-[#817771]">({count})</span>
                    )}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2.5 pb-4 border-b border-[#E6DDD3]">
            <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#817771]">
              Price Tier
            </h4>
            <div className="space-y-2">
              {[
                { label: "All Prices", value: "" },
                { label: "Under ₹500", value: "under-500", key: "under-500" },
                { label: "₹500 – ₹899", value: "500-899", key: "500-899" },
                { label: "₹900 – ₹1,199", value: "900-1199", key: "900-1199" },
                { label: "₹1,200 & Above", value: "1200-above", key: "1200-above" },
              ].map((range) => {
                const isSelected = filters.priceRange === range.value;
                const count = range.key ? priceRangeCounts[range.key] : undefined;

                return (
                  <label
                    key={range.label}
                    className="flex items-center justify-between cursor-pointer py-1"
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="mobilePriceRange"
                        checked={isSelected}
                        onChange={() => onFilterChange("priceRange", range.value)}
                        className="accent-[#641C22] w-4 h-4 cursor-pointer"
                      />
                      <span
                        className={`text-[13px] ${
                          isSelected
                            ? "font-semibold text-[#641C22]"
                            : "text-[#514744]"
                        }`}
                      >
                        {range.label}
                      </span>
                    </div>
                    {typeof count === "number" && (
                      <span className="text-xs text-[#817771]">({count})</span>
                    )}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Color */}
          <div className="space-y-2.5 pb-4 border-b border-[#E6DDD3]">
            <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#817771]">
              Color
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onFilterChange("color", "")}
                className={`px-2.5 py-2 rounded-lg border text-left text-xs flex items-center justify-between transition-colors ${
                  !filters.color
                    ? "border-[#641C22] bg-[#FAF6F0] font-semibold text-[#641C22]"
                    : "border-[#E6DDD3] text-[#514744]"
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
                    className={`px-2.5 py-2 rounded-lg border text-left text-xs flex items-center justify-between transition-colors ${
                      isSelected
                        ? "border-[#641C22] bg-[#FAF6F0] font-semibold text-[#641C22]"
                        : "border-[#E6DDD3] text-[#514744]"
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

          {/* Style */}
          <div className="space-y-2.5 pb-4">
            <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#817771]">
              Style / Detailing
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => onFilterChange("style", "")}
                className={`px-3 py-1.5 rounded-md text-xs border transition-colors ${
                  !filters.style
                    ? "bg-[#641C22] text-white border-[#641C22]"
                    : "bg-white text-[#514744] border-[#E6DDD3]"
                }`}
              >
                All
              </button>
              {availableStyles.map((s) => {
                const isSelected = filters.style === s.name;
                return (
                  <button
                    key={s.name}
                    onClick={() => onFilterChange("style", isSelected ? "" : s.name)}
                    className={`px-3 py-1.5 rounded-md text-xs border transition-colors ${
                      isSelected
                        ? "bg-[#641C22] text-white border-[#641C22]"
                        : "bg-white text-[#514744] border-[#E6DDD3]"
                    }`}
                  >
                    {s.name} ({s.count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-[#E6DDD3] flex items-center gap-3 shrink-0">
          <button
            onClick={onClearFilters}
            className="flex-1 py-3 px-4 border border-[#E6DDD3] rounded-xl text-xs font-sans font-semibold tracking-wider uppercase text-[#514744] hover:bg-[#F8F3EC] transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-[#641C22] text-white rounded-xl text-xs font-sans font-semibold tracking-wider uppercase hover:bg-[#4B151A] transition-colors shadow-xs"
          >
            Apply ({totalFiltered})
          </button>
        </div>
      </div>
    </div>
  );
}
