"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useShop } from "@/context/ShopContext";
import { createWhatsAppQueryUrl } from "@/utils/whatsappOrder";
import { RUCHIKA_WHATSAPP_DISPLAY } from "@/config/whatsapp";

export default function FloatingWhatsAppButton() {
  const { customer, updateCustomer } = useShop();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(customer?.name || "");
  const [mobile, setMobile] = useState(customer?.mobile || "");
  const [query, setQuery] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanMobile = mobile.replace(/\D/g, "");

    // Save profile to localStorage if provided
    if (name.trim() && cleanMobile.length >= 10) {
      updateCustomer({
        id: customer?.id || `RC${Math.floor(1000 + Math.random() * 9000)}`,
        name: name.trim(),
        mobile: cleanMobile.slice(-10),
        mobileVerified: true,
        createdAt: customer?.createdAt || new Date().toISOString(),
      });
    }

    const whatsappUrl = createWhatsAppQueryUrl({
      customerName: name.trim() || customer?.name,
      customerMobile: cleanMobile.slice(-10) || customer?.mobile,
      queryText: query.trim() || "Hello Ruchika Creation, I would like to inquire about your collection.",
    });

    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[300px] sm:w-[330px] bg-white rounded-2xl shadow-2xl border border-[#E6DDD3] p-4 text-xs space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD3]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#241D1B]">
                  Chat with Ruchika
                </h4>
                <p className="text-[10.5px] text-[#817771]">
                  WhatsApp: {RUCHIKA_WHATSAPP_DISPLAY}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#817771] hover:text-[#241D1B] p-1"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <p className="text-[#514744] text-[11.5px] leading-relaxed">
            Have a question about sizes, kurtis, custom designs or delivery? Send a WhatsApp message directly!
          </p>

          <form onSubmit={handleSend} className="space-y-2.5">
            {!customer && (
              <>
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#FAF6F0] border border-[#E6DDD3] rounded-lg text-xs text-[#241D1B] focus:outline-hidden focus:border-[#641C22]"
                />
                <input
                  type="tel"
                  placeholder="Your Mobile (e.g. 7340368544)"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  className="w-full px-2.5 py-1.5 bg-[#FAF6F0] border border-[#E6DDD3] rounded-lg text-xs text-[#241D1B] focus:outline-hidden focus:border-[#641C22]"
                />
              </>
            )}

            <textarea
              rows={2}
              placeholder="Type your query or message..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-[#FAF6F0] border border-[#E6DDD3] rounded-lg text-xs text-[#241D1B] focus:outline-hidden focus:border-[#641C22] resize-none"
            />

            <button
              type="submit"
              className="w-full py-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B3519] font-bold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
              <span>SEND ON WHATSAPP</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => {
          if (customer) {
            setName(customer.name);
            setMobile(customer.mobile);
          }
          setIsOpen(!isOpen);
        }}
        aria-label="Ask Query on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer border-2 border-white"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
        
        {/* Floating tooltip */}
        {!isOpen && (
          <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#241D1B] text-[#FCFAF7] text-[11px] font-sans font-medium px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Ask a Query on WhatsApp
          </span>
        )}
      </button>
    </div>
  );
}
