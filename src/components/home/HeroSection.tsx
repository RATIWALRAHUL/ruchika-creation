import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGem,
  faScissors,
  faPersonDress,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const benefits = [
    {
      icon: faGem,
      title: "Premium Fabrics",
      desc: "Soft, breathable & long lasting",
    },
    {
      icon: faScissors,
      title: "Intricate Craftsmanship",
      desc: "Thoughtful details in every piece",
    },
    {
      icon: faPersonDress,
      title: "Perfect Fit",
      desc: "Designed for comfort and confidence",
    },
    {
      icon: faBoxOpen,
      title: "Easy Returns",
      desc: "Hassle-free 7-day return & exchange",
    },
  ];

  return (
    <section className="relative bg-[#FAF6F0] overflow-hidden border-b border-[#E6DDD3] lg:min-h-[560px] lg:h-[600px] xl:h-[620px] flex items-center">
      {/* =======================================================
          1. TOP-LEFT TRADITIONAL INDIAN MANDALA WATERMARK
          ======================================================= */}
      <div
        className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-20 lg:opacity-25 text-[#B18A52] select-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-none stroke-current"
          strokeWidth="0.8"
        >
          <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="75" />
          <circle cx="100" cy="100" r="60" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="45" />
          <circle cx="100" cy="100" r="30" />
          <circle cx="100" cy="100" r="15" />
          {/* Petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 100 100)`}>
              <path d="M100 10 C90 40 90 60 100 75 C110 60 110 40 100 10" />
              <path d="M100 25 C94 50 94 65 100 75 C106 65 106 50 100 25" />
              <circle cx="100" cy="8" r="2" fill="currentColor" />
            </g>
          ))}
        </svg>
      </div>

      {/* =======================================================
          2. DESKTOP RIGHT-SIDE FULL-BLEED PHOTOGRAPHY
          ======================================================= */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[58%] xl:w-[57%] h-full z-0 pointer-events-none select-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/kurti-black-back.jpg"
            alt="Ruchika Creation black embroidered kurti"
            fill
            priority
            sizes="58vw"
            className="object-cover object-[center_25%]"
          />

          {/* Left-Edge Seamless Soft Feather Blend into Warm Cream */}
          <div
            className="absolute inset-y-0 left-0 w-44 lg:w-60 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/80 via-30% to-transparent"
            aria-hidden="true"
          />

          {/* Editorial Label (Bottom-Right corner) */}
          <div className="absolute bottom-5 right-8 z-10 flex flex-col items-end text-right">
            <span className="text-[10.5px] font-sans tracking-[0.2em] uppercase font-semibold text-[#F8F3EC] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
              RUCHIKA CREATION
            </span>
            <span className="h-[1px] w-8 bg-[#B18A52] my-1 shadow-sm"></span>
            <span className="text-[9.5px] font-sans tracking-[0.2em] uppercase font-medium text-[#D8BF96] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
              THE CRAFT EDIT
            </span>
          </div>
        </div>
      </div>

      {/* =======================================================
          3. MAIN CONTENT (Responsive Mobile + Desktop)
          ======================================================= */}
      <div className="site-container relative z-10 w-full py-7 sm:py-9 lg:py-10">
        <div className="max-w-[620px] lg:max-w-[560px] xl:max-w-[580px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="text-[10.5px] sm:text-[11.5px] font-sans tracking-[0.14em] uppercase font-semibold text-[#8A6A42]">
              CRAFTED FOR EVERY YOU
            </span>
          </div>

          {/* Hero Heading: Fluid Typography */}
          <h1 className="font-serif text-[32px] xs:text-[38px] sm:text-[48px] md:text-[54px] lg:text-[60px] xl:text-[64px] font-medium leading-[1.05] sm:leading-[1.01] text-[#241D1B] tracking-tight mb-2 sm:mb-2.5">
            Timeless Elegance,
            <br />
            Crafted for <span className="text-[#641C22] italic font-semibold">You</span>
          </h1>

          {/* Decorative Divider: Gold line + Diamond ✦ */}
          <div className="flex items-center gap-2 mb-2.5 sm:mb-4 text-[#B18A52]">
            <span className="h-[1.5px] w-10 sm:w-12 bg-[#B18A52]"></span>
            <span className="text-[8px] leading-none text-[#B18A52]">✦</span>
          </div>

          {/* Description */}
          <p className="text-[13.5px] sm:text-[15px] text-[#514744] font-sans font-normal leading-[1.65] max-w-[440px] mb-5 sm:mb-7">
            Discover beautifully crafted kurtis that bring together tradition,
            comfort and contemporary style.
          </p>

          {/* =======================================================
              4. MOBILE DEDICATED PHOTOGRAPHY CARD (Visible on Mobile/Tablet)
              ======================================================= */}
          <div className="block lg:hidden w-full mb-6">
            <div className="relative w-full h-[290px] xs:h-[330px] sm:h-[380px] rounded-[14px] overflow-hidden shadow-md border border-[#E6DDD3] group">
              <Image
                src="/images/kurti-black-back.jpg"
                alt="Ruchika Creation black embroidered kurti"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Gentle bottom vignette for editorial label */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Editorial Corner Badge */}
              <div className="absolute bottom-3 right-4 z-10 flex flex-col items-end text-right">
                <span className="text-[9.5px] font-sans tracking-[0.2em] uppercase font-semibold text-[#F8F3EC] drop-shadow-md">
                  RUCHIKA CREATION
                </span>
                <span className="h-[1px] w-6 bg-[#B18A52] my-0.5 shadow-sm"></span>
                <span className="text-[8.5px] font-sans tracking-[0.2em] uppercase font-medium text-[#D8BF96] drop-shadow-md">
                  THE CRAFT EDIT
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons: Full width on mobile, inline on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
            {/* Primary CTA */}
            <Link
              href="#new-arrivals"
              className="bg-[#641C22] hover:bg-[#4B151A] text-white text-[12px] sm:text-[12.5px] font-sans tracking-[0.04em] uppercase font-semibold h-[46px] sm:h-[50px] px-6 sm:px-7 rounded-[8px] flex items-center justify-center gap-2 transition-colors duration-200 shadow-xs cursor-pointer text-center sm:min-w-[200px]"
            >
              <span>SHOP NEW ARRIVALS</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#collections"
              className="bg-[#FAF6F0] hover:bg-[#641C22]/5 text-[#641C22] border border-[#641C22] text-[12px] sm:text-[12.5px] font-sans tracking-[0.04em] uppercase font-semibold h-[46px] sm:h-[50px] px-6 sm:px-7 rounded-[8px] flex items-center justify-center transition-colors duration-200 cursor-pointer text-center sm:min-w-[200px]"
            >
              <span>EXPLORE COLLECTION</span>
            </Link>
          </div>

          {/* Feature Benefits Row: 2x2 grid on mobile, 4-col on desktop */}
          <div className="pt-3 sm:pt-4 border-t border-[#E6DDD3]/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0 sm:divide-x divide-[#E6DDD3]">
              {benefits.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col items-start text-left py-1 ${
                    index === 0 ? "sm:pr-3" : "sm:px-3"
                  } ${index === benefits.length - 1 ? "sm:pr-0" : ""}`}
                >
                  {/* Soft circular badge */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5EFE6] border border-[#E6DDD3]/70 flex items-center justify-center text-[#641C22] mb-1.5 sm:mb-2 shrink-0 shadow-2xs">
                    <FontAwesomeIcon icon={item.icon} className="text-[11px] sm:text-[12px]" />
                  </div>

                  {/* Title */}
                  <h4 className="font-sans font-semibold text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#241D1B] leading-tight">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[9.5px] sm:text-[10.5px] text-[#817771] mt-0.5 leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
