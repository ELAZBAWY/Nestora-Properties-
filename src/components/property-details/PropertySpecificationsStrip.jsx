"use client";

import { Maximize2, Layers, Bed, Bath, Car, CalendarCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";

const SPEC_ICONS = {
  "INTERNAL BUILT AREA": Maximize2,
  "PLOT FOOTPRINT": Layers,
  "SUITES": Bed,
  "BATHROOMS": Bath,
  "PARKING": Car,
  "COMPLETION": CalendarCheck,
};

const SPEC_TRANSLATIONS = {
  "INTERNAL BUILT AREA": {
    labelAr: "المساحة المبنية الداخلية",
    noteAr: "(7,320 قدم مربع)",
  },
  "PLOT FOOTPRINT": {
    labelAr: "مساحة الأرض الإجمالية",
    noteAr: "(12,380 قدم مربع)",
  },
  "SUITES": {
    labelAr: "أجنحة النوم",
    valAr: "5 غرف نوم",
    noteAr: "جميعها ملحقة بحمام",
  },
  "BATHROOMS": {
    labelAr: "دورات المياه",
    valAr: "6 حمامات كاملة",
    noteAr: "2 دورة مياه للضيوف",
  },
  "PARKING": {
    labelAr: "مواقف السيارات",
    valAr: "3 سيارات",
    noteAr: "موقف تحت الأرض",
  },
  "COMPLETION": {
    labelAr: "سنة التسليم",
    valAr: "2023",
    noteAr: "جاهز للتسليم الفوري",
  },
};

export default function PropertySpecificationsStrip({ specifications }) {
  const { isRTL } = useApp();

  return (
    <section className="w-full bg-[#FAF9F6] dark:bg-[#141513] border-y border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] py-5 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-[rgba(36,37,33,0.1)] dark:divide-[rgba(250,249,246,0.1)]">
          {specifications.map((spec, i) => {
            const Icon = SPEC_ICONS[spec.label] || Maximize2;
            const trans = SPEC_TRANSLATIONS[spec.label];
            const labelText = isRTL && (spec.labelAr || trans?.labelAr) ? (spec.labelAr || trans?.labelAr) : spec.label;
            const valueText = isRTL && (spec.valAr || trans?.valAr) ? (spec.valAr || trans?.valAr) : spec.value;
            const noteText = isRTL && (spec.noteAr || trans?.noteAr) ? (spec.noteAr || trans?.noteAr) : spec.note;

            return (
              <div
                key={i}
                className={`py-3 sm:py-0 px-3 sm:px-4 lg:px-5 flex flex-col justify-center ${
                  i === 0 ? "sm:pl-0 rtl:sm:pl-4 rtl:sm:pr-0" : ""
                } ${i === specifications.length - 1 ? "lg:pr-0 rtl:lg:pr-5 rtl:lg:pl-0" : ""}`}
              >
                <div className="flex items-center gap-1.5 label-caps text-[0.6rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.14em] mb-1">
                  <Icon className="w-3 h-3 text-[#705B3F] dark:text-[#C5A880] shrink-0" />
                  <span className="truncate">{labelText}</span>
                </div>
                <div className="font-editorial-serif text-xl sm:text-2xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal leading-snug">
                  {valueText}
                </div>
                <div className="text-[0.6875rem] font-editorial-sans text-[#464741] dark:text-[#A0A29C] mt-0.5">
                  {noteText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
