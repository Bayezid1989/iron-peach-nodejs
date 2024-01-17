// REGULAR QUERIES
// Count all nodes
MATCH (a) RETURN COUNT(a)


// INITIALIZATION
// Create point index
CREATE POINT INDEX placeIndex FOR (a:Place) ON (a.coordinates);

// Create unique constraint
CREATE CONSTRAINT FOR (a:Place) REQUIRE a.placeId IS UNIQUE;




// IRREGULAR QUERIES
// Delete relationship
MATCH (a:Place {placeId: "lisbon"})-[r:ADJACENT_TO]->(b:Place {placeId: "sevilla"}) DELETE r

// Delete all relationships
MATCH ()-[r:ADJACENT_TO]->() DELETE r

// Delete all data
MATCH (n) DETACH DELETE n;

// Create relationship
MATCH (u:City), (v:City) WHERE u.id = "athens" AND v.id = "paris" CREATE (u)-[:`ADJACENT_TO`]->(v);

