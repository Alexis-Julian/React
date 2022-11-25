import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import GetProduct from "../helper/GetProduct";
import styled from "styled-components";
import { useEffect, useState } from "react";
function ItemListContainer({ cards }) {
  let render = [];
  const [Renders, SetRenders] = useState([<div>Loading...</div>]);
  const { type } = useParams();
  /* UseEffect para inicio de pagina o reinicio*/
  useEffect(() => {
    SetRenders(cards);
  }, [cards]);
  /* UseEffect se ejecuta siempre para restablecer el array y mostrar los productos adecuados al usuario */
  useEffect(() => {
    render = cards;
  });
  /* UseEffect se ejecuta solamente cuando el UseParams "Type" cambia para mostrar los valores que el usuario pidio */
  useEffect(() => {
    if (type !== undefined) {
      render = render.filter((ele) => ele.category === type);
      console.log(render);
    }
    SetRenders(render);
  }, [type]);
  return (
    <ContItemList>
      {Renders.map((ele) => {
        return <Card product={ele} />;
      })}
    </ContItemList>
  );
}
const ContItemList = styled.main`
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
`;
export default ItemListContainer;
