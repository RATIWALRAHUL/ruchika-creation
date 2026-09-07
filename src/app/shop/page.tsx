import React, { Suspense } from "react";
import { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop Kurtis & Ethnicwear | Ruchika Creation",
  description:
    "Explore Ruchika Creation's collection of elegant Indian kurtis and thoughtfully designed ethnicwear.",
  openGraph: {
    title: "Shop All Kurtis & Ethnicwear | Ruchika Creation",
    description:
      "Explore Ruchika Creation's collection of elegant Indian kurtis and ethnicwear ensembles.",
    type: "website",
  },
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#FCFAF7] min-h-screen py-16">
          <div className="site-container">
            <div className="w-full max-w-sm h-10 bg-[#E6DDD3]/40 rounded-lg animate-pulse mb-6" />
            <div className="w-full max-w-md h-6 bg-[#E6DDD3]/40 rounded-lg animate-pulse mb-12" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-[#E6DDD3] aspect-[4/5] animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ShopClient />
    </Suspense>
  );
}
