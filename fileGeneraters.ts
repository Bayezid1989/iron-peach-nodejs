import { PlaceFeature } from "./types";
import { ICON_MAP } from "./constants";
import {
  PROPERTY_PLACES,
  INCOME_EXPENSE_PLACES,
  ITEM_PLACES,
} from "./constants/places";
import { writeStringFile } from "./utils";
import { ROUTES } from "./constants/routes";

export const generateEnum = () => {
  const allPlaceIds = Object.keys({
    ...INCOME_EXPENSE_PLACES,
    ...PROPERTY_PLACES,
    ...ITEM_PLACES,
  });

  let enumString = "export type PlaceId =";
  allPlaceIds.forEach((placeId) => {
    enumString += `"${placeId}" |`;
  });
  enumString = enumString.slice(0, -2);
  writeStringFile("types/placeIdEnum.ts", enumString);
};

export const generatePlaceFeaturesGeoJson = () => {
  const allPlaces = Object.entries({
    ...INCOME_EXPENSE_PLACES,
    ...PROPERTY_PLACES,
    ...ITEM_PLACES,
  });

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

  writeStringFile("json/placeGeo.json", JSON.stringify(geoJson, undefined, 2));
};

export const generateRouteFeaturesGeoJson = () => {
  const allPlaceList = {
    ...INCOME_EXPENSE_PLACES,
    ...PROPERTY_PLACES,
    ...ITEM_PLACES,
  };
  const features = ROUTES.map((route) => {
    const from = allPlaceList[route.places[0]];
    const to = allPlaceList[route.places[1]];

    return {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [from.coordinates.lng, from.coordinates.lat],
          [to.coordinates.lng, to.coordinates.lat],
        ],
      },
      properties: {
        type: route.type,
      },
    };
  });
  const geoJson = {
    type: "FeatureCollection",
    features: features,
  };

  writeStringFile("json/routeGeo.json", JSON.stringify(geoJson, undefined, 2));
};

export const generatePlaceMergeCypher = () => {
  const allPlaces = Object.entries({
    ...INCOME_EXPENSE_PLACES,
    ...PROPERTY_PLACES,
    ...ITEM_PLACES,
  });

  let cypherString = "";

  // Use MERGE instead of CREATE to avoid duplicate nodes
  allPlaces.forEach(([placeId, place]) => {
    const placeCypher = `
      MERGE (p:Place { name: "${place.name}", placeId: "${placeId}", role: "${place.role}", category: "${place.category}" })
      SET p.coordinates = point({ longitude: ${place.coordinates.lng}, latitude: ${place.coordinates.lat} });
    `;
    cypherString += placeCypher;
  });

  writeStringFile("cypher/mergePlaces.cypher", cypherString);
};

export const generateRouteMergeCypher = () => {
  let cypherString = "";

  // Use MERGE instead of CREATE to avoid duplicate relationships
  ROUTES.forEach((route) => {
    const routeCypher = `
    MATCH (p1:Place { placeId: "${route.places[0]}" }), (p2:Place { placeId: "${route.places[1]}" })
    MERGE (p1)-[:ADJACENT_TO { type: "${route.type}" }]->(p2);
  `;
    cypherString += routeCypher;
  });

  writeStringFile("cypher/mergeRoutes.cypher", cypherString);
};
