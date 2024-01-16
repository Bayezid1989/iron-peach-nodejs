type Asset = {
  name: string;
  price: number;
  profitRate: number;
};

type PlaceConfig = {
  placeId: string;
  coordinates: { lat: number; lng: number };
  role: "property" | "income" | "expense" | "item";
  category: "city" | "town";
  assets?: Asset[];
  items?: string[];
};

export const LOCATION_FEATURES: PlaceConfig[] = [
  {
    id: "athens",
    type: "Feature",
    properties: {
      title: "Athens",
      assets: [
        { title: "Souvlaki Shop", price: 100, profitRate: 1 },
        { title: "Museum", price: 500000, profitRate: 0.03 },
        { title: "Greek Temple", price: 1000000, profitRate: 0.01 },
      ],
      iconType: "city",
      effect: "property",
    },
    geometry: {
      type: "Point",
      coordinates: [23.727539, 37.98381],
    },
  },
  {
    id: "paris",
    type: "Feature",
    properties: {
      title: "Paris",
      assets: [
        { title: "French Restaurant", price: 300, profitRate: 0.5 },
        { title: "Fashion Brand", price: 400000, profitRate: 0.1 },
        { title: "Museum", price: 100000000, profitRate: 0.01 },
      ],
      iconType: "city",
      effect: "property",
    },
    geometry: {
      type: "Point",
      coordinates: [2.349014, 48.864716],
    },
  },
  {
    id: "madrid",
    type: "Feature",
    properties: {
      title: "Madrid",
      assets: [
        { title: "Spanish Bar", price: 200, profitRate: 1 },
        { title: "Soccer Studium", price: 200000, profitRate: 0.05 },
      ],
      iconType: "city",
      effect: "property",
    },
    geometry: {
      type: "Point",
      coordinates: [-3.70379, 40.416775],
    },
  },
  {
    id: "berlin",
    type: "Feature",
    properties: {
      title: "Berlin",
      assets: [{ title: "Beer Brewery", price: 1000, profitRate: 0.2 }],
      iconType: "city",
      effect: "property",
    },
    geometry: {
      type: "Point",
      coordinates: [13.404954, 52.520008],
    },
  },
  {
    id: "geneva",
    type: "Feature",
    properties: {
      title: "Geneva",
      assets: [{ title: "Bank", price: 500000, profitRate: 0.08 }],
      iconType: "city",
      effect: "property",
    },
    geometry: {
      type: "Point",
      coordinates: [6.143158, 46.204391],
    },
  },
  {
    id: "burgos",
    type: "Feature",
    properties: {
      title: "Burgos",
      iconType: "town",
      effect: "income",
    },
    geometry: {
      type: "Point",
      coordinates: [-3.707206, 42.350388],
    },
  },
  {
    id: "zaragoza",
    type: "Feature",
    properties: {
      title: "Zaragoza",
      iconType: "town",
      effect: "income",
    },
    geometry: {
      type: "Point",
      coordinates: [-0.887712, 41.649693],
    },
  },

  {
    id: "montpellier",
    type: "Feature",
    properties: {
      title: "Montpellier",
      iconType: "town",
      effect: "income",
    },
    geometry: {
      type: "Point",
      coordinates: [3.8772, 43.6119],
    },
  },
  {
    id: "nantes",
    type: "Feature",
    properties: {
      title: "Nantes",
      iconType: "town",
      effect: "income",
    },
    geometry: {
      type: "Point",
      coordinates: [-1.5528, 47.218102],
    },
  },
  {
    id: "lyon",
    type: "Feature",
    properties: {
      title: "Lyon",
      iconType: "town",
      effect: "income",
    },
    geometry: {
      type: "Point",
      coordinates: [4.834277, 45.76342],
    },
  },
  {
    id: "sanSebastián",
    type: "Feature",
    properties: {
      title: "San Sebastián",
      iconType: "town",
      effect: "expense",
    },
    geometry: {
      type: "Point",
      coordinates: [-1.993332, 43.312691],
    },
  },
  {
    id: "bordeaux",
    type: "Feature",
    properties: {
      title: "Bordeaux",
      iconType: "town",
      effect: "income",
    },
    geometry: {
      type: "Point",
      coordinates: [-0.580816, 44.836151],
    },
  },
  {
    id: "barcelona",
    type: "Feature",
    properties: {
      title: "Barcelona",
      iconType: "city",
      effect: "item",
    },
    geometry: {
      type: "Point",
      coordinates: [2.154007, 41.390205],
    },
  },
];
