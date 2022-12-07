import React, { useContext, useEffect, useState } from "react";
import { ApiProductContext } from "../helper/ContainerContext";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import styled from "styled-components";
import SppinerLoading from "./widgets/SppinerLoading";
function ItemListContainer() {
  const { Products, SetProducts } = useContext(ApiProductContext);
  /* Renderizacion de los productos en el DOOM */
  const RenderProduct = () => {
    if (Products) {
      return Products.map((item) => {
        return <ItemList key={item.id} Product={item} />;
      });
    } else {
      return <SppinerLoading />;
    }
  };

  return <ContItemListContainer>{RenderProduct()}</ContItemListContainer>;
}

const ContItemListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
  height: 85vh;
  width: 100%;
  .asdasd {
    position: absolute;
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .lds-hourglass {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-hourglass:after {
      content: " ";
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: 32px solid #fff;
      border-color: #fff #2c3333 #fff #2c3333;
      animation: lds-hourglass 1.2s infinite;
    }
    @keyframes lds-hourglass {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
        transform: rotate(1800deg);
      }
    }
  }
`;

export default ItemListContainer;
