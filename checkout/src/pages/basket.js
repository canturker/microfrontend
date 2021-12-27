import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Basket() {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const id = window.localStorage.getItem("basket_items");
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((c) => {
        setCharacter(c);
      });
  }, []);

  return (
    <div>
      <h5>Basket</h5>
      <hr />
      <div>
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
      </div>
      <Link to={"/checkout/payment"}>Go Payment</Link>
    </div>
  );
}

export default Basket;
