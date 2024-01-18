import {
  generateDictionaryAndPlaceList,
  generatePlaceIdArray,
} from "./generaters/app";
import {
  generatePlaceMergeCypher,
  generateRouteMergeCypher,
} from "./generaters/cypher";
import {
  generatePlaceFeaturesGeoJson,
  generateRouteFeaturesGeoJson,
} from "./generaters/geoJson";
import { generatePlaceIdEnum } from "./generaters/utility";
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
  // generateCoordinateList();
  // generatePlaceIdEnum();
  // generatePlaceIdArray();
  generateDictionaryAndPlaceList();
  generatePlaceMergeCypher();
  // generateRouteMergeCypher();
  generatePlaceFeaturesGeoJson();
  generateRouteFeaturesGeoJson();

  // const data = await getCoordinates("Liverpool");
})();
