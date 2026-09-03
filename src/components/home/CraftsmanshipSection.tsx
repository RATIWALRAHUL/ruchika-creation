import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShirt,
  faHandsHolding,
  faHeart,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";

export default function CraftsmanshipSection() {
  const stats = [
    {
      icon: faShirt,
      number: "100+",
      label: "Unique Designs",
    },
    {
      icon: faHandsHolding,
      number: "Skilled",
      label: "Artisans",
    },
    {
      icon: faHeart,
      number: "10K+",
      label: "Happy Customers",
    },
    {
      icon: faEarthAsia,
      number: "Made in India",
      label: "Proudly & Sustainably",
    },
  ];

  return (
    <section
      id="heritage"
      className="relative bg-[#4B151A] text-[#FCFAF7] py-12 sm:py-16 lg:py-24 overflow-hidden border-y border-[#7A2C32]"
    >
      {/* Subtle royal heritage lattice watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-4 bg-[radial-gradient(#D8BF96_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <span className="text-[10.5px] sm:text-[11px] font-sans tracking-[0.2em] uppercase text-[#D8BF96] font-semibold">
                OUR HERITAGE
              </span>
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-[28px] xs:text-[34px] sm:text-[42px] md:text-[48px] font-medium text-[#FCFAF7] tracking-tight leading-[1.08]">
                  The Art of
                  <br />
                  Indian Craft
                </h2>
                <div className="hidden sm:flex items-center gap-1.5 text-[#D8BF96]/70 ml-2 self-start mt-3">
                  <span className="h-[1px] w-8 bg-[#D8BF96]"></span>
                  <span className="text-[9px]">✦</span>
                </div>
              </div>
            </div>

            <p className="text-[13.5px] sm:text-[15px] lg:text-[15.5px] text-[#FCFAF7]/85 font-sans font-normal leading-[1.65] sm:leading-[1.7] max-w-xl">
              Every stitch tells a story. Our kurtis are thoughtfully designed by
              skilled artisans, blending tradition with modern elegance.
            </p>

            <div>
              <Link
                href="#collections"
                className="inline-flex items-center justify-center gap-2 bg-[#D8BF96] hover:bg-[#B18A52] text-[#241D1B] text-[12px] sm:text-[12.5px] font-sans tracking-[0.08em] uppercase font-semibold h-[44px] sm:h-[46px] px-6 sm:px-7 rounded-[8px] transition-all duration-200 shadow-xs cursor-pointer w-full sm:w-auto text-center"
              >
                <span>EXPLORE COLLECTION</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
              </Link>
            </div>

            {/* Statistics Row: 2 columns on mobile, 4 on tablet/desktop */}
            <div className="pt-6 sm:pt-8 border-t border-[#7A2C32]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left space-y-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#641C22] border border-[#D8BF96]/30 flex items-center justify-center text-[#D8BF96] mb-2">
                    <FontAwesomeIcon icon={stat.icon} className="text-[11px] sm:text-[13px]" />
                  </div>
                  <p className="font-serif text-[20px] sm:text-[24px] font-medium text-[#FCFAF7] leading-none">
                    {stat.number}
                  </p>
                  <p className="text-[11px] sm:text-[11.5px] text-[#D8BF96] font-sans font-normal leading-tight mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Imagery Column */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xl border border-[#D8BF96]/25 group">
              <Image
                src="/images/kurti-maroon-festive.jpg"
                alt="The Art of Indian Craft - Ruchika Creation Artisan Kurti"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
