import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  let params = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((res) => res.json())
      .then((c) => {
        setCharacter(c);
      });
  }, []);

  const addToCart = () => {
    window.localStorage.setItem("basket_items", params.id);
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <img
        width="300"
        height="300"
        src={character.image}
        alt={character.name}
        style={{ display: "block" }}
      />
      <h3>{character.name}</h3>
      <div>
        Gender: <b>{character.gender}</b>
      </div>
      <div>
        Species: <b>{character.species}</b>
      </div>
      <div>
        Status: <b>{character.status}</b>
      </div>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default ProductDetail;
