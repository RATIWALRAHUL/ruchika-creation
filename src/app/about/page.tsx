import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faHandsHolding,
  faHeart,
  faEarthAsia,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About Us & Our Heritage | Ruchika Creation",
  description:
    "Discover the story of Ruchika Creation — crafting timeless Indian ethnicwear, handcrafted kurtis, and royal Jaipur designs.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li>
              <Link href="/" className="hover:text-[#641C22] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E6DDD3]">
              /
            </li>
            <li className="text-[#241D1B] font-medium" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B18A52] block">
            OUR STORY &amp; HERITAGE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#241D1B] tracking-tight leading-tight">
            Crafting Timeless Indian Elegance with Heart and Heritage
          </h1>
          <p className="text-xs sm:text-sm font-sans text-[#514744] leading-relaxed pt-2">
            Ruchika Creation was founded with a singular passion: to make authentic, thoughtfully designed Indian ethnicwear accessible to women everywhere. Every silhouette celebrates traditional motifs, meticulous needlework, and all-day wearable comfort.
          </p>
        </div>

        {/* Visual Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#241D1B]">
              Rooted in the Craft Capital of Jaipur
            </h2>
            <p>
              From handblock-inspired motifs and delicate Chikankari to royal festive zari threadwork, our designs pay homage to centuries of textile mastery. We believe ethnic clothing should feel as graceful to wear as it looks in celebration.
            </p>
            <p>
              Every garment in our catalog is assigned a permanent business product code to ensure transparent, seamless communication directly between you and our design team over WhatsApp.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans font-semibold tracking-wider uppercase px-6 py-3 rounded-lg transition-colors shadow-xs"
              >
                <span>EXPLORE OUR CATALOG</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6DDD3] shadow-md bg-[#F8F3EC]">
            <Image
              src="/images/kurti/kurti-hero-8678.jpg"
              alt="Ruchika Creation Craftsmanship"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E6DDD3] shadow-2xs space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#241D1B] text-center">
            Our Pillars of Craft
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#641C22] flex items-center justify-center text-base mx-auto sm:mx-0 border border-[#E6DDD3]">
                <FontAwesomeIcon icon={faShirt} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#241D1B]">
                Curated Silhouettes
              </h3>
              <p className="text-xs text-[#817771] leading-relaxed">
                From single-piece everyday tunics to three-piece festive sets, each cut is designed for comfort and flattering drape.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#641C22] flex items-center justify-center text-base mx-auto sm:mx-0 border border-[#E6DDD3]">
                <FontAwesomeIcon icon={faHandsHolding} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#241D1B]">
                Artisanal Detail
              </h3>
              <p className="text-xs text-[#817771] leading-relaxed">
                Intricate paisley yokes, gota accents, and delicate embroidery handcrafted with utmost precision.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#641C22] flex items-center justify-center text-base mx-auto sm:mx-0 border border-[#E6DDD3]">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#241D1B]">
                Direct Seller Care
              </h3>
              <p className="text-xs text-[#817771] leading-relaxed">
                Personalized ordering experience over WhatsApp where your sizing, fitting, and questions are handled directly.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#641C22] flex items-center justify-center text-base mx-auto sm:mx-0 border border-[#E6DDD3]">
                <FontAwesomeIcon icon={faEarthAsia} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#241D1B]">
                Proudly Indian
              </h3>
              <p className="text-xs text-[#817771] leading-relaxed">
                Designed, stitched, and finished in Rajasthan with deep respect for authentic Indian textiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
