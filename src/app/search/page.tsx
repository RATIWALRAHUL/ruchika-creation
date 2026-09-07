import React, { Suspense } from "react";
import { Metadata } from "next";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "Search Kurtis & Collections | Ruchika Creation",
  description: "Search Ruchika Creation's ethnicwear collection by product name, product code, style, or color.",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#FCFAF7] min-h-screen py-16">
          <div className="site-container">
            <div className="w-full max-w-sm h-10 bg-[#E6DDD3]/40 rounded-lg animate-pulse mb-6" />
            <div className="w-full max-w-md h-6 bg-[#E6DDD3]/40 rounded-lg animate-pulse mb-12" />
          </div>
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
