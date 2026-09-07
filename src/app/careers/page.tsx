import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Careers at Ruchika Creation | Join Our Team",
  description: "Explore career opportunities in ethnicwear design, digital marketing, and artisan production at Ruchika Creation.",
};

export default function CareersPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Careers</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            WORK WITH US
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Careers at Ruchika Creation
          </h1>
          <p className="text-xs sm:text-sm text-[#817771]">
            Join our passionate team bringing Indian ethnicwear to life.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] space-y-6 text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
          <p>
            We are always eager to connect with talented fashion designers, merchandisers, pattern makers, and digital specialists who share our deep passion for Indian textiles.
          </p>
          <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E6DDD3] space-y-2">
            <h3 className="font-serif text-lg font-semibold text-[#241D1B]">Send Us Your Portfolio</h3>
            <p className="text-xs text-[#817771]">
              Email your resume, portfolio, or queries to:
            </p>
            <div className="flex items-center gap-2 text-[#641C22] font-semibold">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>careers@ruchikacreation.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
