"use client";

import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRotateLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

interface ProductGridProps {
  products: Product[];
  totalFiltered: number;
  visibleCount: number;
  onLoadMore: () => void;
  onClearFilters: () => void;
  hasMore: boolean;
}

export default function ProductGrid({
  products,
  totalFiltered,
  visibleCount,
  onLoadMore,
  onClearFilters,
  hasMore,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full py-16 px-4 bg-white rounded-2xl border border-[#E6DDD3] text-center flex flex-col items-center justify-center my-6">
        <div className="w-16 h-16 rounded-full bg-[#F8F3EC] flex items-center justify-center text-[#641C22] mb-4 shadow-2xs">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
        </div>
        <h3 className="font-serif text-2xl text-[#241D1B] font-medium mb-1.5">
          No Products Found
        </h3>
        <p className="text-xs sm:text-sm font-sans text-[#817771] max-w-md mb-6 leading-relaxed">
          We couldn&apos;t find any items matching your selected criteria. Try adjusting
          your search, category, or filter options.
        </p>
        <button
          onClick={onClearFilters}
          className="px-5 py-2.5 bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans font-semibold tracking-wider uppercase rounded-lg flex items-center gap-2 transition-colors shadow-xs cursor-pointer"
        >
          <FontAwesomeIcon icon={faRotateLeft} className="text-xs" />
          <span>Clear All Filters</span>
        </button>
      </div>
    );
  }

  const displayedProducts = products.slice(0, visibleCount);

  return (
    <div className="w-full space-y-8">
      {/* Responsive Product Grid: 4 cols desktop, 3 tablet, 2 mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4.5 lg:gap-5.5">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination / Load More Footer */}
      {hasMore && (
        <div className="flex flex-col items-center justify-center pt-8 pb-4 border-t border-[#E6DDD3]">
          <p className="text-xs font-sans text-[#817771] mb-3">
            Showing <span className="font-semibold text-[#241D1B]">{displayedProducts.length}</span> of{" "}
            <span className="font-semibold text-[#241D1B]">{totalFiltered}</span> products
          </p>

          <button
            onClick={onLoadMore}
            className="px-7 py-3 bg-white hover:bg-[#FCFAF7] border border-[#641C22] text-[#641C22] hover:text-[#4B151A] text-xs font-sans font-semibold tracking-widest uppercase rounded-lg flex items-center gap-2.5 transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer active:scale-98"
          >
            <span>LOAD MORE PRODUCTS</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
          </button>
        </div>
      )}
    </div>
  );
}
