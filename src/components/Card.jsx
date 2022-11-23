import React from "react";
import styled from "styled-components";
function Card({ product }) {
  const { category, description, id, image, price } = product;
  return (
    <ContCard>
      <div className="ContCard_category">{category}</div>
      <div className="ContCard_img">
        <img className="img" src={image} />
      </div>
      <div className="ContCard_price">{price}</div>
      <button>Ver Detalle</button>
    </ContCard>
  );
}

export default Card;
const ContCard = styled.div`
  background-color: cyan;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  overflow: hidden;
  .ContCard_category {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    font-weight: bold;
  }
  .ContCard_img {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    img {
      height: 150px;
      width: 150px;
    }
  }
  .ContCard_price {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
  .ContCard_description {
    display: none;
  }
`;
