"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, User, Menu, X, Sun, Moon } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, setLanguage, theme, toggleTheme, t } = useApp();

  const isHome = pathname === "/";
  const isProperties = pathname === "/properties" || pathname.startsWith("/properties/");

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/95 dark:bg-[#141513]/95 backdrop-blur-md border-b border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Left: Brand Identity & Primary Nav Links */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Monogram Box */}
            <div className="w-8 h-8 border border-[#242521] dark:border-[rgba(250,249,246,0.3)] flex items-center justify-center bg-[#FAF9F6] dark:bg-[#1A1C1A] text-[#242521] dark:text-[#FAF9F6] font-editorial-serif text-lg font-normal group-hover:bg-[#242521] dark:group-hover:bg-[#FAF9F6] group-hover:text-[#FAF9F6] dark:group-hover:text-[#1A1C1A] transition-colors">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-editorial-serif text-xl md:text-2xl tracking-[0.14em] font-normal text-[#1A1C1A] dark:text-[#FAF9F6]">
                NESTORA
              </span>
              <span className="label-caps text-[0.55rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.22em] -mt-0.5">
                {t("nav_brand_tag")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`nestora-nav-link label-caps text-xs py-2 tracking-[0.16em] transition-colors relative ${
                isHome
                  ? "text-[#1A1C1A] dark:text-[#FAF9F6] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#1A1C1A] dark:after:bg-[#FAF9F6]"
                  : "text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6]"
              }`}
            >
              {t("nav_home")}
            </Link>
            <Link
              href="/properties"
              className={`nestora-nav-link label-caps text-xs py-2 tracking-[0.16em] transition-colors relative ${
                isProperties
                  ? "text-[#1A1C1A] dark:text-[#FAF9F6] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#1A1C1A] dark:after:bg-[#FAF9F6]"
                  : "text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6]"
              }`}
            >
              {t("nav_properties")}
            </Link>
            <Link
              href="/#philosophy"
              className="nestora-nav-link label-caps text-xs py-2 tracking-[0.16em] text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] transition-colors"
            >
              {t("nav_about")}
            </Link>
            <button
              onClick={() => onOpenInquiry?.(t("nav_contact"))}
              className="nestora-nav-link label-caps text-xs py-2 tracking-[0.16em] text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] transition-colors cursor-pointer"
            >
              {t("nav_contact")}
            </button>
          </nav>
        </div>

        {/* Right: Direct Concierge & Actions */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {/* Phone Contact */}
          <a
            href="tel:+20227904400"
            className="flex items-center gap-2 text-xs font-editorial-sans text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6] transition-colors"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
            <span className="tracking-wide">+20 (0) 2790 4400</span>
          </a>

          <div className="h-4 w-[1px] bg-[rgba(36,37,33,0.15)] dark:bg-[rgba(250,249,246,0.15)]" />

          {/* Theme Toggle (Sun / Moon) */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center border border-[rgba(36,37,33,0.2)] dark:border-[rgba(250,249,246,0.2)] hover:border-[#242521] dark:hover:border-[#FAF9F6] text-[#242521] dark:text-[#FAF9F6] transition-colors cursor-pointer"
            aria-label={theme === "dark" ? t("nav_switch_theme_light") : t("nav_switch_theme_dark")}
            title={theme === "dark" ? t("nav_switch_theme_light") : t("nav_switch_theme_dark")}
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-[#C5A880]" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-[#464741]" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center border border-[rgba(36,37,33,0.2)] dark:border-[rgba(250,249,246,0.2)] text-[0.7rem] label-caps overflow-hidden">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                language === "en"
                  ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] font-bold"
                  : "text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                language === "ar"
                  ? "bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] font-bold"
                  : "text-[#464741] dark:text-[#A0A29C] hover:text-[#1A1C1A] dark:hover:text-[#FAF9F6]"
              }`}
            >
              عربي
            </button>
          </div>

          <div className="h-4 w-[1px] bg-[rgba(36,37,33,0.15)] dark:bg-[rgba(250,249,246,0.15)]" />

          {/* Primary Inquire Now Button */}
          <button
            onClick={() => onOpenInquiry?.(t("nav_request_access"))}
            className="bg-[#242521] dark:bg-[#FAF9F6] hover:bg-[#705B3F] dark:hover:bg-[#C5A880] text-[#FAF9F6] dark:text-[#1A1C1A] px-5 py-2.5 label-caps text-xs tracking-[0.16em] transition-colors cursor-pointer border border-[#242521] dark:border-[#FAF9F6]"
          >
            {t("nav_inquire_now")}
          </button>

          {/* User Profile Outline Icon */}
          <button
            aria-label="User Account"
            className="w-9 h-9 flex items-center justify-center border border-[rgba(36,37,33,0.2)] dark:border-[rgba(250,249,246,0.2)] hover:border-[#242521] dark:hover:border-[#FAF9F6] text-[#242521] dark:text-[#FAF9F6] transition-colors cursor-pointer"
          >
            <User className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger & Quick Toggles */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 text-[#242521] dark:text-[#FAF9F6] border border-[rgba(36,37,33,0.15)] dark:border-[rgba(250,249,246,0.15)]"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-[#C5A880]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language Switcher Mobile */}
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 text-xs label-caps font-bold border border-[rgba(36,37,33,0.15)] dark:border-[rgba(250,249,246,0.15)] text-[#242521] dark:text-[#FAF9F6]"
          >
            {language === "en" ? "عربي" : "EN"}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#242521] dark:text-[#FAF9F6] border border-[rgba(36,37,33,0.15)] dark:border-[rgba(250,249,246,0.15)]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] bg-[#FAF9F6] dark:bg-[#141513] px-6 py-6 flex flex-col gap-5">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`label-caps text-sm ${
              isHome
                ? "text-[#1A1C1A] dark:text-[#FAF9F6] font-bold"
                : "text-[#464741] dark:text-[#A0A29C]"
            }`}
          >
            {t("nav_home")}
          </Link>
          <Link
            href="/properties"
            onClick={() => setMobileMenuOpen(false)}
            className={`label-caps text-sm ${
              isProperties
                ? "text-[#1A1C1A] dark:text-[#FAF9F6] font-bold"
                : "text-[#464741] dark:text-[#A0A29C]"
            }`}
          >
            {t("nav_properties")}
          </Link>
          <Link
            href="/#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="label-caps text-sm text-[#464741] dark:text-[#A0A29C]"
          >
            {t("nav_about")}
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.(t("nav_contact"));
            }}
            className="label-caps text-sm text-left rtl:text-right text-[#464741] dark:text-[#A0A29C]"
          >
            {t("nav_contact")}
          </button>
          <div className="h-[1px] bg-[rgba(36,37,33,0.1)] dark:bg-[rgba(250,249,246,0.1)] my-1" />
          <div className="flex items-center justify-between text-xs font-editorial-sans text-[#464741] dark:text-[#A0A29C]">
            <a href="tel:+20227904400" className="flex items-center gap-2" dir="ltr">
              <Phone className="w-3.5 h-3.5 text-[#705B3F] dark:text-[#C5A880]" />
              +20 (0) 2790 4400
            </a>
            <button
              onClick={toggleLanguage}
              className="label-caps underline"
            >
              {language === "en" ? "التبديل إلى العربية" : "Switch to English"}
            </button>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.(t("nav_request_access"));
            }}
            className="w-full bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] py-3 label-caps text-xs tracking-wider text-center cursor-pointer font-medium"
          >
            {t("nav_inquire_now")}
          </button>
        </div>
      )}
    </header>
  );
}
