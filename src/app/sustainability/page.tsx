import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia, faLeaf, faHandsHolding } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Sustainability & Conscious Production | Ruchika Creation",
  description: "Learn about our commitment to thoughtful production, low-waste small batches, and fair artisan livelihoods.",
};

export default function SustainabilityPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Sustainability</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            CONSCIOUS CRAFT
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Our Sustainability Commitment
          </h1>
          <p className="text-xs sm:text-sm text-[#817771]">
            Creating timeless garments with respect for makers and the earth.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] space-y-6 text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faLeaf} className="text-[#641C22]" />
              <span>Small Batch Production</span>
            </h2>
            <p>
              We craft in controlled, mindful batches to eliminate excess unsold inventory and reduce textile waste.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faHandsHolding} className="text-[#641C22]" />
              <span>Fair Artisan Livelihoods</span>
            </h2>
            <p>
              Our master tailors and embroiderers in Jaipur work in safe, well-lit workshop environments with fair wages and dignified working conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
