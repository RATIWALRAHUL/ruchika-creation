import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faRotateLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="bg-[#641C22] text-[#FCFAF7] text-[10px] sm:text-[11px] font-sans tracking-wider py-2 sm:py-2.5 px-4 border-b border-[#7A2C32]/50 relative z-30">
      <div className="site-container flex items-center justify-center">
        <div className="flex items-center justify-center gap-5 sm:gap-8 md:gap-10">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTruck} className="text-[#D8BF96] text-[10px]" />
            <span className="font-medium uppercase tracking-[0.08em]">
              Free Shipping on Orders Above ₹999
            </span>
          </div>

          <span className="hidden sm:inline-block text-[#D8BF96]/40 text-[10px]">|</span>

          <div className="hidden sm:flex items-center gap-2">
            <FontAwesomeIcon icon={faRotateLeft} className="text-[#D8BF96] text-[10px]" />
            <span className="font-medium uppercase tracking-[0.08em]">
              Easy 7-Day Returns
            </span>
          </div>

          <span className="hidden md:inline-block text-[#D8BF96]/40 text-[10px]">|</span>

          <div className="hidden md:flex items-center gap-2">
            <FontAwesomeIcon icon={faHeart} className="text-[#D8BF96] text-[10px]" />
            <span className="font-medium uppercase tracking-[0.08em]">
              Crafted with Love in India
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
