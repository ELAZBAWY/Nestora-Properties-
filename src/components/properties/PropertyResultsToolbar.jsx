"use client";

import { LayoutGrid, List, ChevronDown } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertyResultsToolbar({
  resultsCount = 6,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}) {
  const { t } = useApp();

  return (
    <div className="w-full bg-[#FAF9F6] dark:bg-[#141513] py-5 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Results Count & Verified Badge */}
        <div className="flex items-center gap-2.5">
          <span className="font-editorial-sans text-xs sm:text-sm text-[#1A1C1A] dark:text-[#FAF9F6]">
            {t("props_showing_count", { count: resultsCount })}
          </span>
          <span className="text-[#8C8C86] dark:text-[#70726B] text-xs">•</span>
          <div className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#705B3F] dark:bg-[#C5A880]" />
            <span className="label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.16em]">
              {t("props_all_verified")}
            </span>
          </div>
        </div>

        {/* Sort & Grid/List Toggles */}
        <div className="flex items-center gap-4 self-end sm:self-auto">
          {/* Sort Selector */}
          <div className="relative flex items-center gap-1.5">
            <label htmlFor="sort-select" className="label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] tracking-wider whitespace-nowrap">
              {t("props_sort_label")}
            </label>
            <div className="relative">
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="h-8 pl-2 rtl:pl-6 rtl:pr-2 pr-6 bg-transparent border-0 text-xs font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] font-medium focus:outline-none appearance-none cursor-pointer"
              >
                <option value="featured" className="dark:bg-[#141513]">{t("props_sort_featured")}</option>
                <option value="price-asc" className="dark:bg-[#141513]">{t("props_sort_price_asc")}</option>
                <option value="price-desc" className="dark:bg-[#141513]">{t("props_sort_price_desc")}</option>
                <option value="area-desc" className="dark:bg-[#141513]">{t("props_sort_area_desc")}</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880] absolute right-1 rtl:right-auto rtl:left-1 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="h-4 w-[1px] bg-[rgba(36,37,33,0.15)] dark:bg-[rgba(250,249,246,0.15)]" />

          {/* Grid / List Mode Icons */}
          <div className="inline-flex items-center gap-1 border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] p-0.5 bg-[#FAF9F6] dark:bg-[#1A1C1A]">
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              className={`p-1.5 transition-colors cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A]"
                  : "text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6]"
              }`}
              aria-label="Grid View"
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              className={`p-1.5 transition-colors cursor-pointer ${
                viewMode === "list"
                  ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A]"
                  : "text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6]"
              }`}
              aria-label="List View"
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
