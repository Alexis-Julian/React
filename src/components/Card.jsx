import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

function Card({ product }) {
  const { idp } = useParams();
  const { category, description, id, image, price } = product;
  const ShowDetails = () => {
    return (
      <button className="ContCard_button">
        <Link to={`/category/${category}/${id}`}>Ver Detalles</Link>
      </button>
    );
  };
  return (
    <ContCard>
      <div className="ContCard_category">{category}</div>
      <div className="ContCard_img">
        <img className="img" src={image} />
      </div>
      <div className="ContCard_price">${price}</div>
      {idp == undefined ? (
        <ShowDetails />
      ) : (
        <ItemCount stock={20} initial={0} />
      )}
    </ContCard>
  );
}

export default Card;
const ContCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 3%;
  .ContCard_category {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
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
  .ContCard_button {
    padding: 4px 0px 2px 0px;
  }
  .ContCard_button:hover {
  }

  .ContCard_description {
    display: none;
  }
`;
