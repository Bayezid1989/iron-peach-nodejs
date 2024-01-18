import { driver, readNeo4j } from "./neo4j";
import { getCoordinates } from "./utils";

(async () => {
  // const serverInfo = await driver.getServerInfo();
  // console.log(serverInfo);
  // const graph = await readNeo4j(`MATCH (n:Place) RETURN n LIMIT 2;`);
  // console.log(
  //   "graph",
  //   graph.map((g) => g.n.properties),
  // );

  // generatePlaceIdArray();
  // generateRouteFeaturesGeoJson();
  // generateRouteMergeCypher();
  // generatePlaceMergeCypher();
  // generatePlaceFeaturesGeoJson();
  // generateDictionaryAndPlaceListForApp();
  getCoordinates("Paris");
})();
