import { AppPlaceConfig, PlaceConfig, PlaceFeature } from "./types";
import { ICON_MAP } from "./constants";
import {
  PROPERTY_PLACES,
  INCOME_EXPENSE_PLACES,
  ITEM_PLACES,
} from "./constants/placesBase";
import { convertToCamelCase, writeStringFile } from "./utils";
import { ROUTES } from "./constants/routes";

export const generatePlaceIdEnum = () => {
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

export const generatePlaceIdArray = () => {
  const allPlaceIds = Object.keys({
    ...INCOME_EXPENSE_PLACES,
    ...PROPERTY_PLACES,
    ...ITEM_PLACES,
  });

  writeStringFile(
    "constants/placeIdArray.ts",
    `export const PLACE_IDS: readonly [string, ...string[]] | [string, ...string[]]  = ${JSON.stringify(allPlaceIds, undefined, 2)}`,
  );
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
        kind: route.kind,
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
    MERGE (p1)-[:ADJACENT_TO { kind: "${route.kind}" }]->(p2);
  `;
    cypherString += routeCypher;
  });

  writeStringFile("cypher/mergeRoutes.cypher", cypherString);
};

export const generateDictionaryAndPlaceListForApp = () => {
  const allPlaces = {
    ...INCOME_EXPENSE_PLACES,
    ...PROPERTY_PLACES,
    ...ITEM_PLACES,
  };

  type Dictionary = { [key: string]: { en: string } };

  const newPropertyList: { [placeId: string]: AppPlaceConfig } = {};
  const newIncomeExpenseList: { [placeId: string]: AppPlaceConfig } = {};
  const newItemList: { [placeId: string]: AppPlaceConfig } = {};
  const placeNameDictionary: Dictionary = {};
  const assetNameDictionary: Dictionary = {};

  const createAssetId = (placeId: string, assetName: string) =>
    `${placeId}${convertToCamelCase(assetName, false)}`;

  Object.entries(allPlaces).forEach(([placeId, place]) => {
    placeNameDictionary[placeId] = { en: place.name };

    if (place.assets?.length) {
      place.assets.forEach((asset) => {
        const assetId = createAssetId(placeId, asset.name);
        assetNameDictionary[assetId] = { en: asset.name };
      });
    }

    const node = {
      coordinates: place.coordinates,
      role: place.role,
      assets: place.assets?.map((asset) => ({
        id: createAssetId(placeId, asset.name),
        price: asset.price,
        profitRate: asset.profitRate,
      })),
      items: place.items,
      cashVolume: place.cashVolume,
    };

    switch (place.role) {
      case "asset":
        newPropertyList[placeId] = node;
        break;
      case "income":
      case "expense":
        newIncomeExpenseList[placeId] = node;
        break;
      case "item":
        newItemList[placeId] = node;
        break;
    }
  });

  const dictionaryString = `
  export const PLACE_NAME_DICTIONARY = ${JSON.stringify(placeNameDictionary, undefined, 2)};
  export const ASSET_NAME_DICTIONARY = ${JSON.stringify(assetNameDictionary, undefined, 2)}
  `;
  writeStringFile("constants/dictionary.ts", dictionaryString);

  const placeListString = `
  import { AppPlaceConfig } from "../types";

  export const ASSET_PLACES: Record<string, AppPlaceConfig> = ${JSON.stringify(
    newPropertyList,
    undefined,
    2,
  )};
  
  export const INCOME_EXPENSE_PLACES: Record<string, AppPlaceConfig> = ${JSON.stringify(
    newIncomeExpenseList,
    undefined,
    2,
  )};

  export const ITEM_PLACES: Record<string, AppPlaceConfig> = ${JSON.stringify(
    newItemList,
    undefined,
    2,
  )};`;
  writeStringFile("constants/placeConfigs.ts", placeListString);
};
