import React, { useEffect } from "react";
import styled from "styled-components";
import PaperPlane from "./widgets/PlanePaper";
function UserCard({ Usuario }) {
  const { name, user, phone, img, dni, email } = Usuario[0];
  return (
    <ContUser>
      <div className="ContUser__profile">
        <div className="ContUser__profile_img">
          {img ? (
            <img src={img} alt="product" />
          ) : (
            <img src="https://i.imgur.com/9zz7ubU.jpg" />
          )}
        </div>
        <div className="ContUser__profile_nombre">
          <h2>{name}</h2>
          <p className="">Nombre</p>
        </div>
      </div>
      <ul className="ContUser__description">
        <li>
          <div>Phone</div>
          <i>{phone}</i>
        </li>
        <li>
          <div>DNI</div>
          <i>{dni}</i>
        </li>
        <li>
          <div>Email</div>
          <i>alexisjrojas</i>
        </li>
        <li>
          <div>Usuario</div>
          <i>{user}</i>
          <i></i>
        </li>
      </ul>
      <nav>
        <ul>
          <li>Producto1</li>
          <li>Producto2</li>
          <li>Producto3</li>
          <li>Producto4</li>
          <li>Producto5</li>
        </ul>
      </nav>
      <div className="buttons_info">
        <div>
          <span>
            <PaperPlane />
          </span>
        </div>
        <div>
          <span>Buys</span>
        </div>
        <div>
          <span>span</span>
        </div>
      </div>
    </ContUser>
  );
}
const ContUser = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 0.4fr 2fr 0.3fr;
  gap: 5px 0px;
  .buttons_info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    div {
      flex-grow: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
  }
  .ContUser__profile {
    padding: 10px;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    border-bottom: 1px solid black;
    .ContUser__profile_img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 4px outset #f3efe0;
        box-shadow: -1px 1px 10px 3px black;
      }
    }
    .ContUser__profile_nombre {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 5px;
      p {
        display: inline;
        color: #222222;
      }
      h2 {
        font-weight: 500;
        color: #434242;
        border-bottom: 1px solid;
      }
    }
  }

  .ContUser__description {
    height: 80%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 2px;
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      width: 100%;
      color: transparent;
      -webkit-text-stroke: 0.8px #222222;
      gap: 2px;
      i {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        color: white;
      }
    }
  }
`;
export default UserCard;
