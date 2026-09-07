import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faScissors, faHandsHolding, faGem } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Artisanal Craftsmanship | Ruchika Creation",
  description: "Learn about the traditional craftsmanship, hand-guided embroidery, and delicate Chikankari behind Ruchika Creation kurtis.",
};

export default function CraftsmanshipPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-4xl space-y-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li><Link href="/about" className="hover:text-[#641C22]">About</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Craftsmanship</li>
          </ol>
        </nav>

        <div className="space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52] block">
            ARTISANAL MASTERY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#241D1B]">
            The Craft Behind Every Stitch
          </h1>
          <p className="text-xs sm:text-sm font-sans text-[#514744] leading-relaxed max-w-2xl">
            From the hand-drawn paisley medallions to subtle neck yoke threadwork, our artisans in Jaipur bring generations of needlecraft to every single creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6DDD3] shadow-md bg-[#F8F3EC]">
            <Image
              src="/images/kurti/kurti-page-2.jpg"
              alt="Artisanal Indian Craftsmanship"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="space-y-4 text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
            <h2 className="font-serif text-2xl font-medium text-[#241D1B]">
              Handcrafted Details
            </h2>
            <p>
              Each motif is meticulously placed to enhance the silhouette, whether it is a festive zari yoke on deep maroon silk or a delicate Chikankari vine on airy mulmul cotton.
            </p>
            <div className="pt-2">
              <Link
                href="/shop/embroidered"
                className="inline-flex items-center gap-2 bg-[#641C22] text-white text-xs font-sans font-semibold uppercase px-5 py-2.5 rounded-lg hover:bg-[#4B151A] transition-colors"
              >
                <span>View Embroidered Collection</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
