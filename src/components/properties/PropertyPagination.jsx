"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertyPagination({
  currentPage = 1,
  totalPages = 5,
  currentCount = 6,
  totalProperties = 30,
  totalListings = 29,
  onPageChange,
}) {
  const { t, isRTL } = useApp();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full bg-[#FAF9F6] dark:bg-[#141513] pb-7 pt-4 border-t border-[rgba(36,37,33,0.06)] dark:border-[rgba(250,249,246,0.06)] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Summary note */}
        <div className="font-editorial-sans text-xs sm:text-sm text-[#464741] dark:text-[#A0A29C]">
          {t("props_page_summary", {
            page: currentPage,
            total: totalPages,
            count: totalProperties,
            totalListings: totalListings,
          })}
        </div>

        {/* Right: Page Buttons & Controls */}
        <div className="inline-flex items-center gap-2">
          {/* Previous button if past page 1 */}
          {currentPage > 1 && (
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="px-3.5 py-2 border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] hover:border-[#242521] dark:hover:border-[#FAF9F6] text-[#242521] dark:text-[#FAF9F6] label-caps text-xs tracking-wider transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 arrow-icon-flip" />
              <span>{t("props_prev")}</span>
            </button>
          )}

          {/* Numbered Page Buttons */}
          <div className="inline-flex gap-1">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                className={`w-9 h-9 flex items-center justify-center font-editorial-sans text-xs transition-colors cursor-pointer border ${
                  currentPage === p
                    ? "bg-[#242521] dark:bg-[#FAF9F6] border-[#242521] dark:border-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] font-medium"
                    : "bg-[#FAF9F6] dark:bg-[#1A1C1A] border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-[#242521] dark:text-[#FAF9F6] hover:border-[#242521] dark:hover:border-[#FAF9F6]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Next button */}
          {currentPage < totalPages && (
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="px-4 py-2 border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] hover:border-[#242521] dark:hover:border-[#FAF9F6] text-[#242521] dark:text-[#FAF9F6] label-caps text-xs tracking-wider transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{t("props_next")}</span>
              <ArrowRight className="w-3.5 h-3.5 arrow-icon-flip" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
