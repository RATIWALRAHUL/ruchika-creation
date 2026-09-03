"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBagShopping,
  faPlus,
  faMinus,
  faTrashCan,
  faTruck,
  faShieldHalved,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    freeShippingThreshold,
  } = useShop();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCartOpen(false);
    };
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(
    100,
    (cartTotal / freeShippingThreshold) * 100
  );
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity duration-300">
      {/* Backdrop click to close */}
      <div
        className="absolute inset-0"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#FCFAF7] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E6DDD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faBagShopping} className="text-[#641C22]" />
            <h2 className="font-serif text-xl font-medium text-[#241D1B]">
              Shopping Bag
            </h2>
            <span className="bg-[#F8F3EC] text-[#641C22] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#E6DDD3]">
              {cartCount}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] hover:text-[#241D1B] flex items-center justify-center transition-colors"
            aria-label="Close cart"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#F8F3EC] px-5 py-3 border-b border-[#E6DDD3]">
          <div className="flex items-center gap-2 text-xs font-sans text-[#514744] mb-1.5">
            <FontAwesomeIcon icon={faTruck} className="text-[#B18A52]" />
            {remainingForFreeShipping > 0 ? (
              <span>
                Add <strong className="text-[#641C22]">₹{remainingForFreeShipping}</strong> more for{" "}
                <strong className="text-[#641C22]">FREE Express Shipping</strong>
              </span>
            ) : (
              <span className="text-[#4B151A] font-medium">
                🎉 Congratulations! You unlocked FREE Express Shipping
              </span>
            )}
          </div>
          <div className="w-full bg-[#E6DDD3] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#641C22] h-full rounded-full transition-all duration-300"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F8F3EC] border border-[#E6DDD3] flex items-center justify-center text-[#B18A52]">
                <FontAwesomeIcon icon={faBagShopping} className="text-2xl" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#241D1B] mb-1">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#817771] max-w-xs">
                  Discover our timeless kurti collections crafted with authentic Indian heritage.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-[#641C22] text-white text-xs font-sans uppercase tracking-wider font-semibold py-2.5 px-6 rounded-lg hover:bg-[#4B151A] transition-colors"
              >
                Explore Kurtis
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-3.5 p-3 bg-white rounded-xl border border-[#E6DDD3] shadow-xs"
              >
                {/* Thumbnail */}
                <div className="relative w-20 aspect-[4/5] rounded-lg overflow-hidden bg-[#F8F3EC] shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-sans text-xs font-medium text-[#241D1B] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-[#817771] hover:text-[#641C22] text-xs p-1"
                        aria-label="Remove item"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-[#817771]">
                        Size: <strong className="text-[#241D1B]">{item.size}</strong>
                      </span>
                    </div>

                    <p className="font-sans font-semibold text-xs text-[#241D1B] mt-1.5">
                      ₹{item.product.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F8F3EC]">
                    <div className="flex items-center border border-[#E6DDD3] rounded-md overflow-hidden bg-[#FCFAF7]">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-[#514744] hover:bg-[#E6DDD3] text-[10px]"
                        aria-label="Decrease quantity"
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="w-7 text-center text-xs font-medium text-[#241D1B]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-[#514744] hover:bg-[#E6DDD3] text-[10px]"
                        aria-label="Increase quantity"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>

                    <span className="text-xs font-semibold text-[#641C22]">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal & Checkout */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#E6DDD3] space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-[#514744]">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-xs text-[#514744]">
                <span>Shipping</span>
                <span>
                  {remainingForFreeShipping === 0 ? (
                    <span className="text-emerald-700 font-medium">FREE</span>
                  ) : (
                    "₹99"
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#241D1B] pt-2 border-t border-[#E6DDD3]">
                <span>Estimated Total</span>
                <span className="text-[#641C22]">
                  ₹{(cartTotal + (remainingForFreeShipping === 0 ? 0 : 99)).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                alert("Thank you for choosing Ruchika Creation! Proceeding to order placement.");
              }}
              className="w-full bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans tracking-wider uppercase font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>PROCEED TO CHECKOUT</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-[#817771] pt-1">
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[#B18A52]" /> 100% Authentic
              </span>
              <span>•</span>
              <span>7-Day Easy Returns</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
