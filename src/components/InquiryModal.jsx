"use client";

import { useState } from "react";
import { X, Check, Lock } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function InquiryModal({ isOpen, onClose, defaultTopic }) {
  const { t, isRTL } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: defaultTopic || "Private Portfolio Access",
    region: "Cairo & Environs",
    budget: "EGP 50M+",
    discretion: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F100C]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FAF9F6] dark:bg-[#1A1C1A] border border-[#242521] dark:border-[rgba(250,249,246,0.2)] p-8 md:p-10 shadow-2xl transition-colors">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 text-[#242521] dark:text-[#FAF9F6] hover:text-[#705B3F] dark:hover:text-[#C5A880] transition-colors cursor-pointer border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)]"
          aria-label={t("modal_close")}
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto border border-[#242521] dark:border-[#FAF9F6] flex items-center justify-center bg-[#FAF9F6] dark:bg-[#1A1C1A]">
              <Check className="w-6 h-6 text-[#705B3F] dark:text-[#C5A880]" />
            </div>
            <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em]">
              {isRTL ? "تم التأكيد بنجاح" : "DISPATCH CONFIRMED"}
            </span>
            <h3 className="font-editorial-serif text-3xl text-[#1A1C1A] dark:text-[#FAF9F6]">
              {t("modal_confirmed_title")}
            </h3>
            <p className="font-editorial-sans text-xs md:text-sm text-[#464741] dark:text-[#A0A29C] leading-relaxed max-w-sm mx-auto">
              {t("modal_confirmed_desc")}
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#242521] dark:bg-[#FAF9F6] text-[#FAF9F6] dark:text-[#1A1C1A] px-8 py-3 label-caps text-xs tracking-wider border border-[#242521] dark:border-[#FAF9F6] cursor-pointer"
              >
                {t("modal_return")}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em] mb-1">
                <Lock className="w-3 h-3 text-[#705B3F] dark:text-[#C5A880]" />
                <span>{t("modal_confidential")}</span>
              </div>
              <h3 className="font-editorial-serif text-2xl md:text-3xl font-normal text-[#1A1C1A] dark:text-[#FAF9F6]">
                {defaultTopic || (isRTL ? "طلب وصول خاص" : "Request Private Access")}
              </h3>
              <p className="font-editorial-sans text-xs text-[#464741] dark:text-[#A0A29C] mt-1 leading-relaxed">
                {isRTL
                  ? "قناة تواصل مباشرة مع شركائنا للاستحواذات والصفقات خارج السوق والاستشارات الخاصة."
                  : "Direct conduit to our partners for off-market access, acquisitions, and private commissions."}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="block label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                  {t("modal_name_label")}
                </label>
                <input
                  required
                  type="text"
                  placeholder={isRTL ? "مثال: كريم منصور" : "e.g. Karim Mansour"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                    {t("modal_email_label")}
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="principal@familyoffice.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                    {t("modal_phone_label")}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+20 100 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                    {t("modal_region_label")}
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full h-11 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none"
                  >
                    <option value="Cairo & Environs">{isRTL ? "القاهرة والقاهرة الجديدة" : "Cairo & New Cairo"}</option>
                    <option value="El Gouna & Red Sea">{isRTL ? "الجونة والبحر الأحمر" : "El Gouna & Red Sea"}</option>
                    <option value="North Coast (Sahel)">{isRTL ? "الساحل الشمالي" : "North Coast (Sahel)"}</option>
                    <option value="Dubai & Emirates">{isRTL ? "دبي والإمارات" : "Dubai & UAE"}</option>
                  </select>
                </div>

                <div>
                  <label className="block label-caps text-[0.65rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                    {t("modal_budget_label")}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full h-11 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-sm font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none"
                  >
                    <option value="EGP 30M – 60M">EGP 30M – 60M</option>
                    <option value="EGP 60M – 100M">EGP 60M – 100M</option>
                    <option value="EGP 100M – 250M">EGP 100M – 250M</option>
                    <option value="EGP 250M+">{isRTL ? "EGP 250M+ (فائق الفخامة)" : "EGP 250M+ (Ultra-Prime)"}</option>
                  </select>
                </div>
              </div>

              {/* NDA & Discretion Assurance checkbox */}
              <label className="flex items-start gap-3 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.discretion}
                  onChange={(e) => setFormData({ ...formData, discretion: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded-none accent-[#242521] dark:accent-[#FAF9F6] border-[#242521] cursor-pointer"
                />
                <span className="font-editorial-sans text-xs text-[#464741] dark:text-[#A0A29C] leading-tight">
                  {t("modal_nda_label")}
                </span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-12 bg-[#242521] dark:bg-[#FAF9F6] hover:bg-[#705B3F] dark:hover:bg-[#C5A880] text-[#FAF9F6] dark:text-[#1A1C1A] label-caps text-xs tracking-[0.18em] transition-colors cursor-pointer border border-[#242521] dark:border-[#FAF9F6] font-medium"
              >
                {t("modal_submit")}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
