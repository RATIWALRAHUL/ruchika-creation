import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function SectionHeading({
  title,
  subtitle,
  viewAllLink,
  viewAllText = "VIEW ALL",
  className = "",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={`relative mb-6 sm:mb-8 ${className}`}>
      {/* Centered Heading with delicate ornamental divider */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Subtle gold ornament on top */}
        <div className="flex items-center justify-center gap-2.5 mb-2 text-[#B18A52]">
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B18A52]"></span>
          <span className="text-[9px] leading-none text-[#B18A52]">✦</span>
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B18A52]"></span>
        </div>

        {/* Serif Heading: 34–40px desktop, 27–31px mobile */}
        <h2
          className={`font-serif text-[28px] sm:text-[34px] md:text-[38px] tracking-tight font-medium leading-tight ${
            isDark ? "text-[#FCFAF7]" : "text-[#241D1B]"
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={`mt-2 text-xs sm:text-sm font-sans max-w-xl ${
              isDark ? "text-[#D8BF96]" : "text-[#817771]"
            }`}
          >
            {subtitle}
          </p>
        )}

        {/* Subtle gold ornament underneath */}
        <div className="flex items-center justify-center gap-2.5 mt-2 text-[#B18A52]">
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B18A52]"></span>
          <span className="text-[9px] leading-none text-[#B18A52]">✦</span>
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B18A52]"></span>
        </div>
      </div>

      {/* Optional "VIEW ALL →" link: 11–12px 600 DM Sans */}
      {viewAllLink && (
        <div className="mt-3 sm:mt-0 sm:absolute sm:right-0 sm:bottom-2 text-center sm:text-right">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-1.5 text-[11.5px] font-sans tracking-[0.08em] uppercase font-semibold text-[#641C22] hover:text-[#4B151A] transition-colors duration-200 group"
          >
            <span>{viewAllText}</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[9.5px] transform group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
