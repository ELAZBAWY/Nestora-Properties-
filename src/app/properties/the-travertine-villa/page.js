import PropertyDetailLayout from "@/components/property-details/PropertyDetailLayout";
import { TRAVERTINE_VILLA_DETAIL } from "@/data/properties";

export const metadata = {
  title: "The Travertine Villa | NESTORA Properties",
  description:
    "Explore The Travertine Villa in New Cairo, Egypt. An exemplary monumental residence sculpted from Roman travertine, expansive glazing, and private landscaped grounds.",
};

export default function TravertineVillaPage() {
  return <PropertyDetailLayout detail={TRAVERTINE_VILLA_DETAIL} />;
}
