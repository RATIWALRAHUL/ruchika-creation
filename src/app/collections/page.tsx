import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShirt,
  faGem,
  faScissors,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Our Collections | Ruchika Creation",
  description:
    "Explore the curated collections of Ruchika Creation — from everyday kurtis to royal festive ensembles and intricate embroidery.",
};

export default function CollectionsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "everyday":
        return faShirt;
      case "festive":
        return faGem;
      case "embroidered":
        return faScissors;
      case "new":
        return faStar;
      default:
        return faGem;
    }
  };

  const categoriesByPiece = [
    {
      title: "Single Piece Kurtis",
      price: "₹499",
      desc: "Graceful standalone kurtis and tunics for effortless everyday wear.",
      href: "/shop/kurtis",
      image: "/images/kurti/kurti-page-181.jpg",
      code: "RC-KRT",
    },
    {
      title: "Two Piece Sets",
      price: "₹899",
      desc: "Coordinated kurti and trouser sets crafted for comfort and modern style.",
      href: "/shop/two-piece",
      image: "/images/kurti/kurti-coord-blue.png",
      code: "RC-2PC",
    },
    {
      title: "Three Piece Ensembles",
      price: "₹1,099 – ₹1,299",
      desc: "Complete celebratory ensembles with kurti, bottom, and matching dupatta.",
      href: "/shop/three-piece",
      image: "/images/kurti/kurti-page-2.jpg",
      code: "RC-3PC",
    },
  ];

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
              Collections
            </li>
          </ol>
        </nav>

        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B18A52] block">
            CURATED EDITS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#241D1B] tracking-tight">
            Our Signature Collections
          </h1>
          <p className="text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
            Thoughtfully categorized into signature design styles, piece configurations, and occasions.
          </p>
        </div>

        {/* Featured Thematic Collections */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD3]">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#241D1B]">
              Shop by Thematic Edit
            </h2>
            <Link
              href="/shop"
              className="text-xs font-sans font-semibold uppercase text-[#641C22] hover:underline"
            >
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {collections.map((col) => (
              <Link
                key={col.id}
                href={col.href}
                className="group relative rounded-2xl overflow-hidden border border-[#E6DDD3] aspect-[3/4] shadow-sm block cursor-pointer"
              >
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs border border-white/25 flex items-center justify-center text-[#D8BF96]">
                  <FontAwesomeIcon icon={getIcon(col.iconType)} className="text-xs" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white space-y-1">
                  <h3 className="font-serif text-xl font-medium group-hover:text-[#D8BF96] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-[#F8F3EC]/85 line-clamp-1">
                    {col.subtitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-sans font-semibold tracking-wider text-[#D8BF96] pt-1">
                    <span>EXPLORE</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[9px]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Piece Configuration Collections */}
        <div className="space-y-4 pt-4">
          <div className="pb-2 border-b border-[#E6DDD3]">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#241D1B]">
              Shop by Product Type &amp; Pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categoriesByPiece.map((piece) => (
              <Link
                key={piece.title}
                href={piece.href}
                className="group bg-white rounded-2xl border border-[#E6DDD3] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[4/3] bg-[#F8F3EC] overflow-hidden">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#641C22] text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded">
                    {piece.code}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#241D1B] font-sans font-bold text-xs px-2.5 py-1 rounded-md shadow-xs">
                    {piece.price}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-[#241D1B] group-hover:text-[#641C22] transition-colors">
                    {piece.title}
                  </h3>
                  <p className="text-xs font-sans text-[#514744] leading-relaxed">
                    {piece.desc}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#641C22]">
                    <span>VIEW COLLECTION</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
