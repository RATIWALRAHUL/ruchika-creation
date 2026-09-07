import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  RUCHIKA_WHATSAPP_DISPLAY,
  RUCHIKA_WHATSAPP_NUMBER,
  RUCHIKA_EMAIL,
} from "@/config/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us | Ruchika Creation",
  description:
    "Get in touch with Ruchika Creation for product inquiries, sizing guidance, and WhatsApp orders.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-8 sm:py-12">
      <div className="site-container space-y-10 sm:space-y-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-sans text-[#817771]">
            <li>
              <Link href="/" className="hover:text-[#641C22] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#E6DDD3]">
              /
            </li>
            <li className="text-[#241D1B] font-medium" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>

        {/* Editorial Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#B18A52] block">
            WE ARE HERE TO ASSIST YOU
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#241D1B] tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xs sm:text-sm font-sans text-[#514744] leading-relaxed">
            Have a question about a product code, custom sizing, delivery timelines, or bulk orders? Chat with our team directly.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Methods */}
          <div className="lg:col-span-6 space-y-5">
            {/* WhatsApp Highlight Box */}
            <a
              href={`https://wa.me/${RUCHIKA_WHATSAPP_NUMBER}?text=Hello%20Ruchika%20Creation%2C%20I%20have%20an%20inquiry%20regarding%20your%20products.`}
              target="_blank"
              rel="noreferrer"
              className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 hover:border-emerald-300 transition-all flex items-center gap-4 block group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-emerald-900 block">
                  FASTEST RESPONSE
                </span>
                <h3 className="font-serif text-xl font-bold text-emerald-950">
                  Chat with us on WhatsApp
                </h3>
                <p className="text-xs text-emerald-800 mt-0.5">
                  {RUCHIKA_WHATSAPP_DISPLAY} · Active daily 10:00 AM – 8:00 PM
                </p>
              </div>
            </a>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] shadow-2xs space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#641C22] flex items-center justify-center text-sm shrink-0 border border-[#E6DDD3]">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#817771]">
                    Phone &amp; WhatsApp Support
                  </h4>
                  <p className="font-sans font-medium text-sm sm:text-base text-[#241D1B] mt-0.5">
                    {RUCHIKA_WHATSAPP_DISPLAY}
                  </p>
                  <p className="text-xs text-[#817771]">Direct seller assistance for order bookings</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#641C22] flex items-center justify-center text-sm shrink-0 border border-[#E6DDD3]">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#817771]">
                    Email Inquiries
                  </h4>
                  <p className="font-sans font-medium text-sm sm:text-base text-[#241D1B] mt-0.5">
                    <a href={`mailto:${RUCHIKA_EMAIL}`} className="hover:text-[#641C22] transition-colors">
                      {RUCHIKA_EMAIL}
                    </a>
                  </p>
                  <p className="text-xs text-[#817771]">For corporate &amp; bulk orders</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#641C22] flex items-center justify-center text-sm shrink-0 border border-[#E6DDD3]">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#817771]">
                    Studio &amp; Workshop
                  </h4>
                  <p className="font-sans font-medium text-sm sm:text-base text-[#241D1B] mt-0.5">
                    Jaipur, Rajasthan, India
                  </p>
                  <p className="text-xs text-[#817771]">Authentic Rajasthani ethnicwear manufacturing</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#641C22] flex items-center justify-center text-sm shrink-0 border border-[#E6DDD3]">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#817771]">
                    Customer Care Hours
                  </h4>
                  <p className="font-sans font-medium text-sm sm:text-base text-[#241D1B] mt-0.5">
                    Monday to Saturday: 10:00 AM – 8:00 PM IST
                  </p>
                  <p className="text-xs text-[#817771]">Sunday inquiries responded next morning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Inquiry Guide */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DDD3] shadow-2xs space-y-6">
            <h2 className="font-serif text-2xl font-medium text-[#241D1B]">
              How to Order via Product Code
            </h2>

            <ol className="space-y-4 text-xs sm:text-sm font-sans text-[#514744]">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#641C22] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <strong className="text-[#241D1B]">Find the Product Code:</strong>
                  <p className="text-[#817771] mt-0.5">
                    Every article has a unique code such as <code className="bg-[#FAF6F0] text-[#641C22] px-1.5 py-0.5 rounded font-mono font-bold">RC-KRT-001</code> or <code className="bg-[#FAF6F0] text-[#641C22] px-1.5 py-0.5 rounded font-mono font-bold">RC-3PC-004</code>.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#641C22] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <strong className="text-[#241D1B]">Add to Bag or Copy Code:</strong>
                  <p className="text-[#817771] mt-0.5">
                    You can either add multiple items to your shopping bag and click &ldquo;Order on WhatsApp&rdquo;, or simply message us the code directly.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#641C22] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <strong className="text-[#241D1B]">Confirmation &amp; Dispatch:</strong>
                  <p className="text-[#817771] mt-0.5">
                    Our team verifies the stock, confirms your preferred delivery address, and shares parcel tracking once dispatched.
                  </p>
                </div>
              </li>
            </ol>

            <div className="pt-4 border-t border-[#E6DDD3]">
              <Link
                href="/shop"
                className="w-full bg-[#641C22] hover:bg-[#4B151A] text-white text-xs font-sans font-semibold tracking-wider uppercase py-3.5 px-6 rounded-xl flex items-center justify-center transition-colors shadow-xs"
              >
                Browse All Kurtis &amp; Sets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
