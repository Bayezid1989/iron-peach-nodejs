import { PlaceId } from "../types/placeIdEnum";

export const CONNECTIONS: [PlaceId, PlaceId][] = [
  ["madrid", "burgos"],
  ["madrid", "zaragoza"],
  ["burgos", "sanSebastian"],
  ["zaragoza", "barcelona"],
  ["barcelona", "montpellier"],
  ["lyon", "montpellier"],
  ["lyon", "geneva"],
  ["sanSebastian", "pau"],
  ["pau", "bordeaux"],
  ["bordeaux", "nantes"],
  ["nantes", "paris"],
  ["lyon", "paris"],
  ["madrid", "porto"],
  ["porto", "lisbon"],
  ["lisbon", "sevilla"],
  ["sevilla", "gibraltar"],
  ["sevilla", "granada"],
  ["granada", "madrid"],
];
