// REGULAR QUERIES
// Count all nodes
MATCH (a) RETURN COUNT(a)

// Shortest path
MATCH p = shortestPath((a:Place)-[:ADJACENT_TO*]-(b:Place))
WHERE a.placeId = 'paris' AND b.placeId = 'burgos'
RETURN [n in nodes(p) | n.name] AS stops;

// Xth places from the specific places
MATCH (start:Place {placeId: "geneva"})-[:ADJACENT_TO*2]-(end:Place)
RETURN end


// INITIALIZATION
// Create point index
CREATE POINT INDEX placeIndex FOR (a:Place) ON (a.coordinates);

// Create unique constraint
CREATE CONSTRAINT FOR (a:Place) REQUIRE a.placeId IS UNIQUE;



// IRREGULAR QUERIES
// Delete relationship
MATCH (a:Place {placeId: "barcelona"})-[r:ADJACENT_TO]->(b:Place {placeId: "montpellier"}) DELETE r;

// Delete all relationships
MATCH ()-[r:ADJACENT_TO]->() DELETE r

// Delete all data
MATCH (n) DETACH DELETE n;

// Create relationship
MATCH (u:City), (v:City) WHERE u.id = "athens" AND v.id = "paris" CREATE (u)-[:`ADJACENT_TO`]->(v);

