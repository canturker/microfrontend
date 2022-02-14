import React from "react";
import { Link } from "react-router-dom";
import { localize } from "../../helpers/localize";
import {
  container as containerStyle,
  name as nameStyle,
  statusGreen,
  statusRed,
  statusYellow,
  button as buttonStyle,
} from "./style.css";

type IProductCardProps = {
  id: string;
  image: string;
  name: string;
  status: string;
};

const ProductCard: React.FC<IProductCardProps> = ({
  id,
  image,
  name,
  status,
}) => {
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
      <img src={image} width={200} height={200} alt={name} />
      <div className={nameStyle}>{name}</div>
      <div className={statusStyle(status)}>{status}</div>
      <Link className={buttonStyle} to={`/${id}`}>
        {localize("product.item.detail", "Detail2")}
      </Link>
    </div>
  );
};
export default ProductCard;
