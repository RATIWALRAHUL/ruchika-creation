"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faStar,
  faBagShopping,
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
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const wishlisted = isInWishlist(product.id);

  const displayImage =
    isHovered && product.hoverImage ? product.hoverImage : product.image;

  return (
    <div
      className={`group bg-white rounded-[10px] sm:rounded-[12px] border border-[#E6DDD3] overflow-hidden flex flex-col justify-between transition-all duration-250 hover:shadow-[0_6px_20px_rgba(60,35,30,0.07)] hover:-translate-y-0.5 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container: Exact 4:5 Aspect Ratio */}
      <div
        className="relative w-full aspect-[4/5] bg-[#F8F3EC] overflow-hidden cursor-pointer"
        onClick={() => setQuickViewProduct(product)}
      >
        <Image
          src={displayImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-top transition-transform duration-350 ease-out group-hover:scale-[1.02]"
        />

        {/* Top-Left: NEW Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
            <span className="bg-[#641C22] text-[#FCFAF7] text-[9px] sm:text-[10px] tracking-[0.06em] sm:tracking-[0.08em] uppercase font-semibold px-1.5 sm:px-2 py-0.5 rounded-[3px] sm:rounded-[4px] shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Top-Right: Heart Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#641C22] transition-transform duration-200 hover:scale-108 shadow-2xs cursor-pointer"
        >
          <FontAwesomeIcon
            icon={wishlisted ? faHeartSolid : faHeartRegular}
            className={`text-[11px] sm:text-[13px] ${
              wishlisted ? "text-[#641C22]" : "text-[#514744]/70 hover:text-[#641C22]"
            }`}
          />
        </button>
      </div>

      {/* Card Content with strict 4px-system spacing and fluid responsive sizing */}
      <div className="p-2.5 sm:p-4 lg:p-4.5 flex flex-col flex-1 justify-between">
        <div className="flex flex-col">
          {/* Product Name */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-sans font-semibold text-[13px] sm:text-[14px] lg:text-[14.5px] text-[#241D1B] line-clamp-1 hover:text-[#641C22] cursor-pointer transition-colors duration-150 leading-tight"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#817771] line-clamp-1 font-normal leading-tight sm:leading-[1.5] mt-1 mb-1.5 sm:mb-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 sm:gap-1.5 text-[#B18A52] text-[10.5px] sm:text-[12px] mb-2 sm:mb-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={`text-[8.5px] sm:text-[10px] ${
                    i < Math.floor(product.rating)
                      ? "text-[#B18A52]"
                      : "text-[#E6DDD3]"
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] sm:text-[11.5px] text-[#817771] font-sans font-normal">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
            <span className="font-sans font-semibold text-[14px] sm:text-[16px] text-[#241D1B]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-[10.5px] sm:text-[12px] text-[#817771] line-through font-normal">
                ₹{product.compareAtPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => addToCart(product, "M", 1)}
          className="w-full bg-[#641C22] hover:bg-[#4B151A] text-white text-[10.5px] sm:text-[12px] font-sans tracking-[0.04em] sm:tracking-[0.06em] uppercase font-semibold h-[34px] sm:h-[40px] px-2 sm:px-3 rounded-[6px] sm:rounded-[8px] flex items-center justify-center gap-1.5 sm:gap-2 transition-colors duration-200 shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40"
          aria-label={`Add ${product.name} to bag`}
        >
          <FontAwesomeIcon icon={faBagShopping} className="text-[10px] sm:text-[11px]" />
          <span>ADD TO BAG</span>
        </button>
      </div>
    </div>
  );
}
