import { PlaceFeature } from "../types";
import { ICON_MAP } from "../constants";
import {
  ASSET_PLACES,
  INCOME_EXPENSE_PLACES,
  ITEM_PLACES,
} from "../constants/base/places";
import { writeStringFile } from "../utils";
import { ROUTES } from "../constants/base/routes";

export const generatePlaceFeaturesGeoJson = () => {
  const allPlaces = Object.entries({
    ...INCOME_EXPENSE_PLACES,
    ...ASSET_PLACES,
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
    ...ASSET_PLACES,
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
