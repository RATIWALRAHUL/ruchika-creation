"use client";

import React, { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { newArrivals } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function NewArrivalsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="new-arrivals" className="py-8 sm:py-11 lg:py-13 bg-white border-b border-[#E6DDD3]">
      <div className="site-container relative">
        <SectionHeading
          title="New Arrivals"
          viewAllLink="#new-arrivals"
          viewAllText="VIEW ALL"
        />

        {/* Carousel Container */}
        <div className="relative group">
          {/* Previous Button (Desktop / Tablet) */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous products"
            className="hidden md:flex absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-[#E6DDD3] text-[#514744] hover:text-[#641C22] hover:border-[#B18A52] items-center justify-center shadow-sm transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-[11px]" />
          </button>

          {/* Product Cards Row: 2 cards per view on mobile, 3 on tablet, 4 on desktop */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-3 sm:gap-4 lg:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 px-0.5"
          >
            {newArrivals.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="w-[calc((100%-12px)/2)] sm:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-3*20px)/4)] shrink-0 snap-start flex"
              >
                <ProductCard product={product} className="w-full" />
              </div>
            ))}
          </div>

          {/* Next Button (Desktop / Tablet) */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next products"
            className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-[#E6DDD3] text-[#514744] hover:text-[#641C22] hover:border-[#B18A52] items-center justify-center shadow-sm transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-[11px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
