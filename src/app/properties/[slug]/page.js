import { notFound } from "next/navigation";
import { Suspense } from "react";
import PropertyDetailLayout from "@/components/property-details/PropertyDetailLayout";
import { PROPERTIES, getPropertyDetail } from "@/data/properties";

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const detail = getPropertyDetail(slug);

  if (!detail) {
    return {
      title: "Property Not Found | NESTORA Properties",
    };
  }

  return {
    title: `${detail.title} | NESTORA Properties`,
    description:
      detail.curationNotes?.leadText ||
      `Explore ${detail.title} in ${detail.city || "Egypt"} on NESTORA Properties.`,
  };
}

async function PropertyDetailContent({ params }) {
  const { slug } = await params;
  const detail = getPropertyDetail(slug);

  if (!detail) {
    notFound();
  }

  return <PropertyDetailLayout detail={detail} />;
}

function PropertyDetailFallback() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#141513] flex items-center justify-center">
      <div className="font-editorial-serif text-2xl text-[#1A1C1A] dark:text-[#FAF9F6] tracking-wider animate-pulse">
        NESTORA PROPERTIES
      </div>
    </div>
  );
}

export default function PropertyDetailPage({ params }) {
  return (
    <Suspense fallback={<PropertyDetailFallback />}>
      <PropertyDetailContent params={params} />
    </Suspense>
  );
}
