import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
function ItemDetailsContainers({ detpro }) {
  const { idp } = useParams();
  console.log(detpro);
  let item;
  item = detpro.filter((ite) => ite.id === parseInt(idp));
  return (
    <ContDetails>
      <Card product={item[0]} />
    </ContDetails>
  );
}

const ContDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;

  overflow: hidden;
`;

export default ItemDetailsContainers;
