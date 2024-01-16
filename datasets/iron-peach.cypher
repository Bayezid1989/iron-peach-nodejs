CREATE POINT INDEX cityIndex FOR (a:City) ON (a.location);
CREATE (a:City {placeId: "athens", location: point( {latitude:37.98381, longitude:23.727539})});
CREATE (a:City {placeId: "paris", location: point( {latitude:48.864716, longitude:2.349014})});

MATCH (u:City), (v:City) WHERE u.id = "athens" AND v.id = "paris" CREATE (u)-[:`ADJACENT_TO`]->(v);