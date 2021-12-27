import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [basketItemCount, setBasketItemCount] = useState(0);
  const addToCartListener = useRef();

  useEffect(() => {
    setBasketItemCount(
      JSON.parse(window.localStorage.getItem("basket_items")).length
    );
    addToCartListener.current = window.addEventListener("add_to_cart", (e) => {
      setBasketItemCount(JSON.parse(e.detail.items).length);
    });
    return () => {
      window.removeEventListener(addToCartListener.current);
    };
  }, []);

  return (
    <div style={navbarStyle}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
          alt=""
          height={36}
        />
      </Link>
      <Link to={"/checkout/basket"} style={basketIconStyle}>
        Basket
        <span style={itemCount}>{basketItemCount}</span>
      </Link>
    </div>
  );
};
const navbarStyle = {
  padding: "15px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0px 3px 25px -4px rgba(0,0,0,0.49)",
  zIndex: "9",
};
const basketIconStyle = {
  color: "black",
  padding: "5px 10px",
  fontSize: "20px",
  fontWeight: "600",
  textDecoration: "none",
  border: "1px solid red",
  borderRadius: "10px",
  position: "relative",
};
const itemCount = {
  position: "absolute",
  top: "-10px",
  right: "-10px",
  width: "20px",
  height: "20px",
  background: "red",
  color: "white",
  fontSize: "15px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100px",
};

export default Navbar;
