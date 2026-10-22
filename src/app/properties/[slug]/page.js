import { notFound } from "next/navigation";
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

export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;
  const detail = getPropertyDetail(slug);

  if (!detail) {
    notFound();
  }

  return <PropertyDetailLayout detail={detail} />;
}
