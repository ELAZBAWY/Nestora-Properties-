"use client";

import { useState } from "react";
import { Search, ChevronDown, SlidersHorizontal, Home as HomeIcon, X } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertyFilters({
  filters,
  onFilterChange,
  onClearFilters,
  onApplyFilters,
}) {
  const { t, isRTL } = useApp();
  // Local state for staged edits before applying (or direct reactive)
  const [localFilters, setLocalFilters] = useState(filters);

  // Sync if parent updates
  const updateLocal = (field, value) => {
    const updated = { ...localFilters, [field]: value };
    setLocalFilters(updated);
    // Auto-apply or keep in local
    onFilterChange(updated);
  };

  const handleClear = () => {
    const reset = {
      search: "",
      mode: "BUY",
      typology: "ALL",
      priceRange: "ALL",
      beds: "ANY",
      category: "ALL",
    };
    setLocalFilters(reset);
    onClearFilters(reset);
  };

  const handleApply = (e) => {
    e?.preventDefault();
    onApplyFilters(localFilters);
  };

  return (
    <div className="w-full bg-[#FAF9F6] dark:bg-[#141513] border-b border-[rgba(36,37,33,0.08)] dark:border-[rgba(250,249,246,0.08)] py-6 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <form
          onSubmit={handleApply}
          className="bg-[#F8F7F4] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] p-4 sm:p-5 md:p-6 space-y-4 transition-colors"
        >
          {/* Row 1: Search Input, Buy/Rent Toggle, Property Type Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
            {/* Search Input (Takes 6 cols on md) */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#705B3F] dark:text-[#C5A880] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={localFilters.search || ""}
                onChange={(e) => updateLocal("search", e.target.value)}
                placeholder={t("filter_search_placeholder")}
                className="w-full h-11 pl-10 rtl:pl-4 rtl:pr-10 pr-4 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs sm:text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] placeholder:text-[#8C8C86] dark:placeholder:text-[#70726B] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none transition-colors"
              />
              {localFilters.search && (
                <button
                  type="button"
                  onClick={() => updateLocal("search", "")}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-[#8C8C86] hover:text-[#242521] dark:hover:text-[#FAF9F6]"
                  aria-label="Clear Search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Buy / Rent Segmented Toggle (Takes 3 cols on md) */}
            <div className="md:col-span-3 flex justify-start md:justify-center">
              <div className="inline-flex border border-[#242521] dark:border-[rgba(250,249,246,0.3)] w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => updateLocal("mode", "BUY")}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 label-caps text-xs tracking-wider transition-colors cursor-pointer ${
                    localFilters.mode === "BUY"
                      ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] font-semibold"
                      : "bg-[#FAF9F6] dark:bg-[#141513] text-[#242521] dark:text-[#FAF9F6] hover:bg-[#EAE3D8]/50 dark:hover:bg-[#202220]"
                  }`}
                >
                  {t("filter_buy")}
                </button>
                <button
                  type="button"
                  onClick={() => updateLocal("mode", "RENT")}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 label-caps text-xs tracking-wider transition-colors cursor-pointer ${
                    localFilters.mode === "RENT"
                      ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] font-semibold"
                      : "bg-[#FAF9F6] dark:bg-[#141513] text-[#242521] dark:text-[#FAF9F6] hover:bg-[#EAE3D8]/50 dark:hover:bg-[#202220]"
                  }`}
                >
                  {t("filter_rent")}
                </button>
              </div>
            </div>

            {/* Property Type Dropdown (Takes 3 cols on md) */}
            <div className="md:col-span-3 relative">
              <select
                value={localFilters.typology || "ALL"}
                onChange={(e) => updateLocal("typology", e.target.value)}
                className="w-full h-11 px-3.5 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs sm:text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="ALL">{t("filter_all_typologies")}</option>
                <option value="Villa">{isRTL ? "فيلا استثنائية" : "Signature Villa"}</option>
                <option value="Penthouse">{isRTL ? "بنتهاوس بانورامي" : "Sky Penthouse"}</option>
                <option value="Estate">{isRTL ? "قصر / مجمع خاص" : "Private Estate"}</option>
                <option value="Chalet">{isRTL ? "شاليه بفناء داخلي" : "Courtyard Chalet"}</option>
                <option value="Pavilion">{isRTL ? "جناح زجاجي معاصر" : "Glass Pavilion"}</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#705B3F] dark:text-[#C5A880] absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Row 2: Price Range, Bedroom Count, Category Setting, Clear & Apply */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 md:gap-4 pt-1">
            {/* Price Range Selector */}
            <div className="w-full sm:w-auto flex-1 min-w-[200px] relative">
              <div className="relative">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={localFilters.priceRange || "ALL"}
                  onChange={(e) => updateLocal("priceRange", e.target.value)}
                  className="w-full h-10 pl-9 rtl:pl-7 rtl:pr-9 pr-7 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="ALL">{isRTL ? "السعر: جميع التقييمات" : "Price: All Valuations"}</option>
                  {localFilters.mode === "BUY" ? (
                    <>
                      <option value="under-35m">{isRTL ? "السعر: أقل من 35 مليون ج.م" : "Price: Under EGP 35M"}</option>
                      <option value="35m-50m">{isRTL ? "السعر: 35 – 50 مليون ج.م" : "Price: EGP 35M – 50M"}</option>
                      <option value="50m-70m">{isRTL ? "السعر: 50 – 70 مليون ج.م" : "Price: EGP 50M – 70M"}</option>
                      <option value="70m+">{isRTL ? "السعر: أكثر من 70 مليون ج.م" : "Price: EGP 70M+"}</option>
                    </>
                  ) : (
                    <>
                      <option value="under-200k">{isRTL ? "السعر: أقل من 200 ألف ج.م / شهر" : "Price: Under EGP 200K / mo"}</option>
                      <option value="200k-300k">{isRTL ? "السعر: 200 – 300 ألف ج.م / شهر" : "Price: EGP 200K – 300K / mo"}</option>
                      <option value="300k+">{isRTL ? "السعر: أكثر من 300 ألف ج.م / شهر" : "Price: EGP 300K+ / mo"}</option>
                    </>
                  )}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880] absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Beds Segmented Pills */}
            <div className="flex items-center gap-2">
              <span className="label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-wider whitespace-nowrap">
                {t("filter_min_beds")}:
              </span>
              <div className="inline-flex border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] bg-[#FAF9F6] dark:bg-[#141513]">
                {["ANY", "2+", "3+", "4+", "5+"].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => updateLocal("beds", b)}
                    className={`px-3 py-1.5 label-caps text-[0.65rem] tracking-wider transition-colors cursor-pointer ${
                      (localFilters.beds || "ANY") === b
                        ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] font-semibold"
                        : "bg-transparent text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] hover:bg-[#EAE3D8]/40 dark:hover:bg-[#202220]"
                    }`}
                  >
                    {b === "ANY" ? t("filter_beds_any") : b}
                  </button>
                ))}
              </div>
            </div>

            {/* Category / Setting Dropdown */}
            <div className="w-full sm:w-auto flex-1 min-w-[200px] relative">
              <div className="relative">
                <HomeIcon className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={localFilters.category || "ALL"}
                  onChange={(e) => updateLocal("category", e.target.value)}
                  className="w-full h-10 pl-9 rtl:pl-7 rtl:pr-9 pr-7 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="ALL">{isRTL ? "الفئة: جميع البيئات" : "Category: All Settings"}</option>
                  <option value="Gated Compound">{isRTL ? "مجمع مسور فاخر" : "Gated Compound"}</option>
                  <option value="Coastal Beachfront">{isRTL ? "إطلالة ساحلية مباشرة" : "Coastal Beachfront"}</option>
                  <option value="Urban Sanctuary">{isRTL ? "ملاذ حضري هادئ" : "Urban Sanctuary"}</option>
                  <option value="Private Grounds">{isRTL ? "أراضٍ وحدائق خاصة" : "Private Grounds"}</option>
                  <option value="Golf Frontage">{isRTL ? "إطلالة ملاعب الجولف" : "Golf Frontage"}</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880] absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Action Buttons: Clear & Apply */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={handleClear}
                className="h-10 px-5 bg-transparent hover:bg-[#FAF9F6] dark:hover:bg-[#141513] text-[#242521] dark:text-[#FAF9F6] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] hover:border-[#242521] dark:hover:border-[#FAF9F6] label-caps text-xs tracking-[0.16em] transition-colors cursor-pointer"
              >
                {t("filter_clear")}
              </button>
              <button
                type="submit"
                className="h-10 px-7 bg-[#242521] dark:bg-[#FAF9F6] hover:bg-[#705B3F] dark:hover:bg-[#C5A880] text-[#FAF9F6] dark:text-[#1A1C1A] label-caps text-xs tracking-[0.16em] transition-colors cursor-pointer border border-[#242521] dark:border-[#FAF9F6] font-medium"
              >
                {t("filter_apply")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
