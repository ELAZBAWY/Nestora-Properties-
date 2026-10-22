"use client";

import { useApp } from "@/context/AppContext";

const AR_PARAGRAPHS = [
  "صُممت فيلا الترافرتين كمسكن خاص يحتفي بالبساطة والكتل الإنشائية الجريئة المتناغمة مع المناخ الصحراوي، في أحد أكثر الأحياء هدوءاً وخصوصية في الشويفات بالقاهرة الجديدة. تكتسي واجهات الفيلا بالكامل بحجر الترافرتين الروماني الطبيعي المقطوع بالعرض، مع تطعيمات هندسية من الفولاذ الأسود ونوافذ زجاجية عازلة تمتد من الأرض إلى السقف.",
  "يتوسط الطابق الأرضي بهو مركزي مزدوج الارتفاع صُمم لسحب الضوء الطبيعي وتوجيهه للداخل مع تحفيز التيارات الهوائية لتبريد المساحات بشكل سلبي. تكسو الأرضيات طبقات المايكروسيمنت الناعم ورخام فيور دي بوسكو الإيطالي المصقول، متصلة بسلاسة بجناح تناول الطعام ومطبخ شيف فاخر مجهز بأجهزة Poliform وSub-Zero وWolf.",
  "أما الحديقة الخارجية فتجسد واحة هادئة: حمام سباحة بطول 15 متراً بتدفئة ذكية يبدو كأنه طافٍ فوق المسطحات الخضراء، إلى جانب جلسة موقد غائرة ومطبخ خارجي متكامل وأسوار نباتية توفر أعلى درجات الخصوصية والأمان.",
];

export default function CuratedPropertyDescription({ curationNotes }) {
  const { t, isRTL } = useApp();

  const eyebrow = t("detail_curation_eyebrow");
  const heading = t("detail_curation_heading");
  const paragraphs = isRTL && curationNotes.paragraphsAr ? curationNotes.paragraphsAr : (isRTL ? AR_PARAGRAPHS : curationNotes.paragraphs);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="block label-caps text-[0.6875rem] text-[#705B3F] dark:text-[#C5A880] tracking-[0.2em]">
          {eyebrow}
        </span>
        <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#1A1C1A] dark:text-[#FAF9F6] font-normal tracking-[-0.01em]">
          {heading}
        </h2>
      </div>

      <div className="space-y-4 font-editorial-sans text-sm sm:text-[0.9375rem] text-[#464741] dark:text-[#A0A29C] leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
