import React, { useEffect } from "react";
import styled from "styled-components";
import PaperPlane from "./widgets/PlanePaper";
function UserCard({ Usuario }) {
  const { user, phone, direccionts, img } = Usuario[0];
  return (
    <ContUser>
      <div className="ContUser__profile">
        <div className="ContUser__profile_img">
          {img ? (
            <img src={img} alt="product" />
          ) : (
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_640.png" />
          )}
        </div>
        <div className="ContUser__profile_nombre">
          <h2>{user}</h2>
          <p className="">Nombre</p>
        </div>
      </div>
      <ul className="ContUser__description">
        <li className="ContUser__description_phone">
          <i>Phone:</i>
          <p>+54 {phone}</p>
        </li>
        <li className="ContUser__description_direction">
          <i>Direccion:</i>
          <p> {direccionts}</p>
        </li>
        <li className="ContUser__description_direction">
          <i>Fecha de nacimiento:</i>
          <p>15/04/1998</p>
        </li>
        <li className="ContUser__description_direction">
          <i>Creacion de cuenta:</i>
          <p>1/03/2021</p>
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
        border: 4px outset white;
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
      }
      h2 {
        border-bottom: 1px solid;
      }
    }
  }

  .ContUser__description {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    li {
      color: gray;
      display: flex;
      font-size: 16px;
      width: 100%;
      align-items: flex-end;
      i {
        min-width: 40%;
      }
      p {
        text-decoration: underline;
        font-size: 20px;
        display: flex;
        width: 100%;
        justify-content: center;
        text-align: center;
        color: black;
        font-weight: 200;
      }
    }
  }
`;
export default UserCard;
