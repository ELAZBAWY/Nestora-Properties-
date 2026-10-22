"use client";

import { MapPin } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertyHeadingPrice({ detail }) {
  const { t, isRTL } = useApp();

  const statusBadgeText =
    detail.statusBadge === "FOR SALE"
      ? t("badge_for_sale")
      : detail.statusBadge === "FOR RENT"
      ? t("badge_for_rent")
      : detail.statusBadge;

  const secondaryBadgeText =
    detail.secondaryBadge === "EXCLUSIVE LISTING"
      ? t("detail_exclusive")
      : isRTL && detail.secondaryBadge === "EXCLUSIVE"
      ? "إدراج حصري"
      : detail.secondaryBadge;

  const priceNoteText =
    detail.priceNote === "Mortgage eligibility from 2.1M down"
      ? t("detail_mortgage_note")
      : detail.priceNote;

  return (
    <section className="w-full bg-[#FAF9F6] dark:bg-[#141513] pt-8 pb-6 border-b border-[rgba(36,37,33,0.06)] dark:border-[rgba(250,249,246,0.06)] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          {/* Left: Badges, Title, Location */}
          <div className="space-y-3">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#0F100C] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] px-2.5 py-1 text-[0.625rem] label-caps tracking-[0.16em] border border-[#0F100C] dark:border-[#FAF9F6] font-medium">
                {statusBadgeText}
              </span>
              <span className="bg-[#F8DBB8]/60 dark:bg-[#1A1C1A] text-[#705B3F] dark:text-[#C5A880] px-2.5 py-1 text-[0.625rem] label-caps tracking-[0.16em] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] font-semibold">
                {secondaryBadgeText}
              </span>
              <span className="bg-[#FAF9F6] dark:bg-[#141513] text-[#705B3F] dark:text-[#C5A880] px-2.5 py-1 text-[0.625rem] label-caps tracking-[0.16em] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)]">
                {detail.ref}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1A1C1A] dark:text-[#FAF9F6] font-normal tracking-[-0.015em] leading-[1.12]">
              {detail.title}
            </h1>

            {/* Location */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-editorial-sans text-[#464741] dark:text-[#A0A29C]">
              <MapPin className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880] shrink-0" />
              <span>{detail.districtLocation}</span>
            </div>
          </div>

          {/* Right: Price & Currency Conversion */}
          <div className="lg:text-right rtl:lg:text-left pt-2 lg:pt-0 border-t lg:border-t-0 border-[rgba(36,37,33,0.08)] dark:border-[rgba(250,249,246,0.08)]">
            <span className="block label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.18em] mb-1">
              {t("detail_price_label")}
            </span>
            <div className="font-editorial-sans text-3xl sm:text-4xl font-normal text-[#1A1C1A] dark:text-[#FAF9F6] tracking-tight">
              {detail.price}
            </div>
            <div className="font-editorial-sans text-xs text-[#705B3F] dark:text-[#C5A880] mt-1 tracking-wide">
              <span>{detail.priceUSD}</span>
              <span className="mx-1.5 text-[#8C8C86] dark:text-[#70726B]">•</span>
              <span className="text-[#464741] dark:text-[#A0A29C]">{priceNoteText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
