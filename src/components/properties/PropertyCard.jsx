"use client";

import Link from "next/link";
import { ArrowRight, Bed, Bath, Maximize2 } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { getPropertyDetailUrl } from "@/data/properties";

export default function PropertyCard({ property, viewMode = "grid" }) {
  const { t, isRTL } = useApp();
  const detailUrl = getPropertyDetailUrl(property);

  const primaryBadgeText =
    property.primaryBadge === "FOR SALE"
      ? t("badge_for_sale")
      : property.primaryBadge === "FOR RENT"
      ? t("badge_for_rent")
      : property.primaryBadge;

  const secondaryBadgeText =
    isRTL && property.secondaryBadge === "OFF-MARKET"
      ? "خارج السوق"
      : isRTL && property.secondaryBadge === "EXCLUSIVE"
      ? "إدراج حصري"
      : property.secondaryBadge;

  if (viewMode === "list") {
    const ListCardContent = (
      <article
        className="group bg-[#FAF9F6] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] flex flex-col md:flex-row cursor-pointer transition-all duration-300 hover:border-[#242521] dark:hover:border-[#FAF9F6] hover:scale-[1.005] overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative w-full md:w-80 md:min-w-[320px] aspect-[16/10] md:aspect-auto overflow-hidden bg-[#EAE3D8] dark:bg-[#202220]">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0F100C]/85 backdrop-blur-sm px-2.5 py-1 text-[0.625rem] label-caps text-[#FAF9F6] border border-[rgba(250,249,246,0.2)]">
            {primaryBadgeText}
          </div>
          {property.secondaryBadge && (
            <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-[#FAF9F6]/95 dark:bg-[#141513]/95 backdrop-blur-sm px-2.5 py-1 text-[0.625rem] label-caps text-[#242521] dark:text-[#FAF9F6] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.2)]">
              {secondaryBadgeText}
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
          <div>
            {/* Location & Reference datum */}
            <div className="flex items-center justify-between label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.16em] mb-2 pb-2 border-b border-[rgba(36,37,33,0.06)] dark:border-[rgba(250,249,246,0.06)]">
              <span>{property.location}</span>
              <span className="text-[#8C8C86] dark:text-[#70726B]">{property.ref}</span>
            </div>

            {/* Title */}
            <h3 className="font-editorial-serif text-2xl md:text-3xl font-normal text-[#1A1C1A] dark:text-[#FAF9F6] group-hover:text-[#705B3F] dark:group-hover:text-[#C5A880] transition-colors mb-2">
              {property.title}
            </h3>

            {/* Price */}
            <div className="price-numeral text-xl font-light text-[#1A1C1A] dark:text-[#FAF9F6] mb-3">
              {property.price}{" "}
              {property.period && (
                <span className="text-xs font-normal text-[#705B3F] dark:text-[#C5A880] font-editorial-sans tracking-normal">
                  {property.period === "/ month" ? t("spec_per_month") : property.period}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="font-editorial-sans text-xs sm:text-sm text-[#464741] dark:text-[#A0A29C] line-clamp-2 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Specs & Action Link */}
          <div className="pt-4 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-[#242521] dark:text-[#FAF9F6] font-editorial-sans">
              <span className="inline-flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
                {property.beds} {t("spec_beds")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Bath className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
                {property.baths} {t("spec_baths")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
                {property.areaDisplay}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 hover-nudge-arrow">
              <span className="label-caps text-xs text-[#242521] dark:text-[#FAF9F6] group-hover:text-[#705B3F] dark:group-hover:text-[#C5A880] transition-colors">
                {t("col_view_residence")}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#242521] dark:text-[#FAF9F6] group-hover:text-[#705B3F] dark:group-hover:text-[#C5A880] arrow-icon arrow-icon-flip" />
            </div>
          </div>
        </div>
      </article>
    );

    return detailUrl ? (
      <Link href={detailUrl} className="block no-underline">
        {ListCardContent}
      </Link>
    ) : (
      ListCardContent
    );
  }

  // Grid View (Default)
  const GridCardContent = (
    <article
      className="group bg-[#FAF9F6] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#242521] dark:hover:border-[#FAF9F6] hover:scale-[1.01] overflow-hidden h-full"
    >
      {/* Media Container with Locked Aspect Ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3D8] dark:bg-[#202220]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Primary Badge Top Left */}
        <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0F100C]/85 backdrop-blur-sm px-2.5 py-1 text-[0.625rem] label-caps text-[#FAF9F6] border border-[rgba(250,249,246,0.2)]">
          {primaryBadgeText}
        </div>

        {/* Secondary Badge Top Right */}
        {property.secondaryBadge && (
          <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-[#FAF9F6]/95 dark:bg-[#141513]/95 backdrop-blur-sm px-2.5 py-1 text-[0.625rem] label-caps text-[#242521] dark:text-[#FAF9F6] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.2)]">
            {secondaryBadgeText}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Location & Reference row */}
          <div className="flex items-center justify-between label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.16em] mb-2.5">
            <span>{property.location}</span>
            <span className="text-[#8C8C86] dark:text-[#70726B]">{property.ref}</span>
          </div>

          {/* Property Name */}
          <h3 className="font-editorial-serif text-2xl font-normal text-[#1A1C1A] dark:text-[#FAF9F6] group-hover:text-[#705B3F] dark:group-hover:text-[#C5A880] transition-colors mb-2">
            {property.title}
          </h3>

          {/* Price */}
          <div className="price-numeral text-lg font-light text-[#1A1C1A] dark:text-[#FAF9F6]">
            {property.price}{" "}
            {property.period && (
              <span className="text-xs font-normal text-[#705B3F] dark:text-[#C5A880] font-editorial-sans tracking-normal">
                {property.period === "/ month" ? t("spec_per_month") : property.period}
              </span>
            )}
          </div>
        </div>

        {/* Specs Row with Icons */}
        <div>
          <div className="pt-4 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] grid grid-cols-3 text-center text-xs text-[#242521] dark:text-[#FAF9F6] font-editorial-sans">
            <div className="border-r rtl:border-r-0 rtl:border-l border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] pr-1 rtl:pr-0 rtl:pl-1 flex items-center justify-center gap-1.5 text-xs text-[#464741] dark:text-[#A0A29C]">
              <Bed className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
              <span>{property.beds} {t("spec_beds")}</span>
            </div>
            <div className="border-r rtl:border-r-0 rtl:border-l border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] px-1 flex items-center justify-center gap-1.5 text-xs text-[#464741] dark:text-[#A0A29C]">
              <Bath className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
              <span>{property.baths} {t("spec_baths")}</span>
            </div>
            <div className="pl-1 rtl:pl-0 rtl:pr-1 flex items-center justify-center gap-1.5 text-xs text-[#464741] dark:text-[#A0A29C]">
              <Maximize2 className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
              <span>{property.areaDisplay}</span>
            </div>
          </div>

          {/* Action Link with 4px Arrow Nudge */}
          <div className="pt-4 mt-4 border-t border-[rgba(36,37,33,0.06)] dark:border-[rgba(250,249,246,0.06)] flex items-center justify-between hover-nudge-arrow">
            <span className="label-caps text-[0.6875rem] text-[#242521] dark:text-[#FAF9F6] group-hover:text-[#705B3F] dark:group-hover:text-[#C5A880] transition-colors">
              {t("col_view_residence")}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#242521] dark:text-[#FAF9F6] group-hover:text-[#705B3F] dark:group-hover:text-[#C5A880] arrow-icon arrow-icon-flip" />
          </div>
        </div>
      </div>
    </article>
  );

  return detailUrl ? (
    <Link href={detailUrl} className="block no-underline h-full">
      {GridCardContent}
    </Link>
  ) : (
    <div className="block h-full">
      {GridCardContent}
    </div>
  );
}
