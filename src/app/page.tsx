import React from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import HeroTrustStrip from "@/components/home/HeroTrustStrip";
import CollectionSection from "@/components/home/CollectionSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import CraftsmanshipSection from "@/components/home/CraftsmanshipSection";
import BestsellersSection from "@/components/home/BestsellersSection";
import TrustFeaturesSection from "@/components/home/TrustFeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StyledByRuchikaSection from "@/components/home/StyledByRuchikaSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF7] text-[#514744] selection:bg-[#641C22] selection:text-white">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection />

        {/* 4. Hero Trust Features */}
        <HeroTrustStrip />

        {/* 5. Shop by Collection */}
        <CollectionSection />

        {/* 6. New Arrivals */}
        <NewArrivalsSection />

        {/* 7. The Art of Indian Craft */}
        <CraftsmanshipSection />

        {/* 8. Bestsellers */}
        <BestsellersSection />

        {/* 9. Why Choose Ruchika Creation */}
        <TrustFeaturesSection />

        {/* 10. What Our Customers Say */}
        <TestimonialsSection />

        {/* 11. Styled by Ruchika */}
        <StyledByRuchikaSection />
      </main>

      {/* 12. Premium Footer (No Newsletter, No Payment Badges) */}
      <Footer />
    </div>
  );
}
