"use client";

import { useApp } from "@/context/AppContext";

export default function PhilosophySection() {
  const { t, isRTL } = useApp();

  return (
    <section id="philosophy" className="w-full py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#141513] border-t border-[rgba(36,37,33,0.08)] dark:border-[rgba(250,249,246,0.08)] transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Philosophical Manifesto & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em]">
              {t("phil_eyebrow")}
            </span>

            {/* Blockquote with Serifs */}
            <blockquote className="font-editorial-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal leading-[1.25] tracking-tight">
              {t("phil_quote")}
            </blockquote>

            {/* Narrative Body */}
            <p className="font-editorial-sans text-sm md:text-base text-[#464741] dark:text-[#A0A29C] leading-relaxed">
              {t("phil_body")}
            </p>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-[rgba(36,37,33,0.12)] dark:border-[rgba(250,249,246,0.12)] flex items-center gap-4">
              <div>
                <span className="block label-caps text-xs text-[#1A1C1A] dark:text-[#FAF9F6] tracking-[0.14em]">
                  {t("phil_founder_name")}
                </span>
                <span className="text-xs font-editorial-sans text-[#705B3F] dark:text-[#C5A880]">
                  {t("phil_founder_role")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Key Metrics */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            {/* Architectural Photo: Spiral staircase with skylight */}
            <div className="relative aspect-[4/3] bg-[#EAE3D8] dark:bg-[#202220] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=88"
                alt="Monolithic architectural spiral staircase illuminated by natural oculus skylight"
                className="w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.92]"
              />
            </div>

            {/* 3 Metric Columns with Hairline Separation */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)]">
              {/* Stat 1 */}
              <div className="border-r rtl:border-r-0 rtl:border-l border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] pr-3 rtl:pr-0 rtl:pl-3">
                <span className="font-editorial-serif text-3xl sm:text-4xl text-[#1A1C1A] dark:text-[#FAF9F6] block font-normal">
                  15+
                </span>
                <span className="label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.14em] block mt-1">
                  {t("phil_stat_mastery")}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="border-r rtl:border-r-0 rtl:border-l border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] px-3">
                <span className="font-editorial-serif text-3xl sm:text-4xl text-[#1A1C1A] dark:text-[#FAF9F6] block font-normal">
                  1.8B+
                </span>
                <span className="label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.14em] block mt-1">
                  {t("phil_stat_portfolio")}
                </span>
              </div>

              {/* Stat 3 */}
              <div className="pl-3 rtl:pl-0 rtl:pr-3">
                <span className="font-editorial-serif text-3xl sm:text-4xl text-[#1A1C1A] dark:text-[#FAF9F6] block font-normal">
                  98%
                </span>
                <span className="label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.14em] block mt-1">
                  {t("phil_stat_discretion")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
