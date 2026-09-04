import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function BrandLogo({
  variant = "light",
  className = "",
}: BrandLogoProps) {
  if (variant === "dark") {
    return (
      <Link
        href="/"
        className={`inline-flex flex-col items-start group focus:outline-none ${className}`}
        aria-label="Ruchika Creation - Home"
      >
        <div className="flex items-center gap-3.5">
          {/* Double Gold Ring Circular Crest */}
          <div className="relative w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center shrink-0">
            {/* Outer Gold Ring */}
            <div className="absolute inset-0 rounded-full border-[1.2px] border-[#D8BF96]"></div>
            {/* Inner Concentric Gold Ring */}
            <div className="absolute inset-[2.5px] rounded-full border-[0.8px] border-[#D8BF96]/80"></div>
            {/* Gold 4-Point Star at Top */}
            <span className="absolute top-1 text-[7px] text-[#D8BF96] leading-none select-none">
              ✦
            </span>
            {/* Serif RC Monogram */}
            <span className="font-serif font-semibold text-[22px] sm:text-[24px] tracking-tight text-[#FCFAF7] select-none">
              RC
            </span>
          </div>

          {/* Typography Wordmark */}
          <div className="flex flex-col">
            <span className="font-serif italic text-[30px] sm:text-[34px] font-normal tracking-wide text-[#FCFAF7] leading-none">
              Ruchika
            </span>
            <span className="text-[10px] sm:text-[10.5px] tracking-[0.28em] font-sans uppercase text-[#D8BF96] font-semibold leading-none mt-1.5">
              CREATION
            </span>
            {/* Centered Gold Line with Diamond Underline */}
            <div className="flex items-center gap-1.5 mt-2 text-[#D8BF96]">
              <span className="h-[1px] w-10 sm:w-12 bg-[#D8BF96]/70"></span>
              <span className="text-[7px] leading-none text-[#D8BF96]">◇</span>
              <span className="h-[1px] w-10 sm:w-12 bg-[#D8BF96]/70"></span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Light variant (Header) - Transparent PNG logo
  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none ${className}`}
      aria-label="Ruchika Creation - Home"
    >
      <div className="relative h-8 w-28 xs:h-8.5 xs:w-32 sm:h-11 sm:w-44 md:h-12 md:w-48 transition-transform duration-200 group-hover:opacity-95">
        <Image
          src="/images/logo-transparent.png"
          alt="Ruchika Creation"
          fill
          priority
          sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 192px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
