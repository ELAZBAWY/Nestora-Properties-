"use client";

import { ArrowDown } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function HeroSection({ onExplore, onContact }) {
  const { t } = useApp();

  return (
    <section data-scroll-reveal className="nestora-enter relative w-full min-h-[92vh] flex flex-col justify-between text-[#FAF9F6] overflow-hidden">
      {/* Background Architectural Photo with Atmospheric Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=88"
          alt="Curated architectural luxury villa with reflecting pool at dusk"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
        />
        {/* Subtle Warm Sand and Charcoal overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F100C]/90 via-[#1A1C1A]/40 to-[#0F100C]/50" />
        <div className="absolute inset-0 bg-[#242521]/20 mix-blend-multiply" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          {/* Registry Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#0F100C]/60 border border-[rgba(250,249,246,0.3)] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#A88F70]" />
            <span className="label-caps text-[0.65rem] tracking-[0.2em] text-[#FAF9F6]">
              {t("hero_registry")}
            </span>
          </div>

          {/* Display Hero Title */}
          <h1 className="font-editorial-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal leading-[1.08] tracking-[-0.015em] text-[#FAF9F6]">
            {t("hero_title")}
          </h1>

          {/* Subhead */}
          <p className="font-editorial-sans text-base sm:text-lg md:text-xl font-normal text-[#FAF9F6]/85 max-w-2xl leading-relaxed tracking-[-0.01em]">
            {t("hero_subtitle")}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExplore}
              className="nestora-interactive bg-[#FAF9F6] text-[#0F100C] hover:bg-[#EAE3D8] px-8 py-3.5 label-caps text-xs tracking-[0.16em] transition-all cursor-pointer border border-[#FAF9F6] font-medium"
            >
              {t("hero_cta_explore")}
            </button>
            <button
              onClick={onContact}
              className="nestora-interactive bg-transparent hover:bg-[#FAF9F6]/10 text-[#FAF9F6] px-8 py-3.5 label-caps text-xs tracking-[0.16em] transition-all cursor-pointer border border-[rgba(250,249,246,0.6)] font-medium"
            >
              {t("hero_cta_contact")}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Architectural Datum / Metadata Row */}
      <div className="relative z-10 w-full border-t border-[rgba(250,249,246,0.18)] bg-[#0F100C]/60 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Col 1 */}
          <div className="border-l rtl:border-l-0 rtl:border-r border-[rgba(250,249,246,0.2)] pl-4 rtl:pl-0 rtl:pr-4">
            <span className="block label-caps text-[0.65rem] text-[#A88F70] mb-1">
              {t("hero_geo_label")}
            </span>
            <span className="font-editorial-sans text-xs md:text-sm text-[#FAF9F6] tracking-wide">
              {t("hero_geo_val")}
            </span>
          </div>

          {/* Col 2 */}
          <div className="border-l rtl:border-l-0 rtl:border-r border-[rgba(250,249,246,0.2)] pl-4 rtl:pl-0 rtl:pr-4">
            <span className="block label-caps text-[0.65rem] text-[#A88F70] mb-1">
              {t("hero_style_label")}
            </span>
            <span className="font-editorial-sans text-xs md:text-sm text-[#FAF9F6] tracking-wide">
              {t("hero_style_val")}
            </span>
          </div>

          {/* Col 3 */}
          <div className="border-l rtl:border-l-0 rtl:border-r border-[rgba(250,249,246,0.2)] pl-4 rtl:pl-0 rtl:pr-4">
            <span className="block label-caps text-[0.65rem] text-[#A88F70] mb-1">
              {t("hero_privacy_label")}
            </span>
            <span className="font-editorial-sans text-xs md:text-sm text-[#FAF9F6] tracking-wide">
              {t("hero_privacy_val")}
            </span>
          </div>

          {/* Col 4: Scroll Indicator */}
          <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end rtl:md:justify-start">
            <a
              href="#filter-bar"
              className="group inline-flex items-center gap-2 label-caps text-[0.65rem] text-[#FAF9F6]/80 hover:text-[#FAF9F6] transition-colors"
            >
              <span>{t("hero_scroll")}</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#A88F70]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
