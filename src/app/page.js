"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchFilterBar from "@/components/SearchFilterBar";
import CuratedCollection, {
  PROPERTIES_DATA,
} from "@/components/CuratedCollection";
import TypologiesSection from "@/components/TypologiesSection";
import PhilosophySection from "@/components/PhilosophySection";
import PrivateAdvisoryBanner from "@/components/PrivateAdvisoryBanner";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

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
    return PROPERTIES_DATA.filter((item) => {
      // Filter by mode
      if (item.mode !== filters.mode) return false;

      // Filter by location
      if (filters.location !== "ALL") {
        if (!item.location.toLowerCase().includes(filters.location.toLowerCase().split(",")[0].trim())) {
          return false;
        }
      }

      // Filter by typology
      if (filters.typology !== "ALL" && item.typology !== filters.typology) {
        return false;
      }

      // Filter by bedrooms
      if (filters.bedrooms !== "Any") {
        const minBeds = parseInt(filters.bedrooms);
        if (item.beds < minBeds) return false;
      }

      // Filter by architectural style
      if (filters.style !== "ALL" && item.style !== filters.style) {
        return false;
      }

      return true;
    });
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
      setFilters((prev) => ({ ...prev, mode: "RENT", typology: "Penthouse" }));
    } else if (typologyId === "villa") {
      setFilters((prev) => ({ ...prev, mode: "BUY", typology: "Villa" }));
    } else {
      setFilters((prev) => ({ ...prev, typology: "ALL" }));
    }
  };

  const handleApplyFilters = () => {
    const el = document.getElementById("collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
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

        {/* Floating Search & Filter Console */}
        <SearchFilterBar
          filters={filters}
          setFilters={setFilters}
          onApplyFilters={handleApplyFilters}
        />

        {/* Curated Collection Grid */}
        <CuratedCollection
          properties={
            filteredProperties.length > 0 ? filteredProperties : PROPERTIES_DATA
          }
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
