import { PlaceId } from "./placeIdEnum";

export type PlaceRole = "asset" | "income" | "expense" | "item";
export type CashVolume = "low" | "medium" | "high"; // For income and expense places

export type AppPlaceConfig = {
  coordinates: { lat: number; lng: number };
  role: PlaceRole;
  assets?: {
    id: string;
    price: number;
    profitRate: number;
  }[];
  items?: string[]; // For item places
  cashVolume?: CashVolume;
};

export type Asset = {
  name: string;
  price: number;
  profitRate: number;
};

export type PlaceConfig = {
  name: string;
  coordinates: { lat: number; lng: number };
  role: PlaceRole;
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
