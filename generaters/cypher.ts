import {
  ASSET_PLACES,
  INCOME_EXPENSE_PLACES,
  ITEM_PLACES,
} from "../constants/placesBase";
import { writeStringFile } from "../utils";
import { ROUTES } from "../constants/routes";

export const generatePlaceMergeCypher = () => {
  const allPlaces = Object.entries({
    ...INCOME_EXPENSE_PLACES,
    ...ASSET_PLACES,
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
