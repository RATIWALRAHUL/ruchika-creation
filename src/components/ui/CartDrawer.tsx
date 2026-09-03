"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTrashCan,
  faPlus,
  faMinus,
  faBagShopping,
  faCircleCheck,
  faArrowRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useShop } from "@/context/ShopContext";
import { createWhatsAppOrderUrl } from "@/utils/whatsappOrder";

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    freeShippingThreshold,
    customer,
    setIsProfileOpen,
    setProfileInitialTab,
    createOrderRequest,
    setSelectedOrder,
    showToast,
  } = useShop();

  const [orderPlacedSuccess, setOrderPlacedSuccess] = useState<{
    orderId: string;
  } | null>(null);

  if (!isCartOpen) return null;

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const shippingFee = cartTotal >= freeShippingThreshold ? 0 : 99;
  const estimatedTotal = cartTotal + shippingFee;

  // Handle Order on WhatsApp
  const handleOrderOnWhatsApp = () => {
    // 1. Check if user is verified
    if (!customer || !customer.mobileVerified) {
      showToast("Please verify your mobile number to order on WhatsApp");
      setProfileInitialTab("verify");
      setIsProfileOpen(true);
      return;
    }

    // 2. Validate Cart Total
    const calculatedSubtotal = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    if (calculatedSubtotal !== cartTotal) {
      showToast("Your cart has been updated. Please review your order.");
      return;
    }

    // 3. Register Pending Order in Customer Order History
    const createdOrder = createOrderRequest(
      customer,
      cart,
      cartTotal,
      shippingFee,
      estimatedTotal
    );

    // 4. Generate URL-encoded WhatsApp Link
    const whatsappUrl = createWhatsAppOrderUrl({
      customerName: customer.name,
      customerMobile: customer.mobile,
      items: cart,
      subtotal: cartTotal,
      shipping: shippingFee,
      total: estimatedTotal,
    });

    // 5. Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // 6. Set Success State
    setOrderPlacedSuccess({ orderId: createdOrder.id });
    showToast(`Order #${createdOrder.id} generated on WhatsApp!`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={() => {
          setIsCartOpen(false);
          setOrderPlacedSuccess(null);
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FCFAF7] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E6DDD3] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="text-[#641C22] text-lg"
            />
            <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#241D1B] tracking-tight">
              Shopping Bag
            </h2>
            <span className="text-xs font-sans text-[#817771] bg-[#FAF6F0] border border-[#E6DDD3] px-2 py-0.5 rounded-full">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              setOrderPlacedSuccess(null);
            }}
            className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close cart"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        {cart.length > 0 && !orderPlacedSuccess && (
          <div className="bg-[#F8F3EC] px-4 sm:px-5 py-2.5 border-b border-[#E6DDD3] text-xs font-sans shrink-0">
            {remainingForFreeShipping > 0 ? (
              <p className="text-[#514744]">
                Add{" "}
                <span className="font-semibold text-[#641C22]">
                  ₹{remainingForFreeShipping.toLocaleString("en-IN")}
                </span>{" "}
                more to unlock <strong className="text-emerald-800">FREE SHIPPING</strong>
              </p>
            ) : (
              <p className="text-emerald-800 font-medium flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-700" />
                <span>You unlocked <strong>FREE SHIPPING</strong> on this order!</span>
              </p>
            )}
            <div className="w-full bg-[#E6DDD3] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#641C22] h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${Math.min(
                    100,
                    (cartTotal / freeShippingThreshold) * 100
                  )}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Items List or Order Request Success */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {orderPlacedSuccess ? (
            /* Order Placed on WhatsApp Confirmation */
            <div className="py-8 px-4 text-center space-y-4 bg-white rounded-xl border border-[#E6DDD3] shadow-xs">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mx-auto flex items-center justify-center">
                <FontAwesomeIcon icon={faCircleCheck} className="text-2xl" />
              </div>

              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#B18A52] block mb-1">
                  ORDER REQUESTED VIA WHATSAPP
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#241D1B]">
                  Order #{orderPlacedSuccess.orderId}
                </h3>
                <p className="text-xs text-[#817771] mt-1.5 max-w-xs mx-auto">
                  Your order summary has been transferred to WhatsApp. Please send the message in the opened WhatsApp window to finalize your booking with our team.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setProfileInitialTab("orders");
                    setIsProfileOpen(true);
                  }}
                  className="w-full py-2.5 bg-[#FAF6F0] hover:bg-[#F8F3EC] text-[#641C22] border border-[#E6DDD3] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  View in My Orders History
                </button>

                <button
                  onClick={() => {
                    clearCart();
                    setOrderPlacedSuccess(null);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-2.5 bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Clear Bag & Continue Shopping
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border border-[#E6DDD3] flex items-center justify-center text-[#B18A52]">
                <FontAwesomeIcon icon={faBagShopping} className="text-2xl" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-[#241D1B]">
                  YOUR BAG IS EMPTY
                </h3>
                <p className="text-xs text-[#817771] mt-1.5 max-w-[220px]">
                  Discover pieces crafted for everyday elegance.
                </p>
              </div>
              <Link
                href="#collections"
                onClick={() => setIsCartOpen(false)}
                className="bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans tracking-wider uppercase font-semibold py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
              >
                SHOP COLLECTION
              </Link>
            </div>
          ) : (
            /* Cart Product Cards */
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-3.5 p-3 sm:p-3.5 bg-white rounded-xl border border-[#E6DDD3] shadow-2xs"
              >
                {/* Product Image */}
                <div className="relative w-20 h-24 sm:w-22 sm:h-28 rounded-lg overflow-hidden bg-[#FAF6F0] shrink-0 border border-[#E6DDD3]">
                  <Image
                    src={item.product.image || "/images/kurti-black-front.jpg"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#241D1B] truncate leading-tight">
                        {item.product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] text-[#817771] bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#E6DDD3]">
                          Size: {item.size}
                        </span>
                        <span className="text-[11px] text-[#817771]">
                          ₹{item.product.price.toLocaleString("en-IN")} each
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-[#A39791] hover:text-[#641C22] p-1 cursor-pointer transition-colors"
                      aria-label="Remove item"
                    >
                      <FontAwesomeIcon icon={faTrashCan} className="text-xs" />
                    </button>
                  </div>

                  {/* Quantity & Line Total */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#E6DDD3]/50">
                    <div className="flex items-center border border-[#E6DDD3] rounded-md bg-[#FAF6F0] overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-[#514744] hover:bg-[#E6DDD3] text-[10px] cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="w-7 text-center text-xs font-semibold text-[#241D1B]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-[#514744] hover:bg-[#E6DDD3] text-[10px] cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>

                    <span className="text-sm font-semibold text-[#641C22]">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer: Order Summary & WhatsApp CTA */}
        {cart.length > 0 && !orderPlacedSuccess && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#E6DDD3] space-y-3.5 shrink-0">
            {/* Customer Verification Badge Preview */}
            <div className="flex items-center justify-between text-xs pb-1 border-b border-[#E6DDD3]/60">
              <span className="text-[#817771]">Ordering as:</span>
              {customer?.mobileVerified ? (
                <div className="flex items-center gap-1.5 font-medium text-emerald-800">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-700 text-xs" />
                  <span>{customer.name} (+91 {customer.mobile})</span>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setProfileInitialTab("verify");
                    setIsProfileOpen(true);
                  }}
                  className="text-[#641C22] font-semibold hover:underline cursor-pointer"
                >
                  + Verify Mobile (1-time)
                </button>
              )}
            </div>

            {/* Order Summary Panel */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#514744]">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-[#514744]">
                <span>Shipping</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-emerald-700 font-semibold">FREE</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between font-serif text-lg font-semibold text-[#241D1B] pt-2 border-t border-[#E6DDD3]">
                <span>TOTAL</span>
                <span className="text-[#641C22]">
                  ₹{estimatedTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Primary Action: ORDER ON WHATSAPP */}
            <button
              onClick={handleOrderOnWhatsApp}
              className="w-full bg-[#641C22] hover:bg-[#4B151A] text-[#FCFAF7] h-[50px] rounded-[8px] flex items-center justify-center gap-2.5 transition-colors duration-200 cursor-pointer shadow-xs text-xs sm:text-[13px] font-sans font-semibold tracking-wide uppercase"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-emerald-300" />
              <span>ORDER ON WHATSAPP</span>
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] text-[#817771]">
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[#B18A52]" />
                Direct Boutique Support
              </span>
              <span>•</span>
              <span>Hassle-Free 7-Day Returns</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
