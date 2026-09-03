"use client";

import React, { useState, useEffect } from "react";
import { useShop } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faEye,
  faEyeSlash,
  faArrowRight,
  faShieldHalved,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, authMode, setAuthMode, login } =
    useShop();

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);
  const [otpMode, setOtpMode] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = "hidden";
      setError("");
    } else {
      document.body.style.overflow = "";
    }
  }, [isAuthModalOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isAuthModalOpen) {
        setIsAuthModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAuthModalOpen, setIsAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email or mobile number.");
      return;
    }
    if (!otpMode && !password) {
      setError("Please enter your password.");
      return;
    }
    if (otpMode && !otpCode) {
      setError("Please enter the 4-digit OTP sent to your phone.");
      return;
    }

    // Success simulation
    const displayName = email.includes("@")
      ? email.split("@")[0].replace(/[._]/g, " ")
      : "Guest User";
    login(
      displayName.charAt(0).toUpperCase() + displayName.slice(1),
      email,
      phone
    );
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Please provide your name and email address.");
      return;
    }
    if (!password) {
      setError("Please create a password (minimum 6 characters).");
      return;
    }

    login(name, email, phone);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your registered email or phone.");
      return;
    }
    alert(
      `Password reset instructions have been sent to ${email}. Please check your inbox or SMS.`
    );
    setAuthMode("login");
  };

  const fillDemoUser = () => {
    login("Pooja Sharma", "pooja.sharma@example.com", "+91 98765 43210");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={() => setIsAuthModalOpen(false)}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[440px] bg-[#FCFAF7] rounded-[16px] shadow-2xl border border-[#E6DDD3] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 text-[#514744] hover:text-[#241D1B] hover:bg-[#F8F3EC] flex items-center justify-center transition-colors cursor-pointer border border-[#E6DDD3]/50"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>

        {/* Brand Header */}
        <div className="p-6 pb-4 bg-[#F8F3EC] border-b border-[#E6DDD3]/80 text-center">
          {/* Subtle Monogram Crest */}
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#B18A52]/60 bg-[#641C22] text-[#FCFAF7] shadow-xs mb-2.5">
            <span className="font-serif font-semibold text-lg tracking-tight">
              RC
            </span>
          </div>

          <h2 className="font-serif text-2xl font-medium text-[#241D1B] tracking-tight">
            Ruchika Creation
          </h2>
          <p className="text-[11.5px] font-sans text-[#817771] tracking-[0.14em] uppercase font-medium mt-0.5">
            Exclusive Member Access
          </p>

          {/* Mode Switcher Tabs */}
          {authMode !== "forgot" && (
            <div className="grid grid-cols-2 mt-5 p-1 bg-white/80 rounded-lg border border-[#E6DDD3]">
              <button
                type="button"
                onClick={() => {
                  setAuthMode("login");
                  setError("");
                }}
                className={`py-2 text-[12px] font-sans font-semibold tracking-wider uppercase rounded-md transition-all cursor-pointer ${
                  authMode === "login"
                    ? "bg-[#641C22] text-white shadow-xs"
                    : "text-[#514744] hover:text-[#241D1B]"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode("signup");
                  setError("");
                }}
                className={`py-2 text-[12px] font-sans font-semibold tracking-wider uppercase rounded-md transition-all cursor-pointer ${
                  authMode === "signup"
                    ? "bg-[#641C22] text-white shadow-xs"
                    : "text-[#514744] hover:text-[#241D1B]"
                }`}
              >
                Create Account
              </button>
            </div>
          )}
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-7 max-h-[calc(85vh-160px)] overflow-y-auto no-scrollbar">
          {error && (
            <div className="mb-4 p-3 bg-red-50/80 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
              <span>{error}</span>
            </div>
          )}

          {/* ========================================================
              1. SIGN IN VIEW
              ======================================================== */}
          {authMode === "login" && (
            <form onSubmit={handleSignIn} className="space-y-4">
              {/* Email / Mobile Input */}
              <div className="space-y-1">
                <label className="block text-[11.5px] font-sans font-semibold uppercase tracking-wider text-[#241D1B]">
                  Email or Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#817771]">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                  </div>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com or 98765 43210"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-xs sm:text-[13px] text-[#241D1B] placeholder:text-[#817771]/60 focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40 focus:border-[#641C22]"
                  />
                </div>
              </div>

              {/* Password or OTP */}
              {!otpMode ? (
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-[11.5px] font-sans font-semibold uppercase tracking-wider text-[#241D1B]">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setAuthMode("forgot")}
                      className="text-[11px] font-sans text-[#641C22] hover:underline cursor-pointer"
                    >
                      Forgot?
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#817771]">
                      <FontAwesomeIcon icon={faLock} className="text-xs" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-10 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-xs sm:text-[13px] text-[#241D1B] placeholder:text-[#817771]/60 focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40 focus:border-[#641C22]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#817771] hover:text-[#241D1B] cursor-pointer"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="text-xs"
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-[11.5px] font-sans font-semibold uppercase tracking-wider text-[#241D1B]">
                      Enter 4-Digit OTP
                    </label>
                    {!otpSent ? (
                      <button
                        type="button"
                        onClick={() => {
                          setOtpSent(true);
                          setOtpCode("7492");
                        }}
                        className="text-[11px] font-sans text-[#641C22] font-semibold hover:underline cursor-pointer"
                      >
                        Send OTP
                      </button>
                    ) : (
                      <span className="text-[10.5px] text-emerald-700 font-medium">
                        OTP sent (Auto-filled: 7492)
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    maxLength={4}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="7 4 9 2"
                    className="w-full tracking-[0.5em] text-center font-mono py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-base text-[#241D1B] focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40"
                  />
                </div>
              )}

              {/* Remember Me & OTP Switcher */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-[#514744] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-[#E6DDD3] text-[#641C22] focus:ring-[#641C22]"
                  />
                  <span>Keep me signed in</span>
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setOtpMode(!otpMode);
                    setError("");
                  }}
                  className="text-[11.5px] font-sans text-[#8A6A42] hover:text-[#641C22] font-medium cursor-pointer"
                >
                  {otpMode ? "Sign in with password" : "Sign in with OTP"}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#641C22] hover:bg-[#4B151A] text-white text-[12.5px] font-sans tracking-[0.06em] uppercase font-semibold h-[48px] rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-xs cursor-pointer mt-2"
              >
                <span>SIGN IN</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
              </button>

              {/* Demo Auto-Fill (Instant 1-click test) */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={fillDemoUser}
                  className="text-[11.5px] font-sans text-[#8A6A42] hover:text-[#641C22] underline cursor-pointer"
                >
                  Quick Demo: Sign In as Pooja Sharma
                </button>
              </div>

              {/* Trust Badge */}
              <div className="pt-3 border-t border-[#E6DDD3]/60 flex items-center justify-center gap-2 text-[11px] text-[#817771]">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[#B18A52]" />
                <span>256-Bit Encrypted Secure Authentication</span>
              </div>
            </form>
          )}

          {/* ========================================================
              2. CREATE ACCOUNT (SIGN UP) VIEW
              ======================================================== */}
          {authMode === "signup" && (
            <form onSubmit={handleSignUp} className="space-y-3.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="block text-[11.5px] font-sans font-semibold uppercase tracking-wider text-[#241D1B]">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#817771]">
                    <FontAwesomeIcon icon={faUser} className="text-xs" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Pooja Sharma"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-xs sm:text-[13px] text-[#241D1B] placeholder:text-[#817771]/60 focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40 focus:border-[#641C22]"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="block text-[11.5px] font-sans font-semibold uppercase tracking-wider text-[#241D1B]">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#817771]">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pooja@example.com"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-xs sm:text-[13px] text-[#241D1B] placeholder:text-[#817771]/60 focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40 focus:border-[#641C22]"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="space-y-1">
                <label className="block text-[11.5px] font-sans font-semibold uppercase tracking-wider text-[#241D1B]">
                  Mobile Number (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#817771]">
                    <FontAwesomeIcon icon={faPhone} className="text-xs" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-xs sm:text-[13px] text-[#241D1B] placeholder:text-[#817771]/60 focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40 focus:border-[#641C22]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="block text-[11.5px] font-sans font-semibold uppercase tracking-wider text-[#241D1B]">
                  Create Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#817771]">
                    <FontAwesomeIcon icon={faLock} className="text-xs" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full pl-9 pr-10 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-xs sm:text-[13px] text-[#241D1B] placeholder:text-[#817771]/60 focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40 focus:border-[#641C22]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#817771] hover:text-[#241D1B] cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-xs"
                    />
                  </button>
                </div>
              </div>

              {/* Newsletter Opt-in */}
              <label className="flex items-start gap-2 text-[11.5px] text-[#514744] cursor-pointer pt-1 leading-snug">
                <input
                  type="checkbox"
                  checked={newsletterOptIn}
                  onChange={(e) => setNewsletterOptIn(e.target.checked)}
                  className="rounded border-[#E6DDD3] text-[#641C22] focus:ring-[#641C22] mt-0.5 shrink-0"
                />
                <span>
                  Notify me of exclusive festive launches, artisan drops, and VIP
                  promotions.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#641C22] hover:bg-[#4B151A] text-white text-[12.5px] font-sans tracking-[0.06em] uppercase font-semibold h-[48px] rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-xs cursor-pointer mt-3"
              >
                <span>CREATE ACCOUNT</span>
                <FontAwesomeIcon icon={faCheck} className="text-[11px]" />
              </button>

              <p className="text-[10.5px] text-[#817771] text-center leading-normal pt-1">
                By registering, you agree to Ruchika Creation&apos;s{" "}
                <span className="text-[#641C22] underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#641C22] underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
            </form>
          )}

          {/* ========================================================
              3. FORGOT PASSWORD VIEW
              ======================================================== */}
          {authMode === "forgot" && (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="text-center mb-2">
                <h3 className="font-serif text-xl font-medium text-[#241D1B]">
                  Reset Your Password
                </h3>
                <p className="text-xs text-[#817771] mt-1 leading-relaxed">
                  Enter your registered email address or mobile number to receive
                  a verification code.
                </p>
              </div>

              <div className="space-y-1">
                <label className="block text-[11.5px] font-sans font-semibold uppercase tracking-wider text-[#241D1B]">
                  Registered Email or Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#817771]">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                  </div>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#E6DDD3] rounded-lg text-xs sm:text-[13px] text-[#241D1B] focus:outline-none focus:ring-2 focus:ring-[#B18A52]/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#641C22] hover:bg-[#4B151A] text-white text-[12.5px] font-sans tracking-[0.06em] uppercase font-semibold h-[46px] rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-xs cursor-pointer"
              >
                <span>SEND RESET CODE</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("login");
                    setError("");
                  }}
                  className="text-xs text-[#641C22] font-medium hover:underline cursor-pointer"
                >
                  ← Back to Sign In
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
