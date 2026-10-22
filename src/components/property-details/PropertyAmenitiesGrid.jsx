"use client";

import {
  Waves,
  Cpu,
  Columns,
  Home,
  UtensilsCrossed,
  SunMedium,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

const ICON_MAP = {
  Waves,
  Cpu,
  Columns,
  Home,
  UtensilsCrossed,
  SunMedium,
  ShieldCheck,
  Sparkles,
};

const AMENITIES_AR = {
  "amen-1": {
    title: "حمام سباحة لا متناهي وتراس شمسي",
    description: "حمام سباحة بطول 15 متراً بمياه مالحة وتدفئة ذكية مع منصة خشبية معلقة من خشب الإيبي.",
  },
  "amen-2": {
    title: "أنظمة تحكم ذكية KNX / Crestron",
    description: "سيناريوهات إضاءة معمارية كاملة، ستائر آلية مدمجة، وتنظيم ذكي لدرجات الحرارة والمناخ.",
  },
  "amen-3": {
    title: "بهو وسطي مزدوج الارتفاع",
    description: "ارتفاع أسقف يبلغ 7.2 متر مع مدفأة نحاسية برونزية معلقة بتصميم خاص.",
  },
  "amen-4": {
    title: "أجنحة الخدم وسكن السائق المستقل",
    description: "ملحق مستقل بالكامل يضم مطبخاً صغيراً وغرفة غسيل ومدخلاً مباشراً إلى المرآب.",
  },
  "amen-5": {
    title: "مطبخ شيف مجهز بأجهزة Sub-Zero وWolf",
    description: "مواقد حث كهرومغناطيسي احترافية، ثلاجات حفظ المشروبات، وجزيرة رخام كالاكاتا متجانسة.",
  },
  "amen-6": {
    title: "طاقة شمسية وتنقية مياه متطورة",
    description: "منظومة خلايا شمسية بقدرة 12 كيلوواط مع محطة تناضح عكسي لتحلية وتنقية مياه المنزل بالكامل.",
  },
  "amen-7": {
    title: "منظومة أمنية متكاملة على مدار الساعة",
    description: "كاميرات مراقبة حرارية محيطية، غرفة أمان محصنة، وكابينة حراسة أمنية مخصصة.",
  },
  "amen-8": {
    title: "سبا صحي وقبو استجمام خاص",
    description: "ساونا فنلندية تحت الأرض، حوض تغطيس بارد، وقبو مخصص ومكيف لخدمة الضيوف.",
  },
};

export default function PropertyAmenitiesGrid({ amenities }) {
  const { t, isRTL } = useApp();

  return (
    <div className="space-y-6 pt-10 border-t border-[rgba(36,37,33,0.1)] dark:border-[rgba(250,249,246,0.1)] transition-colors">
      <div className="space-y-1">
        <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em]">
          {t("detail_amenities_heading")}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenities.map((item) => {
          const Icon = ICON_MAP[item.icon] || Sparkles;
          const ar = AMENITIES_AR[item.id];
          const title = isRTL && (item.titleAr || ar?.title) ? (item.titleAr || ar?.title) : item.title;
          const description = isRTL && (item.descAr || ar?.description) ? (item.descAr || ar?.description) : item.description;

          return (
            <div
              key={item.id}
              className="bg-[#F8F7F4] dark:bg-[#1A1C1A] border border-[#E2DBD0] dark:border-[rgba(250,249,246,0.15)] p-5 flex items-start gap-4 transition-colors hover:border-[#242521] dark:hover:border-[#FAF9F6]"
            >
              <div className="w-9 h-9 border border-[#242521] dark:border-[rgba(250,249,246,0.3)] flex items-center justify-center bg-[#FAF9F6] dark:bg-[#141513] text-[#705B3F] dark:text-[#C5A880] shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-editorial-sans text-sm font-semibold text-[#1A1C1A] dark:text-[#FAF9F6]">
                  {title}
                </h4>
                <p className="font-editorial-sans text-xs text-[#464741] dark:text-[#A0A29C] leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
