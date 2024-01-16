import { PlaceFeature } from "./types";
import { ICON_MAP } from "./constants";
import {
  PROPERTY_PLACES,
  INCOME_EXPENSE_PLACES,
  ITEM_PLACES,
} from "./constants/places";
import { writeStringFile } from "./utils";

const allPlaceIds = Object.keys({
  ...INCOME_EXPENSE_PLACES,
  ...PROPERTY_PLACES,
  ...ITEM_PLACES,
});

export const generateEnumFile = () => {
  let enumString = "export type PlaceId =";
  allPlaceIds.forEach((placeId) => {
    enumString += `"${placeId}" |`;
  });
  enumString = enumString.slice(0, -2);
  writeStringFile("types/placeIdEnum.ts", enumString);
};

const allPlaces = Object.entries({
  ...INCOME_EXPENSE_PLACES,
  ...PROPERTY_PLACES,
  ...ITEM_PLACES,
});

export const generateFeatureGeoJsonFile = () => {
  const features: PlaceFeature[] = allPlaces.map(([placeId, place]) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [place.coordinates.lng, place.coordinates.lat],
    },
    properties: {
      name: place.name,
      placeId: placeId,
      role: place.role,
      icon: ICON_MAP[place.role],
      assets: place.assets,
      items: place.items,
      cashVolume: place.cashVolume,
    },
  }));
  const geoJson = {
    type: "FeatureCollection",
    features: features,
  };

  writeStringFile(
    "json/placeGeoJson.json",
    JSON.stringify(geoJson, undefined, 2),
  );
};

export const generatePlaceCreateCypherFile = () => {
  let cypherString = "";

  writeStringFile("json/createPlaces.cypher", cypherString);
};
