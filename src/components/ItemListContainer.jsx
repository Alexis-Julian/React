import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import GetProduct from "../helper/GetProduct";
import styled from "styled-components";
function ItemListContainer() {
  const [Product, SetProduct] = useState(<div>Loading...</div>);
  console.log(Product);
  GetProduct();
  useEffect(() => {
    GetProduct().then((data) => SetProduct(data));
  }, []);
  const ShowProduct = () => {
    if (Product.length > 0) {
      return Product.map((ele) => {
        return <Card product={ele} />;
      });
    } else {
      return Product;
    }
  };
  return <ContItemList>{ShowProduct()}</ContItemList>;
}
const ContItemList = styled.main`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
`;
export default ItemListContainer;
