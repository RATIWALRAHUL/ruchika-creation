"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faMagnifyingGlass, faTruck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { RUCHIKA_WHATSAPP_NUMBER } from "@/config/whatsapp";
import { useShop } from "@/context/ShopContext";

export default function TrackOrderPage() {
  const { orders } = useShop();
  const [orderRef, setOrderRef] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const clean = orderRef.trim().toUpperCase();
    const found = orders.find((o) => o.id.toUpperCase() === clean);
    setSearchResult(found || null);
  };

  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Track Order</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            DELIVERY STATUS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Track Your Order
          </h1>
          <p className="text-xs sm:text-sm text-[#817771]">
            Enter your order reference code (e.g. RC-ORD-20260907-001 or RC10001) below.
          </p>
        </div>

        {/* Order Lookup Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] shadow-2xs space-y-6">
          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="block text-xs font-sans font-semibold text-[#241D1B] uppercase tracking-wider mb-2">
                Order Reference / Number:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={orderRef}
                  onChange={(e) => setOrderRef(e.target.value)}
                  placeholder="e.g. RC10001 or RC-ORD-..."
                  className="flex-1 bg-[#FCFAF7] border border-[#E6DDD3] rounded-xl px-4 py-3 text-xs sm:text-sm font-mono text-[#241D1B] focus:outline-none focus:border-[#641C22]"
                />
                <button
                  type="submit"
                  className="bg-[#641C22] hover:bg-[#4B151A] text-white px-6 py-3 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  Track
                </button>
              </div>
            </div>
          </form>

          {searched && (
            <div className="pt-4 border-t border-[#E6DDD3]">
              {searchResult ? (
                <div className="bg-[#FAF6F0] p-5 rounded-xl border border-[#E6DDD3] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                      <FontAwesomeIcon icon={faCircleCheck} />
                      <span>Status: {searchResult.status}</span>
                    </div>
                    <span className="text-xs font-mono text-[#641C22] font-bold">
                      #{searchResult.id}
                    </span>
                  </div>
                  <p className="text-xs text-[#514744]">
                    Placed for: <strong>{searchResult.customerName}</strong> on {searchResult.date}
                  </p>
                  <p className="text-xs text-[#817771]">
                    Total Amount: ₹{searchResult.total.toLocaleString("en-IN")} ({searchResult.items.length} items)
                  </p>
                </div>
              ) : (
                <div className="text-center py-4 space-y-2">
                  <p className="text-xs text-[#817771]">
                    No local order found for &ldquo;{orderRef}&rdquo;. Your order status is confirmed directly with our team on WhatsApp.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* WhatsApp Tracking Info Box */}
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl shrink-0">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-emerald-950">
                Track Live on WhatsApp
              </h3>
              <p className="text-xs text-emerald-800">
                For dispatch and courier tracking updates, message our team directly.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${RUCHIKA_WHATSAPP_NUMBER}?text=Hello%20Ruchika%20Creation%2C%20I%20would%20like%20to%20track%20my%20order.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-sans font-semibold tracking-wider uppercase px-5 py-2.5 rounded-lg transition-colors shadow-xs"
            >
              <span>Get WhatsApp Tracking Link</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
