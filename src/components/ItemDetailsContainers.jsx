import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
function ItemDetailsContainers({ detpro }) {
  const { idp } = useParams();
  const ShowDetailsCard = () => {
    let item;
    if (detpro.length > 0) {
      item = detpro.filter((ite) => ite.id === parseInt(idp));
      return <Card product={item[0]} />;
    } else {
      return detpro;
    }
  };
  return (
    <ContDetails>
      <ShowDetailsCard />
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
