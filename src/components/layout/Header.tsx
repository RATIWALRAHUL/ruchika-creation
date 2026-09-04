"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faBars,
  faXmark,
  faUser,
  faChevronDown,
  faPhone,
  faEnvelope,
  faCircleCheck,
  faBoxOpen,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useShop } from "@/context/ShopContext";
import BrandLogo from "@/components/ui/BrandLogo";
import { RUCHIKA_WHATSAPP_DISPLAY } from "@/config/whatsapp";

export default function Header() {
  const {
    cartCount,
    setIsCartOpen,
    wishlistCount,
    setIsWishlistOpen,
    setIsSearchOpen,
    customer,
    setIsProfileOpen,
    setProfileInitialTab,
    orders,
    logoutCustomer,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open so background never scrolls
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "New Arrivals", href: "#new-arrivals" },
    {
      name: "Collections",
      href: "#collections",
      hasDropdown: true,
      subItems: [
        { name: "Everyday Kurtis", href: "#collections" },
        { name: "Festive Edit", href: "#collections" },
        { name: "Embroidered Collection", href: "#collections" },
        { name: "Chikankari Edit", href: "#collections" },
      ],
    },
    { name: "Bestsellers", href: "#bestsellers" },
    { name: "Our Heritage", href: "#heritage" },
    { name: "About Us", href: "#heritage" },
    { name: "Contact Us", href: "#footer" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-[#FCFAF7]/98 backdrop-blur-md shadow-[0_2px_14px_rgba(60,35,30,0.06)] border-[#E6DDD3] py-2 h-[60px] sm:h-[68px]"
            : "bg-[#FCFAF7] border-[#E6DDD3] py-2.5 sm:py-3.5 h-[66px] sm:h-[76px]"
        } flex items-center`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Left: Mobile Menu Toggle & Official Logo */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <FontAwesomeIcon icon={faBars} className="text-lg sm:text-[21px]" />
            </button>

            {/* Official Ruchika Creation Vector Logo */}
            <BrandLogo variant="light" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <Link
                  href={link.href}
                  className={`text-[12.5px] font-sans font-medium tracking-[0.06em] uppercase transition-colors duration-200 flex items-center gap-1.5 ${
                    link.active
                      ? "text-[#641C22] font-semibold"
                      : "text-[#514744] hover:text-[#641C22]"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-[9px] text-[#A39791] group-hover:text-[#641C22] group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 w-52 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-[#E6DDD3] p-2 space-y-1">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-2 text-xs font-sans text-[#514744] hover:text-[#641C22] hover:bg-[#F8F3EC] rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Icons: Search, Customer Profile (desktop), Wishlist, Cart */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Collections"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] active:scale-95 transition-all cursor-pointer"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[16.5px] sm:text-[18px]" />
            </button>

            {/* Customer Profile Icon - Desktop only to keep mobile header clean and uncrowded */}
            <div className="hidden sm:block relative group">
              <button
                onClick={() => {
                  setProfileInitialTab(customer ? "profile" : ("setup" as any));
                  setIsProfileOpen(true);
                }}
                aria-label={
                  customer
                    ? `Profile: ${customer.name}`
                    : "Customer Profile"
                }
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] active:scale-95 transition-all cursor-pointer"
              >
                <FontAwesomeIcon icon={faUser} className="text-[17px] sm:text-[18px]" />
                {customer && (
                  <span
                    className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-600 border-2 border-[#FCFAF7]"
                    title="Active Customer Profile"
                  />
                )}
              </button>

              {/* Profile Hover Card (Desktop) */}
              {customer && (
                <div className="absolute top-full right-0 pt-2 w-56 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E6DDD3] p-3 text-xs space-y-2">
                    <div className="border-b border-[#E6DDD3]/80 pb-2">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-[10.5px]">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[9px]" />
                        <span>Saved Customer</span>
                      </div>
                      <p className="font-semibold text-[#241D1B] truncate">
                        {customer.name}
                      </p>
                      <p className="text-[11px] text-[#817771] truncate">
                        +91 {customer.mobile}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          setProfileInitialTab("orders");
                          setIsProfileOpen(true);
                        }}
                        className="w-full text-left py-1.5 px-2 hover:bg-[#F8F3EC] rounded text-[#514744] hover:text-[#641C22] transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>My Orders</span>
                        <span className="text-[10px] font-semibold bg-[#FAF6F0] px-1.5 py-0.5 rounded text-[#641C22] border border-[#E6DDD3]">
                          {orders.length}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileInitialTab("query");
                          setIsProfileOpen(true);
                        }}
                        className="w-full text-left py-1.5 px-2 hover:bg-emerald-50 rounded text-emerald-800 transition-colors cursor-pointer font-medium"
                      >
                        Ask Query on WhatsApp
                      </button>

                      <button
                        onClick={() => {
                          setProfileInitialTab("profile");
                          setIsProfileOpen(true);
                        }}
                        className="w-full text-left py-1.5 px-2 hover:bg-[#F8F3EC] rounded text-[#514744] hover:text-[#641C22] transition-colors cursor-pointer"
                      >
                        View Profile Details
                      </button>

                      <button
                        onClick={logoutCustomer}
                        className="w-full text-left py-1.5 px-2 hover:bg-red-50 text-red-700 rounded transition-colors cursor-pointer pt-2 border-t border-[#E6DDD3]/60"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="View Wishlist"
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] active:scale-95 transition-all cursor-pointer"
            >
              <FontAwesomeIcon icon={faHeart} className="text-[17px] sm:text-[18.5px]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 rounded-full bg-[#641C22] text-[#FCFAF7] text-[9.5px] font-sans font-bold flex items-center justify-center border border-white shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Bag"
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] active:scale-95 transition-all cursor-pointer"
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-[18px] sm:text-[19.5px]" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 rounded-full bg-[#641C22] text-[#FCFAF7] text-[9.5px] font-sans font-bold flex items-center justify-center border border-white shadow-xs">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - Independent Top-Level Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex lg:hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="absolute inset-0"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-[88%] max-w-sm bg-[#FCFAF7] h-full max-h-[100dvh] shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="p-4 sm:p-5 border-b border-[#E6DDD3] flex items-center justify-between bg-white shrink-0">
              <BrandLogo variant="light" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-[#F8F3EC] text-[#514744] active:scale-95 flex items-center justify-center cursor-pointer transition-all"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faXmark} className="text-lg" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 overscroll-contain">
              {/* Customer Profile & Portal Bar */}
              <div className="pb-3 border-b border-[#E6DDD3]">
                {customer ? (
                  <div className="p-3.5 bg-white rounded-xl border border-[#E6DDD3] space-y-2.5 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#641C22] text-white flex items-center justify-center font-serif text-base font-semibold shrink-0 shadow-xs">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="overflow-hidden flex-1">
                        <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-sm text-[#241D1B] truncate">
                            {customer.name}
                          </p>
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-emerald-700 text-xs"
                          />
                        </div>
                        <p className="text-xs text-[#817771] truncate">
                          +91 {customer.mobile}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-[#E6DDD3] grid grid-cols-2 gap-2 text-xs">
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setProfileInitialTab("orders");
                          setIsProfileOpen(true);
                        }}
                        className="py-1.5 px-2.5 bg-[#FAF6F0] rounded-lg text-[#641C22] font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#F8F3EC]"
                      >
                        <FontAwesomeIcon icon={faBoxOpen} className="text-xs" />
                        <span>Orders ({orders.length})</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setProfileInitialTab("query");
                          setIsProfileOpen(true);
                        }}
                        className="py-1.5 px-2.5 bg-emerald-50 rounded-lg text-emerald-800 font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-emerald-100"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} className="text-xs text-emerald-700" />
                        <span>Ask Query</span>
                      </button>
                    </div>

                    <div className="pt-1 text-center">
                      <button
                        onClick={() => {
                          logoutCustomer();
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-[11px] text-red-700 hover:underline cursor-pointer font-medium"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setProfileInitialTab("setup" as any);
                      setIsProfileOpen(true);
                    }}
                    className="w-full py-3 px-4 bg-[#641C22] text-white text-xs font-sans tracking-wider uppercase font-semibold rounded-xl flex items-center justify-center gap-2.5 hover:bg-[#4B151A] transition-colors cursor-pointer shadow-xs"
                  >
                    <FontAwesomeIcon icon={faUser} className="text-sm" />
                    <span>Customer Profile / Login</span>
                  </button>
                )}
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-[#E6DDD3]/50 pb-1">
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between text-[14.5px] font-sans font-medium text-[#241D1B] hover:text-[#641C22] py-2 transition-colors"
                    >
                      <span>{link.name}</span>
                      <FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-[#A39791]" />
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-3 mb-2 space-y-1 border-l-2 border-[#B18A52]/40">
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-[12.5px] text-[#817771] hover:text-[#641C22] py-1 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp & Contact Help Box */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/917340368544?text=Hello%20Ruchika%20Creation%2C%20I%20have%20a%20query%20about%20your%20products.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3 hover:bg-emerald-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-emerald-950 leading-tight">
                      Chat on WhatsApp
                    </p>
                    <p className="text-[11px] text-emerald-800 truncate">
                      {RUCHIKA_WHATSAPP_DISPLAY}
                    </p>
                  </div>
                </a>

                <div className="pt-3 space-y-2 text-xs text-[#817771]">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-[#B18A52]" />
                    <span>{RUCHIKA_WHATSAPP_DISPLAY}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#B18A52]" />
                    <span>care@ruchikacreation.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom CTA */}
            <div className="p-4 bg-white border-t border-[#E6DDD3] shrink-0">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full bg-[#641C22] text-white text-xs font-sans tracking-wider uppercase font-semibold py-3 rounded-xl flex items-center justify-center gap-2.5 cursor-pointer shadow-xs hover:bg-[#4B151A] transition-colors"
              >
                <FontAwesomeIcon icon={faBagShopping} className="text-sm" />
                <span>View Bag ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
