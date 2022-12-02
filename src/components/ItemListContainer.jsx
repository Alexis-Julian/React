import React, { useContext, useEffect, useState } from "react";
import { ApiProductContext } from "../helper/ContainerContext";
import { useParams } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
function ItemListContainer() {
  const { Products, SetProducts } = useContext(ApiProductContext);
  const { cate } = useParams();
  let aux;
  useEffect(() => {
    aux = [...Products];
  }, [Products]);
  /* Renderizacion de los productos en el DOOM */
  const RenderProduct = () => {
    if (Products.length > 0) {
      return Products.map((item) => {
        return <Card key={item.id} Product={item} />;
      });
    }
    return <div>Loading...</div>;
  };
  return (
    <ContItemListContainer>
      <RenderProduct />
    </ContItemListContainer>
  );
}

const ContItemListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
  height: 100vh;
  width: 100vw;
`;

export default ItemListContainer;
