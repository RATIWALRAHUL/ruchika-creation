"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faStar,
  faBagShopping,
  faHeart as faHeartSolid,
  faTruck,
  faRotateLeft,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { createWhatsAppQueryUrl } from "@/utils/whatsappOrder";

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    customer,
  } = useShop();

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (quickViewProduct) {
      document.body.style.overflow = "hidden";
      setSelectedImage(quickViewProduct.image);
    } else {
      document.body.style.overflow = "";
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const wishlisted = isInWishlist(quickViewProduct.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="absolute inset-0"
        onClick={() => setQuickViewProduct(null)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl bg-[#FCFAF7] rounded-2xl shadow-2xl border border-[#E6DDD3] overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white/90 text-[#514744] hover:text-[#241D1B] flex items-center justify-center shadow-xs transition-colors"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faXmark} className="text-base" />
        </button>

        {/* Left: Product Imagery */}
        <div className="md:w-1/2 bg-[#F8F3EC] p-3.5 sm:p-5 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#E6DDD3] shrink-0">
          <div className="relative w-full max-w-[180px] sm:max-w-[240px] md:max-w-[280px] aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden shadow-sm bg-white">
            <Image
              src={selectedImage || quickViewProduct.image}
              alt={quickViewProduct.name}
              fill
              className="object-cover"
            />
          </div>

          {quickViewProduct.hoverImage && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setSelectedImage(quickViewProduct.image)}
                className={`relative w-12 h-14 rounded-md overflow-hidden border-2 transition-all ${
                  (selectedImage || quickViewProduct.image) === quickViewProduct.image
                    ? "border-[#641C22]"
                    : "border-transparent opacity-70"
                }`}
              >
                <Image
                  src={quickViewProduct.image}
                  alt="Front view"
                  fill
                  className="object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedImage(quickViewProduct.hoverImage!)}
                className={`relative w-12 h-14 rounded-md overflow-hidden border-2 transition-all ${
                  selectedImage === quickViewProduct.hoverImage
                    ? "border-[#641C22]"
                    : "border-transparent opacity-70"
                }`}
              >
                <Image
                  src={quickViewProduct.hoverImage}
                  alt="Alternate view"
                  fill
                  className="object-cover"
                />
              </button>
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#B18A52] font-medium">
                {quickViewProduct.category}
              </span>
              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                className="text-[#641C22] p-1 text-sm hover:scale-110 transition-transform"
                aria-label="Wishlist toggle"
              >
                <FontAwesomeIcon
                  icon={wishlisted ? faHeartSolid : faHeartRegular}
                />
              </button>
            </div>

            <h2 className="font-serif text-2xl text-[#241D1B] font-normal leading-tight">
              {quickViewProduct.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-1.5 mb-3 text-xs">
              <div className="flex items-center text-[#B18A52]">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-[10px]" />
                ))}
              </div>
              <span className="text-[#817771]">({quickViewProduct.reviewCount} customer reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2.5 mb-4">
              <span className="font-sans font-semibold text-2xl text-[#241D1B]">
                ₹{quickViewProduct.price.toLocaleString("en-IN")}
              </span>
              {quickViewProduct.compareAtPrice && (
                <span className="text-sm text-[#817771] line-through">
                  ₹{quickViewProduct.compareAtPrice.toLocaleString("en-IN")}
                </span>
              )}
              <span className="text-xs text-[#5C6248] font-medium bg-[#5C6248]/10 px-2 py-0.5 rounded">
                Inclusive of all taxes
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#514744] leading-relaxed mb-4">
              {quickViewProduct.description}
            </p>

            {/* Size Selector */}
            <div className="mb-4">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-medium text-[#241D1B]">Select Size:</span>
                <span className="text-[#B18A52] underline cursor-pointer">Size Guide</span>
              </div>
              <div className="flex gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-lg text-xs font-medium border transition-all ${
                      selectedSize === size
                        ? "border-[#641C22] bg-[#641C22] text-white"
                        : "border-[#E6DDD3] bg-white text-[#514744] hover:border-[#B18A52]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric / Details */}
            {quickViewProduct.details && (
              <div className="bg-[#F8F3EC] p-3 rounded-lg mb-5 text-[11px] text-[#514744] space-y-1">
                {quickViewProduct.fabric && (
                  <p>
                    <strong className="text-[#241D1B]">Fabric:</strong> {quickViewProduct.fabric}
                  </p>
                )}
                <p>
                  <strong className="text-[#241D1B]">Fit:</strong> Regular comfort ethnic fit
                </p>
                <p>
                  <strong className="text-[#241D1B]">Care:</strong> Dry clean or gentle handwash in cold water
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={() => {
                addToCart(quickViewProduct, selectedSize, 1);
                setQuickViewProduct(null);
              }}
              className="w-full bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans tracking-wider uppercase font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-xs" />
              <span>ADD TO BAG</span>
            </button>

            <button
              onClick={() => {
                const queryUrl = createWhatsAppQueryUrl({
                  customerName: customer?.name,
                  customerMobile: customer?.mobile,
                  productName: quickViewProduct.name,
                  productCode: quickViewProduct.id,
                  productPrice: quickViewProduct.price,
                  productSize: selectedSize,
                  productCategory: quickViewProduct.category,
                  queryText: `Please confirm availability and delivery timeline for ${quickViewProduct.name} (Size: ${selectedSize}).`,
                });
                window.open(queryUrl, "_blank");
              }}
              className="w-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#125c2b] border border-[#25D366]/40 text-xs font-sans tracking-wider uppercase font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-sm text-[#125c2b]" />
              <span>INQUIRE ON WHATSAPP</span>
            </button>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#E6DDD3] text-[10px] text-center text-[#817771]">
              <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon icon={faTruck} className="text-[#B18A52]" />
                <span>Free Ship &gt; ₹999</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon icon={faRotateLeft} className="text-[#B18A52]" />
                <span>7-Day Return</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[#B18A52]" />
                <span>100% Genuine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
