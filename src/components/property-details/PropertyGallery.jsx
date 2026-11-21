"use client";

import { useState } from "react";
import { Compass, Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertyGallery({ gallery, title, onOpenTour }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { t, isRTL } = useApp();

  const activeImage = gallery[activeIdx] || gallery[0];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="w-full bg-[#FAF9F6] dark:bg-[#141513] py-6 sm:py-8 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Main Large Image (8 cols on lg) */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-[#EAE3D8] dark:bg-[#202220] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] group">
            <img
              src={activeImage.src}
              alt={isRTL ? activeImage.titleAr || title : activeImage.title || title}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F100C]/85 via-transparent to-black/20 pointer-events-none" />

            {/* Top Right Fullscreen Button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-[#0F100C]/75 hover:bg-[#0F100C] text-[#FAF9F6] p-2 border border-[rgba(250,249,246,0.2)] transition-colors cursor-pointer"
              title={isRTL ? "عرض المعرض بملء الشاشة" : "View full-screen gallery"}
              aria-label={isRTL ? "توسيع معرض الصور" : "Expand image gallery"}
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Bottom Left Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-md space-y-1">
                <span className="label-caps text-[0.625rem] text-[#F8DBB8] tracking-[0.2em] block">
                  {isRTL ? "تحفة معمارية استثنائية" : "ARCHITECTURAL MASTERWORK"}
                </span>
                <h2 className="font-editorial-serif text-2xl sm:text-3xl font-normal text-[#FAF9F6]">
                  {title}
                </h2>
                <p className="font-editorial-sans text-xs text-[#FAF9F6]/85 line-clamp-1">
                  {isRTL
                    ? activeImage.captionAr || "تفاصيل معمارية منتقاة ومشهد طبيعي مصمم بعناية."
                    : activeImage.caption || "Monolithic regional travertine stone, infinity pool, and double-height central atrium"}
                </p>
              </div>

              {/* Virtual 3D Tour CTA Button */}
              <button
                onClick={onOpenTour}
                className="self-start sm:self-auto bg-[#FAF9F6] dark:bg-[#FAF9F6] hover:bg-[#EAE3D8] dark:hover:bg-[#C5A880] text-[#0F100C] px-4 py-2.5 label-caps text-[0.65rem] tracking-[0.16em] inline-flex items-center gap-2 transition-colors cursor-pointer border border-[#FAF9F6] font-medium"
              >
                <Compass className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#1A1C1A]" />
                <span>{t("detail_explore_3d")}</span>
              </button>
            </div>
          </div>

          {/* Right Column of 3 Preview Images (4 cols on lg) */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
            {/* Thumbnail 1: Living room */}
            <div
              onClick={() => setActiveIdx(1)}
              className={`relative aspect-[16/10] overflow-hidden bg-[#EAE3D8] dark:bg-[#202220] border cursor-pointer group transition-all ${
                activeIdx === 1
                  ? "border-[#242521] dark:border-[#FAF9F6] ring-1 ring-[#242521] dark:ring-[#FAF9F6]"
                  : "border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] hover:border-[#242521] dark:hover:border-[#FAF9F6]"
              }`}
            >
              <img
                src={gallery[1]?.src}
                alt={isRTL ? gallery[1]?.titleAr || title : gallery[1]?.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F100C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3">
                <span className="label-caps text-[0.55rem] sm:text-[0.625rem] text-[#FAF9F6] tracking-[0.14em] line-clamp-1">
                  {isRTL ? gallery[1]?.overlayLabelAr || "صالة المعيشة الكبرى والمدفأة" : gallery[1]?.overlayLabel || "GRAND LIVING ROOM & HEARTH"}
                </span>
              </div>
            </div>

            {/* Thumbnail 2: Kitchen */}
            <div
              onClick={() => setActiveIdx(2)}
              className={`relative aspect-[16/10] overflow-hidden bg-[#EAE3D8] dark:bg-[#202220] border cursor-pointer group transition-all ${
                activeIdx === 2
                  ? "border-[#242521] dark:border-[#FAF9F6] ring-1 ring-[#242521] dark:ring-[#FAF9F6]"
                  : "border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] hover:border-[#242521] dark:hover:border-[#FAF9F6]"
              }`}
            >
              <img
                src={gallery[2]?.src}
                alt={isRTL ? gallery[2]?.titleAr || title : gallery[2]?.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F100C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3">
                <span className="label-caps text-[0.55rem] sm:text-[0.625rem] text-[#FAF9F6] tracking-[0.14em] line-clamp-1">
                  {isRTL ? gallery[2]?.overlayLabelAr || "مطبخ الشيف وجزيرة الرخام" : gallery[2]?.overlayLabel || "CHEF'S KITCHEN & MARBLE ISLAND"}
                </span>
              </div>
            </div>

            {/* Thumbnail 3: View all 28 photos trigger */}
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative aspect-[16/10] overflow-hidden bg-[#0F100C] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] cursor-pointer group"
            >
              <img
                src={gallery[3]?.src}
                alt={isRTL ? gallery[3]?.titleAr || title : gallery[3]?.title}
                className="w-full h-full object-cover object-center opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#0F100C]/50 flex items-center justify-center p-3 text-center">
                <div className="inline-flex items-center gap-2 bg-[#0F100C]/85 px-3 py-2 border border-[rgba(250,249,246,0.3)]">
                  <Camera className="w-3.5 h-3.5 text-[#F8DBB8]" />
                  <span className="label-caps text-[0.58rem] sm:text-[0.625rem] text-[#FAF9F6] tracking-[0.14em]">
                    {t("detail_view_all_photos")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F100C]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-[#FAF9F6] pb-4 border-b border-[rgba(250,249,246,0.15)]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#A88F70]" />
              <span className="label-caps text-xs text-[#FAF9F6] tracking-widest">
                {title} • {isRTL ? "الملف المعماري" : "ARCHITECTURAL FOLIO"} ({activeIdx + 1} / {gallery.length})
              </span>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 border border-[rgba(250,249,246,0.2)] hover:border-[#FAF9F6] text-[#FAF9F6] transition-colors cursor-pointer"
              aria-label={isRTL ? "إغلاق المعرض" : "Close Lightbox"}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Main Stage */}
          <div className="relative flex-1 flex items-center justify-center my-6">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-10 p-3 bg-[#0F100C]/70 hover:bg-[#0F100C] text-[#FAF9F6] border border-[rgba(250,249,246,0.2)] transition-colors cursor-pointer"
              aria-label={isRTL ? "الصورة السابقة" : "Previous Image"}
            >
              <ChevronLeft className="w-6 h-6 arrow-icon-flip" />
            </button>

            <div className="max-w-5xl max-h-[75vh] overflow-hidden flex flex-col items-center">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[65vh] w-auto object-contain border border-[rgba(250,249,246,0.1)]"
              />
              <p className="font-editorial-sans text-xs sm:text-sm text-[#FAF9F6]/80 text-center mt-3 max-w-xl">
                {isRTL ? `${activeImage.titleAr || title} — ${activeImage.captionAr || "تفاصيل معمارية منتقاة"}` : `${activeImage.title} — ${activeImage.caption}`}
              </p>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-10 p-3 bg-[#0F100C]/70 hover:bg-[#0F100C] text-[#FAF9F6] border border-[rgba(250,249,246,0.2)] transition-colors cursor-pointer"
              aria-label={isRTL ? "الصورة التالية" : "Next Image"}
            >
              <ChevronRight className="w-6 h-6 arrow-icon-flip" />
            </button>
          </div>

          {/* Lightbox Thumbnail Strip */}
          <div className="flex items-center justify-center gap-3 pt-3 border-t border-[rgba(250,249,246,0.1)] overflow-x-auto py-2">
            {gallery.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setActiveIdx(i)}
                className={`w-16 h-12 flex-shrink-0 border overflow-hidden transition-all ${
                  activeIdx === i ? "border-[#FAF9F6] scale-105" : "border-[rgba(250,249,246,0.2)] opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt={isRTL ? img.titleAr || title : img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
