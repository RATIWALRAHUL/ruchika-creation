import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faClock, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Ruchika Creation",
  description: "Read about Ruchika Creation's delivery timelines, free shipping threshold over ₹999, and dispatch policies.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li>
              <Link href="/" className="hover:text-[#641C22]">Home</Link>
            </li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Shipping Policy</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            CUSTOMER CARE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Shipping &amp; Delivery Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#817771]">
            Last updated: August 2026
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-[#E6DDD3] space-y-1">
            <FontAwesomeIcon icon={faTruck} className="text-[#641C22] text-lg" />
            <h3 className="font-serif text-base font-semibold text-[#241D1B]">Free Shipping</h3>
            <p className="text-xs text-[#817771]">On all orders above ₹999 across India</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E6DDD3] space-y-1">
            <FontAwesomeIcon icon={faClock} className="text-[#641C22] text-lg" />
            <h3 className="font-serif text-base font-semibold text-[#241D1B]">Quick Dispatch</h3>
            <p className="text-xs text-[#817771]">Dispatched within 24 to 48 hours</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E6DDD3] space-y-1">
            <FontAwesomeIcon icon={faShieldHalved} className="text-[#641C22] text-lg" />
            <h3 className="font-serif text-base font-semibold text-[#241D1B]">Secure Packaging</h3>
            <p className="text-xs text-[#817771]">Tamper-evident protective packing</p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] space-y-6 text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">1. Domestic Delivery Timelines</h2>
            <p>
              Orders are dispatched directly from our Jaipur workshop within 1–2 business days of order confirmation via WhatsApp. Delivery typically takes 4–7 business days depending on your location across India.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">2. Shipping Charges</h2>
            <p>
              • <strong>Orders ₹999 &amp; Above:</strong> Enjoy completely <strong>FREE standard delivery</strong> across all Indian pin codes.<br />
              • <strong>Orders Under ₹999:</strong> A nominal flat shipping charge of <strong>₹99</strong> applies to cover courier handling.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">3. Order Tracking</h2>
            <p>
              Once your package is handed over to our courier partners (Delhivery, Bluedart, Xpressbees), our team sends you the tracking link directly on WhatsApp so you can monitor your parcel in real-time.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
