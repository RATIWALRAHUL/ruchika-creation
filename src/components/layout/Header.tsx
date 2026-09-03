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
} from "@fortawesome/free-solid-svg-icons";
import { useShop } from "@/context/ShopContext";
import BrandLogo from "@/components/ui/BrandLogo";

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
      if (window.scrollY > 25) {
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
            ? "bg-[#FCFAF7]/97 backdrop-blur-md shadow-[0_2px_12px_rgba(60,35,30,0.05)] border-[#E6DDD3] py-3 h-[68px] sm:h-[72px]"
            : "bg-[#FCFAF7] border-[#E6DDD3] py-4 sm:py-5 h-[76px] sm:h-[82px]"
        } flex items-center`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Left: Mobile Menu Toggle & Official Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} className="text-lg" />
            </button>

            {/* Official Ruchika Creation Vector Logo */}
            <BrandLogo variant="light" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <Link
                  href={link.href}
                  className={`text-[12.5px] font-sans font-medium tracking-[0.06em] uppercase transition-colors duration-200 flex items-center gap-1 ${
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

          {/* Right Action Icons: Search, Customer Profile, Wishlist, Cart */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Collections"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[15px]" />
            </button>

            {/* Customer Profile Icon */}
            <div className="relative group">
              <button
                onClick={() => {
                  setProfileInitialTab(customer?.mobileVerified ? "profile" : "verify");
                  setIsProfileOpen(true);
                }}
                aria-label={
                  customer?.mobileVerified
                    ? `Profile: ${customer.name}`
                    : "Customer Profile & Verification"
                }
                className="hidden sm:flex relative w-9 h-9 rounded-full items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faUser} className="text-[15px]" />
                {customer?.mobileVerified && (
                  <span
                    className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-600 border-2 border-[#FCFAF7]"
                    title="Mobile Verified"
                  />
                )}
              </button>

              {/* Profile Hover Card */}
              {customer?.mobileVerified && (
                <div className="absolute top-full right-0 pt-2 w-52 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E6DDD3] p-3 text-xs space-y-2">
                    <div className="border-b border-[#E6DDD3]/80 pb-2">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-[10.5px]">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[9px]" />
                        <span>Verified Customer</span>
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
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faHeart} className="text-[15px]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#641C22] text-white text-[9.5px] font-sans font-semibold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Bag"
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-[16px]" />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#641C22] text-white text-[9.5px] font-sans font-semibold flex items-center justify-center">
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

          <div className="relative w-[85%] max-w-sm bg-[#FCFAF7] h-full max-h-[100dvh] shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="p-4 border-b border-[#E6DDD3] flex items-center justify-between bg-white shrink-0">
              <BrandLogo variant="light" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faXmark} className="text-base" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3 overscroll-contain">
              {/* Customer Profile & Verification Portal Bar */}
              <div className="pb-3 border-b border-[#E6DDD3]">
                {customer?.mobileVerified ? (
                  <div className="p-3 bg-[#F8F3EC] rounded-xl border border-[#E6DDD3] space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#641C22] text-white flex items-center justify-center font-serif text-sm font-semibold shrink-0">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-xs text-[#241D1B] truncate">
                            {customer.name}
                          </p>
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-emerald-700 text-[10px]"
                          />
                        </div>
                        <p className="text-[10.5px] text-[#817771] truncate">
                          +91 {customer.mobile}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#E6DDD3]/70 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setProfileInitialTab("orders");
                          setIsProfileOpen(true);
                        }}
                        className="text-xs text-[#641C22] font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faBoxOpen} className="text-[11px]" />
                        <span>My Orders ({orders.length})</span>
                      </button>

                      <button
                        onClick={() => {
                          logoutCustomer();
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-xs text-red-700 hover:underline cursor-pointer"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setProfileInitialTab("verify");
                      setIsProfileOpen(true);
                    }}
                    className="w-full py-2.5 px-4 bg-[#641C22] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#4B151A] transition-colors cursor-pointer shadow-xs"
                  >
                    <FontAwesomeIcon icon={faUser} className="text-xs" />
                    <span>Customer Profile / Verify Mobile</span>
                  </button>
                )}
              </div>

              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-[#E6DDD3]/50 pb-2">
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-sans font-medium text-[#241D1B] hover:text-[#641C22] py-1"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-3 mt-1 space-y-1.5 border-l-2 border-[#B18A52]/40">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-xs text-[#817771] hover:text-[#641C22] py-0.5"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-2 text-xs text-[#817771]">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-[#B18A52]" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#B18A52]" />
                  <span>care@ruchikacreation.com</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-[#E6DDD3] shrink-0">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full bg-[#641C22] text-white text-xs font-sans tracking-wider uppercase font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={faBagShopping} />
                <span>View Bag ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
