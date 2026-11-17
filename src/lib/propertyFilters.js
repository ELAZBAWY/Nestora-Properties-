const normalize = (value) => String(value || "").trim().toLowerCase();

export function filterProperties(properties, filters) {
  return properties.filter((property) => {
    if (filters.mode !== "ALL" && property.mode !== filters.mode) return false;

    if (filters.location !== "ALL") {
      const locationQuery = normalize(filters.location);
      const searchableLocation = [
        property.location,
        property.city,
        property.district,
        property.country,
      ]
        .map(normalize)
        .join(" ");

      if (!searchableLocation.includes(locationQuery)) return false;
    }

    if (
      filters.typology !== "ALL" &&
      normalize(property.typology) !== normalize(filters.typology)
    ) {
      return false;
    }

    if (filters.budget !== "ALL" && !matchesBudget(property, filters)) {
      return false;
    }

    if (filters.bedrooms !== "Any") {
      const minimumBedrooms = parseInt(filters.bedrooms, 10);
      if (!Number.isNaN(minimumBedrooms) && property.beds < minimumBedrooms) {
        return false;
      }
    }

    if (filters.style !== "ALL") {
      const searchableStyle = normalize(
        [property.style, property.category, property.architecturalNotes, property.description]
          .filter(Boolean)
          .join(" ")
      );

      if (!searchableStyle.includes(normalize(filters.style))) return false;
    }

    if (filters.features?.length) {
      const propertyFeatures = (property.features || []).map(normalize);
      const hasEveryFeature = filters.features.every((feature) =>
        propertyFeatures.some((propertyFeature) =>
          propertyFeature.includes(normalize(feature))
        )
      );

      if (!hasEveryFeature) return false;
    }

    return true;
  });
}

function matchesBudget(property, filters) {
  const price = Number(property.rawPrice);

  if (filters.mode === "BUY") {
    if (filters.budget === "under-70m") return price < 70000000;
    if (filters.budget === "70m-100m") return price >= 70000000 && price < 100000000;
    if (filters.budget === "100m+") return price >= 100000000;
  }

  if (filters.mode === "RENT") {
    if (filters.budget === "under-250k") return price < 250000;
    if (filters.budget === "250k-500k") return price >= 250000 && price < 500000;
    if (filters.budget === "500k+") return price >= 500000;
  }

  return true;
}

export function getFilterOptions(properties) {
  return {
    locations: [...new Set(properties.map((property) => property.city).filter(Boolean))],
    typologies: [...new Set(properties.map((property) => property.typology).filter(Boolean))],
    categories: [...new Set(properties.map((property) => property.category).filter(Boolean))],
  };
}
