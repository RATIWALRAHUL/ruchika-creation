"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function StyledByRuchikaSection() {
  const galleryImages = [
    {
      src: "/images/kurti-black-back.jpg",
      alt: "Styled by Ruchika - Black Embroidered Kurti Back Motif",
    },
    {
      src: "/images/kurti-maroon-festive.jpg",
      alt: "Styled by Ruchika - Festive Maroon Silk Kurti in Rajasthan",
    },
    {
      src: "/images/kurti-ivory-chikankari.jpg",
      alt: "Styled by Ruchika - Ivory Mulmul Chikankari Kurti",
    },
    {
      src: "/images/kurti-olive-printed.jpg",
      alt: "Styled by Ruchika - Olive Green Jaipuri Printed Kurti",
    },
    {
      src: "/images/kurti-black-front.jpg",
      alt: "Styled by Ruchika - Black Straight Embroidered Kurti Front",
    },
    {
      src: "/images/kurti-ivory-chikankari.jpg",
      alt: "Styled by Ruchika - Handcrafted Ethnic Kurti Silhouette",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="site-container">
        {/* Section Header with Instagram link */}
        <div className="relative mb-6 sm:mb-10">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Subtle gold ornament on top */}
            <div className="flex items-center justify-center gap-2.5 mb-2 text-[#B18A52]">
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B18A52]"></span>
              <span className="text-[9px] leading-none text-[#B18A52]">✦</span>
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B18A52]"></span>
            </div>

            <h2 className="font-serif text-[26px] xs:text-[28px] sm:text-[34px] md:text-[38px] tracking-tight font-medium text-[#241D1B] leading-tight">
              Styled by Ruchika
            </h2>

            {/* Subtle gold ornament underneath */}
            <div className="flex items-center justify-center gap-2.5 mt-2 text-[#B18A52]">
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B18A52]"></span>
              <span className="text-[9px] leading-none text-[#B18A52]">✦</span>
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B18A52]"></span>
            </div>
          </div>

          {/* Right link: FOLLOW US @RUCHIKACREATION */}
          <div className="mt-2.5 sm:mt-0 sm:absolute sm:right-0 sm:bottom-2 text-center sm:text-right">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[11.5px] font-sans tracking-[0.06em] sm:tracking-[0.08em] uppercase font-semibold text-[#641C22] hover:text-[#4B151A] transition-colors group"
            >
              <span>FOLLOW US @RUCHIKACREATION</span>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[12px] sm:text-[13px] text-[#B18A52] group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* 6 Images Grid: 3 columns on mobile (authentic Instagram 3x2 grid), 6 columns on desktop */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-3.5">
          {galleryImages.map((img, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[4/5] rounded-[8px] sm:rounded-[10px] overflow-hidden bg-[#F8F3EC] border border-[#E6DDD3] block shadow-2xs cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-top transition-transform duration-350 ease-out group-hover:scale-[1.02]"
              />

              {/* Instagram Icon Subtle Hover Overlay */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-[#641C22] flex items-center justify-center transform translate-y-1 group-hover:translate-y-0 transition-transform duration-250 shadow-sm">
                  <FontAwesomeIcon icon={faInstagram} className="text-[12px] sm:text-[14px]" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
