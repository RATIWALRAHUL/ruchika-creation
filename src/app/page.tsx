import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HeroTrustStrip from "@/components/home/HeroTrustStrip";
import CollectionSection from "@/components/home/CollectionSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import CraftsmanshipSection from "@/components/home/CraftsmanshipSection";
import BestsellersSection from "@/components/home/BestsellersSection";
import TrustFeaturesSection from "@/components/home/TrustFeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StyledByRuchikaSection from "@/components/home/StyledByRuchikaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Hero Trust Features */}
      <HeroTrustStrip />

      {/* 3. Shop by Collection */}
      <CollectionSection />

      {/* 4. New Arrivals */}
      <NewArrivalsSection />

      {/* 5. The Art of Indian Craft */}
      <CraftsmanshipSection />

      {/* 6. Bestsellers */}
      <BestsellersSection />

      {/* 7. Why Choose Ruchika Creation */}
      <TrustFeaturesSection />

      {/* 8. What Our Customers Say */}
      <TestimonialsSection />

      {/* 9. Styled by Ruchika */}
      <StyledByRuchikaSection />
    </>
  );
}
