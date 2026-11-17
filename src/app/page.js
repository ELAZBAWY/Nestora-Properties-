"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CuratedCollection from "@/components/CuratedCollection";
import TypologiesSection from "@/components/TypologiesSection";
import PhilosophySection from "@/components/PhilosophySection";
import PrivateAdvisoryBanner from "@/components/PrivateAdvisoryBanner";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { PROPERTIES } from "@/data/properties";
import { filterProperties } from "@/lib/propertyFilters";

export default function Home() {
  // Filter state
  const [filters, setFilters] = useState({
    mode: "BUY",
    location: "ALL",
    typology: "ALL",
    budget: "ALL",
    bedrooms: "Any",
    style: "ALL",
    features: [],
  });

  // Modal states
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState("Private Portfolio Access");

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return filterProperties(PROPERTIES, filters);
  }, [filters]);

  const handleOpenInquiry = (topic) => {
    setInquiryTopic(topic);
    setInquiryModalOpen(true);
  };

  const handleSelectTypology = (typologyId) => {
    // Scroll to collection and filter
    const el = document.getElementById("collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (typologyId === "penthouse") {
      setFilters((prev) => ({
        ...prev,
        mode: "RENT",
        budget: "ALL",
        typology: "Penthouse",
      }));
    } else if (typologyId === "villa") {
      setFilters((prev) => ({
        ...prev,
        mode: "BUY",
        budget: "ALL",
        typology: "Villa",
      }));
    } else {
      setFilters((prev) => ({ ...prev, typology: "ALL" }));
    }
  };

  const handleApplyFilters = () => {
    const el = document.getElementById("collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleResetFilters = () => {
    setFilters({
      mode: "BUY",
      location: "ALL",
      typology: "ALL",
      budget: "ALL",
      bedrooms: "Any",
      style: "ALL",
      features: [],
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#141513] text-[#1A1C1A] dark:text-[#FAF9F6] selection:bg-[#EAE3D8] selection:text-[#0F100C] transition-colors">
      {/* Editorial Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Hero Visual Presentation */}
      <main>
        <HeroSection
          onExplore={() => {
            const el = document.getElementById("collection");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onContact={() => handleOpenInquiry("General Consultation")}
        />

        {/* Curated Collection Grid */}
        <CuratedCollection
          properties={filteredProperties}
          hasActiveFilters={
            filters.mode !== "BUY" ||
            filters.location !== "ALL" ||
            filters.typology !== "ALL" ||
            filters.budget !== "ALL" ||
            filters.bedrooms !== "Any" ||
            filters.style !== "ALL" ||
            filters.features.length > 0
          }
          onResetFilters={handleResetFilters}
          onInquireDiscreetly={() =>
            handleOpenInquiry("Off-Market Discreet Acquisitions")
          }
        />

        {/* Spatial Typologies Exploration */}
        <TypologiesSection onSelectTypology={handleSelectTypology} />

        {/* Philosophical Statement & Monograph */}
        <PhilosophySection />

        {/* Private Advisory Direct CTA */}
        <PrivateAdvisoryBanner
          onScheduleAdvisory={() =>
            handleOpenInquiry("Senior Advisory Docket Consultation")
          }
        />
      </main>

      {/* Structured Editorial Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Inquiries & Access Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultTopic={inquiryTopic}
      />
    </div>
  );
}
