"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductVariant, getRelatedProducts, COLOR_HEX_MAP } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import ProductCard from "@/components/ui/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faBagShopping,
  faCopy,
  faCheck,
  faTruck,
  faRotateLeft,
  faShieldHalved,
  faRulerHorizontal,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { createWhatsAppQueryUrl } from "@/utils/whatsappOrder";

interface ProductDetailClientProps {
  product: Product;
}

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart, toggleWishlist, isInWishlist, customer } = useShop();

  const activeImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.primaryImage || product.image || "/images/kurti/kurti-page-181.jpg"];

  const [selectedImage, setSelectedImage] = useState<string>(
    activeImages[0] || product.primaryImage || product.image
  );
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  const wishlisted = isInWishlist(product.id);
  const relatedProducts = getRelatedProducts(product, 4);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(product.productCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize,
      quantity,
      product.color,
      product.productCode,
      product.price,
      selectedImage
    );
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleWhatsAppInquiry = () => {
    const url = createWhatsAppQueryUrl({
      customerName: customer?.name,
      customerMobile: customer?.mobile,
      productName: product.name,
      productCode: product.productCode,
      productColor: product.color,
      productPrice: product.price,
      productSize: selectedSize,
      productCategory: product.category,
      queryText: `Hello Ruchika Creation, I want to inquire about ${product.name} (Code: ${product.productCode}, Color: ${product.color || "Standard"}, Size: ${selectedSize}, Price: ₹${product.price}). Please confirm availability.`,
    });
    window.open(url, "_blank");
  };

  const mainCategory = Array.isArray(product.category) && product.category.length > 0
    ? product.category[0]
    : "Kurtis";

  return (
    <div className="bg-[#FCFAF7] min-h-screen py-6 sm:py-10">
      <div className="site-container space-y-10 sm:space-y-14">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771] flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#641C22] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E6DDD3]">
              /
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#641C22] transition-colors">
                Shop
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E6DDD3]">
              /
            </li>
            <li>
              <Link
                href={`/shop?category=${encodeURIComponent(mainCategory)}`}
                className="hover:text-[#641C22] transition-colors"
              >
                {mainCategory}
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E6DDD3]">
              /
            </li>
            <li className="text-[#241D1B] font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Main Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Image Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Large Image */}
            <div className="relative w-full aspect-[4/5] bg-[#F8F3EC] rounded-2xl border border-[#E6DDD3] overflow-hidden shadow-sm">
              <Image
                src={selectedImage}
                alt={`Ruchika Creation ${product.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-top"
              />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#641C22] text-[#FCFAF7] text-[10px] sm:text-[11px] tracking-[0.08em] uppercase font-semibold px-2.5 py-1 rounded-[4px] shadow-xs">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#641C22] hover:scale-108 transition-all shadow-xs cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={wishlisted ? faHeartSolid : faHeartRegular}
                  className="text-base"
                />
              </button>
            </div>

            {/* Thumbnails Row */}
            {activeImages && activeImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
                {activeImages.map((imgSrc, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(imgSrc)}
                    className={`relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      selectedImage === imgSrc
                        ? "border-[#641C22] shadow-xs"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`View ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Order Actions (5 cols on desktop) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] shadow-2xs space-y-6">
            {/* Category & Product Code Header */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <span className="text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-[#B18A52]">
                  {Array.isArray(product.category)
                    ? product.category.join(" · ")
                    : product.category}
                </span>

                {/* Product Code Badge with Copy Action */}
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF6F0] hover:bg-[#F8F3EC] border border-[#E6DDD3] rounded-md text-[11px] font-mono font-semibold text-[#641C22] transition-colors cursor-pointer"
                  title="Click to copy product reference code"
                >
                  <FontAwesomeIcon
                    icon={copiedCode ? faCheck : faCopy}
                    className="text-[10px]"
                  />
                  <span>{copiedCode ? "COPIED ✓" : product.productCode}</span>
                </button>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#241D1B] leading-tight mb-2">
                {product.name}
              </h1>

              {/* Product Type Banner */}
              <div className="inline-block bg-[#FAF6F0] text-[#641C22] text-[11.5px] font-sans font-semibold uppercase px-2.5 py-0.5 rounded border border-[#E6DDD3] mb-3">
                {product.productType === "SINGLE_PIECE"
                  ? "Single Piece (Kurti Only)"
                  : product.productType === "TWO_PIECE"
                  ? "Two Piece Set (Kurti + Bottom)"
                  : product.premiumTier
                  ? "Festive Three Piece Ensemble"
                  : "Three Piece Set (Kurti + Bottom + Dupatta)"}
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-sans font-semibold text-2xl sm:text-3xl text-[#241D1B]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <span className="text-sm sm:text-base text-[#817771] line-through font-normal">
                    ₹{product.compareAtPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-xs text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                  Inclusive of all taxes
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-[13px] font-sans text-[#514744] leading-relaxed pb-4 border-b border-[#E6DDD3]">
              {product.description}
            </p>

            {/* Static Color Display */}
            <div className="text-xs font-sans text-[#514744] pb-3 border-b border-[#E6DDD3] flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#241D1B]">Color:</span>{" "}
                <span className="font-medium text-[#641C22]">{product.color || "Standard"}</span>
              </div>
              <span className="text-[11px] font-mono text-[#817771]">
                CODE: {product.productCode}
              </span>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#241D1B]">Select Size:</span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[#641C22] hover:underline inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <FontAwesomeIcon icon={faRulerHorizontal} className="text-[10px]" />
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="flex gap-2 sm:gap-2.5">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 rounded-lg text-xs font-semibold font-sans border transition-all cursor-pointer ${
                      selectedSize === size
                        ? "border-[#641C22] bg-[#641C22] text-white shadow-xs"
                        : "border-[#E6DDD3] bg-white text-[#514744] hover:border-[#B18A52]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#241D1B] block">Quantity:</span>
              <div className="inline-flex items-center border border-[#E6DDD3] rounded-lg bg-[#FCFAF7] overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 flex items-center justify-center text-[#514744] hover:bg-[#E6DDD3]/50 font-bold transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-10 text-center text-xs font-semibold text-[#241D1B]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 flex items-center justify-center text-[#514744] hover:bg-[#E6DDD3]/50 font-bold transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action CTAs: Add to Bag & Inquire on WhatsApp */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAddToCart}
                className={`w-full text-xs font-sans tracking-widest uppercase font-semibold h-12 rounded-xl flex items-center justify-center gap-2.5 transition-colors shadow-xs cursor-pointer ${
                  isAdded
                    ? "bg-emerald-800 text-white"
                    : "bg-[#641C22] hover:bg-[#4B151A] text-white"
                }`}
              >
                <FontAwesomeIcon
                  icon={isAdded ? faCheck : faBagShopping}
                  className="text-sm"
                />
                <span>{isAdded ? "ADDED TO BAG ✓" : "ADD TO BAG"}</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-sans tracking-wider uppercase font-bold h-11 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-base text-emerald-700" />
                <span>INQUIRE ON WHATSAPP</span>
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E6DDD3] text-[10.5px] text-center text-[#817771]">
              <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon icon={faTruck} className="text-[#B18A52] text-sm" />
                <span>Free Ship &gt; ₹999</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon icon={faRotateLeft} className="text-[#B18A52] text-sm" />
                <span>7-Day Return</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[#B18A52] text-sm" />
                <span>100% Genuine</span>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-10 sm:pt-14 border-t border-[#E6DDD3] space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52] block mb-1">
                  CURATED RECOMMENDATIONS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#241D1B]">
                  You May Also Like
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-xs font-sans font-semibold uppercase tracking-wider text-[#641C22] hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Size Guide Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="absolute inset-0"
            onClick={() => setIsSizeGuideOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#E6DDD3] shadow-2xl p-6 z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6DDD3]">
              <h3 className="font-serif text-xl font-medium text-[#241D1B]">
                Indian Ethnicwear Size Chart
              </h3>
              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#514744] hover:bg-[#F8F3EC]"
                aria-label="Close size guide"
              >
                <FontAwesomeIcon icon={faXmark} className="text-base" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs font-sans text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF6F0] text-[#241D1B] border-b border-[#E6DDD3]">
                    <th className="p-2.5 font-semibold">Size</th>
                    <th className="p-2.5 font-semibold">Bust (Inches)</th>
                    <th className="p-2.5 font-semibold">Waist (Inches)</th>
                    <th className="p-2.5 font-semibold">Hip (Inches)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DDD3] text-[#514744]">
                  <tr>
                    <td className="p-2.5 font-bold text-[#641C22]">S (Small)</td>
                    <td className="p-2.5">36&quot;</td>
                    <td className="p-2.5">32&quot;</td>
                    <td className="p-2.5">38&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#641C22]">M (Medium)</td>
                    <td className="p-2.5">38&quot;</td>
                    <td className="p-2.5">34&quot;</td>
                    <td className="p-2.5">40&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#641C22]">L (Large)</td>
                    <td className="p-2.5">40&quot;</td>
                    <td className="p-2.5">36&quot;</td>
                    <td className="p-2.5">42&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#641C22]">XL (X-Large)</td>
                    <td className="p-2.5">42&quot;</td>
                    <td className="p-2.5">38&quot;</td>
                    <td className="p-2.5">44&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#641C22]">XXL (2X-Large)</td>
                    <td className="p-2.5">44&quot;</td>
                    <td className="p-2.5">40&quot;</td>
                    <td className="p-2.5">46&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-[#817771] pt-2">
              * Measurements are in garment dimensions. For standard comfort fit, select your exact regular size.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
