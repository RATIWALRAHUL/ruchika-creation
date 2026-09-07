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

import { useRouter } from "next/navigation";

export default function SearchModal() {
  const router = useRouter();
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

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      setIsSearchOpen(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const filteredProducts = query.trim()
    ? products.filter((p) => {
        const queryLower = query.toLowerCase().trim();
        const codeMatch = p.productCode.toLowerCase().includes(queryLower);
        const nameMatch = p.name.toLowerCase().includes(queryLower);
        const descMatch = p.description ? p.description.toLowerCase().includes(queryLower) : false;
        const colorMatch = p.color ? p.color.toLowerCase().includes(queryLower) : false;
        const catMatch = Array.isArray(p.category)
          ? p.category.some((c) => String(c).toLowerCase().includes(queryLower))
          : typeof p.category === "string"
          ? String(p.category).toLowerCase().includes(queryLower)
          : false;

        return codeMatch || nameMatch || descMatch || colorMatch || catMatch;
      })
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
        <form
          onSubmit={handleSearchSubmit}
          className="relative p-4 sm:p-5 border-b border-[#E6DDD3] flex items-center gap-3 bg-white"
        >
          <button
            type="submit"
            aria-label="Submit search"
            className="text-[#B18A52] text-lg hover:text-[#641C22] cursor-pointer"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by kurti name, style, color, or code (e.g. RC-KRT-001)..."
            className="w-full bg-transparent text-sm sm:text-base text-[#241D1B] placeholder-[#817771] focus:outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-[#817771] hover:text-[#241D1B] text-xs px-2 cursor-pointer"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </form>

        {/* Popular Tags */}
        <div className="px-5 py-3 bg-[#F8F3EC]/70 border-b border-[#E6DDD3] flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-[#817771] shrink-0">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setQuery(tag);
                router.push(`/search?q=${encodeURIComponent(tag)}`);
                setIsSearchOpen(false);
              }}
              className="px-2.5 py-1 bg-white border border-[#E6DDD3] rounded-full text-[#514744] hover:border-[#B18A52] hover:text-[#641C22] shrink-0 transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-xs text-[#817771]">
              <p>Type a kurti name, style, or code like &ldquo;RC-KRT-001&rdquo; to search our catalog.</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif text-lg text-[#241D1B] mb-1">
                No articles matched &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#817771]">
                Try checking the spelling or browse our complete collection.
              </p>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  router.push("/shop");
                }}
                className="mt-4 inline-block px-5 py-2 bg-[#641C22] text-white text-xs font-semibold rounded-lg hover:bg-[#4B151A] transition-colors cursor-pointer"
              >
                Browse All Kurtis
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#817771] pb-1 border-b border-[#E6DDD3]">
                <span>{filteredProducts.length} pieces found</span>
                <button
                  type="button"
                  onClick={() => handleSearchSubmit()}
                  className="text-[#641C22] font-semibold hover:underline cursor-pointer"
                >
                  View full results page →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.slice(0, 8).map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-3 p-2.5 bg-white rounded-xl border border-[#E6DDD3] hover:border-[#B18A52]/60 transition-colors"
                  >
                    <div
                      className="relative w-16 aspect-[4/5] rounded-lg overflow-hidden bg-[#F8F3EC] cursor-pointer shrink-0"
                      onClick={() => {
                        setIsSearchOpen(false);
                        router.push(`/product/${product.slug}`);
                      }}
                    >
                      <Image
                        src={product.primaryImage || product.image || "/images/kurti/kurti-page-181.jpg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <button
                          onClick={() => {
                            setIsSearchOpen(false);
                            router.push(`/product/${product.slug}`);
                          }}
                          className="font-serif text-xs font-semibold text-[#241D1B] hover:text-[#641C22] cursor-pointer line-clamp-1 text-left block w-full"
                        >
                          {product.name}
                        </button>
                        <p className="text-[10px] font-sans uppercase tracking-wider text-[#817771] mt-0.5">
                          CODE: <span className="font-semibold text-[#514744]">{product.productCode}</span>
                        </p>
                        <p className="font-sans font-semibold text-xs text-[#641C22] mt-1">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => {
                            addToCart(product, "M", 1);
                            setIsSearchOpen(false);
                          }}
                          className="bg-[#641C22] hover:bg-[#4B151A] text-white text-[10px] font-sans uppercase tracking-wider font-semibold py-1 px-2.5 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faBagShopping} className="text-[9px]" />
                          <span>ADD</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsSearchOpen(false);
                            router.push(`/product/${product.slug}`);
                          }}
                          className="text-[10.5px] font-sans text-[#514744] hover:text-[#641C22] hover:underline cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
