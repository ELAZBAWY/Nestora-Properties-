"use client";

import { Lock } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PrivateAcquisitionCTA({ onPrivateInquiry }) {
  const { t } = useApp();

  return (
    <section className="w-full pb-20 bg-[#FAF9F6] dark:bg-[#141513] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="relative bg-[#0F100C] text-[#FAF9F6] p-8 sm:p-12 md:p-16 border border-[#242521] dark:border-[rgba(250,249,246,0.15)] overflow-hidden">
          {/* Subtle geometric architectural vector motif in the background */}
          <div className="absolute right-0 rtl:right-auto rtl:left-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="300" x2="400" y2="0" stroke="#FAF9F6" strokeWidth="1" />
              <line x1="100" y1="300" x2="400" y2="75" stroke="#FAF9F6" strokeWidth="1" />
              <line x1="200" y1="300" x2="400" y2="150" stroke="#FAF9F6" strokeWidth="1" />
              <rect x="250" y="50" width="120" height="200" stroke="#FAF9F6" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Content Left */}
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#A88F70] dark:text-[#C5A880]" />
                <span className="label-caps text-[0.6875rem] text-[#A88F70] dark:text-[#C5A880] tracking-[0.2em]">
                  {t("props_unlisted_eyebrow")}
                </span>
              </div>

              <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] font-normal tracking-[-0.015em] leading-[1.15]">
                {t("props_unlisted_title")}
              </h2>

              <p className="font-editorial-sans text-xs sm:text-sm md:text-[0.9375rem] text-[#FAF9F6]/80 leading-relaxed max-w-xl">
                {t("props_unlisted_desc")}
              </p>
            </div>

            {/* Actions Right */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <button
                onClick={() => onPrivateInquiry?.("Unlisted Private Property Acquisition")}
                className="bg-[#F8DBB8] hover:bg-[#FAF9F6] text-[#0F100C] px-8 py-4 label-caps text-xs tracking-[0.18em] transition-colors cursor-pointer border border-[#F8DBB8] text-center font-medium"
              >
                {t("props_private_inquiry")}
              </button>

              <a
                href="tel:+20227904400"
                className="bg-transparent hover:bg-[#FAF9F6]/10 text-[#FAF9F6] px-6 py-4 label-caps text-xs tracking-[0.16em] transition-colors border border-[rgba(250,249,246,0.35)] text-center flex items-center justify-center gap-2"
                dir="ltr"
              >
                <span>{t("props_direct_line")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
