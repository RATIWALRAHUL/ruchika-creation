import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ruchika Creation",
  description: "Read the terms and conditions governing the use of Ruchika Creation website and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Terms &amp; Conditions</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            LEGAL AGREEMENT
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#817771]">
            Last updated: August 2026
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] space-y-6 text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">1. Product Representation &amp; Pricing</h2>
            <p>
              We strive to display our kurti colors, needlework, and silhouettes as accurately as possible. Prices are displayed in Indian Rupees (₹) inclusive of applicable taxes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">2. Order Booking</h2>
            <p>
              Submitting an order on WhatsApp creates an order inquiry and booking request. Final confirmation and dispatch occur once stock availability and delivery address are verified.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">3. Intellectual Property</h2>
            <p>
              All product photography, descriptions, branding, and designs on this website are the property of Ruchika Creation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
