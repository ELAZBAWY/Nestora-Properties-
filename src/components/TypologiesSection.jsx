"use client";

import { ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const TYPOLOGIES_DATA = [
  {
    id: "penthouse",
    countEn: "14 RESIDENCES",
    countAr: "14 مسكناً",
    titleEn: "Apartments & Sky Penthouses",
    titleAr: "الشقق وشقق البنتهاوس البانورامية",
    descEn:
      "Elevated sanctuary living with sweeping city views, expansive terraces, and curated concierge access.",
    descAr:
      "ملاذات سكنية شاهقة بإطلالات ساحرة على أفق المدينة وتراسات فسيحة وخدمات كونسيرج خاصة.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "villa",
    countEn: "18 ESTATES",
    countAr: "18 قصراً وفيلا",
    titleEn: "Signature Villas & Estates",
    titleAr: "الفيلات والقصور المعمارية الخاصة",
    descEn:
      "Private compounds designed with sacred materiality, internal courtyards, and legacy scale.",
    descAr:
      "مجمعات وقصور خاصة مصممة بأصالة المواد المعمارية، وأفنية أندلسية داخلية، ومساحات استثنائية.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "commercial",
    countEn: "08 SPACES",
    countAr: "08 مقرات تجارية",
    titleEn: "Commercial & Prime Retail",
    titleAr: "المقرات التجارية والمساحات الإدارية",
    descEn:
      "Boutique headquarters, diplomatic embassies, and premier cultural retail spaces.",
    descAr:
      "مقرات إدارية رئيسية، وسفارات دبلوماسية، ومساحات تجارية وثقافية مرموقة.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function TypologiesSection({ onSelectTypology }) {
  const { t, isRTL } = useApp();

  return (
    <section id="typologies" className="w-full py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#141513] border-t border-[rgba(36,37,33,0.08)] dark:border-[rgba(250,249,246,0.08)] transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em] mb-2">
            {t("typologies_eyebrow")}
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal tracking-tight mb-4">
            {t("typologies_title")}
          </h2>
          <p className="font-editorial-sans text-sm md:text-base text-[#464741] dark:text-[#A0A29C] leading-relaxed">
            {t("typologies_subtitle")}
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TYPOLOGIES_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectTypology(item.id)}
              className="group relative bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] overflow-hidden flex flex-col justify-end min-h-[480px] p-8 cursor-pointer transition-all duration-300 hover:border-[#242521] dark:hover:border-[#FAF9F6]"
            >
              {/* Background Architectural Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={isRTL ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.75] contrast-[1.05]"
                />
                {/* Layered dark gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F100C] via-[#0F100C]/65 to-transparent" />
              </div>

              {/* Badge Top Right */}
              <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-10 bg-[#0F100C]/80 backdrop-blur-sm border border-[rgba(250,249,246,0.25)] px-3 py-1">
                <span className="label-caps text-[0.625rem] text-[#FAF9F6] tracking-[0.18em]">
                  {isRTL ? item.countAr : item.countEn}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 flex flex-col space-y-3">
                <h3 className="font-editorial-serif text-2xl sm:text-3xl font-normal text-[#FAF9F6] group-hover:text-[#EAE3D8] transition-colors leading-snug">
                  {isRTL ? item.titleAr : item.titleEn}
                </h3>

                <p className="font-editorial-sans text-xs sm:text-sm text-[#FAF9F6]/80 leading-relaxed max-w-sm">
                  {isRTL ? item.descAr : item.descEn}
                </p>

                <div className="pt-4 border-t border-[rgba(250,249,246,0.2)] flex items-center justify-between hover-nudge-arrow">
                  <span className="label-caps text-xs text-[#FAF9F6] tracking-[0.16em] group-hover:text-[#EAE3D8]">
                    {t("typologies_explore_btn")}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FAF9F6] group-hover:text-[#EAE3D8] arrow-icon arrow-icon-flip" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
