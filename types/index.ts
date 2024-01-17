import { PlaceId } from "./placeIdEnum";

export type Asset = {
  // For property places
  name: string;
  price: number;
  profitRate: number;
};

export type PlaceRole = "property" | "income" | "expense" | "item";
export type PlaceCategory = "city" | "town"; // Size or category of the place
export type CashVolume = "low" | "medium" | "high"; // For income and expense places

export type PlaceConfig = {
  name: string;
  coordinates: { lat: number; lng: number };
  role: PlaceRole;
  category: PlaceCategory;
  assets?: Asset[];
  items?: string[]; // For item places
  cashVolume?: CashVolume;
};

export type PlaceFeature = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    name: string;
    placeId: string;
    role: PlaceRole;
    icon: string;
    assets?: Asset[];
    items?: string[];
    cashVolume?: CashVolume;
  };
};

export type RouteConfig = {
  places: [PlaceId, PlaceId];
  kind: "air" | "land" | "sea";
};
