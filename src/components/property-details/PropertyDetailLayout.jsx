"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import PropertyBreadcrumbsActions from "@/components/property-details/PropertyBreadcrumbsActions";
import PropertyHeadingPrice from "@/components/property-details/PropertyHeadingPrice";
import PropertyGallery from "@/components/property-details/PropertyGallery";
import PropertySpecificationsStrip from "@/components/property-details/PropertySpecificationsStrip";
import CuratedPropertyDescription from "@/components/property-details/CuratedPropertyDescription";
import PropertyAmenitiesGrid from "@/components/property-details/PropertyAmenitiesGrid";
import PropertyFloorplanSection from "@/components/property-details/PropertyFloorplanSection";
import PropertyLocationSection from "@/components/property-details/PropertyLocationSection";
import ListingAdvisorSidebar from "@/components/property-details/ListingAdvisorSidebar";
import SimilarResidencesSection from "@/components/property-details/SimilarResidencesSection";

export default function PropertyDetailLayout({ detail }) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState(`Private Viewing: ${detail?.title || "Exclusive Residence"}`);

  if (!detail) {
    return null;
  }

  const handleOpenViewing = (topicTitle) => {
    setInquiryTopic(`Private Viewing: ${topicTitle || detail.title}`);
    setInquiryModalOpen(true);
  };

  const handleOpenGeneralInquiry = (topic) => {
    setInquiryTopic(topic || `Inquiry: ${detail.title}`);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#141513] text-[#1A1C1A] dark:text-[#FAF9F6] selection:bg-[#EAE3D8] selection:text-[#0F100C] transition-colors">
      {/* Sticky Editorial Header */}
      <Navbar onOpenInquiry={handleOpenGeneralInquiry} />

      <main>
        {/* Section A: Breadcrumbs and Discreet Property Actions */}
        <PropertyBreadcrumbsActions title={detail.title} city={detail.city} />

        {/* Section B: Property Heading, Badges, and Price Banner */}
        <PropertyHeadingPrice detail={detail} />

        {/* Section C: Main Property Gallery */}
        <PropertyGallery
          gallery={detail.gallery}
          title={detail.title}
          onOpenTour={() => handleOpenViewing(`${detail.title} — Virtual 3D Tour`)}
        />

        {/* Section D: Horizontal Specifications Strip */}
        <PropertySpecificationsStrip specifications={detail.specifications} />

        {/* Section E: Main 2-Column Content Area */}
        <section className="w-full bg-[#FAF9F6] dark:bg-[#141513] py-14 sm:py-20 transition-colors">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column (8 cols): Description, Amenities, Floorplans, Location */}
              <div className="lg:col-span-8 space-y-12">
                {/* Section F: Curated Property Description */}
                <CuratedPropertyDescription curationNotes={detail.curationNotes} />

                {/* Section H: Total Amenities Grid */}
                <PropertyAmenitiesGrid amenities={detail.amenities} />

                {/* Section I: Floor Levels / Floorplan */}
                <PropertyFloorplanSection
                  floorplan={detail.floorplan}
                  propertyTitle={detail.title}
                  refCode={detail.refCode}
                />

                {/* Section J: Geographic Sanctuary & Map Preview */}
                <PropertyLocationSection locationSection={detail.locationSection} />
              </div>

              {/* Right Column (4 cols): Listing Advisor Card & Direct Inquiry Form */}
              <div className="lg:col-span-4">
                <ListingAdvisorSidebar
                  advisor={detail.advisor}
                  propertyTitle={detail.title}
                  onOpenViewingModal={handleOpenViewing}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section K: Similar Curated Residences */}
        {detail.similarResidences && detail.similarResidences.length > 0 && (
          <SimilarResidencesSection similarResidences={detail.similarResidences} />
        )}
      </main>

      {/* Section L: Reusable Editorial Footer */}
      <Footer onOpenInquiry={handleOpenGeneralInquiry} />

      {/* Reusable Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultTopic={inquiryTopic}
      />
    </div>
  );
}
