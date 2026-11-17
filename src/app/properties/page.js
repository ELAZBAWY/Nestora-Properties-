"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import PropertiesHero from "@/components/properties/PropertiesHero";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyResultsToolbar from "@/components/properties/PropertyResultsToolbar";
import PropertiesGrid from "@/components/properties/PropertiesGrid";
import PropertyPagination from "@/components/properties/PropertyPagination";
import PrivateAcquisitionCTA from "@/components/properties/PrivateAcquisitionCTA";
import { PROPERTIES } from "@/data/properties";

const ITEMS_PER_PAGE = 6;

function PropertiesContent({ searchParams }) {
  // Query params
  const paramSearch = searchParams.get("search") || searchParams.get("q") || "";
  const paramMode = searchParams.get("mode");
  const paramTypology = searchParams.get("typology");
  const paramCategory = searchParams.get("category");

  // Track whether user has explicitly modified/applied filters
  const [hasInteracted, setHasInteracted] = useState(
    Boolean(paramSearch || paramMode || paramTypology || paramCategory)
  );

  const [filters, setFilters] = useState({
    search: paramSearch,
    mode: paramMode || "BUY",
    typology: paramTypology || "ALL",
    priceRange: "ALL",
    beds: "ANY",
    category: paramCategory || "ALL",
  });

  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals state
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState("General Private Access");

  // Filtered dataset
  const filteredProperties = useMemo(() => {
    // On a fresh load, show the complete canonical inventory.
    if (!hasInteracted) {
      return PROPERTIES;
    }

    return PROPERTIES.filter((prop) => {
      // Mode (Buy/Rent)
      if (filters.mode && filters.mode !== "ALL" && prop.mode !== filters.mode) {
        return false;
      }

      // Search keyword (matches title, location, ref, or city)
      if (filters.search && filters.search.trim() !== "") {
        const query = filters.search.toLowerCase().trim();
        const matchesTitle = prop.title.toLowerCase().includes(query);
        const matchesLoc = prop.location.toLowerCase().includes(query);
        const matchesCity = prop.city?.toLowerCase().includes(query);
        const matchesRef = prop.ref.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLoc && !matchesCity && !matchesRef) {
          return false;
        }
      }

      // Typology
      if (filters.typology !== "ALL") {
        if (!prop.typology.toLowerCase().includes(filters.typology.toLowerCase())) {
          return false;
        }
      }

      // Category / Setting
      if (filters.category !== "ALL") {
        if (!prop.category.toLowerCase().includes(filters.category.toLowerCase())) {
          return false;
        }
      }

      // Minimum Beds
      if (filters.beds !== "ANY") {
        const minBeds = parseInt(filters.beds, 10);
        if (!isNaN(minBeds) && prop.beds < minBeds) {
          return false;
        }
      }

      // Price Range
      if (filters.priceRange !== "ALL") {
        if (filters.mode === "BUY") {
          if (filters.priceRange === "under-35m" && prop.rawPrice >= 35000000) return false;
          if (filters.priceRange === "35m-50m" && (prop.rawPrice < 35000000 || prop.rawPrice > 50000000)) return false;
          if (filters.priceRange === "50m-70m" && (prop.rawPrice < 50000000 || prop.rawPrice > 70000000)) return false;
          if (filters.priceRange === "70m+" && prop.rawPrice < 70000000) return false;
        } else {
          if (filters.priceRange === "under-200k" && prop.rawPrice >= 200000) return false;
          if (filters.priceRange === "200k-300k" && (prop.rawPrice < 200000 || prop.rawPrice > 300000)) return false;
          if (filters.priceRange === "300k+" && prop.rawPrice < 300000) return false;
        }
      }

      return true;
    });
  }, [filters, hasInteracted]);

  // Sorted dataset
  const sortedProperties = useMemo(() => {
    const list = [...filteredProperties];
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.rawPrice - b.rawPrice);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.rawPrice - a.rawPrice);
    } else if (sortBy === "area-desc") {
      list.sort((a, b) => b.area - a.area);
    } else {
      // featured
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [filteredProperties, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(sortedProperties.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedProperties = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return sortedProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedProperties, safeCurrentPage]);

  const handleFilterChange = (newFilters) => {
    setHasInteracted(true);
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = (resetFilters) => {
    setHasInteracted(false);
    setFilters(resetFilters);
    setCurrentPage(1);
  };

  const handleApplyFilters = (appliedFilters) => {
    setHasInteracted(true);
    setFilters(appliedFilters);
    setCurrentPage(1);
  };

  const handleSortChange = (nextSort) => {
    setSortBy(nextSort);
    setCurrentPage(1);
  };

  const handleOpenInquiry = (topic) => {
    setInquiryTopic(topic);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#141513] text-[#1A1C1A] dark:text-[#FAF9F6] selection:bg-[#EAE3D8] selection:text-[#0F100C] transition-colors">
      {/* Sticky Editorial Header */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main>
        {/* Section A: Page Introduction */}
        <PropertiesHero />

        {/* Section B: Property Search and Filter Panel */}
        <PropertyFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          onApplyFilters={handleApplyFilters}
        />

        {/* Section C: Results Toolbar */}
        <PropertyResultsToolbar
          resultsCount={sortedProperties.length}
          totalCount={PROPERTIES.length}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        {sortedProperties.length > 0 && (
          <PropertyPagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            currentCount={paginatedProperties.length}
            totalProperties={sortedProperties.length}
            totalListings={PROPERTIES.length}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 380, behavior: "smooth" });
            }}
          />
        )}
        {/* Section D: Property Listings Grid */}
        <PropertiesGrid
          properties={paginatedProperties}
          viewMode={viewMode}
          onResetFilters={() =>
            handleClearFilters({
              search: "",
              mode: "BUY",
              typology: "ALL",
              priceRange: "ALL",
              beds: "ANY",
              category: "ALL",
            })
          }
        />

        {/* Section E: Pagination */}

        {/* Section F: Private Acquisition CTA */}
        <PrivateAcquisitionCTA onPrivateInquiry={handleOpenInquiry} />
      </main>

      {/* Section G: Reusable Editorial Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Reusable Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultTopic={inquiryTopic}
      />
    </div>
  );
}

function PropertiesContentWrapper() {
  const searchParams = useSearchParams();
  return (
    <PropertiesContent
      key={searchParams.toString()}
      searchParams={searchParams}
    />
  );
}

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#141513] flex items-center justify-center">
          <div className="font-editorial-serif text-2xl text-[#1A1C1A] dark:text-[#FAF9F6] tracking-wider animate-pulse">
            NESTORA PROPERTIES
          </div>
        </div>
      }
    >
      <PropertiesContentWrapper />
    </Suspense>
  );
}
