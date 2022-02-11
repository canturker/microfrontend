import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Basket() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const items = window.localStorage.getItem("basket_items");
    const itemsJson = JSON.parse(items || "[]");
    Promise.all(
      itemsJson.map((i) =>
        fetch(`https://rickandmortyapi.com/api/character/${i}`)
          .then((res) => res.json())
          .then((c) => {
            return c;
          })
      )
    ).then((res) => {
      setBasketItems(res);
    });
  }, []);

  return (
    <div>
      <h5>Basket</h5>
      <hr />
      {basketItems.map((item, index) => (
        <div style={{ display: "flex", marginBottom: "10px" }} key={index}>
          <img
            width="150"
            height="150"
            src={item.image}
            alt={item.name}
            style={{ display: "block" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <h3>{item.name}</h3>
            <div>
              Gender: <b>{item.gender}</b>
            </div>
            <div>
              Species: <b>{item.species}</b>
            </div>
            <div>
              Status: <b>{item.status}</b>
            </div>
          </div>
        </div>
      ))}
      <Link
        to={"/checkout/payment"}
        style={{
          fontSize: "20px",
          textDecoration: "none",
          border: "1px solid red",
          borderRadius: "10px",
          padding: "5px 10px",
          color: "#000000",
          fontWeight: "bold",
        }}
      >
        Go Payment
      </Link>
    </div>
  );
}

export default Basket;
