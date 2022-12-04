import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
function ItemList({ Product }) {
  const { idLink, id, title, category, img, price, rate } = Product;
  console.log(Product);
  const { cate } = useParams();
  return (
    <ContCard>
      <div className="ContCard__imgrate">
        <Link to={`/category/${category}/${idLink}`}>
          <figure>
            <img height={"150px"} width={"150px"} src={img} alt="Card" />
          </figure>
        </Link>
      </div>
      <div className="ContCard__info">
        <div className="ContCard__category">{category}</div>
        <div className="ContCard__description">{title}</div>
        <div className="ContCard__price">
          <p>$ {price}</p> <i>⭐{rate}</i>
        </div>
      </div>
    </ContCard>
  );
}

const ContCard = styled.li`
  display: flex;
  height: 300px;
  width: 100%;
  margin-top: 5px;
  .ContCard__imgrate {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    figure {
      border: 1px solid black;
      padding: 10px;
      img {
      }
    }
  }
  /* Zona de info */
  .ContCard__info {
    width: 50%;
    display: flex;
    flex-direction: column;
    .ContCard__category {
      flex-grow: 1;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
    }
    .ContCard__description {
      flex-grow: 1;
      text-align: center;
      font-size: 17px;
    }
    .ContCard__price {
      display: flex;
      align-items: center;
      justify-content: space-around;
      p {
        font-size: 20px;
        font-weight: 800;
      }
    }
  }
`;
export default ItemList;
