import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Ruchika Creation",
  description: "Read about how Ruchika Creation protects your privacy and personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Privacy Policy</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            LEGAL &amp; PRIVACY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#817771]">
            Last updated: August 2026
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] space-y-6 text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">1. Information We Collect</h2>
            <p>
              We collect your name, contact mobile number, delivery address, and order details strictly to fulfill your order requests and provide customer support over WhatsApp.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">2. Data Security &amp; Usage</h2>
            <p>
              We do not sell or rent your personal data to third parties. Your details are used solely to generate order summaries, coordinate courier dispatch, and answer product queries.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">3. Contact Us</h2>
            <p>
              For any privacy-related questions, contact us at <strong>care@ruchikacreation.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
