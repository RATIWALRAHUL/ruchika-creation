"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faBagShopping,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({
  product,
  className = "",
}: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const wishlisted = isInWishlist(product.id);

  const displayImage =
    isHovered && product.hoverImage ? product.hoverImage : product.primaryImage || product.image;

  // Format type subtitle
  const typeSubtitle =
    product.productType === "SINGLE_PIECE"
      ? "Single Piece · Kurti"
      : product.productType === "TWO_PIECE"
      ? "Two Piece · Kurti Set"
      : product.productType === "THREE_PIECE"
      ? (product.premiumTier ? "Festive Three Piece Set" : "Three Piece · Kurti Set")
      : Array.isArray(product.style) && product.style.length > 0
      ? product.style[0]
      : "Indian Ethnicwear";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, "M", 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  return (
    <div
      className={`group bg-white rounded-[10px] sm:rounded-[12px] border border-[#E6DDD3] overflow-hidden flex flex-col justify-between transition-all duration-250 hover:shadow-[0_6px_20px_rgba(60,35,30,0.07)] hover:-translate-y-0.5 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container: Exact 4:5 Aspect Ratio */}
      <div className="relative w-full aspect-[4/5] bg-[#F8F3EC] overflow-hidden">
        <Link
          href={`/product/${product.slug}`}
          className="relative block w-full h-full cursor-pointer"
          aria-label={`View details for ${product.name}`}
        >
          <Image
            src={displayImage}
            alt={`Ruchika Creation ${product.name}`}
            fill
            sizes="(max-width: 640px) 48vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-top transition-transform duration-350 ease-out group-hover:scale-[1.02]"
          />
        </Link>

        {/* Top-Left: Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10 pointer-events-none">
            <span className="bg-[#641C22] text-[#FCFAF7] text-[9px] sm:text-[10px] tracking-[0.06em] sm:tracking-[0.08em] uppercase font-semibold px-1.5 sm:px-2 py-0.5 rounded-[3px] sm:rounded-[4px] shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Top-Right: Wishlist Heart Icon */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#641C22] transition-transform duration-200 hover:scale-108 shadow-2xs cursor-pointer"
        >
          <FontAwesomeIcon
            icon={wishlisted ? faHeartSolid : faHeartRegular}
            className={`text-[11px] sm:text-[13px] ${
              wishlisted ? "text-[#641C22]" : "text-[#514744]/70 hover:text-[#641C22]"
            }`}
          />
        </button>
      </div>

      {/* Card Content with strict spacing and fluid responsive typography */}
      <div className="p-2.5 sm:p-3.5 lg:p-4 flex flex-col flex-1 justify-between">
        <div className="flex flex-col">
          {/* Product Name (DM Sans 14-15px font-semibold) */}
          <Link
            href={`/product/${product.slug}`}
            className="font-sans font-semibold text-[13px] sm:text-[14px] lg:text-[14.5px] text-[#241D1B] line-clamp-1 hover:text-[#641C22] cursor-pointer transition-colors duration-150 leading-tight"
            title={product.name}
          >
            {product.name}
          </Link>

          {/* Product Code */}
          <div className="flex items-center justify-between gap-1.5 mt-1">
            <span className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.08em] uppercase text-[#817771] font-medium">
              CODE: {product.productCode}
            </span>
          </div>

          {/* Style / Product Type */}
          <p className="text-[11px] sm:text-[11.5px] text-[#817771] line-clamp-1 font-normal leading-tight mt-1 mb-1.5">
            {typeSubtitle}
          </p>

          {/* Price (15-17px font-semibold in Indian format) */}
          <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 mt-0.5">
            <span className="font-sans font-semibold text-[14px] sm:text-[16px] text-[#241D1B]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-[11px] sm:text-[12px] text-[#817771] line-through font-normal">
                ₹{product.compareAtPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button: Add to Bag (40-44px height, #641C22, 7px radius, faBagShopping) */}
        <button
          onClick={handleAddToCart}
          className={`w-full text-[10.5px] sm:text-[12px] font-sans tracking-[0.04em] sm:tracking-[0.06em] uppercase font-semibold h-[36px] sm:h-[40px] px-2 sm:px-3 rounded-[7px] flex items-center justify-center gap-1.5 sm:gap-2 transition-colors duration-200 shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40 ${
            isAdded
              ? "bg-emerald-800 text-white"
              : "bg-[#641C22] hover:bg-[#4B151A] text-white"
          }`}
          aria-label={`Add ${product.name} to bag`}
        >
          <FontAwesomeIcon
            icon={isAdded ? faCheck : faBagShopping}
            className="text-[10px] sm:text-[11px]"
          />
          <span>{isAdded ? "ADDED ✓" : "ADD TO BAG"}</span>
        </button>
      </div>
    </div>
  );
}
