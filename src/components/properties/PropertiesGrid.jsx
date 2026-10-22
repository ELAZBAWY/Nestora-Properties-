"use client";

import PropertyCard from "./PropertyCard";
import { Compass } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PropertiesGrid({
  properties,
  viewMode = "grid",
  onResetFilters,
}) {
  const { t } = useApp();

  if (!properties || properties.length === 0) {
    return (
      <div className="w-full py-20 bg-[#FAF9F6] dark:bg-[#141513] transition-colors">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center space-y-4">
          <div className="w-12 h-12 mx-auto border border-[#242521] dark:border-[rgba(250,249,246,0.3)] flex items-center justify-center bg-[#FAF9F6] dark:bg-[#1A1C1A]">
            <Compass className="w-6 h-6 text-[#705B3F] dark:text-[#C5A880]" />
          </div>
          <h3 className="font-editorial-serif text-2xl md:text-3xl text-[#1A1C1A] dark:text-[#FAF9F6]">
            {t("props_no_results_title")}
          </h3>
          <p className="font-editorial-sans text-sm text-[#464741] dark:text-[#A0A29C] max-w-md mx-auto leading-relaxed">
            {t("props_no_results_desc")}
          </p>
          <div className="pt-2">
            <button
              onClick={onResetFilters}
              className="bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] px-6 py-2.5 label-caps text-xs tracking-wider border border-[#242521] dark:border-[#FAF9F6] cursor-pointer hover:bg-[#705B3F] dark:hover:bg-[#C5A880] transition-colors font-medium"
            >
              {t("props_reset_btn")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full pb-16 bg-[#FAF9F6] dark:bg-[#141513] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                viewMode="grid"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                viewMode="list"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
