import React from "react";
import {
  container as containerStyle,
  detail as detailStyle,
  name as nameStyle,
  statusGreen,
  statusRed,
  statusYellow,
  button as buttonStyle,
} from "./style.css";

type IProductDetailProps = {
  id: string;
  image: string;
  name: string;
  gender: string;
  species: string;
  status: string;
};

const ProductDetailView: React.FC<IProductDetailProps> = ({
  id,
  image,
  name,
  gender,
  species,
  status,
}) => {
  const addToCart = () => {
    const items = window.localStorage.getItem("basket_items");
    if (items) {
      const itemsArray = JSON.parse(items);
      itemsArray.push(id);
      window.localStorage.setItem("basket_items", JSON.stringify(itemsArray));
    } else {
      window.localStorage.setItem("basket_items", `[${id}]`);
    }
    const addToCart = new CustomEvent("add_to_cart", {
      detail: {
        items: items || [...id],
        from: "productDetail",
      },
    });
    window.dispatchEvent(addToCart);
  };

  const statusStyle = (_status: string) => {
    switch (_status) {
      case "Alive":
        return statusGreen;
      case "Dead":
        return statusRed;
      default:
        return statusYellow;
    }
  };

  return (
    <div className={containerStyle}>
      <img
        width="300"
        height="300"
        src={image}
        alt={name}
        style={{ display: "block" }}
      />
      <div className={detailStyle}>
        <h3 className={nameStyle}>{name}</h3>
        <div>
          Gender: <b>{gender}</b>
        </div>
        <div>
          Species: <b>{species}</b>
        </div>
        <div>
          Status: <b className={statusStyle(status)}>{status}</b>
        </div>
        <button onClick={addToCart} className={buttonStyle}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailView;
