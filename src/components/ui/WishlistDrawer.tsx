"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faHeart,
  faBagShopping,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export default function WishlistDrawer() {
  const {
    wishlist,
    wishlistCount,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
  } = useShop();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsWishlistOpen(false);
    };
    if (isWishlistOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isWishlistOpen, setIsWishlistOpen]);

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity duration-300">
      <div
        className="absolute inset-0"
        onClick={() => setIsWishlistOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md bg-[#FCFAF7] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E6DDD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faHeart} className="text-[#641C22]" />
            <h2 className="font-serif text-xl font-medium text-[#241D1B]">
              Your Wishlist
            </h2>
            <span className="bg-[#F8F3EC] text-[#641C22] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#E6DDD3]">
              {wishlistCount}
            </span>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] hover:text-[#241D1B] flex items-center justify-center transition-colors"
            aria-label="Close wishlist"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F8F3EC] border border-[#E6DDD3] flex items-center justify-center text-[#B18A52]">
                <FontAwesomeIcon icon={faHeart} className="text-2xl" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#241D1B] mb-1">
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-[#817771] max-w-xs">
                  Save your favorite styles by tapping the heart icon on any piece.
                </p>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="bg-[#641C22] text-white text-xs font-sans uppercase tracking-wider font-semibold py-2.5 px-6 rounded-lg hover:bg-[#4B151A] transition-colors"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3 bg-white rounded-xl border border-[#E6DDD3] shadow-xs"
              >
                <div className="relative w-20 aspect-[4/5] rounded-lg overflow-hidden bg-[#F8F3EC] shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-sans text-xs font-medium text-[#241D1B] line-clamp-1">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(item)}
                        className="text-[#817771] hover:text-[#641C22] text-xs p-1"
                        aria-label="Remove item"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#817771] line-clamp-1 mt-0.5">
                      {item.description}
                    </p>

                    <p className="font-sans font-semibold text-xs text-[#241D1B] mt-1">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(item, "M", 1);
                      toggleWishlist(item);
                    }}
                    className="w-full mt-2 bg-[#641C22] hover:bg-[#4B151A] text-white text-[11px] font-sans font-semibold py-1.5 px-3 rounded flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FontAwesomeIcon icon={faBagShopping} className="text-[10px]" />
                    <span>MOVE TO BAG</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
