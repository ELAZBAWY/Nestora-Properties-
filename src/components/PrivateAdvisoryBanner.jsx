"use client";

import { useApp } from "@/context/AppContext";

export default function PrivateAdvisoryBanner({ onScheduleAdvisory }) {
  const { t } = useApp();

  return (
    <section id="advisory" className="w-full py-16 md:py-24 bg-[#FAF9F6] dark:bg-[#141513] transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-[#F4EFE6] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] p-8 md:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transition-colors">
          {/* Narrative Content */}
          <div className="max-w-2xl space-y-4">
            <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em]">
              {t("advisory_eyebrow")}
            </span>

            <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal tracking-tight">
              {t("advisory_title")}
            </h2>

            <p className="font-editorial-sans text-sm md:text-base text-[#464741] dark:text-[#A0A29C] leading-relaxed max-w-xl">
              {t("advisory_desc")}
            </p>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <button
              onClick={onScheduleAdvisory}
              className="w-full lg:w-auto bg-[#242521] dark:bg-[#FAF9F6] hover:bg-[#705B3F] dark:hover:bg-[#C5A880] text-[#FAF9F6] dark:text-[#1A1C1A] px-8 py-4 label-caps text-xs tracking-[0.18em] transition-colors cursor-pointer border border-[#242521] dark:border-[#FAF9F6] font-medium"
            >
              {t("advisory_btn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
