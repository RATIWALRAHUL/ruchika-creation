import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/ui/BrandLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
  faLocationDot,
  faTruck,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const shopLinks = [
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Kurtis", href: "#collections" },
    { name: "Collections", href: "#collections" },
    { name: "Best Sellers", href: "#bestsellers" },
    { name: "Gift Cards", href: "#" },
  ];

  const customerCareLinks = [
    { name: "Shipping Policy", href: "#" },
    { name: "Returns & Refunds", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "Track Order", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  const aboutLinks = [
    { name: "Our Story", href: "#heritage" },
    { name: "Craftsmanship", href: "#heritage" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const helpLinks = [
    { name: "Contact Us", href: "#" },
    { name: "Store Locator", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-[#4B151A] text-[#F5EDE5] pt-14 sm:pt-16 pb-7 sm:pb-8 overflow-hidden border-t border-[#7A2C32]"
    >
      {/* =======================================================
          1. EXACT JAIPUR HERITAGE PALACE SKYLINE BACKGROUND
          ======================================================= */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 sm:h-48 pointer-events-none opacity-20 select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/footer-skyline-gold.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="site-container relative z-10">
        {/* =======================================================
            2. 6-COLUMN FOOTER NAVIGATION WITH DEDICATED WIDTHS
            ======================================================= */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-9 gap-x-6 lg:gap-x-5 xl:gap-x-8 pb-10 sm:pb-12">
          {/* Column 1: Brand Info (~280-300px) */}
          <div className="w-full lg:w-[280px] xl:w-[300px] shrink-0 space-y-4">
            {/* Real Ruchika Creation Logo with transparent background */}
            <BrandLogo variant="dark" />

            {/* Brand Description */}
            <p className="text-[13px] text-[#E8DDD5] font-sans font-normal leading-[1.65] max-w-[270px]">
              Beautifully crafted kurtis that celebrate Indian heritage with a
              modern touch.
            </p>

            {/* Ornamental Gold Floral Divider: Thin lines + 8-petal mandala flower */}
            <div className="flex items-center gap-2 max-w-[240px] py-1 text-[#B18A52]">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B18A52]"></span>
              {/* 8-Petal Mandala Flower Ornament */}
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[#D8BF96] fill-none stroke-current"
                strokeWidth="1.3"
              >
                <circle cx="12" cy="12" r="2.5" />
                <path d="M12 4 C13 7 15 8 18 8 C15 9 14 11 14 14 C13 11 11 10 8 10 C11 9 12 7 12 4 Z" />
                <path d="M18 12 C15 13 14 15 14 18 C13 15 11 14 8 14 C11 13 12 11 12 8 C13 11 15 12 18 12 Z" />
              </svg>
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B18A52]"></span>
            </div>

            {/* Social Icons: 38px circular outline */}
            <div className="flex items-center gap-2.5 pt-0.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(216,191,150,0.45)] flex items-center justify-center text-[#F5EDE5] hover:bg-[#B18A52] hover:text-[#4B151A] hover:border-[#B18A52] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-[13.5px]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(216,191,150,0.45)] flex items-center justify-center text-[#F5EDE5] hover:bg-[#B18A52] hover:text-[#4B151A] hover:border-[#B18A52] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-[12.5px]" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(216,191,150,0.45)] flex items-center justify-center text-[#F5EDE5] hover:bg-[#B18A52] hover:text-[#4B151A] hover:border-[#B18A52] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faPinterestP} className="text-[12.5px]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(216,191,150,0.45)] flex items-center justify-center text-[#F5EDE5] hover:bg-[#B18A52] hover:text-[#4B151A] hover:border-[#B18A52] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-[12.5px]" />
              </a>
            </div>
          </div>

          {/* Column 2: SHOP */}
          <div className="w-[calc(50%-14px)] sm:w-auto shrink-0 min-w-[120px]">
            <h3 className="text-[11.5px] font-sans tracking-[0.14em] uppercase font-semibold text-[#D8BF96] mb-1.5">
              SHOP
            </h3>
            {/* Gold Heading Divider: ───◇─── */}
            <div className="flex items-center gap-1.5 mb-3 text-[#D8BF96]/70">
              <span className="h-[1px] w-7 bg-[#D8BF96]/60"></span>
              <span className="text-[6.5px] leading-none text-[#D8BF96]">◇</span>
              <span className="h-[1px] w-7 bg-[#D8BF96]/60"></span>
            </div>
            <ul className="space-y-1.5 text-[13px] font-sans text-[#F5EDE5] leading-[1.8]">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8BF96] inline-block transition-transform duration-200 hover:translate-x-0.5 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CUSTOMER CARE */}
          <div className="w-[calc(50%-14px)] sm:w-auto shrink-0 min-w-[150px]">
            <h3 className="text-[11.5px] font-sans tracking-[0.14em] uppercase font-semibold text-[#D8BF96] mb-1.5">
              CUSTOMER CARE
            </h3>
            <div className="flex items-center gap-1.5 mb-3 text-[#D8BF96]/70">
              <span className="h-[1px] w-9 bg-[#D8BF96]/60"></span>
              <span className="text-[6.5px] leading-none text-[#D8BF96]">◇</span>
              <span className="h-[1px] w-9 bg-[#D8BF96]/60"></span>
            </div>
            <ul className="space-y-1.5 text-[13px] font-sans text-[#F5EDE5] leading-[1.8]">
              {customerCareLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8BF96] inline-block transition-transform duration-200 hover:translate-x-0.5 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: ABOUT US */}
          <div className="w-[calc(50%-14px)] sm:w-auto shrink-0 min-w-[130px]">
            <h3 className="text-[11.5px] font-sans tracking-[0.14em] uppercase font-semibold text-[#D8BF96] mb-1.5">
              ABOUT US
            </h3>
            <div className="flex items-center gap-1.5 mb-3 text-[#D8BF96]/70">
              <span className="h-[1px] w-8 bg-[#D8BF96]/60"></span>
              <span className="text-[6.5px] leading-none text-[#D8BF96]">◇</span>
              <span className="h-[1px] w-8 bg-[#D8BF96]/60"></span>
            </div>
            <ul className="space-y-1.5 text-[13px] font-sans text-[#F5EDE5] leading-[1.8]">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8BF96] inline-block transition-transform duration-200 hover:translate-x-0.5 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: HELP */}
          <div className="w-[calc(50%-14px)] sm:w-auto shrink-0 min-w-[150px]">
            <h3 className="text-[11.5px] font-sans tracking-[0.14em] uppercase font-semibold text-[#D8BF96] mb-1.5">
              HELP
            </h3>
            <div className="flex items-center gap-1.5 mb-3 text-[#D8BF96]/70">
              <span className="h-[1px] w-7 bg-[#D8BF96]/60"></span>
              <span className="text-[6.5px] leading-none text-[#D8BF96]">◇</span>
              <span className="h-[1px] w-7 bg-[#D8BF96]/60"></span>
            </div>
            <ul className="space-y-1.5 text-[13px] font-sans text-[#F5EDE5] leading-[1.8]">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8BF96] inline-block transition-transform duration-200 hover:translate-x-0.5 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: CONTACT US */}
          <div className="w-full sm:w-auto shrink-0 min-w-[245px] max-w-[260px] space-y-3 text-[13px] font-sans">
            <div>
              <h3 className="text-[11.5px] font-sans tracking-[0.14em] uppercase font-semibold text-[#D8BF96] mb-1.5">
                CONTACT US
              </h3>
              <div className="flex items-center gap-1.5 mb-3 text-[#D8BF96]/70">
                <span className="h-[1px] w-9 bg-[#D8BF96]/60"></span>
                <span className="text-[6.5px] leading-none text-[#D8BF96]">◇</span>
                <span className="h-[1px] w-9 bg-[#D8BF96]/60"></span>
              </div>
            </div>

            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3 text-[#F5EDE5]">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#D8BF96] text-[13.5px] shrink-0"
                />
                <span className="font-medium tracking-wide whitespace-nowrap">+91 98765 43210</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-[#F5EDE5]">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#D8BF96] text-[13.5px] shrink-0"
                />
                <a
                  href="mailto:hello@ruchikacreation.com"
                  className="hover:text-[#D8BF96] transition-colors whitespace-nowrap"
                >
                  hello@ruchikacreation.com
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 text-[#F5EDE5]">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[#D8BF96] text-[13.5px] shrink-0"
                />
                <span className="whitespace-nowrap">Mon – Sat: 10am – 7pm</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-[#F5EDE5]">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#D8BF96] text-[13.5px] shrink-0"
                />
                <span className="whitespace-nowrap">Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            3. FOOTER 1PX DIVIDER: rgba(216,191,150,0.25)
            ======================================================= */}
        <div className="w-full h-[1px] bg-[rgba(216,191,150,0.25)] mb-6"></div>

        {/* =======================================================
            4. BOTTOM SERVICE BAR
            ======================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-[#C9B8AF] pl-10 sm:pl-0">
          {/* Left: Copyright */}
          <div>
            <p>© 2024 Ruchika Creation. All rights reserved.</p>
          </div>

          {/* Desktop Separator */}
          <span
            className="hidden sm:inline-block w-[1px] h-4 bg-[rgba(216,191,150,0.3)]"
            aria-hidden="true"
          />

          {/* Center: Free Shipping Above ₹999 */}
          <div className="flex items-center gap-2 text-[#D8BF96]">
            <FontAwesomeIcon icon={faTruck} className="text-[13px]" />
            <span className="font-medium tracking-wide">
              Free Shipping Above ₹999
            </span>
          </div>

          {/* Desktop Separator */}
          <span
            className="hidden sm:inline-block w-[1px] h-4 bg-[rgba(216,191,150,0.3)]"
            aria-hidden="true"
          />

          {/* Right: Easy 7-Day Returns */}
          <div className="flex items-center gap-2 text-[#D8BF96]">
            <FontAwesomeIcon icon={faRotateLeft} className="text-[13px]" />
            <span className="font-medium tracking-wide">
              Easy 7-Day Returns
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
