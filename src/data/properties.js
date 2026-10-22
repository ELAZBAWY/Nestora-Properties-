// Centralized Reusable Property Dataset for NESTORA

import {
  PROPERTY_DETAILS_MAP,
  TRAVERTINE_VILLA_DETAIL,
  AZURE_WATERS_DETAIL,
  NILE_PANORAMA_DETAIL,
  OLIVE_GROVE_DETAIL,
  SEASIDE_CHALET_DETAIL,
  SIGNATURE_PAVILION_DETAIL,
} from "./propertyDetailsData";

export {
  PROPERTY_DETAILS_MAP,
  TRAVERTINE_VILLA_DETAIL,
  AZURE_WATERS_DETAIL,
  NILE_PANORAMA_DETAIL,
  OLIVE_GROVE_DETAIL,
  SEASIDE_CHALET_DETAIL,
  SIGNATURE_PAVILION_DETAIL,
};

/**
 * Resolves the rich detail folio object for a property by slug or id.
 */
export function getPropertyDetail(slugOrId) {
  if (!slugOrId) return null;
  const key = String(slugOrId).toLowerCase().trim();
  return PROPERTY_DETAILS_MAP[key] || null;
}

/**
 * Returns the dedicated details route URL for a property if one exists, or null.
 */
export function getPropertyDetailUrl(property) {
  if (!property) return null;
  const slug =
    property.slug ||
    (property.id && PROPERTIES.find((p) => p.id === property.id)?.slug);
  if (slug) {
    return `/properties/${slug}`;
  }
  return null;
}

export const PROPERTIES = [
  {
    id: "nst-091",
    slug: "the-travertine-villa",
    href: "/properties/the-travertine-villa",
    ref: "REF. NST-091",
    title: "The Travertine Villa",
    location: "NEW CAIRO • EGYPT",
    district: "Choueifat District",
    city: "New Cairo",
    country: "Egypt",
    mode: "BUY",
    typology: "Villa",
    category: "Gated Compound",
    price: "EGP 42,000,000",
    rawPrice: 42000000,
    pricePerMonth: false,
    primaryBadge: "FOR SALE",
    secondaryBadge: "★ EXCLUSIVE",
    beds: 5,
    baths: 6,
    area: 600,
    areaDisplay: "600 m²",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88",
    description:
      "Brutalist elegance rendered in hand-hewn travertine with double-height master courtyards, secluded reflecting pools, and private family wing.",
    architecturalNotes:
      "Monolithic regional travertine facade, floor-to-ceiling thermal glazing, geometric oculus light-wells, and seamless indoor-outdoor water courts designed for high passive cooling.",
    features: ["Infinity Pool", "Private Courtyard", "Staff Quarters", "Double Height Ceiling"],
    featured: true,
  },
  {
    id: "nst-204",
    slug: "azure-waters-beachfront-villa",
    href: "/properties/azure-waters-beachfront-villa",
    ref: "REF. NST-204",
    title: "Azure Waters Beachfront Villa",
    location: "EL GOUNA • RED SEA",
    district: "Lagoon Phase 3",
    city: "El Gouna",
    country: "Egypt",
    mode: "BUY",
    typology: "Villa",
    category: "Coastal Beachfront",
    price: "EGP 38,500,000",
    rawPrice: 38500000,
    pricePerMonth: false,
    primaryBadge: "FOR SALE",
    secondaryBadge: "≈ WATERFRONT",
    beds: 4,
    baths: 5,
    area: 520,
    areaDisplay: "520 m²",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=88",
    description:
      "Contemporary lagoon-facing sanctuary with private boat mooring, open teak timber pergolas, and seamless outdoor pavilions.",
    architecturalNotes:
      "Direct turquoise lagoon access, cantilevered weathered teak sundecks, custom local limestone cladding, and integrated private marine mooring berth.",
    features: ["Private Mooring", "Lagoon Frontage", "Infinity Pool", "Outdoor Kitchen"],
    featured: true,
  },
  {
    id: "nst-412",
    slug: "nile-panorama-sky-penthouse",
    href: "/properties/nile-panorama-sky-penthouse",
    ref: "REF. NST-412",
    title: "Nile Panorama Sky Penthouse",
    location: "ZAMALEK • CAIRO",
    district: "Northern Island",
    city: "Zamalek",
    country: "Egypt",
    mode: "RENT",
    typology: "Penthouse",
    category: "Urban Sanctuary",
    price: "EGP 280,000",
    period: "/ month",
    rawPrice: 280000,
    pricePerMonth: true,
    primaryBadge: "FOR RENT",
    secondaryBadge: "FURNISHED",
    beds: 3,
    baths: 4,
    area: 390,
    areaDisplay: "390 m²",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88",
    description:
      "Panoramic 370-degree skyline views over downtown Cairo and the Nile, curated bespoke woodwork, Italian marble, and brass finishes.",
    architecturalNotes:
      "Crown-level duplex in historic Zamalek island with structural acoustic glazing, continuous wrap-around terraces, custom smoked-oak joinery, and private keyed elevator.",
    features: ["Skyline View", "Private Elevator", "Terrace", "Curated Furnishing"],
    featured: true,
  },
  {
    id: "nst-088",
    slug: "the-olive-grove-estate",
    href: "/properties/the-olive-grove-estate",
    ref: "REF. NST-088",
    title: "The Olive Grove Estate",
    location: "SHEIKH ZAYED • GIZA",
    district: "Old Cairo Road Enclave",
    city: "Sheikh Zayed",
    country: "Egypt",
    mode: "BUY",
    typology: "Estate",
    category: "Private Grounds",
    price: "EGP 55,000,000",
    rawPrice: 55000000,
    pricePerMonth: false,
    primaryBadge: "FOR SALE",
    secondaryBadge: "PRIVATE GROUNDS",
    beds: 6,
    baths: 7,
    area: 920,
    areaDisplay: "920 m²",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=88",
    description:
      "Sovereign estate surrounded by mature century-old olive groves, grand formal courtyards, subterranean wine gallery, and equestrian stables.",
    architecturalNotes:
      "Hewn desert limestone masonry inspired by historic Levantine and Andalusian architecture, monumental colonnades, and private security gatehouse.",
    features: ["Acreage Grounds", "Olive Grove", "Private Stables", "Heated Pool"],
    featured: true,
  },
  {
    id: "nst-330",
    slug: "seaside-courtyard-chalet",
    href: "/properties/seaside-courtyard-chalet",
    ref: "REF. NST-330",
    title: "Seaside Courtyard Chalet",
    location: "MARASSI • NORTH COAST",
    district: "Sidi Abdel Rahman",
    city: "North Coast",
    country: "Egypt",
    mode: "RENT",
    typology: "Chalet",
    category: "Coastal Beachfront",
    price: "EGP 140,000",
    period: "/ month",
    rawPrice: 140000,
    pricePerMonth: true,
    primaryBadge: "FOR RENT",
    secondaryBadge: "SEASONAL • SAHEL",
    beds: 3,
    baths: 3,
    area: 240,
    areaDisplay: "240 m²",
    image:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=88",
    description:
      "Whitewashed Mediterranean summer sanctuary with interior shaded arcades, breeze-cooled limestone patios, and direct white-sand beach access.",
    architecturalNotes:
      "Cycladic-influenced organic plaster curves, bespoke built-in banquettes, terracotta tiles, and automated cedar louver shading.",
    features: ["Direct Beach Access", "Private Arcade", "Sea Breeze Orientation", "Concierge"],
    featured: true,
  },
  {
    id: "nst-701",
    slug: "signature-glass-pavilion",
    href: "/properties/signature-glass-pavilion",
    ref: "REF. NST-701",
    title: "Signature Glass Pavilion",
    location: "PALM HILLS • 6TH OF OCTOBER",
    district: "Fairway Enclave",
    city: "6th of October",
    country: "Egypt",
    mode: "BUY",
    typology: "Pavilion",
    category: "Golf Frontage",
    price: "EGP 31,000,000",
    rawPrice: 31000000,
    pricePerMonth: false,
    primaryBadge: "FOR SALE",
    secondaryBadge: "GOLF FRONTAGE",
    beds: 4,
    baths: 4,
    area: 460,
    areaDisplay: "460 m²",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=88",
    description:
      "Minimalist steel and cantilevered glass pavilion floating over the 18th championship fairway, with seamless horizon views and twilight illumination.",
    architecturalNotes:
      "Post-tensioned concrete slabs with structural silicone glass curtains, Japanese zen gravel courts, and low-voltage architectural lighting scheme.",
    features: ["Golf Course View", "Glass Curtain Walls", "Infinity Lap Pool", "Smart Automation"],
    featured: true,
  },
];

export const MARKET_INDEX_DATA = {
  eyebrow: "CURATED PORTFOLIO • AUTUMN 2025",
  title: "Find Your Next Property",
  subtitle:
    "Explore our verified collection of residences, coastal estates, and exclusive investments across Egypt and the Arab region.",
  marketIndexValue: "EGP 14.2B AUM",
  marketIndexLabel: "MARKET INDEX",
  coverageLabel: "COVERAGE",
  coverageValue: "Cairo • Red Sea • Sahel",
  totalListingsCount: 89,
};
