
    MATCH (p1:Place { placeId: "madrid" }), (p2:Place { placeId: "burgos" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "madrid" }), (p2:Place { placeId: "zaragoza" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "burgos" }), (p2:Place { placeId: "sanSebastian" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "zaragoza" }), (p2:Place { placeId: "barcelona" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "barcelona" }), (p2:Place { placeId: "montpellier" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "lyon" }), (p2:Place { placeId: "montpellier" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "lyon" }), (p2:Place { placeId: "geneva" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "sanSebastian" }), (p2:Place { placeId: "pau" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "pau" }), (p2:Place { placeId: "bordeaux" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "bordeaux" }), (p2:Place { placeId: "nantes" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "nantes" }), (p2:Place { placeId: "paris" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "lyon" }), (p2:Place { placeId: "paris" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "madrid" }), (p2:Place { placeId: "porto" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "porto" }), (p2:Place { placeId: "lisbon" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "lisbon" }), (p2:Place { placeId: "sevilla" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "sevilla" }), (p2:Place { placeId: "gibraltar" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "sevilla" }), (p2:Place { placeId: "granada" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  
    MATCH (p1:Place { placeId: "granada" }), (p2:Place { placeId: "madrid" })
    MERGE (p1)-[:ADJACENT_TO { kind: "land" }]->(p2);
  