"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Footer({ onOpenInquiry }) {
  const { t } = useApp();

  return (
    <footer className="w-full bg-[#1A1C1A] dark:bg-[#0D0E0D] text-[#FAF9F6] border-t border-[rgba(250,249,246,0.1)] dark:border-[rgba(250,249,246,0.08)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-12">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[rgba(250,249,246,0.12)]">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-editorial-serif text-3xl tracking-[0.14em] font-normal text-[#FAF9F6]">
                NESTORA
              </span>
              <span className="label-caps text-[0.625rem] text-[#A88F70] dark:text-[#C5A880] tracking-[0.22em] mt-0.5">
                EST. 2011 • ARCHITECTURAL REAL ESTATE
              </span>
            </div>

            <p className="font-editorial-sans text-xs md:text-sm text-[#FAF9F6]/75 leading-relaxed max-w-sm">
              {t("footer_bio")}
            </p>

            <div className="inline-flex items-center gap-2 pt-2">
              <span className="w-1.5 h-1.5 bg-[#A88F70] dark:bg-[#C5A880]" />
              <span className="label-caps text-[0.625rem] text-[#FAF9F6]/90 tracking-[0.18em]">
                {t("footer_practice")}
              </span>
            </div>
          </div>

          {/* Col 2: Properties (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block label-caps text-xs text-[#A88F70] dark:text-[#C5A880] tracking-[0.16em]">
              {t("footer_col_properties")}
            </span>
            <ul className="space-y-2.5 text-xs font-editorial-sans text-[#FAF9F6]/75">
              <li>
                <Link href="/properties?typology=Villa" className="hover:text-[#FAF9F6] transition-colors">
                  {t("footer_villas")}
                </Link>
              </li>
              <li>
                <Link href="/properties?typology=Penthouse" className="hover:text-[#FAF9F6] transition-colors">
                  {t("footer_penthouses")}
                </Link>
              </li>
              <li>
                <Link href="/properties?category=Coastal" className="hover:text-[#FAF9F6] transition-colors">
                  {t("footer_seaside")}
                </Link>
              </li>
              <li>
                <Link href="/properties?typology=Commercial" className="hover:text-[#FAF9F6] transition-colors">
                  {t("footer_commercial")}
                </Link>
              </li>
              <li>
                <Link href="/properties?mode=RENT" className="hover:text-[#FAF9F6] transition-colors">
                  {t("footer_rental")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block label-caps text-xs text-[#A88F70] dark:text-[#C5A880] tracking-[0.16em]">
              {t("footer_col_company")}
            </span>
            <ul className="space-y-2.5 text-xs font-editorial-sans text-[#FAF9F6]/75">
              <li>
                <Link href="/#philosophy" className="hover:text-[#FAF9F6] transition-colors">
                  {t("footer_about")}
                </Link>
              </li>
              <li>
                <Link href="/#advisory" className="hover:text-[#FAF9F6] transition-colors">
                  {t("footer_advisory")}
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="hover:text-[#FAF9F6] transition-colors">
                  {t("footer_insights")}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry?.(t("footer_careers"))}
                  className="hover:text-[#FAF9F6] transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {t("footer_careers")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry?.(t("footer_press"))}
                  className="hover:text-[#FAF9F6] transition-colors cursor-pointer text-left rtl:text-right"
                >
                  {t("footer_press")}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Offices & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block label-caps text-xs text-[#A88F70] dark:text-[#C5A880] tracking-[0.16em]">
              {t("footer_col_offices")}
            </span>
            <div className="space-y-3 text-xs font-editorial-sans text-[#FAF9F6]/80 leading-relaxed">
              <div>
                <span className="text-[#A88F70] dark:text-[#C5A880] block font-medium">
                  {t("footer_cairo_office")}
                </span>
                <span>{t("footer_cairo_address")}</span>
              </div>
              <div>
                <span className="text-[#A88F70] dark:text-[#C5A880] block font-medium">
                  {t("footer_dubai_office")}
                </span>
                <span>{t("footer_dubai_address")}</span>
              </div>
              <div className="pt-2 border-t border-[rgba(250,249,246,0.1)] flex flex-col gap-1.5">
                <a
                  href="tel:+20227904400"
                  className="inline-flex items-center gap-2 hover:text-[#FAF9F6] transition-colors"
                  dir="ltr"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A88F70] dark:text-[#C5A880]" />
                  <span>+20 (0) 2790 4400</span>
                </a>
                <a
                  href="mailto:inquiries@nestoraproperties.com"
                  className="inline-flex items-center gap-2 hover:text-[#FAF9F6] transition-colors"
                  dir="ltr"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A88F70] dark:text-[#C5A880]" />
                  <span>inquiries@nestoraproperties.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-editorial-sans text-[#FAF9F6]/60">
          <div>
            {t("footer_rights")}
          </div>
          <div className="flex items-center gap-6 label-caps text-[0.625rem] text-[#FAF9F6]/70">
            <Link href="#" className="hover:text-[#FAF9F6] transition-colors">
              {t("footer_privacy")}
            </Link>
            <div className="w-1 h-1 bg-[rgba(250,249,246,0.3)]" />
            <Link href="#" className="hover:text-[#FAF9F6] transition-colors">
              {t("footer_terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
