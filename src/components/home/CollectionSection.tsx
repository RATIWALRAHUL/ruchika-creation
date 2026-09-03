"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { collections } from "@/data/collections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faGem,
  faScissors,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CollectionSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "everyday":
        return faShirt;
      case "festive":
        return faGem;
      case "embroidered":
        return faScissors;
      case "new":
        return faStar;
      default:
        return faGem;
    }
  };

  return (
    <section id="collections" className="py-8 sm:py-11 lg:py-13 bg-[#FCFAF7]">
      <div className="site-container">
        <SectionHeading title="Shop by Collection" />

        {/* 4 Cards Grid: 2 columns on mobile, 2 columns on tablet, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {collections.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative rounded-[10px] sm:rounded-[12px] overflow-hidden border border-[#E6DDD3] shadow-[0_4px_18px_rgba(60,35,30,0.04)] aspect-[3/4] sm:aspect-[4/3] block cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-350 ease-out group-hover:scale-[1.03]"
              />

              {/* Top-Left Icon Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 backdrop-blur-xs border border-white/25 flex items-center justify-center text-[#D8BF96]">
                <FontAwesomeIcon icon={getIcon(item.iconType)} className="text-[10px] sm:text-[12px]" />
              </div>

              {/* Bottom subtle dark gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Text */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4.5 z-10 flex flex-col justify-end">
                <h3 className="font-serif text-[15px] sm:text-[18px] font-medium text-white tracking-wide leading-tight group-hover:text-[#D8BF96] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-[10.5px] sm:text-[11.5px] font-sans text-[#F8F3EC]/85 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-sans font-semibold tracking-wider text-[#D8BF96] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>EXPLORE</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[9px]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
