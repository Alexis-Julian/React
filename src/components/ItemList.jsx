import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
function ItemList({ Product }) {
  const { idLink, id, title, category, img, price, rate } = Product;
  return (
    <ContCard>
      <div className="ContCard__Line">
        <div></div>
      </div>
      <div className="ContCard__imgrate">
        <Link to={`/category/${category}/${idLink}`}>
          <figure>
            <img height={"150px"} width={"150px"} src={img} alt="Card" />
          </figure>
        </Link>
      </div>
      <div className="ContCard__info">
        <div className="ContCard__category">{category}</div>
      </div>
      <div className="ContCard__description">
        <div>{title}</div>
      </div>
      <div className="ContCard__price">
        <p>$ {price}</p> <i>⭐ {rate}</i>
      </div>
    </ContCard>
  );
}

const ContCard = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 300px;
  width: 100%;
  margin-top: 5px;
  .ContCard__Line {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    div {
      height: 2px;
      width: 90%;
      background-color: #0d4c92;
    }
  }
  .ContCard__imgrate {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    grid-row: 2/4;
    grid-column: 1/2;
    figure {
      border: 1px solid black;
      padding: 10px;
      img {
      }
    }
  }
  /* Zona de info */
  .ContCard__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-row: 1/2;
    grid-column: 2/3;
    .ContCard__category {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-transform: uppercase;
      height: 100%;
    }
  }

  .ContCard__description {
    text-align: center;
    font-size: 17px;
    grid-row: 2/3;
    height: 100%;
    div {
      display: flex;
      height: 100%;
      font-weight: 300;
      align-items: flex-end;
    }
  }
  .ContCard__price {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    grid-row: 3/4;
    p {
      font-size: 20px;
      font-weight: 200;
      margin-bottom: 6px;
    }
    i {
      font-weight: 200;
      margin-bottom: 9px;
    }
  }
`;
export default ItemList;
