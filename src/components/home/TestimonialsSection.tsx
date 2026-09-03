"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faQuoteLeft,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      if (card) {
        scrollRef.current.scrollTo({
          left: card.offsetLeft - 16,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / (width * 0.85));
      if (newIndex >= 0 && newIndex < testimonials.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FCFAF7] border-b border-[#E6DDD3]">
      <div className="site-container">
        <SectionHeading title="What Our Customers Say" />

        {/* 3 Review Cards: Horizontal swipe on mobile, 3 columns on tablet/desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 overflow-x-auto md:overflow-x-visible no-scrollbar snap-x snap-mandatory py-2 px-0.5"
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`w-[85vw] sm:w-[360px] md:w-auto shrink-0 snap-start bg-white rounded-[10px] sm:rounded-[12px] p-5 sm:p-7 border border-[#E6DDD3] shadow-[0_4px_18px_rgba(60,35,30,0.03)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_6px_22px_rgba(60,35,30,0.06)] hover:-translate-y-0.5 ${
                activeIndex === index ? "border-[#B18A52]/70" : ""
              }`}
            >
              <div>
                {/* Quotation Mark & 5 Stars */}
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F8F3EC] flex items-center justify-center text-[#B18A52]">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-[10px] sm:text-[11px]" />
                  </div>
                  <div className="flex items-center gap-0.5 text-[#B18A52]">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-[10px] sm:text-[11px]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[13px] sm:text-[14px] text-[#514744] font-sans font-normal leading-[1.6] sm:leading-[1.65] mb-5 sm:mb-6 italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#F8F3EC] flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-semibold text-[12px] sm:text-[13px] text-[#241D1B]">
                    — {item.name}
                  </h4>
                  <span className="text-[10.5px] sm:text-[11px] text-[#817771]">
                    {item.location}
                  </span>
                </div>

                {item.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-sans text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded-full font-medium">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[8.5px] sm:text-[9.5px]" />
                    Verified Buyer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`View review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "w-6 bg-[#641C22]"
                  : "w-2 bg-[#D8BF96]/70 hover:bg-[#B18A52]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
