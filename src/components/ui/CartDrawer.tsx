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
  faCheck,
  faTruck,
  faShieldHalved,
  faPen,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useShop } from "@/context/ShopContext";
import { createWhatsAppOrderUrl } from "@/utils/whatsappOrder";
import { RUCHIKA_WHATSAPP_DISPLAY } from "@/config/whatsapp";

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
    updateCustomer,
    setIsProfileOpen,
    setProfileInitialTab,
    createOrderRequest,
    showToast,
  } = useShop();

  const [orderPlacedSuccess, setOrderPlacedSuccess] = useState<{
    orderId: string;
  } | null>(null);

  // Inline Customer Details & Query state if not registered yet
  const [showCustomerInput, setShowCustomerInput] = useState(false);
  const [custName, setCustName] = useState("");
  const [custMobile, setCustMobile] = useState("");
  const [customQuery, setCustomQuery] = useState("");
  const [showQueryBox, setShowQueryBox] = useState(false);
  const [formError, setFormError] = useState("");

  if (!isCartOpen) return null;

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const shippingFee = cartTotal >= freeShippingThreshold ? 0 : 99;
  const estimatedTotal = cartTotal + shippingFee;

  // Handle Order on WhatsApp
  const handleOrderOnWhatsApp = () => {
    // 1. Check if user profile is available in localStorage/context
    let activeCustomer = customer;

    if (!activeCustomer) {
      if (!showCustomerInput) {
        setShowCustomerInput(true);
        return;
      }

      const cleanMobile = custMobile.replace(/\D/g, "");
      if (!custName.trim()) {
        setFormError("Please enter your name");
        return;
      }
      if (cleanMobile.length < 10) {
        setFormError("Please enter a valid 10-digit mobile number");
        return;
      }

      activeCustomer = {
        id: `RC${Math.floor(1000 + Math.random() * 9000)}`,
        name: custName.trim(),
        mobile: cleanMobile.slice(-10),
        mobileVerified: true,
        createdAt: new Date().toISOString(),
      };

      // Save directly to localStorage
      updateCustomer(activeCustomer);
      setShowCustomerInput(false);
      setFormError("");
    }

    // 2. Validate Cart Total
    const calculatedSubtotal = cart.reduce(
      (sum, item) => sum + (item.variantPrice ?? item.product.price) * item.quantity,
      0
    );
    if (calculatedSubtotal !== cartTotal) {
      showToast("Your cart has been updated. Please review your order.");
      return;
    }

    // 3. Register Pending Order in Customer Order History (Local Storage)
    const createdOrder = createOrderRequest(
      activeCustomer,
      cart,
      cartTotal,
      shippingFee,
      estimatedTotal
    );

    // 4. Generate URL-encoded WhatsApp Link with seller number and optional queries
    const whatsappUrl = createWhatsAppOrderUrl({
      orderId: createdOrder.id,
      customerName: activeCustomer.name,
      customerMobile: activeCustomer.mobile,
      items: cart,
      subtotal: cartTotal,
      shipping: shippingFee,
      total: estimatedTotal,
      customerQuery: customQuery.trim() || undefined,
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
      <div className="relative w-full max-w-md bg-[#FCFAF7] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E6DDD3] bg-white">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-lg sm:text-xl font-medium text-[#241D1B] tracking-wide">
              SHOPPING BAG
            </h2>
            <span className="text-xs bg-[#FAF6F0] text-[#641C22] px-2 py-0.5 rounded-full font-semibold border border-[#E6DDD3]">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              setOrderPlacedSuccess(null);
            }}
            className="w-8 h-8 rounded-full hover:bg-[#FAF6F0] flex items-center justify-center text-[#817771] hover:text-[#241D1B] transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        {cart.length > 0 && !orderPlacedSuccess && (
          <div className="bg-[#FAF6F0] px-4 py-2.5 border-b border-[#E6DDD3]">
            <div className="flex items-center justify-between text-xs text-[#514744] mb-1.5">
              <span className="flex items-center gap-1.5 font-medium">
                <FontAwesomeIcon icon={faTruck} className="text-[#B18A52] text-[11px]" />
                {cartTotal >= freeShippingThreshold
                  ? "Congratulations! You get Free Delivery"
                  : `Add ₹${remainingForFreeShipping} more for FREE Delivery`}
              </span>
              <span className="font-semibold text-[#641C22]">
                {Math.min(100, Math.round((cartTotal / freeShippingThreshold) * 100))}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#E6DDD3] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#641C22] rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (cartTotal / freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {orderPlacedSuccess ? (
            /* Order Success State */
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <FontAwesomeIcon icon={faCheck} className="text-2xl" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-medium text-[#241D1B]">
                  Order Request Generated!
                </h3>
                <p className="text-xs text-[#817771]">
                  Order Ref: <span className="font-mono font-bold text-[#641C22]">{orderPlacedSuccess.orderId}</span>
                </p>
                <p className="text-xs text-[#514744] max-w-[280px] pt-2">
                  We opened WhatsApp with your exact order details. Please tap <strong>Send</strong> in WhatsApp to finalize with Ruchika Creation.
                </p>
              </div>

              <div className="pt-4 w-full space-y-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setOrderPlacedSuccess(null);
                    setProfileInitialTab("orders");
                    setIsProfileOpen(true);
                  }}
                  className="w-full py-2.5 bg-[#FAF6F0] hover:bg-[#F8F3EC] text-[#641C22] border border-[#E6DDD3] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  View in Order History
                </button>
                <button
                  onClick={() => {
                    clearCart();
                    setOrderPlacedSuccess(null);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-2.5 bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Clear Bag & Continue
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
                href="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans tracking-wider uppercase font-semibold py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
              >
                SHOP COLLECTION
              </Link>
            </div>
          ) : (
            /* Cart Product Cards */
            cart.map((item) => {
              const itemPrice = item.variantPrice ?? item.product.price;
              const itemCode = item.variantCode || item.product.productCode;
              const itemImage = item.variantImage || item.product.primaryImage || item.product.image || "/images/kurti/kurti-page-181.jpg";
              const itemColor = item.color || item.product.color;

              return (
                <div
                  key={`${item.product.id}-${item.size}-${itemColor || "default"}`}
                  className="flex gap-3.5 p-3 sm:p-3.5 bg-white rounded-xl border border-[#E6DDD3] shadow-2xs"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-24 sm:w-22 sm:h-28 rounded-lg overflow-hidden bg-[#FAF6F0] shrink-0 border border-[#E6DDD3]">
                    <Image
                      src={itemImage}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm font-semibold text-[#241D1B] hover:text-[#641C22] truncate block leading-tight"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-[10px] font-sans uppercase tracking-wider text-[#817771] mt-0.5">
                          CODE: <span className="font-semibold text-[#514744]">{itemCode}</span>
                        </p>
                        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                          {itemColor && (
                            <span className="text-[10.5px] text-[#514744] bg-[#FAF6F0] px-1.5 py-0.5 rounded border border-[#E6DDD3]">
                              Color: {itemColor}
                            </span>
                          )}
                          <span className="text-[10.5px] text-[#514744] bg-[#FAF6F0] px-1.5 py-0.5 rounded border border-[#E6DDD3]">
                            Size: {item.size}
                          </span>
                          <span className="text-[11px] text-[#817771]">
                            ₹{itemPrice.toLocaleString("en-IN")} each
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
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
                            updateQuantity(item.product.id, item.size, item.quantity - 1, item.color)
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
                            updateQuantity(item.product.id, item.size, item.quantity + 1, item.color)
                          }
                          className="w-6 h-6 flex items-center justify-center text-[#514744] hover:bg-[#E6DDD3] text-[10px] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-[#641C22]">
                        ₹{(itemPrice * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer: Order Summary & WhatsApp CTA */}
        {cart.length > 0 && !orderPlacedSuccess && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#E6DDD3] space-y-3 shrink-0">
            {/* Customer Details Preview / Inline Form */}
            {showCustomerInput && !customer ? (
              <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E6DDD3] space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#241D1B]">
                  <span>Your Details (Saved in Browser)</span>
                  <button
                    onClick={() => setShowCustomerInput(false)}
                    className="text-[#817771] hover:text-[#641C22]"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E6DDD3] rounded-lg text-xs text-[#241D1B] focus:outline-hidden focus:border-[#641C22]"
                />
                <div className="flex items-center">
                  <span className="px-3 py-2 bg-[#F5EFE6] border border-r-0 border-[#E6DDD3] rounded-l-lg text-xs font-medium text-[#514744]">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="10-Digit Mobile (e.g. 7340368544)"
                    maxLength={10}
                    value={custMobile}
                    onChange={(e) =>
                      setCustMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    className="w-full px-3 py-2 bg-white border border-[#E6DDD3] rounded-r-lg text-xs text-[#241D1B] focus:outline-hidden focus:border-[#641C22]"
                  />
                </div>
                {formError && (
                  <p className="text-[11px] text-red-600">{formError}</p>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between text-xs pb-1 border-b border-[#E6DDD3]/60">
                <span className="text-[#817771]">Ordering as:</span>
                {customer ? (
                  <div className="flex items-center gap-1.5 font-medium text-emerald-800">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-700 text-xs" />
                    <span>{customer.name} (+91 {customer.mobile})</span>
                    <button
                      onClick={() => {
                        setProfileInitialTab("setup");
                        setIsProfileOpen(true);
                      }}
                      className="text-[#641C22] text-[10.5px] ml-1 hover:underline"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowCustomerInput(true)}
                    className="text-[#641C22] font-semibold hover:underline cursor-pointer"
                  >
                    + Enter Name & Mobile (Quick Save)
                  </button>
                )}
              </div>
            )}

            {/* Optional Custom Query / Special Note */}
            <div>
              {!showQueryBox ? (
                <button
                  type="button"
                  onClick={() => setShowQueryBox(true)}
                  className="text-[11.5px] text-[#641C22] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <FontAwesomeIcon icon={faCommentDots} className="text-xs" />
                  <span>+ Add a note or query for seller (optional)</span>
                </button>
              ) : (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[11px] text-[#817771]">
                    <span>Special Query / Notes for WhatsApp:</span>
                    <button
                      onClick={() => setShowQueryBox(false)}
                      className="text-red-700 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                  <input
                    type="text"
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    placeholder="e.g. Please confirm size M fit or custom delivery date"
                    className="w-full px-3 py-1.5 bg-[#FAF6F0] border border-[#E6DDD3] rounded-lg text-xs text-[#241D1B] focus:outline-hidden focus:border-[#641C22]"
                  />
                </div>
              )}
            </div>

            {/* Order Summary Panel */}
            <div className="space-y-1 text-xs">
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
              <div className="flex justify-between font-serif text-lg font-semibold text-[#241D1B] pt-1.5 border-t border-[#E6DDD3]">
                <span>TOTAL</span>
                <span className="text-[#641C22]">
                  ₹{estimatedTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Primary Action: ORDER ON WHATSAPP */}
            <button
              onClick={handleOrderOnWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0B3519] h-[50px] rounded-[8px] flex items-center justify-center gap-2.5 transition-colors duration-200 cursor-pointer shadow-xs text-xs sm:text-[13px] font-sans font-bold tracking-wide uppercase"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl text-[#0B3519]" />
              <span>SEND ORDER TO WHATSAPP</span>
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] text-[#817771]">
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[#B18A52]" />
                WhatsApp: {RUCHIKA_WHATSAPP_DISPLAY}
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
