import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SppinerLoading from "./widgets/SppinerLoading";
import { ApiProductContext } from "../helper/ContainerContext";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";
function ItemDetailsContainer() {
  const { Products } = useContext(ApiProductContext);
  const [ProductsFilter, SetProductsFilter] = useState();
  let { cate } = useParams();
  const RenderCard = () => {
    useEffect(() => {
      if (Products) {
        SetProductsFilter(Products.filter((ele) => ele.category === cate));
      }
    }, [cate]);
    if (ProductsFilter) {
      return ProductsFilter.map((item) => {
        return <ItemList key={item.id} Product={item} />;
      });
    } else {
      return <SppinerLoading />;
    }
  };
  return <div>{RenderCard()}</div>;
}

export default ItemDetailsContainer;
