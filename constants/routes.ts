import { RouteConfig } from "../types";

export const ROUTES: RouteConfig[] = [
  { places: ["madrid", "burgos"], type: "land" },
  { places: ["madrid", "zaragoza"], type: "land" },
  { places: ["burgos", "sanSebastian"], type: "land" },
  { places: ["zaragoza", "barcelona"], type: "land" },
  { places: ["barcelona", "montpellier"], type: "land" },
  { places: ["lyon", "montpellier"], type: "land" },
  { places: ["lyon", "geneva"], type: "land" },
  { places: ["sanSebastian", "pau"], type: "land" },
  { places: ["pau", "bordeaux"], type: "land" },
  { places: ["bordeaux", "nantes"], type: "land" },
  { places: ["nantes", "paris"], type: "land" },
  { places: ["lyon", "paris"], type: "land" },
  { places: ["madrid", "porto"], type: "land" },
  { places: ["porto", "lisbon"], type: "land" },
  { places: ["lisbon", "sevilla"], type: "land" },
  { places: ["sevilla", "gibraltar"], type: "land" },
  { places: ["sevilla", "granada"], type: "land" },
  { places: ["granada", "madrid"], type: "land" },
];
