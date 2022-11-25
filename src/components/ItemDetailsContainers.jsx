import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
function ItemDetailsContainers({ detpro }) {
  const { idp } = useParams();
  let item;
  item = detpro.filter((ite) => ite.id === parseInt(idp));
  console.log(item);
  return <Card product={item[0]} />;
}

export default ItemDetailsContainers;
