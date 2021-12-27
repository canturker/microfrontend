import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((c) => {
        setCharacters(c.results);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {characters.map((character) => (
        <div
          key={character.id}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <img
            src={character.image}
            width={150}
            height={150}
            alt={character.name}
          />
          <b>{character.name}</b>
          <Link to={`/${character.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
