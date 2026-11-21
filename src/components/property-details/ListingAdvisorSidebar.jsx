"use client";

import { useState } from "react";
import { MessageSquare, Calendar, Check, Lock } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { getPropertyWhatsAppMessage, getWhatsAppUrl } from "@/lib/contact";

export default function ListingAdvisorSidebar({ advisor, propertyTitle, propertyRef, propertySlug, onOpenViewingModal }) {
  const { t, isRTL } = useApp();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: isRTL
      ? `أرغب في حجز موعد معاينة سرية لـ ${propertyTitle}، القاهرة الجديدة. يرجى التواصل لإتاحة الملف الخاص.`
      : `I am interested in scheduling a confidential viewing for ${propertyTitle}, New Cairo. Please contact me with private docket access.`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const advisorRole = isRTL ? "شريك أول، الاستشارات الخاصة" : advisor.role;
  const whatsappMessage = getPropertyWhatsAppMessage({
    propertyName: propertyTitle,
    propertyRef,
    propertyUrl: propertySlug ? `/properties/${propertySlug}` : undefined,
    context: isRTL ? "أرغب في التواصل مع مستشار العقار." : "I would like to speak with the property advisor.",
    isRTL,
  });

  return (
    <aside className="w-full lg:sticky lg:top-28 space-y-6">
      <div className="bg-[#FAF9F6] dark:bg-[#1A1C1A] border border-[#242521] dark:border-[rgba(250,249,246,0.2)] p-6 sm:p-7 shadow-sm space-y-6 transition-colors">
        {/* Advisor Profile Header */}
        <div className="flex items-start gap-4 pb-6 border-b border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)]">
          <div className="w-16 h-16 bg-[#EAE3D8] dark:bg-[#202220] border border-[#242521] dark:border-[rgba(250,249,246,0.3)] overflow-hidden shrink-0">
            <img
              src={advisor.avatar}
              alt={advisor.name}
              className="w-full h-full object-cover object-top grayscale contrast-[1.1]"
            />
          </div>
          <div className="space-y-1">
            <span className="label-caps text-[0.58rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em] block">
              {t("adv_label")}
            </span>
            <h3 className="font-editorial-serif text-2xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal leading-tight">
              {advisor.name}
            </h3>
            <p className="font-editorial-sans text-xs text-[#464741] dark:text-[#A0A29C]">
              {advisorRole}
            </p>
            <span className="label-caps text-[0.55rem] text-[#8C8C86] dark:text-[#70726B] tracking-wider block">
              {advisor.ref}
            </span>
          </div>
        </div>

        {/* Direct Contact Numbers */}
        <div className="grid grid-cols-2 gap-3 text-xs font-editorial-sans pb-6 border-b border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)]">
          <div className="bg-[#F8F7F4] dark:bg-[#141513] p-3 border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)]">
            <span className="block label-caps text-[0.55rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
              {t("adv_office")}
            </span>
            <a
              href={`tel:${advisor.officeDirect.replace(/\s+/g, "")}`}
              className="text-[#1A1C1A] dark:text-[#FAF9F6] font-medium hover:text-[#705B3F] dark:hover:text-[#C5A880] transition-colors block"
              dir="ltr"
            >
              {advisor.officeDirect}
            </a>
          </div>
          <div className="bg-[#F8F7F4] dark:bg-[#141513] p-3 border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)]">
            <span className="block label-caps text-[0.55rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
              {t("adv_mobile")}
            </span>
            <a
              href={`tel:${advisor.privateMobile.replace(/\s+/g, "")}`}
              className="text-[#1A1C1A] dark:text-[#FAF9F6] font-medium hover:text-[#705B3F] dark:hover:text-[#C5A880] transition-colors block"
              dir="ltr"
            >
              {advisor.privateMobile}
            </a>
          </div>
        </div>

        {/* Direct Actions: WhatsApp & Viewing */}
        <div className="space-y-2.5 pb-6 border-b border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)]">
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1E4D3B] hover:bg-[#15382B] text-[#FAF9F6] py-3.5 px-4 label-caps text-xs tracking-[0.16em] flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#1E4D3B]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t("adv_whatsapp")}</span>
          </a>

          <button
            onClick={() => onOpenViewingModal?.(propertyTitle)}
            className="w-full bg-transparent hover:bg-[#FAF9F6] dark:hover:bg-[#141513] text-[#242521] dark:text-[#FAF9F6] py-3.5 px-4 label-caps text-xs tracking-[0.16em] flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#242521] dark:border-[rgba(250,249,246,0.3)]"
          >
            <Calendar className="w-4 h-4 text-[#705B3F] dark:text-[#C5A880]" />
            <span>{t("adv_schedule_viewing")}</span>
          </button>
        </div>

        {/* Direct Property Inquiry Form */}
        <div>
          <span className="block label-caps text-[0.625rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em] mb-3">
            {t("adv_form_eyebrow")}
          </span>

          {formSubmitted ? (
            <div className="bg-[#F8F7F4] dark:bg-[#141513] border border-[#242521] dark:border-[rgba(250,249,246,0.3)] p-5 text-center space-y-3">
              <div className="w-8 h-8 mx-auto border border-[#242521] dark:border-[#FAF9F6] flex items-center justify-center bg-[#FAF9F6] dark:bg-[#1A1C1A]">
                <Check className="w-4 h-4 text-[#705B3F] dark:text-[#C5A880]" />
              </div>
              <h4 className="font-editorial-serif text-xl text-[#1A1C1A] dark:text-[#FAF9F6]">
                {t("adv_form_success_title")}
              </h4>
              <p className="font-editorial-sans text-xs text-[#464741] dark:text-[#A0A29C] leading-relaxed">
                {t("adv_form_success_desc")}
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="text-xs label-caps text-[#705B3F] dark:text-[#C5A880] underline cursor-pointer pt-1"
              >
                {t("adv_form_send_another")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block label-caps text-[0.55rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                  {t("adv_form_name")}
                </label>
                <input
                  required
                  type="text"
                  placeholder={t("adv_form_name_placeholder")}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-10 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block label-caps text-[0.55rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                    {t("adv_form_email")}
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="client@familyoffice..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block label-caps text-[0.55rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                    {t("adv_form_phone")}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+20 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-10 px-3 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block label-caps text-[0.55rem] text-[#705B3F] dark:text-[#C5A880] mb-1">
                  {t("adv_form_msg")}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF9F6] dark:bg-[#141513] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] text-xs font-editorial-sans text-[#1A1C1A] dark:text-[#FAF9F6] focus:border-[#242521] dark:focus:border-[#FAF9F6] focus:outline-none resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#242521] dark:bg-[#FAF9F6] hover:bg-[#705B3F] dark:hover:bg-[#C5A880] text-[#FAF9F6] dark:text-[#1A1C1A] label-caps text-xs tracking-[0.16em] transition-colors cursor-pointer border border-[#242521] dark:border-[#FAF9F6] font-medium"
              >
                {t("adv_form_submit")}
              </button>

              <div className="flex items-center gap-1.5 pt-1 text-[0.625rem] text-[#8C8C86] dark:text-[#70726B] font-editorial-sans leading-tight">
                <Lock className="w-3 h-3 text-[#705B3F] dark:text-[#C5A880] shrink-0" />
                <span>{t("adv_form_disclaimer")}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </aside>
  );
}
