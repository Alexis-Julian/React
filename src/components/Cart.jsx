import React from "react";
import { BsFillCartFill } from "react-icons/bs";

function Cart() {
  return (
    <BsFillCartFill
      onClick={() => {
        console.log("Debes estar logeado");
      }}
    />
  );
}

export default Cart;
