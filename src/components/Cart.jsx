import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { ApiProductContext } from "../helper/ContainerContext";
import swal from "sweetalert";

function Cart() {
  const { User } = useContext(ApiProductContext);
  const HandleClickMenu = () => {
    swal("Inicie sesion para acceder al siguiente menu");
  };

  return (
    <BsFillCartFill
      onClick={!User ? () => HandleClickMenu() : console.log("123")}
    />
  );
}

export default Cart;