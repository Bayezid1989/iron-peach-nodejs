import {
  generatePlaceFeaturesGeoJson,
  generatePlaceMergeCypher,
  generateRouteFeaturesGeoJson,
  generateRouteMergeCypher,
} from "./fileGeneraters";
import { driver, readNeo4j } from "./neo4j";

(async () => {
  // const serverInfo = await driver.getServerInfo();
  // console.log(serverInfo);
  const graph = await readNeo4j(`MATCH (n:Place) RETURN n LIMIT 2;`);
  console.log(
    "graph",
    graph.map((g) => g.n.properties),
  );
  generateRouteFeaturesGeoJson();
  generateRouteMergeCypher();
  // generatePlaceMergeCypher();
  // generatePlaceFeaturesGeoJson();
})();
