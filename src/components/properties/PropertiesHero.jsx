"use client";

import { useApp } from "@/context/AppContext";

export default function PropertiesHero() {
  const { t } = useApp();

  return (
    <section className="w-full pt-12 md:pt-16 pb-8 bg-[#FAF9F6] dark:bg-[#141513] border-b border-[rgba(36,37,33,0.06)] dark:border-[rgba(250,249,246,0.06)] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Left Column: Heading & Narrative */}
          <div className="max-w-2xl space-y-3">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#705B3F] dark:bg-[#C5A880]" />
              <span className="label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em]">
                {t("props_hero_season")}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal tracking-[-0.015em] leading-[1.12]">
              {t("props_hero_title")}
            </h1>

            {/* Subtitle */}
            <p className="font-editorial-sans text-sm sm:text-base text-[#464741] dark:text-[#A0A29C] leading-relaxed max-w-xl">
              {t("props_hero_desc")}
            </p>
          </div>

          {/* Right Column: Market Metrics */}
          <div className="flex items-center gap-8 sm:gap-12 pb-2 self-start lg:self-end border-l-0 sm:border-l rtl:sm:border-l-0 rtl:sm:border-r sm:border-[rgba(36,37,33,0.12)] dark:sm:border-[rgba(250,249,246,0.12)] sm:pl-8 rtl:sm:pl-0 rtl:sm:pr-8">
            {/* Market Index */}
            <div>
              <span className="block label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.18em] mb-1">
                {t("props_market_index")}
              </span>
              <span className="font-editorial-serif text-2xl sm:text-3xl font-normal text-[#1A1C1A] dark:text-[#FAF9F6] tracking-tight">
                EGX-RE 142.8
              </span>
            </div>

            {/* Coverage */}
            <div>
              <span className="block label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.18em] mb-1">
                {t("props_coverage")}
              </span>
              <span className="font-editorial-sans text-xs sm:text-sm text-[#242521] dark:text-[#FAF9F6] tracking-wide">
                {t("props_coverage_val")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
