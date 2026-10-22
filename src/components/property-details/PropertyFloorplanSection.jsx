"use client";

import { useState } from "react";
import { Download, Check, FileText } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertyFloorplanSection({
  floorplan,
  propertyTitle = "The Travertine Villa",
  refCode = "NST-091",
}) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const { t, isRTL } = useApp();

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      const blob = new Blob(
        [
          `NESTORA PROPERTIES — ARCHITECTURAL DOSSIER
Property: ${propertyTitle} (Ref: ${refCode})
Gross Floor Area: ${floorplan?.specs?.[0]?.val || "Architectural Footprint"}
Level: ${floorplan?.heading || "Primary Floorplan Level"}
Authorized by: NESTORA Private Advisory`,
        ],
        { type: "text/plain" }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${propertyTitle.replace(/[^a-zA-Z0-9]/g, "-")}-Architectural-Plan.txt`;
      a.click();
      URL.revokeObjectURL(url);
      setTimeout(() => setDownloaded(false), 4000);
    }, 800);
  };

  const headingText = isRTL ? "المستوى الأول: الحديقة ومنطقة الاستقبال" : floorplan.heading;
  const descriptionText = isRTL
    ? "تشمل الوثائق المعمارية الكاملة المخططات الميكانيكية والكهربائية والإنسيابية الإنشائية وواجهات CAD الدقيقة للتصميم الداخلي."
    : floorplan.description;

  return (
    <div className="space-y-6 pt-10 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] transition-colors">
      <div className="space-y-1">
        <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em]">
          {t("detail_floor_heading")}
        </span>
      </div>

      <div className="bg-[#F8F7F4] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-colors">
        {/* Left: Architectural Floorplan SVG Diagram (5 cols) */}
        <div className="md:col-span-5 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] p-4 flex flex-col items-center justify-center">
          <svg
            viewBox="0 0 320 220"
            className="w-full h-auto text-[#242521] dark:text-[#FAF9F6]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            {/* Outer Perimeter Wall */}
            <rect x="20" y="20" width="280" height="180" strokeWidth="2" stroke="currentColor" />

            {/* Central Atrium */}
            <rect x="120" y="70" width="80" height="80" strokeDasharray="3 3" stroke="#C5A880" />
            <text x="160" y="115" textAnchor="middle" fontSize="8" fill="#C5A880" stroke="none" fontFamily="sans-serif">
              {isRTL ? "البهو الأوسط" : "CENTRAL ATRIUM"}
            </text>

            {/* Rooms Divisions */}
            <line x1="120" y1="20" x2="120" y2="70" stroke="currentColor" />
            <line x1="200" y1="20" x2="200" y2="70" stroke="currentColor" />
            <line x1="20" y1="110" x2="120" y2="110" stroke="currentColor" />
            <line x1="200" y1="120" x2="300" y2="120" stroke="currentColor" />
            <line x1="120" y1="150" x2="120" y2="200" stroke="currentColor" />
            <line x1="200" y1="150" x2="200" y2="200" stroke="currentColor" />

            {/* Room Labels */}
            <text x="65" y="60" textAnchor="middle" fontSize="7" fill="currentColor" stroke="none" opacity="0.8" fontFamily="sans-serif">
              {isRTL ? "الصالون الرئيسي" : "GRAND SALON"}
            </text>
            <text x="65" y="155" textAnchor="middle" fontSize="7" fill="currentColor" stroke="none" opacity="0.8" fontFamily="sans-serif">
              {isRTL ? "جناح الطعام" : "DINING PAVILION"}
            </text>
            <text x="160" y="45" textAnchor="middle" fontSize="7" fill="currentColor" stroke="none" opacity="0.8" fontFamily="sans-serif">
              {isRTL ? "المدخل الرسمي" : "FORMAL FOYER"}
            </text>
            <text x="250" y="65" textAnchor="middle" fontSize="7" fill="currentColor" stroke="none" opacity="0.8" fontFamily="sans-serif">
              {isRTL ? "مطبخ الشيف" : "CHEF'S KITCHEN"}
            </text>
            <text x="250" y="165" textAnchor="middle" fontSize="7" fill="currentColor" stroke="none" opacity="0.8" fontFamily="sans-serif">
              {isRTL ? "جناح الضيوف" : "GUEST SUITE"}
            </text>
            <text x="160" y="180" textAnchor="middle" fontSize="7" fill="#C5A880" stroke="none" fontFamily="sans-serif">
              {isRTL ? "منصة المسبح (جنوب)" : "POOL DECK (SOUTH)"}
            </text>

            {/* Scale Marker */}
            <line x1="230" y1="195" x2="290" y2="195" strokeWidth="1.5" stroke="currentColor" opacity="0.5" />
            <text x="260" y="190" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.6" stroke="none" fontFamily="sans-serif">
              {isRTL ? "مقياس الرسم 1:100" : "SCALE 1:100"}
            </text>
          </svg>
          <span className="label-caps text-[0.55rem] text-[#705B3F] dark:text-[#C5A880] tracking-widest mt-2">
            {isRTL ? "مخطط هندسي • المستوى 01 (الاستقبال)" : "SCHEMATIC • LEVEL 01 (GROUND RECEPTION)"}
          </span>
        </div>

        {/* Right: Narrative & Download CTA (7 cols) */}
        <div className="md:col-span-7 space-y-4">
          <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal">
            {headingText}
          </h3>

          <p className="font-editorial-sans text-xs sm:text-sm text-[#464741] dark:text-[#A0A29C] leading-relaxed">
            {descriptionText}
          </p>

          <div className="pt-2">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="bg-[#242521] dark:bg-[#FAF9F6] hover:bg-[#705B3F] dark:hover:bg-[#C5A880] text-[#FAF9F6] dark:text-[#1A1C1A] px-6 py-3.5 label-caps text-xs tracking-[0.16em] inline-flex items-center gap-2.5 transition-colors cursor-pointer border border-[#242521] dark:border-[#FAF9F6] font-medium"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-700" />
                  <span>{t("detail_plan_dispatched")}</span>
                </>
              ) : downloading ? (
                <>
                  <FileText className="w-4 h-4 animate-pulse" />
                  <span>{t("detail_plan_preparing")}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#F8DBB8] dark:text-[#705B3F]" />
                  <span>{t("detail_download_plan")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
