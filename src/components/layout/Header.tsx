"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import BrandLogo from "@/components/ui/BrandLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faBagShopping,
  faBars,
  faXmark,
  faChevronDown,
  faPhone,
  faEnvelope,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const {
    cartCount,
    setIsCartOpen,
    wishlistCount,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsAuthModalOpen,
    setAuthMode,
    user,
    logout,
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

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Kurtis", href: "#collections" },
    {
      name: "Collections",
      href: "#collections",
      hasDropdown: true,
      subItems: [
        { name: "Everyday Kurtis", href: "#collections" },
        { name: "Festive Edit", href: "#collections" },
        { name: "Embroidered Collection", href: "#collections" },
        { name: "New Arrivals", href: "#new-arrivals" },
      ],
    },
    { name: "Best Sellers", href: "#bestsellers" },
    { name: "About Us", href: "#heritage" },
    { name: "Contact Us", href: "#footer" },
  ];

  return (
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
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] transition-colors focus:outline-none"
            aria-label="Open mobile menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-base" />
          </button>

          <BrandLogo variant="light" />
        </div>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => (
            <div key={item.name} className="relative group py-2">
              <Link
                href={item.href}
                className={`relative text-[11.5px] xl:text-[12px] font-sans font-semibold tracking-[0.08em] uppercase transition-colors duration-200 flex items-center gap-1.5 ${
                  item.active
                    ? "text-[#641C22]"
                    : "text-[#241D1B] hover:text-[#641C22]"
                }`}
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[8px] text-[#817771] group-hover:text-[#641C22] transition-transform duration-200 group-hover:rotate-180"
                  />
                )}

                {/* Thin Burgundy Active Underline */}
                {item.active && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#641C22] rounded-full"></span>
                )}
              </Link>

              {/* Collections Dropdown */}
              {item.hasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-lg border border-[#E6DDD3] p-2 space-y-0.5">
                    {item.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-3 py-1.5 text-xs font-sans text-[#514744] hover:text-[#641C22] hover:bg-[#F8F3EC] rounded-lg transition-colors"
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

        {/* Right: Utility Icons (Font Awesome 16–20px) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search articles"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[15px]" />
          </button>

          {/* Account / Member Profile */}
          <div className="relative group">
            <button
              onClick={() => {
                if (!user) {
                  setAuthMode("login");
                  setIsAuthModalOpen(true);
                }
              }}
              aria-label={user ? `Account: ${user.name}` : "Sign In / My Account"}
              className="hidden sm:flex relative w-9 h-9 rounded-full items-center justify-center text-[#241D1B] hover:text-[#641C22] hover:bg-[#F8F3EC] transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faUser} className="text-[15px]" />
              {user && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-600 border-2 border-[#FCFAF7]"></span>
              )}
            </button>

            {/* User Dropdown Menu when logged in */}
            {user && (
              <div className="absolute top-full right-0 pt-2 w-52 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-[#E6DDD3] p-3 text-xs">
                  <div className="border-b border-[#E6DDD3]/80 pb-2 mb-2">
                    <p className="text-[10px] text-[#817771] uppercase tracking-wider font-semibold">
                      Signed in as
                    </p>
                    <p className="font-semibold text-[#241D1B] truncate">
                      {user.name}
                    </p>
                    <p className="text-[11px] text-[#817771] truncate">
                      {user.email}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => alert("Orders: No recent orders.")}
                      className="w-full text-left py-1.5 px-2 hover:bg-[#F8F3EC] rounded text-[#514744] hover:text-[#641C22] transition-colors cursor-pointer"
                    >
                      My Orders
                    </button>
                    <button
                      onClick={() => setIsWishlistOpen(true)}
                      className="w-full text-left py-1.5 px-2 hover:bg-[#F8F3EC] rounded text-[#514744] hover:text-[#641C22] transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>My Saved Kurtis</span>
                      <span className="text-[10px] font-semibold bg-[#F8F3EC] px-1.5 py-0.5 rounded text-[#641C22]">
                        {wishlistCount}
                      </span>
                    </button>
                    <button
                      onClick={logout}
                      className="w-full text-left py-1.5 px-2 hover:bg-red-50 text-red-700 rounded transition-colors cursor-pointer flex items-center gap-2 pt-2 border-t border-[#E6DDD3]/60"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="text-xs"
                      />
                      <span>Sign Out</span>
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="absolute inset-0"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-4/5 max-w-sm bg-[#FCFAF7] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="p-4 border-b border-[#E6DDD3] flex items-center justify-between bg-white">
              <BrandLogo variant="light" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-[#F8F3EC] text-[#514744] flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faXmark} className="text-base" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {/* Mobile Member Portal Bar */}
              <div className="pb-3 border-b border-[#E6DDD3]">
                {user ? (
                  <div className="p-3 bg-[#F8F3EC] rounded-xl border border-[#E6DDD3]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#641C22] text-white flex items-center justify-center font-serif text-sm font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-semibold text-xs text-[#241D1B] truncate">
                          {user.name}
                        </p>
                        <p className="text-[10.5px] text-[#817771] truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="mt-2.5 text-xs text-red-700 font-medium hover:underline flex items-center gap-1.5 cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-[10px]" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setAuthMode("login");
                      setIsAuthModalOpen(true);
                    }}
                    className="w-full py-2.5 px-4 bg-[#641C22] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#4B151A] transition-colors cursor-pointer shadow-xs"
                  >
                    <FontAwesomeIcon icon={faUser} className="text-xs" />
                    <span>Sign In / Register</span>
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

            <div className="p-4 bg-white border-t border-[#E6DDD3]">
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
    </header>
  );
}
