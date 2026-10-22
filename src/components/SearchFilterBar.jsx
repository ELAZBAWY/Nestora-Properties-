"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function SearchFilterBar({
  filters,
  setFilters,
  onApplyFilters,
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { t, isRTL } = useApp();

  return (
    <div
      id="filter-bar"
      className="relative z-20 max-w-[1300px] mx-auto px-4 sm:px-6 -mt-8 md:-mt-12"
    >
      <div className="bg-[#FAF9F6] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-colors">
        {/* Top Control Bar: Buy/Rent tabs & Bespoke filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)]">
          {/* Segmented Buy / Rent switch */}
          <div className="inline-flex border border-[#242521] dark:border-[rgba(250,249,246,0.3)]">
            <button
              onClick={() => setFilters({ ...filters, mode: "BUY" })}
              className={`px-6 py-2 label-caps text-xs tracking-wider transition-colors cursor-pointer ${
                filters.mode === "BUY"
                  ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] font-semibold"
                  : "bg-transparent text-[#242521] dark:text-[#FAF9F6] hover:bg-[#EAE3D8]/50 dark:hover:bg-[#202220]"
              }`}
            >
              {t("filter_buy")}
            </button>
            <button
              onClick={() => setFilters({ ...filters, mode: "RENT" })}
              className={`px-6 py-2 label-caps text-xs tracking-wider transition-colors cursor-pointer ${
                filters.mode === "RENT"
                  ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] font-semibold"
                  : "bg-transparent text-[#242521] dark:text-[#FAF9F6] hover:bg-[#EAE3D8]/50 dark:hover:bg-[#202220]"
              }`}
            >
              {t("filter_rent")}
            </button>
          </div>

          {/* Bespoke Filters Toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="inline-flex items-center gap-2 label-caps text-xs text-[#242521] dark:text-[#FAF9F6] hover:text-[#705B3F] dark:hover:text-[#C5A880] transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
            <span>{t("filter_bespoke")}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${
                showAdvanced ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Main Inputs Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 pt-6">
          {/* Location Selector */}
          <div className="flex flex-col space-y-1.5">
            <label className="label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880]">
              {t("filter_location")}
            </label>
            <div className="relative">
              <select
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
                className="w-full h-12 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:outline-none focus:border-[#242521] dark:focus:border-[#FAF9F6] transition-colors appearance-none cursor-pointer"
              >
                <option value="ALL">{t("filter_all_destinations")}</option>
                <option value="New Cairo, Egypt">{isRTL ? "القاهرة الجديدة، مصر" : "New Cairo, Egypt"}</option>
                <option value="El Gouna, Red Sea">{isRTL ? "الجونة، البحر الأحمر" : "El Gouna, Red Sea"}</option>
                <option value="Zamalek, Cairo">{isRTL ? "الزمالك، القاهرة" : "Zamalek, Cairo"}</option>
                <option value="North Coast (Sahel)">{isRTL ? "الساحل الشمالي" : "North Coast (Sahel)"}</option>
                <option value="Downtown Dubai, UAE">{isRTL ? "وسط مدينة دبي، الإمارات" : "Downtown Dubai, UAE"}</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#705B3F] dark:text-[#C5A880] absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Typology Selector */}
          <div className="flex flex-col space-y-1.5">
            <label className="label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880]">
              {t("filter_typology")}
            </label>
            <div className="relative">
              <select
                value={filters.typology}
                onChange={(e) =>
                  setFilters({ ...filters, typology: e.target.value })
                }
                className="w-full h-12 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:outline-none focus:border-[#242521] dark:focus:border-[#FAF9F6] transition-colors appearance-none cursor-pointer"
              >
                <option value="ALL">{t("filter_all_typologies")}</option>
                <option value="Villa">{isRTL ? "فيلات وقصور خاصة" : "Signature Villas & Estates"}</option>
                <option value="Penthouse">{isRTL ? "بنتهاوس ودوبلكس علوي" : "Sky Penthouses & Duplexes"}</option>
                <option value="Coastal">{isRTL ? "ملاذات شاطئية وبحرية" : "Beachfront Compounds"}</option>
                <option value="Commercial">{isRTL ? "مساحات تجارية وإدارية" : "Commercial & Prime Retail"}</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#705B3F] dark:text-[#C5A880] absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Budget Selector */}
          <div className="flex flex-col space-y-1.5">
            <label className="label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880]">
              {t("filter_budget")}
            </label>
            <div className="relative">
              <select
                value={filters.budget}
                onChange={(e) =>
                  setFilters({ ...filters, budget: e.target.value })
                }
                className="w-full h-12 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:outline-none focus:border-[#242521] dark:focus:border-[#FAF9F6] transition-colors appearance-none cursor-pointer"
              >
                <option value="ALL">{t("filter_any_valuation")}</option>
                {filters.mode === "BUY" ? (
                  <>
                    <option value="under-70m">{isRTL ? "أقل من 70,000,000 ج.م" : "Under EGP 70,000,000"}</option>
                    <option value="70m-100m">{isRTL ? "70 – 100 مليون ج.م" : "EGP 70M – 100M"}</option>
                    <option value="100m+">{isRTL ? "أكثر من 100,000,000 ج.م" : "EGP 100,000,000+"}</option>
                  </>
                ) : (
                  <>
                    <option value="under-250k">{isRTL ? "أقل من 250,000 ج.م / شهر" : "Under EGP 250,000 / mo"}</option>
                    <option value="250k-500k">{isRTL ? "250,000 – 500,000 ج.م / شهر" : "EGP 250,000 – 500,000 / mo"}</option>
                    <option value="500k+">{isRTL ? "أكثر من 500,000 ج.م / شهر" : "EGP 500,000+ / mo"}</option>
                  </>
                )}
              </select>
              <ChevronDown className="w-4 h-4 text-[#705B3F] dark:text-[#C5A880] absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <button
              onClick={onApplyFilters}
              className="w-full h-12 bg-[#242521] dark:bg-[#FAF9F6] hover:bg-[#705B3F] dark:hover:bg-[#C5A880] text-[#FAF9F6] dark:text-[#1A1C1A] inline-flex items-center justify-center gap-2 label-caps text-xs tracking-[0.16em] transition-colors cursor-pointer border border-[#242521] dark:border-[#FAF9F6] font-medium"
            >
              <Search className="w-4 h-4" />
              <span>{t("filter_search_btn")}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Advanced Bespoke Filters */}
        {showAdvanced && (
          <div className="mt-6 pt-6 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div>
              <label className="block label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] mb-2">
                {t("filter_min_beds")}
              </label>
              <div className="flex gap-2">
                {["Any", "3+", "4+", "5+", "6+"].map((b) => (
                  <button
                    key={b}
                    onClick={() => setFilters({ ...filters, bedrooms: b })}
                    className={`flex-1 py-1.5 text-xs font-editorial-sans border transition-colors cursor-pointer ${
                      (filters.bedrooms || "Any") === b
                        ? "border-[#242521] dark:border-[#FAF9F6] bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A]"
                        : "border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-[#464741] dark:text-[#A0A29C] hover:border-[#242521] dark:hover:border-[#FAF9F6]"
                    }`}
                  >
                    {b === "Any" ? (isRTL ? "الكل" : "Any") : b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] mb-2">
                {t("filter_arch_discipline")}
              </label>
              <select
                value={filters.style || "ALL"}
                onChange={(e) =>
                  setFilters({ ...filters, style: e.target.value })
                }
                className="w-full h-9 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6]"
              >
                <option value="ALL">{t("filter_any_discipline")}</option>
                <option value="Brutalist">{isRTL ? "ترافرتين وبروتالي" : "Travertine & Brutalist"}</option>
                <option value="Coastal">{isRTL ? "ساحلي معاصر" : "Coastal Contemporary"}</option>
                <option value="Modernist">{isRTL ? "تراث حداثي" : "Modernist Heritage"}</option>
              </select>
            </div>

            <div>
              <label className="block label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] mb-2">
                {t("filter_curated_amenities")}
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Infinity Pool", "Private Mooring", "Courtyard", "Skyline View"].map(
                  (feature) => {
                    const isSelected = filters.features?.includes(feature);
                    const featureLabel =
                      isRTL && feature === "Infinity Pool"
                        ? "حمام سباحة لا متناهي"
                        : isRTL && feature === "Private Mooring"
                        ? "مرسى يخوت خاص"
                        : isRTL && feature === "Courtyard"
                        ? "فناء أندلسي داخلي"
                        : isRTL && feature === "Skyline View"
                        ? "إطلالة أفقية بانورامية"
                        : feature;
                    return (
                      <button
                        key={feature}
                        onClick={() => {
                          const current = filters.features || [];
                          const updated = isSelected
                            ? current.filter((f) => f !== feature)
                            : [...current, feature];
                          setFilters({ ...filters, features: updated });
                        }}
                        className={`px-2.5 py-1 text-[0.7rem] border transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] border-[#242521] dark:border-[#FAF9F6]"
                            : "border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-[#464741] dark:text-[#A0A29C] hover:border-[#242521] dark:hover:border-[#FAF9F6]"
                        }`}
                      >
                        {featureLabel}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
