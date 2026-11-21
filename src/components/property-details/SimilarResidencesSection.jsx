"use client";

import Link from "next/link";
import { ArrowRight, Bed, Maximize2 } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function SimilarResidencesSection({ similarResidences }) {
  const { t, isRTL } = useApp();
  const similarTitleAr = {
    "The Travertine Villa": "فيلا الترافرتين",
    "The Olive Grove Estate": "قصر بستان الزيتون",
    "Azure Waters Lagoon Villa": "فيلا مياه أزور الشاطئية",
  };
  const similarCategoryAr = {
    "Gated Compound": "مجمع سكني مسور",
    "Integrated Estate": "قصر ومزرعة متكاملة",
    "Beachfront Villa": "فيلا شاطئية فاخرة",
    "Glass Pavilion Villa": "فيلا جناح زجاجي",
  };

  return (
    <section className="w-full bg-[#FAF9F6] dark:bg-[#141513] py-20 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)]">
          <div>
            <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em] mb-2">
              {t("detail_similar_eyebrow")}
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal tracking-tight">
              {t("detail_similar_heading")}
            </h2>
          </div>

          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 label-caps text-xs text-[#242521] dark:text-[#FAF9F6] hover:text-[#705B3F] dark:hover:text-[#C5A880] transition-colors"
          >
            <span>{t("detail_similar_explore_all")}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform arrow-icon-flip" />
          </Link>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {similarResidences.map((item) => (
            <Link
              key={item.id}
              href={item.href || "/properties"}
              className="group bg-[#FAF9F6] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#242521] dark:hover:border-[#FAF9F6] hover:scale-[1.01] overflow-hidden no-underline"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3D8] dark:bg-[#202220]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0F100C]/85 px-2.5 py-1 text-[0.625rem] label-caps text-[#FAF9F6] border border-[rgba(250,249,246,0.2)]">
                  {isRTL && item.locationBadge === "EL GOUNA"
                    ? "الجونة"
                    : isRTL && item.locationBadge === "PALM HILLS"
                    ? "بالم هيلز"
                    : isRTL && item.locationBadge === "SHEIKH ZAYED"
                    ? "الشيخ زايد"
                    : item.locationBadge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.16em] block mb-1.5">
                    {isRTL ? item.categoryAr || similarCategoryAr[item.category] || item.category : item.category}
                  </span>
                  <h3 className="font-editorial-serif text-2xl font-normal text-[#1A1C1A] dark:text-[#FAF9F6] group-hover:text-[#705B3F] dark:group-hover:text-[#C5A880] transition-colors mb-2">
                    {isRTL ? item.titleAr || similarTitleAr[item.title] || item.title : item.title}
                  </h3>
                  <p className="font-editorial-sans text-xs text-[#464741] dark:text-[#A0A29C] line-clamp-2 leading-relaxed">
                    {isRTL ? item.descriptionAr || "إقامة خاصة بتفاصيل معمارية راقية وموقع استثنائي." : item.description}
                  </p>
                </div>

                {/* Specs and Price */}
                <div>
                  <div className="price-numeral text-lg font-light text-[#1A1C1A] dark:text-[#FAF9F6] mb-3">
                    {item.price}
                  </div>

                  <div className="pt-3 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] flex items-center justify-between text-xs text-[#464741] dark:text-[#A0A29C] font-editorial-sans">
                    <span className="inline-flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
                      {item.beds}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
                      {item.area}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
