"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleCheck,
  faMobileScreenButton,
  faBoxOpen,
  faArrowRight,
  faPen,
  faXmark,
  faClockRotateLeft,
  faRotateRight,
  faArrowLeft,
  faChevronRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { useShop, OrderRecord } from "@/context/ShopContext";
import { requestOtp, verifyOtp } from "@/services/otpService";

export default function ProfileModal() {
  const {
    customer,
    isProfileOpen,
    setIsProfileOpen,
    profileInitialTab,
    updateCustomer,
    logoutCustomer,
    orders,
    selectedOrder,
    setSelectedOrder,
  } = useShop();

  // Active view: "profile" | "verify" | "orders" | "order_details" | "edit"
  const [view, setView] = useState<
    "profile" | "verify" | "orders" | "order_details" | "edit"
  >("profile");

  // Step 1 Form state
  const [nameInput, setNameInput] = useState("");
  const [mobileInput, setMobileInput] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [demoCodeHint, setDemoCodeHint] = useState<string | null>(null);

  // 4-Digit OTP State: unified array of 4 digits
  const [otpDigits, setOtpDigits] = useState<string[]>(["", "", "", ""]);
  const otpInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Resend cooldown timer (30 seconds)
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  // Sync view when modal opens
  useEffect(() => {
    if (isProfileOpen) {
      setErrorMessage("");
      setSuccessMessage("");
      if (selectedOrder) {
        setView("order_details");
      } else if (!customer || !customer.mobileVerified) {
        setView("verify");
        setIsOtpSent(false);
        setOtpDigits(["", "", "", ""]);
      } else {
        setView(profileInitialTab === "orders" ? "orders" : "profile");
      }
    }
  }, [isProfileOpen, customer, profileInitialTab, selectedOrder]);

  if (!isProfileOpen) return null;

  // Handle Request OTP
  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const cleanMobile = mobileInput.replace(/\D/g, "");
    if (cleanMobile.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!nameInput.trim() && !customer) {
      setErrorMessage("Please enter your name");
      return;
    }

    setIsLoading(true);
    const res = await requestOtp(cleanMobile, nameInput || customer?.name);
    setIsLoading(false);

    if (res.success) {
      setIsOtpSent(true);
      setCooldown(30);
      setSuccessMessage(res.message || "OTP sent successfully");
      if (res.debugOtp) {
        setDemoCodeHint(res.debugOtp);
      }
      setTimeout(() => otpInputRefs[0].current?.focus(), 100);
    } else {
      setErrorMessage(res.error || "Failed to send OTP");
    }
  };

  // Handle OTP digit changes (auto-advance & backspace)
  const handleOtpChange = (index: number, val: string) => {
    const digit = val.replace(/\D/g, "").slice(-1);
    const updated = [...otpDigits];
    updated[index] = digit;
    setOtpDigits(updated);
    setErrorMessage("");

    // Auto-advance to next input
    if (digit && index < 3) {
      otpInputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpInputRefs[index - 1].current?.focus();
    }
  };

  // Handle Paste event across 4 boxes
  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (!pasted) return;
    const updated = ["", "", "", ""];
    for (let i = 0; i < pasted.length; i++) {
      updated[i] = pasted[i];
    }
    setOtpDigits(updated);
    const nextFocus = Math.min(pasted.length, 3);
    otpInputRefs[nextFocus].current?.focus();
  };

  // Handle Verify OTP
  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const fullOtp = otpDigits.join("");
    if (fullOtp.length < 4) {
      setErrorMessage("Please enter the complete 4-digit code");
      return;
    }

    const cleanMobile = mobileInput.replace(/\D/g, "");
    setIsLoading(true);
    setErrorMessage("");

    const res = await verifyOtp(cleanMobile, fullOtp, nameInput || customer?.name);
    setIsLoading(false);

    if (res.success && res.customer) {
      updateCustomer(res.customer);
      setSuccessMessage("Mobile verified successfully!");
      setIsOtpSent(false);
      setOtpDigits(["", "", "", ""]);
      setView("profile");
    } else {
      setErrorMessage(res.error || "Incorrect code. Please try again.");
    }
  };

  // Helper for Order Status styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "DELIVERED":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "SHIPPED":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "PREPARING":
      case "CONFIRMED":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "ORDER_REQUESTED":
      default:
        return "bg-[#F5EFE6] text-[#641C22] border-[#D8BF96]";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "ORDER_REQUESTED":
        return "Order Received (WhatsApp)";
      case "CONFIRMED":
        return "Confirmed";
      case "PREPARING":
        return "Preparing";
      case "SHIPPED":
        return "Shipped";
      case "DELIVERED":
        return "Delivered";
      default:
        return status;
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="absolute inset-0"
        onClick={() => setIsProfileOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[500px] bg-[#FCFAF7] rounded-[14px] shadow-2xl border border-[#E6DDD3] z-10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E6DDD3] bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            {view === "order_details" && (
              <button
                onClick={() => setView("orders")}
                className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] flex items-center justify-center cursor-pointer transition-colors mr-1"
                aria-label="Back to orders"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
              </button>
            )}
            {view === "orders" && customer && (
              <button
                onClick={() => setView("profile")}
                className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] flex items-center justify-center cursor-pointer transition-colors mr-1"
                aria-label="Back to profile"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
              </button>
            )}

            <div>
              <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#241D1B] tracking-tight">
                {view === "verify"
                  ? isOtpSent
                    ? "Verify Mobile Number"
                    : "Welcome to Ruchika Creation"
                  : view === "orders"
                  ? "My Order History"
                  : view === "order_details"
                  ? `Order #${selectedOrder?.id}`
                  : "Customer Profile"}
              </h2>
              <p className="text-[11px] font-sans text-[#817771]">
                {view === "verify"
                  ? isOtpSent
                    ? `OTP sent to +91 ${mobileInput.slice(-10)}`
                    : "Simple, password-free mobile verification"
                  : view === "orders"
                  ? `${orders.length} previous order${orders.length === 1 ? "" : "s"}`
                  : "Official Ruchika Creation Member Portal"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsProfileOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} className="text-sm" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {/* =========================================================
              VIEW 1: MOBILE OTP VERIFICATION (NO PASSWORD)
              ========================================================= */}
          {view === "verify" && (
            <div className="space-y-4">
              {!isOtpSent ? (
                /* Step 1: Name + Mobile Number */
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="text-center pb-2">
                    <div className="w-14 h-14 rounded-full bg-[#641C22]/10 border border-[#641C22]/20 text-[#641C22] mx-auto flex items-center justify-center mb-2.5">
                      <FontAwesomeIcon icon={faMobileScreenButton} className="text-xl" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#241D1B]">
                      Enter Your Details
                    </h3>
                    <p className="text-xs text-[#817771] mt-1 max-w-xs mx-auto">
                      Verify your mobile number once for direct WhatsApp ordering and order history. No password required.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#241D1B] uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-sm text-[#241D1B] placeholder-[#A39791] focus:outline-hidden focus:border-[#641C22] focus:ring-1 focus:ring-[#641C22] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#241D1B] uppercase tracking-wider mb-1">
                        Mobile Number
                      </label>
                      <div className="flex items-center">
                        <span className="px-3.5 py-2.5 bg-[#F5EFE6] border border-r-0 border-[#E6DDD3] rounded-l-lg text-xs font-medium text-[#514744]">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={10}
                          value={mobileInput}
                          onChange={(e) =>
                            setMobileInput(e.target.value.replace(/\D/g, "").slice(0, 10))
                          }
                          placeholder="98765 43210"
                          className="w-full px-3.5 py-2.5 bg-white border border-[#E6DDD3] rounded-r-lg text-sm text-[#241D1B] placeholder-[#A39791] focus:outline-hidden focus:border-[#641C22] focus:ring-1 focus:ring-[#641C22] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans tracking-wider uppercase font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    {isLoading ? (
                      <FontAwesomeIcon icon={faRotateRight} className="animate-spin text-sm" />
                    ) : (
                      <>
                        <span>SEND OTP</span>
                        <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Step 2: 4-Digit Single Verification Component */
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="text-center pb-1">
                    <h3 className="font-serif text-xl font-semibold text-[#241D1B]">
                      Verify Your Mobile
                    </h3>
                    <p className="text-xs text-[#817771] mt-1">
                      Enter the 4-digit code sent to{" "}
                      <span className="font-semibold text-[#241D1B]">
                        +91 {mobileInput.slice(-10)}
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsOtpSent(false);
                        setErrorMessage("");
                        setDemoCodeHint(null);
                      }}
                      className="text-[11.5px] text-[#641C22] font-semibold hover:underline mt-1 cursor-pointer"
                    >
                      Change Mobile Number
                    </button>
                  </div>

                  {/* Single 4-digit Verification Field */}
                  <div className="flex justify-center gap-2.5 sm:gap-3 my-3">
                    {otpDigits.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={otpInputRefs[idx]}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        onPaste={handleOtpPaste}
                        className="w-13 h-14 sm:w-14 sm:h-16 text-center font-serif text-2xl font-semibold bg-white border-2 border-[#E6DDD3] rounded-[8px] focus:outline-hidden focus:border-[#641C22] text-[#241D1B] transition-all shadow-2xs"
                      />
                    ))}
                  </div>

                  {demoCodeHint && (
                    <div className="p-2 rounded bg-amber-50 border border-amber-200 text-center text-[11px] text-amber-800">
                      Preview Test Code: <strong>{demoCodeHint}</strong>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 text-center">
                      {errorMessage}
                    </div>
                  )}

                  {successMessage && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 text-center">
                      {successMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans tracking-wider uppercase font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    {isLoading ? (
                      <FontAwesomeIcon icon={faRotateRight} className="animate-spin text-sm" />
                    ) : (
                      <>
                        <span>VERIFY & CONTINUE</span>
                        <FontAwesomeIcon icon={faCircleCheck} className="text-xs" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      disabled={cooldown > 0 || isLoading}
                      onClick={() => handleSendOtp()}
                      className="text-xs text-[#817771] hover:text-[#641C22] disabled:opacity-50 cursor-pointer font-medium"
                    >
                      {cooldown > 0
                        ? `Resend OTP in ${cooldown}s`
                        : "Didn't receive code? Resend OTP"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* =========================================================
              VIEW 2: CUSTOMER PROFILE (VERIFIED)
              ========================================================= */}
          {view === "profile" && customer && (
            <div className="space-y-4">
              {/* Profile Card */}
              <div className="p-4 bg-white rounded-xl border border-[#E6DDD3] shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#641C22] text-[#FCFAF7] flex items-center justify-center font-serif text-lg font-semibold shrink-0 shadow-xs">
                    {customer.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="overflow-hidden flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg font-semibold text-[#241D1B] truncate">
                        Hello, {customer.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[10.5px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[10px]" />
                        Verified
                      </span>
                    </div>
                    <p className="text-xs text-[#817771]">
                      Mobile: +91 {customer.mobile}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E6DDD3] flex items-center justify-between text-xs">
                  <div className="text-[#817771]">
                    Customer ID: <span className="font-mono text-[#241D1B]">{customer.id}</span>
                  </div>
                  <button
                    onClick={() => {
                      setNameInput(customer.name);
                      setMobileInput(customer.mobile);
                      setView("verify");
                      setIsOtpSent(false);
                    }}
                    className="text-[#641C22] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faPen} className="text-[10px]" />
                    <span>Change Mobile</span>
                  </button>
                </div>
              </div>

              {/* My Orders Section Card */}
              <div
                onClick={() => setView("orders")}
                className="p-4 bg-white hover:bg-[#F8F3EC]/50 transition-colors rounded-xl border border-[#E6DDD3] shadow-2xs flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF6F0] border border-[#E6DDD3] flex items-center justify-center text-[#641C22]">
                    <FontAwesomeIcon icon={faBoxOpen} className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#241D1B] group-hover:text-[#641C22] transition-colors">
                      My Orders
                    </h4>
                    <p className="text-xs text-[#817771]">
                      {orders.length} order{orders.length === 1 ? "" : "s"} recorded
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#641C22] font-semibold">
                  <span>View History</span>
                  <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
                </div>
              </div>

              {/* Verification & Trust Details */}
              <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E6DDD3] text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-800 font-medium">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-emerald-700" />
                  <span>Mobile Verified Customer</span>
                </div>
                <p className="text-[11px] text-[#817771]">
                  Your verified identity allows 1-click WhatsApp order generation and access to order history from this browser.
                </p>
              </div>

              {/* Sign Out / Switch User */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    logoutCustomer();
                    setView("verify");
                    setIsOtpSent(false);
                    setNameInput("");
                    setMobileInput("");
                  }}
                  className="text-xs text-red-700 hover:underline font-medium cursor-pointer"
                >
                  Sign Out / Switch Mobile Number
                </button>
              </div>
            </div>
          )}

          {/* =========================================================
              VIEW 3: ORDER HISTORY LIST
              ========================================================= */}
          {view === "orders" && (
            <div className="space-y-3">
              {orders.length === 0 ? (
                <div className="text-center py-10 space-y-2">
                  <FontAwesomeIcon icon={faClockRotateLeft} className="text-3xl text-[#D8BF96]" />
                  <p className="font-serif text-lg font-semibold text-[#241D1B]">
                    No Orders Yet
                  </p>
                  <p className="text-xs text-[#817771] max-w-xs mx-auto">
                    When you place an order via WhatsApp, your order details will be recorded here.
                  </p>
                </div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-4 bg-white rounded-xl border border-[#E6DDD3] shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-xs font-bold text-[#641C22]">
                          #{order.id}
                        </span>
                        <p className="text-[11px] text-[#817771]">{order.date}</p>
                      </div>

                      <span
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${getStatusBadge(
                          order.status
                        )}`}
                      >
                        {getStatusLabel(order.status)}
                      </span>
                    </div>

                    {/* Products preview */}
                    <div className="flex items-center gap-2 overflow-x-auto py-1">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="relative w-12 h-14 rounded-md overflow-hidden border border-[#E6DDD3] shrink-0 bg-[#FAF6F0]"
                          title={`${item.productName} (${item.size})`}
                        >
                          <Image
                            src={item.productImage}
                            alt={item.productName}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                      <span className="text-xs text-[#817771] pl-1">
                        {order.items.reduce((s, i) => s + i.quantity, 0)} item
                        {order.items.reduce((s, i) => s + i.quantity, 0) > 1 ? "s" : ""}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-[#E6DDD3] flex items-center justify-between">
                      <div>
                        <span className="text-[10.5px] text-[#817771] block">Total</span>
                        <span className="font-serif text-base font-semibold text-[#241D1B]">
                          ₹{order.total.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedOrder(order);
                          setView("order_details");
                        }}
                        className="px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#641C22] text-[#641C22] hover:text-white border border-[#E6DDD3] rounded-md text-xs font-medium transition-colors cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* =========================================================
              VIEW 4: ORDER DETAILS
              ========================================================= */}
          {view === "order_details" && selectedOrder && (
            <div className="space-y-4">
              <div className="p-3.5 bg-white rounded-xl border border-[#E6DDD3] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#817771]">Order Placed</span>
                  <span className="font-medium text-[#241D1B]">{selectedOrder.date}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#817771]">Customer Name</span>
                  <span className="font-medium text-[#241D1B]">{selectedOrder.customerName}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#817771]">Customer Mobile</span>
                  <span className="font-medium text-[#241D1B]">+91 {selectedOrder.customerMobile}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#817771]">Order Status</span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getStatusBadge(
                      selectedOrder.status
                    )}`}
                  >
                    {getStatusLabel(selectedOrder.status)}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-[#241D1B] uppercase tracking-wider">
                  Order Items ({selectedOrder.items.length})
                </h4>
                {selectedOrder.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-[#E6DDD3] flex items-center gap-3"
                  >
                    <div className="relative w-14 h-18 rounded-md overflow-hidden border border-[#E6DDD3] shrink-0 bg-[#FAF6F0]">
                      <Image
                        src={item.productImage}
                        alt={item.productName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif text-sm font-semibold text-[#241D1B] truncate">
                        {item.productName}
                      </h5>
                      <p className="text-xs text-[#817771]">
                        Size: <span className="font-medium text-[#241D1B]">{item.size}</span> | Qty: {item.quantity}
                      </p>
                      <p className="text-xs font-semibold text-[#641C22] mt-1">
                        ₹{(item.unitPrice * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E6DDD3] space-y-1.5 text-xs">
                <div className="flex justify-between text-[#514744]">
                  <span>Subtotal</span>
                  <span>₹{selectedOrder.subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-[#514744]">
                  <span>Shipping</span>
                  <span>
                    {selectedOrder.shipping === 0 ? "FREE" : `₹${selectedOrder.shipping}`}
                  </span>
                </div>
                <div className="flex justify-between font-serif text-base font-semibold text-[#241D1B] pt-2 border-t border-[#E6DDD3]">
                  <span>Total</span>
                  <span className="text-[#641C22]">
                    ₹{selectedOrder.total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
