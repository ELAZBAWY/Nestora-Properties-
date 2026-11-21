"use client";

import { MapPin } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertyLocationSection({ locationSection }) {
  const { t, isRTL } = useApp();

  const eyebrow = t("detail_geo_eyebrow");
  const heading = isRTL ? locationSection.headingAr || locationSection.heading : locationSection.heading;
  const subtext = isRTL
    ? locationSection.subtextAr || locationSection.subtext
    : locationSection.subtext;
  const badgeTitle = isRTL ? locationSection.badgeTitleAr || "موقع حصري مميز" : locationSection.badgeTitle;
  const badgeDescription = isRTL
    ? locationSection.badgeDescriptionAr || "موقع خاص هادئ مع تنظيم الوصول لضمان أعلى درجات الخصوصية."
    : locationSection.badgeDescription;

  return (
    <div className="space-y-6 pt-10 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] transition-colors">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em] mb-1">
            {eyebrow}
          </span>
          <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal">
            {heading}
          </h3>
        </div>
        <p className="max-w-md font-editorial-sans text-xs sm:text-sm text-[#464741] dark:text-[#A0A29C] leading-relaxed">
          {subtext}
        </p>
      </div>

      {/* Styled Map Container */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#E9E6DF] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] overflow-hidden">
        {/* Architectural Styled Map Canvas */}
        <svg
          viewBox="0 0 900 400"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Neutral Landmass */}
          <rect width="900" height="400" className="fill-[#EAE6DF] dark:fill-[#1E201E]" />

          {/* Major Arterial Roads / Ring Road Lines */}
          <path
            d="M -50,180 Q 200,120 450,220 T 950,200"
            stroke="#D5CEC2"
            strokeWidth="16"
            fill="none"
            className="dark:stroke-[#2C2E2C]"
          />
          <path
            d="M -50,180 Q 200,120 450,220 T 950,200"
            stroke="#FAF9F6"
            strokeWidth="10"
            fill="none"
            className="dark:stroke-[#3A3C3A]"
          />

          <path
            d="M 280,-20 Q 340,160 380,420"
            stroke="#D5CEC2"
            strokeWidth="14"
            fill="none"
            className="dark:stroke-[#2C2E2C]"
          />
          <path
            d="M 280,-20 Q 340,160 380,420"
            stroke="#FAF9F6"
            strokeWidth="8"
            fill="none"
            className="dark:stroke-[#3A3C3A]"
          />

          {/* Secondary Roads Grid */}
          <path d="M 120,50 L 320,380" stroke="#FAF9F6" className="dark:stroke-[#3A3C3A]" strokeWidth="4" />
          <path d="M 450,30 L 520,390" stroke="#FAF9F6" className="dark:stroke-[#3A3C3A]" strokeWidth="4" />
          <path d="M 600,0 L 720,400" stroke="#FAF9F6" className="dark:stroke-[#3A3C3A]" strokeWidth="5" />
          <path d="M 50,300 L 850,320" stroke="#FAF9F6" className="dark:stroke-[#3A3C3A]" strokeWidth="4" />
          <path d="M 200,80 L 800,80" stroke="#FAF9F6" className="dark:stroke-[#3A3C3A]" strokeWidth="3" />

          {/* Green Parks / Golf Courses */}
          <ellipse cx="220" cy="120" rx="60" ry="40" fill="#D8E2D6" opacity="0.6" className="dark:opacity-30 dark:fill-[#2A382A]" />
          <text x="220" y="125" textAnchor="middle" fontSize="9" fill="#586E53" className="dark:fill-[#8CA886]" fontFamily="sans-serif" letterSpacing="1">
            {isRTL ? "جولف قطامية هايتس" : "KATAMEYA HEIGHTS GOLF"}
          </text>

          <ellipse cx="780" cy="300" rx="70" ry="45" fill="#D8E2D6" opacity="0.5" className="dark:opacity-30 dark:fill-[#2A382A]" />
          <text x="780" y="305" textAnchor="middle" fontSize="9" fill="#586E53" className="dark:fill-[#8CA886]" fontFamily="sans-serif" letterSpacing="1">
            {isRTL ? "هايد بارك" : "HYDE PARK ENCLAVE"}
          </text>

          {/* Landmarks */}
          <circle cx="680" cy="180" r="18" fill="#D3C9B8" opacity="0.7" className="dark:fill-[#3C3E3C]" />
          <text x="680" y="175" textAnchor="middle" fontSize="8" fill="#242521" className="dark:fill-[#FAF9F6]" fontFamily="sans-serif" fontWeight="bold">
            AUC
          </text>
          <text x="680" y="185" textAnchor="middle" fontSize="6" fill="#464741" className="dark:fill-[#A0A29C]" fontFamily="sans-serif">
            {isRTL ? "الجامعة الأمريكية" : "AMERICAN UNIVERSITY"}
          </text>

          {/* Pulsing Pin for The Travertine Villa */}
          <g transform="translate(340, 160)">
            <circle cx="0" cy="0" r="24" fill="#C5A880" opacity="0.25" className="animate-ping" />
            <circle cx="0" cy="0" r="12" fill="#705B3F" opacity="0.4" />
            <circle cx="0" cy="0" r="6" fill="#242521" className="dark:fill-[#FAF9F6]" />
            <circle cx="0" cy="0" r="2.5" fill="#FAF9F6" className="dark:fill-[#141513]" />
          </g>
        </svg>

        {/* Floating Property Pin Overlay Badge */}
        <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6 max-w-xs bg-[#FAF9F6]/95 dark:bg-[#141513]/95 backdrop-blur-md border border-[#242521] dark:border-[rgba(250,249,246,0.2)] p-4 shadow-lg transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 text-[#705B3F] dark:text-[#C5A880]" />
            <span className="label-caps text-[0.625rem] text-[#1A1C1A] dark:text-[#FAF9F6] tracking-wider font-semibold">
              {badgeTitle}
            </span>
          </div>
          <p className="font-editorial-sans text-xs text-[#464741] dark:text-[#A0A29C] leading-relaxed">
            {badgeDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
