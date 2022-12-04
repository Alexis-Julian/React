import { BsHeartFill } from "react-icons/bs";
import { ApiProductContext } from "../helper/ContainerContext";
import swal from "sweetalert";
import React, { useContext } from "react";

function Heart() {
  const { User } = useContext(ApiProductContext);
  const HandleClickMenu = () => {
    swal("Inicie sesion para acceder al siguiente menu");
  };
  return (
    <BsHeartFill
      onClick={!User ? () => HandleClickMenu() : console.log("123")}
    />
  );
}

export default Heart;
