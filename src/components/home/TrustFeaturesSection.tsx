import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faScissors,
  faPersonDress,
  faRotateLeft,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function TrustFeaturesSection() {
  const features = [
    {
      icon: faGem,
      title: "Premium Quality",
      desc: "We use only the finest fabrics for lasting comfort.",
    },
    {
      icon: faScissors,
      title: "Thoughtful Designs",
      desc: "Intricate patterns and finishes in every piece.",
    },
    {
      icon: faPersonDress,
      title: "Perfect Fit",
      desc: "Designed for comfort and confidence.",
    },
    {
      icon: faRotateLeft,
      title: "Easy Returns",
      desc: "Hassle-free 7-day returns & exchanges.",
    },
    {
      icon: faShieldHalved,
      title: "Secure Shopping",
      desc: "Safe and secure shopping experience.",
    },
    {
      icon: faHeadset,
      title: "Customer Support",
      desc: "We're here to help you, always.",
    },
  ];

  return (
    <section className="py-8 sm:py-11 lg:py-13 bg-[#FCFAF7] border-b border-[#E6DDD3]">
      <div className="site-container">
        <SectionHeading
          title="Why Choose Ruchika Creation?"
          className="mb-6 sm:mb-10 lg:mb-12"
        />

        {/* Responsive feature section: 2 columns on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 lg:gap-0 lg:divide-x divide-[#E6DDD3] bg-white rounded-[10px] sm:rounded-[12px] border border-[#E6DDD3] p-3 sm:p-5 lg:p-6 shadow-[0_4px_18px_rgba(60,35,30,0.03)]">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-2 sm:p-3 lg:p-4 group"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#F8F3EC] border border-[#E6DDD3] flex items-center justify-center text-[#B18A52] mb-2 sm:mb-3 transition-colors duration-200 group-hover:bg-[#641C22] group-hover:text-white group-hover:border-[#641C22]">
                <FontAwesomeIcon icon={item.icon} className="text-[16px] sm:text-[20px]" />
              </div>
              <h4 className="font-sans font-semibold text-[12px] sm:text-[13px] lg:text-[13.5px] text-[#241D1B] leading-tight">
                {item.title}
              </h4>
              <p className="text-[10.5px] sm:text-[11.5px] text-[#817771] mt-1 leading-snug font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
