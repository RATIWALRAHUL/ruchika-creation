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
      className="relative bg-[#4B151A] text-[#FCFAF7] py-9 sm:py-11 lg:py-13 overflow-hidden border-y border-[#7A2C32]"
    >
      {/* Subtle royal heritage lattice watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-4 bg-[radial-gradient(#D8BF96_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <span className="text-[10px] sm:text-[10.5px] font-sans tracking-[0.2em] uppercase text-[#D8BF96] font-semibold">
                OUR HERITAGE
              </span>
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[40px] font-medium text-[#FCFAF7] tracking-tight leading-[1.1]">
                  The Art of
                  <br />
                  Indian Craft
                </h2>
                <div className="hidden sm:flex items-center gap-1.5 text-[#D8BF96]/70 ml-2 self-start mt-2">
                  <span className="h-[1px] w-7 bg-[#D8BF96]"></span>
                  <span className="text-[8px]">✦</span>
                </div>
              </div>
            </div>

            <p className="text-[13px] sm:text-[14px] lg:text-[14.5px] text-[#FCFAF7]/85 font-sans font-normal leading-[1.6] max-w-lg">
              Every stitch tells a story. Our kurtis are thoughtfully designed by
              skilled artisans, blending tradition with modern elegance.
            </p>

            <div className="pt-0.5">
              <Link
                href="#collections"
                className="inline-flex items-center justify-center gap-2 bg-[#D8BF96] hover:bg-[#B18A52] text-[#241D1B] text-[11.5px] sm:text-[12px] font-sans tracking-[0.08em] uppercase font-semibold h-[40px] sm:h-[42px] px-5 sm:px-6 rounded-[8px] transition-all duration-200 shadow-xs cursor-pointer w-full sm:w-auto text-center"
              >
                <span>EXPLORE COLLECTION</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-[10.5px]" />
              </Link>
            </div>

            {/* Statistics Row: Compact height & spacing */}
            <div className="pt-4 sm:pt-5 border-t border-[#7A2C32]/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left space-y-0.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#641C22] border border-[#D8BF96]/30 flex items-center justify-center text-[#D8BF96] mb-1.5">
                    <FontAwesomeIcon icon={stat.icon} className="text-[10px] sm:text-[11px]" />
                  </div>
                  <p className="font-serif text-[18px] sm:text-[21px] font-medium text-[#FCFAF7] leading-none">
                    {stat.number}
                  </p>
                  <p className="text-[10.5px] sm:text-[11px] text-[#D8BF96] font-sans font-normal leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Imagery Column - Compact Height */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] h-[340px] sm:h-[370px] lg:h-[390px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-xl border border-[#D8BF96]/25 group">
              <Image
                src="/images/kurti-maroon-festive.jpg"
                alt="The Art of Indian Craft - Ruchika Creation Artisan Kurti"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
