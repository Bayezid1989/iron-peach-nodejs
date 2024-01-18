import { PlaceConfig } from "../types";

export const ASSET_PLACES: { [placeId: string]: PlaceConfig } = {
  amsterdam: {
    name: "Amsterdam",
    coordinates: { lat: 52.377956, lng: 4.89707 },
    role: "asset",
    assets: [
      { name: "Canal Cruise Company", price: 300, profitRate: 0.1 },
      { name: "Diamond Polishing Workshop", price: 500, profitRate: 0.15 },
      { name: "Tulips Farm", price: 200, profitRate: 0.08 },
      { name: "Windmill Energy Cooperative", price: 400, profitRate: 0.12 },
      { name: "Chocolate Factory", price: 600, profitRate: 0.2 },
    ],
  },
  paris: {
    name: "Paris",
    coordinates: { lat: 48.864716, lng: 2.349014 },
    role: "asset",

    assets: [
      {
        name: "Eiffel Tower Viewing Platform Concessions",
        price: 700,
        profitRate: 0.25,
      },
      { name: "Luxury Fashion Boutique", price: 800, profitRate: 0.3 },
      { name: "Croissant Bakery Chain", price: 450, profitRate: 0.18 },
      { name: "Perfume Manufacturer", price: 650, profitRate: 0.22 },
      { name: "Art Gallery District Rentals", price: 350, profitRate: 0.12 },
    ],
  },
  rome: {
    name: "Rome",
    coordinates: { lat: 41.902782, lng: 12.496366 },
    role: "asset",

    assets: [
      { name: "Gelato Stand Chain", price: 200, profitRate: 0.08 },
      { name: "Colosseum Souvenir Shop", price: 450, profitRate: 0.18 },
      { name: "Luxury Leather Goods Workshop", price: 600, profitRate: 0.22 },
      { name: "Wine Vineyard Estate", price: 500, profitRate: 0.16 },
      { name: "Pasta Factory", price: 300, profitRate: 0.12 },
    ],
  },
  berlin: {
    name: "Berlin",
    coordinates: { lat: 52.520008, lng: 13.404954 },
    role: "asset",

    assets: [
      { name: "Craft Beer Brewery", price: 250, profitRate: 0.1 },
      { name: "Tech Startup Incubator", price: 400, profitRate: 0.15 },
      { name: "Historical Tour Business", price: 300, profitRate: 0.12 },
      { name: "Chocolate Bar Chain", price: 550, profitRate: 0.2 },
      {
        name: "Solar Panel Installation Company",
        price: 350,
        profitRate: 0.14,
      },
    ],
  },
  london: {
    name: "London",
    coordinates: { lat: 51.509865, lng: -0.118092 },
    role: "asset",

    assets: [
      {
        name: "Double Decker Bus Advertising Contract",
        price: 500,
        profitRate: 0.2,
      },
      { name: "Tea Shop Chain", price: 300, profitRate: 0.12 },
      { name: "Fish and Chips Restaurant", price: 400, profitRate: 0.15 },
      { name: "Football Club Merchandise Stand", price: 700, profitRate: 0.25 },
      { name: "Savile Row Tailoring Shop", price: 600, profitRate: 0.22 },
    ],
  },
  barcelona: {
    name: "Barcelona",
    coordinates: { lat: 41.390205, lng: 2.154007 },
    role: "asset",

    assets: [
      { name: "Tapas Bar Chain", price: 300, profitRate: 0.12 },
      { name: "Soccer Club Merchandise Stand", price: 600, profitRate: 0.22 },
      {
        name: "Modernist Architecture Tour Business",
        price: 400,
        profitRate: 0.15,
      },
      { name: "Paella Restaurant", price: 500, profitRate: 0.18 },
      { name: "Catalan Wine Vineyard Estate", price: 700, profitRate: 0.25 },
    ],
  },
  copenhagen: {
    name: "Copenhagen",
    coordinates: { lat: 55.676098, lng: 12.568337 },
    role: "asset",

    assets: [
      { name: "Lego Brick Design Studio", price: 400, profitRate: 0.16 },
      {
        name: "Sustainable Energy Consulting Firm",
        price: 350,
        profitRate: 0.14,
      },
      { name: "Michelin-Starred Restaurant", price: 750, profitRate: 0.27 },
      { name: "Windmill Energy Cooperative", price: 400, profitRate: 0.12 },
      { name: "Viking History Museum Gift Shop", price: 300, profitRate: 0.12 },
    ],
  },

  lisbon: {
    name: "Lisbon",
    coordinates: { lat: 38.736946, lng: -9.142685 },
    role: "asset",

    assets: [
      {
        name: "Tramcar Network Advertising Rights",
        price: 400,
        profitRate: 0.16,
      },
      { name: "Canned Sardine Factory", price: 300, profitRate: 0.12 },
      { name: "Cork Products Workshop", price: 400, profitRate: 0.15 },
      { name: "Custard Tart Bakery Chain", price: 600, profitRate: 0.22 },
      { name: "Tile Factory", price: 450, profitRate: 0.18 },
    ],
  },
  dublin: {
    name: "Dublin",
    coordinates: { lat: 53.35014, lng: -6.266155 },
    role: "asset",

    assets: [
      { name: "Irish Pub Chain", price: 300, profitRate: 0.12 },
      { name: "Whiskey Distillery", price: 500, profitRate: 0.18 },
      { name: "Leprechaun Souvenir Shop", price: 400, profitRate: 0.15 },
      { name: "Irish Wool Products Workshop", price: 600, profitRate: 0.22 },
      {
        name: "Guinness Brewery Tour Concession",
        price: 600,
        profitRate: 0.22,
      },
    ],
  },
  edinburgh: {
    name: "Edinburgh",
    coordinates: { lat: 55.953251, lng: -3.188267 },
    role: "asset",

    assets: [
      { name: "Whiskey Distillery", price: 500, profitRate: 0.18 },
      { name: "Scottish Wool Products Workshop", price: 600, profitRate: 0.22 },
      { name: "Edinburgh Castle Souvenir Shop", price: 400, profitRate: 0.16 },
      { name: "Ghost Tour Agency", price: 200, profitRate: 0.08 },
      { name: "Shortbread Bakery Chain", price: 400, profitRate: 0.15 },
    ],
  },
  stockholm: {
    name: "Stockholm",
    coordinates: { lat: 59.329323, lng: 18.068581 },
    role: "asset",

    assets: [
      { name: "Furniture Design Studio", price: 400, profitRate: 0.15 },
      { name: "Nobel Prize Museum Gift Shop", price: 300, profitRate: 0.12 },
      { name: "Swedish Meatball Restaurant", price: 500, profitRate: 0.18 },
      { name: "Viking History Museum Gift Shop", price: 300, profitRate: 0.12 },
      { name: "Ice Hotel", price: 600, profitRate: 0.22 },
    ],
  },
  istanbul: {
    name: "Istanbul",
    coordinates: { lat: 41.008238, lng: 28.978359 },
    role: "asset",
    category: "city",
    assets: [
      { name: "Turkish Coffee Shop Chain", price: 300, profitRate: 0.12 },
      { name: "Baklava Bakery Chain", price: 400, profitRate: 0.15 },
      { name: "Turkish Delight Factory", price: 500, profitRate: 0.18 },
      { name: "Turkish Bathhouse", price: 600, profitRate: 0.22 },
      { name: "Bosphorus Cruise Company", price: 700, profitRate: 0.25 },
    ],
  },
  athens: {
    name: "Athens",
    coordinates: { lat: 37.98381, lng: 23.727539 },
    role: "asset",

    assets: [
      { name: "Souvlaki Shop", price: 200, profitRate: 0.08 },
      { name: "Olive Oil Factory", price: 300, profitRate: 0.12 },
      { name: "Feta Cheese Factory", price: 400, profitRate: 0.15 },
      { name: "Ancient Ruins Tour Business", price: 500, profitRate: 0.18 },
      { name: "Greek Yogurt Factory", price: 600, profitRate: 0.22 },
    ],
  },
  monaco: {
    name: "Monaco",
    coordinates: { lat: 43.738418, lng: 7.424616 },
    role: "asset",

    assets: [
      { name: "Casino", price: 1000, profitRate: 0.35 },
      { name: "Yacht Rental Company", price: 800, profitRate: 0.3 },
      { name: "Luxury Car Dealership", price: 700, profitRate: 0.25 },
      { name: "Luxury Fashion Boutique", price: 800, profitRate: 0.3 },
      { name: "Luxury Hotel Chain", price: 900, profitRate: 0.35 },
    ],
  },
  lucerne: {
    name: "Lucerne",
    coordinates: { lat: 47.050168, lng: 8.309307 },
    role: "asset",

    assets: [
      { name: "Chocolate Shop", price: 300, profitRate: 0.12 },
      { name: "Swiss Watch Workshop", price: 400, profitRate: 0.15 },
      { name: "Swiss Army Knife Workshop", price: 500, profitRate: 0.18 },
      { name: "Swiss Cheese Factory", price: 600, profitRate: 0.22 },
      { name: "Swiss Chocolate Factory", price: 700, profitRate: 0.25 },
    ],
  },
  bruges: {
    name: "Bruges",
    coordinates: { lat: 51.209348, lng: 3.2247 },
    role: "asset",

    assets: [
      { name: "Chocolate Shop", price: 300, profitRate: 0.12 },
      { name: "Beer Brewery", price: 400, profitRate: 0.15 },
      { name: "Lace Workshop", price: 500, profitRate: 0.18 },
      { name: "Waffle Stand Chain", price: 600, profitRate: 0.22 },
      { name: "Fries Stand Chain", price: 700, profitRate: 0.25 },
    ],
  },
};

export const INCOME_EXPENSE_PLACES: { [placeId: string]: PlaceConfig } = {
  zaragoza: {
    name: "Zaragoza",
    coordinates: { lat: 41.648823, lng: -0.889085 },
    role: "income",

    cashVolume: "low",
  },
  montpellier: {
    name: "Montpellier",
    coordinates: { lat: 43.610769, lng: 3.876716 },
    role: "income",

    cashVolume: "low",
  },
  burgos: {
    name: "Burgos",
    coordinates: { lat: 42.343479, lng: -3.696906 },
    role: "income",

    cashVolume: "low",
  },
  toulouse: {
    name: "Toulouse",
    coordinates: { lat: 43.604652, lng: 1.444209 },
    role: "income",

    cashVolume: "low",
  },
  sanSebastian: {
    name: "San Sebastian",
    coordinates: { lat: 43.318334, lng: -1.981231 },
    role: "expense",

    cashVolume: "medium",
  },
  pau: {
    name: "Pau",
    coordinates: { lat: 43.296482, lng: -0.370089 },
    role: "income",

    cashVolume: "low",
  },
  bordeaux: {
    name: "Bordeaux",
    coordinates: { lat: 44.837789, lng: -0.57918 },
    role: "expense",

    cashVolume: "medium",
  },
  nantes: {
    name: "Nantes",
    coordinates: { lat: 47.218371, lng: -1.553621 },
    role: "income",

    cashVolume: "medium",
  },
  lyon: {
    name: "Lyon",
    coordinates: { lat: 45.764043, lng: 4.835659 },
    role: "expense",

    cashVolume: "medium",
  },
  porto: {
    name: "Porto",
    coordinates: { lat: 41.157944, lng: -8.629105 },
    role: "income",

    cashVolume: "low",
  },
  sevilla: {
    name: "Sevilla",
    coordinates: { lat: 37.389092, lng: -5.984459 },
    role: "expense",

    cashVolume: "medium",
  },
  gibraltar: {
    name: "Gibraltar",
    coordinates: { lat: 36.140751, lng: -5.353585 },
    role: "income",

    cashVolume: "low",
  },
  granada: {
    name: "Granada",
    coordinates: { lat: 37.177336, lng: -3.598557 },
    role: "expense",

    cashVolume: "medium",
  },
};

export const ITEM_PLACES: { [placeId: string]: PlaceConfig } = {
  madrid: {
    name: "Madrid",
    coordinates: { lat: 40.416775, lng: -3.70379 },
    role: "item",

    items: ["doubleDice", "trippleDice"],
  },
  geneva: {
    name: "Geneva",
    coordinates: { lat: 46.204391, lng: 6.143158 },
    role: "item",

    items: ["doubleDice", "trippleDice"],
  },
  liverpool: {
    name: "Liverpool",
    coordinates: { lat: 53.408371, lng: -2.991573 },
    role: "item",
    items: ["doubleDice", "trippleDice"],
  },
};
