import React from "react";
import { container as containerStyle } from "./style.css";

const Container: React.FC = ({ children }) => {
  return <div className={containerStyle}>{children}</div>;
};
export default Container;
