import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Ruchika Creation",
  description: "Learn about our 7-day hassle-free exchange and return policy for Indian ethnicwear.",
};

export default function ReturnsPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">Returns &amp; Exchanges</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            CUSTOMER PROMISE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Returns &amp; Exchange Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#817771]">
            Simple, transparent 7-day exchange window for your peace of mind.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] space-y-6 text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faRotateLeft} className="text-[#641C22]" />
              <span>7-Day Easy Exchange Policy</span>
            </h2>
            <p>
              We want you to love your Ruchika Creation outfit. If you experience any sizing mismatch or receive a defective garment, you can request an exchange within <strong>7 days of delivery</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">Conditions for Exchange</h2>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Item must be unused, unwashed, and in its original condition.</li>
              <li>Original tags and packaging must remain intact.</li>
              <li>Exchange requests should be raised with your product code (e.g. <code className="font-mono bg-[#FAF6F0] text-[#641C22] px-1 rounded">RC-KRT-001</code>) on WhatsApp.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#241D1B] font-semibold">How to Initiate an Exchange</h2>
            <p>
              Simply message our support team on WhatsApp at <strong>+91 87339 76665</strong> with your order reference number and a photo of the item. Our customer support will arrange replacement dispatch promptly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
