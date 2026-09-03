"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { products, Product } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faStar,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart, setQuickViewProduct } = useShop();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularTags = [
    "Embroidered",
    "Chikankari",
    "Festive Maroon",
    "Everyday Cotton",
    "Jaipuri Prints",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="absolute inset-0"
        onClick={() => setIsSearchOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-[#FCFAF7] rounded-2xl shadow-2xl border border-[#E6DDD3] overflow-hidden z-10">
        {/* Search Bar */}
        <div className="relative p-4 sm:p-5 border-b border-[#E6DDD3] flex items-center gap-3 bg-white">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#B18A52] text-lg"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search kurtis by style, embroidery, fabric or occasion..."
            className="w-full bg-transparent text-sm sm:text-base text-[#241D1B] placeholder-[#817771] focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[#817771] hover:text-[#241D1B] text-xs px-2"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] flex items-center justify-center transition-colors"
            aria-label="Close search"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-5 py-3 bg-[#F8F3EC]/70 border-b border-[#E6DDD3] flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-[#817771] shrink-0">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-white border border-[#E6DDD3] rounded-full text-[#514744] hover:border-[#B18A52] hover:text-[#641C22] shrink-0 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-xs text-[#817771]">
              <p>Type above to discover handcrafted Kurtis from Jaipur.</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif text-lg text-[#241D1B] mb-1">
                No articles matched &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#817771]">
                Try checking the spelling or browse our festive collections.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-3 p-2.5 bg-white rounded-xl border border-[#E6DDD3] hover:border-[#B18A52]/60 transition-colors"
                >
                  <div
                    className="relative w-16 aspect-[4/5] rounded-lg overflow-hidden bg-[#F8F3EC] cursor-pointer shrink-0"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setQuickViewProduct(product);
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4
                        onClick={() => {
                          setIsSearchOpen(false);
                          setQuickViewProduct(product);
                        }}
                        className="font-sans text-xs font-medium text-[#241D1B] hover:text-[#641C22] cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-[#817771] line-clamp-1">
                        {product.description}
                      </p>
                      <p className="font-sans font-semibold text-xs text-[#241D1B] mt-1">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product, "M", 1);
                        setIsSearchOpen(false);
                      }}
                      className="mt-1 bg-[#641C22] hover:bg-[#4B151A] text-white text-[10px] font-sans uppercase tracking-wider font-semibold py-1 px-2.5 rounded flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FontAwesomeIcon icon={faBagShopping} className="text-[9px]" />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
