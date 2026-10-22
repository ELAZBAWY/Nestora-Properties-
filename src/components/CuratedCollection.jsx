"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { PROPERTIES, getPropertyDetailUrl } from "@/data/properties";
import { useApp } from "@/context/AppContext";

// Export for backward compatibility with Home page
export const PROPERTIES_DATA = PROPERTIES.slice(0, 3).map((p) => ({
  ...p,
  area: p.areaDisplay,
  style: p.category,
}));

export default function CuratedCollection({
  properties,
  onInquireDiscreetly,
}) {
  const { t, isRTL } = useApp();
  const displayProps = properties || PROPERTIES_DATA;

  return (
    <section id="collection" className="w-full py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#141513] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)]">
          <div className="max-w-xl">
            <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em] mb-2">
              {t("col_eyebrow")}
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal tracking-tight">
              {t("col_title")}
            </h2>
          </div>
          <p className="max-w-md font-editorial-sans text-sm md:text-[0.9375rem] text-[#464741] dark:text-[#A0A29C] leading-relaxed">
            {t("col_desc")}
          </p>
        </div>

        {/* 3-Column Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {displayProps.map((prop) => {
            const detailUrl = getPropertyDetailUrl(prop);

            const CardContent = (
              <article
                className="group bg-[#FAF9F6] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#242521] dark:hover:border-[#FAF9F6] hover:scale-[1.01] h-full"
              >
                {/* Media Container with Locked Aspect Ratio */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3D8] dark:bg-[#202220]">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Badge Top Left */}
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0F100C]/75 backdrop-blur-sm px-2.5 py-1 text-[0.65rem] label-caps text-[#FAF9F6] border border-[rgba(250,249,246,0.2)]">
                    {prop.mode === "BUY" ? t("badge_for_sale") : t("badge_for_rent")}
                  </div>

                  {/* Price Tag Overlay Bottom Right */}
                  <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 bg-[#FAF9F6] dark:bg-[#141513] px-3 py-1.5 border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-[#1A1C1A] dark:text-[#FAF9F6]">
                    <span className="price-numeral text-sm font-light text-[#1A1C1A] dark:text-[#FAF9F6]">
                      {prop.price} {prop.period || ""}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location Tag */}
                    <div className="flex items-center gap-1.5 label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] mb-2 tracking-[0.16em]">
                      <span className="w-1 h-1 bg-[#705B3F] dark:bg-[#C5A880]" />
                      <span>{prop.location}</span>
                    </div>

                    {/* Property Name */}
                    <h3 className="font-editorial-serif text-2xl font-normal text-[#1A1C1A] dark:text-[#FAF9F6] group-hover:text-[#705B3F] dark:group-hover:text-[#C5A880] transition-colors mb-2.5">
                      {prop.title}
                    </h3>

                    {/* Description */}
                    <p className="font-editorial-sans text-xs md:text-[0.8125rem] text-[#464741] dark:text-[#A0A29C] line-clamp-2 leading-relaxed mb-6">
                      {prop.description}
                    </p>
                  </div>

                  {/* Specs Row with Hairline Dividers */}
                  <div>
                    <div className="pt-4 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] grid grid-cols-3 text-center text-xs text-[#242521] dark:text-[#FAF9F6]">
                      <div className="border-r rtl:border-r-0 rtl:border-l border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] pr-2 rtl:pr-0 rtl:pl-2">
                        <span className="label-caps text-[0.65rem] text-[#464741] dark:text-[#A0A29C]">
                          {prop.beds} {t("spec_beds")}
                        </span>
                      </div>
                      <div className="border-r rtl:border-r-0 rtl:border-l border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] px-2">
                        <span className="label-caps text-[0.65rem] text-[#464741] dark:text-[#A0A29C]">
                          {prop.baths} {t("spec_baths")}
                        </span>
                      </div>
                      <div className="pl-2 rtl:pl-0 rtl:pr-2">
                        <span className="label-caps text-[0.65rem] text-[#464741] dark:text-[#A0A29C]">
                          {prop.areaDisplay || prop.area}
                        </span>
                      </div>
                    </div>

                    {/* Action Link with 4px Arrow Nudge */}
                    <div className="pt-5 mt-4 border-t border-[rgba(36,37,33,0.06)] dark:border-[rgba(250,249,246,0.06)] flex items-center justify-between hover-nudge-arrow">
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
              <Link
                key={prop.id}
                href={detailUrl}
                className="block no-underline h-full"
              >
                {CardContent}
              </Link>
            ) : (
              <div key={prop.id} className="block h-full">
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Discreet / Off-Market Callout Banner */}
        <div className="mt-12 bg-[#F4F3F1] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
          <div className="flex items-center gap-4 text-[#242521] dark:text-[#FAF9F6]">
            <div className="w-10 h-10 flex-shrink-0 border border-[#242521] dark:border-[rgba(250,249,246,0.3)] flex items-center justify-center bg-[#FAF9F6] dark:bg-[#141513]">
              <Compass className="w-5 h-5 text-[#705B3F] dark:text-[#C5A880]" />
            </div>
            <div>
              <p className="font-editorial-sans text-xs md:text-sm text-[#242521] dark:text-[#FAF9F6] leading-relaxed">
                {t("col_discreet_box")}
              </p>
            </div>
          </div>

          <button
            onClick={onInquireDiscreetly}
            className="group flex-shrink-0 inline-flex items-center gap-2 label-caps text-xs text-[#242521] dark:text-[#FAF9F6] hover:text-[#705B3F] dark:hover:text-[#C5A880] transition-colors cursor-pointer"
          >
            <span className="border-b border-[#242521] dark:border-[#FAF9F6] pb-0.5 group-hover:border-[#705B3F] dark:group-hover:border-[#C5A880]">
              {t("col_inquire_discreetly")}
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform arrow-icon-flip" />
          </button>
        </div>
      </div>
    </section>
  );
}
