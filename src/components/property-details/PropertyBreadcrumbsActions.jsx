"use client";

import { useState } from "react";
import Link from "next/link";
import { Share2, Bookmark, Printer, Check } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertyBreadcrumbsActions({ title = "The Travertine Villa", titleAr, city = "New Cairo" }) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const { t, isRTL } = useApp();

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        try {
          await navigator.share({
            title: `NESTORA | ${title}`,
            text: `Explore ${title} in ${city}, Egypt on NESTORA Properties.`,
            url: window.location.href,
          });
        } catch {
          // User cancelled or fallback
        }
      } else {
        // Fallback: copy link
        navigator.clipboard?.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const cityDisplay = isRTL
    ? {
        "New Cairo": "القاهرة الجديدة",
        "North Coast": "الساحل الشمالي",
        Zamalek: "الزمالك",
        "El Gouna": "الجونة",
        "Sheikh Zayed": "الشيخ زايد",
        "Soma Bay": "سوما باي",
        "Ain Sokhna": "العين السخنة",
        "Downtown Cairo": "وسط القاهرة",
        "6th of October": "مدينة السادس من أكتوبر",
        "Dubai Harbour": "ميناء دبي",
      }[city] || city
    : city.toUpperCase();
  const displayTitle = isRTL ? titleAr || title : title;

  return (
    <div className="w-full bg-[#FAF9F6] dark:bg-[#141513] border-b border-[rgba(36,37,33,0.08)] dark:border-[rgba(250,249,246,0.08)] py-3.5 print:hidden transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.16em]">
          <Link href="/" className="hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] transition-colors">
            {t("nav_home")}
          </Link>
          <span className="text-[#8C8C86] dark:text-[#70726B]">/</span>
          <Link href="/properties" className="hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] transition-colors">
            {t("nav_properties")}
          </Link>
          <span className="text-[#8C8C86] dark:text-[#70726B]">/</span>
          <Link href={`/properties?search=${encodeURIComponent(city)}`} className="hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] transition-colors">
            {cityDisplay}
          </Link>
          <span className="text-[#8C8C86] dark:text-[#70726B]">/</span>
          <span className="text-[#1A1C1A] dark:text-[#FAF9F6] font-semibold">{displayTitle}</span>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4 text-xs font-editorial-sans text-[#464741] dark:text-[#A0A29C]">
          {/* Share */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] transition-colors cursor-pointer label-caps text-[0.625rem] tracking-wider"
            title="Share this property"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400">{t("detail_copied")}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
                <span>{t("detail_share")}</span>
              </>
            )}
          </button>

          <div className="h-3.5 w-[1px] bg-[rgba(36,37,33,0.15)] dark:bg-[rgba(250,249,246,0.15)]" />

          {/* Save */}
          <button
            onClick={() => setSaved(!saved)}
            className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer label-caps text-[0.625rem] tracking-wider ${
              saved ? "text-[#705B3F] dark:text-[#C5A880] font-bold" : "text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6]"
            }`}
            title={saved ? "Saved in Portfolio" : "Save to Portfolio"}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-[#705B3F] text-[#705B3F] dark:fill-[#C5A880] dark:text-[#C5A880]" : "text-[#705B3F] dark:text-[#C5A880]"}`} />
            <span>{saved ? t("detail_saved") : t("detail_save")}</span>
          </button>

          <div className="h-3.5 w-[1px] bg-[rgba(36,37,33,0.15)] dark:bg-[rgba(250,249,246,0.15)]" />

          {/* Print Brochure */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] transition-colors cursor-pointer label-caps text-[0.625rem] tracking-wider"
            title="Print architectural brochure"
          >
            <Printer className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
            <span>{t("detail_print")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
