import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div>
      <h5>Payment</h5>
      <Link
        to={"/checkout/basket"}
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
        Go Basket
      </Link>
    </div>
  );
}

export default Payment;
