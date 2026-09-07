import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { RUCHIKA_WHATSAPP_NUMBER } from "@/config/whatsapp";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Ruchika Creation",
  description: "Find answers to common questions about ordering, product codes, WhatsApp orders, shipping, and sizing.",
};

export default function FAQsPage() {
  const faqs = [
    {
      q: "How do I place an order on Ruchika Creation?",
      a: "You can browse our catalog, select your preferred size, and click 'ADD TO BAG'. When you're ready, click 'Order on WhatsApp' to generate a complete itemized order request sent directly to our seller team on WhatsApp."
    },
    {
      q: "What is a Product Code (e.g. RC-KRT-001)?",
      a: "Every single article on our website has a unique, permanent product code (such as RC-KRT-001 for single-piece kurtis, RC-2PC-001 for two-piece sets, or RC-3PC-001 for three-piece sets). You can use this code to search directly or quote it to our team on WhatsApp."
    },
    {
      q: "What payment methods are accepted?",
      a: "All payments are finalized directly with our team on WhatsApp using UPI (GPay, PhonePe, Paytm), Direct Bank Transfer (IMPS/NEFT), or Cash on Delivery (COD where serviceable)."
    },
    {
      q: "What are the shipping charges and timelines?",
      a: "We offer FREE delivery across India on all orders above ₹999. Orders below ₹999 incur a flat ₹99 courier fee. Parcels are dispatched within 24–48 hours and arrive in 4–7 business days."
    },
    {
      q: "Can I exchange an item if the size does not fit?",
      a: "Yes! We offer a 7-day hassle-free exchange window. Simply contact us on WhatsApp with your order reference and we will arrange a size replacement."
    }
  ];

  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container max-w-3xl space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li><Link href="/" className="hover:text-[#641C22]">Home</Link></li>
            <li aria-hidden="true" className="text-[#E6DDD3]">/</li>
            <li className="text-[#241D1B] font-medium" aria-current="page">FAQs</li>
          </ol>
        </nav>

        <div className="space-y-2 pb-6 border-b border-[#E6DDD3]">
          <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#B18A52]">
            HELP &amp; SUPPORT
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D1B]">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E6DDD3] shadow-2xs space-y-2">
              <h3 className="font-serif text-lg font-semibold text-[#241D1B]">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E6DDD3] text-center space-y-3">
          <h3 className="font-serif text-xl font-medium text-[#241D1B]">Have more questions?</h3>
          <p className="text-xs font-sans text-[#817771]">Our customer support team is available on WhatsApp to assist you.</p>
          <a
            href={`https://wa.me/${RUCHIKA_WHATSAPP_NUMBER}?text=Hello%20Ruchika%20Creation%2C%20I%20have%20a%20question.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-sans font-semibold tracking-wider uppercase px-5 py-2.5 rounded-lg transition-colors shadow-xs"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-sm" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
