import React, { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import Heart from "./widgets/Heart";
import User from "./User";
import { useParams } from "react-router-dom";

function NavBar() {
  const [BurgerActive, SetBurgerActive] = useState(false);

  const HandleClick = () => {
    SetBurgerActive(!BurgerActive);
  };

  const BurgerStyles = () => {
    return (
      <div
        className={`icon nav-icon-3 ${BurgerActive && "open"}`}
        onClick={HandleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };
  const data = { HandleClick, BurgerActive };
  return (
    <ContNavBar>
      {NavLinks(data)}
      <ContBurgUser>
        <BurgerMenu>{BurgerStyles()}</BurgerMenu>
        <User />
      </ContBurgUser>
      <Title>
        <div>
          <h2>Jazmin</h2>
        </div>
      </Title>
      <ContIcons>
        <Cart />
        <Heart />
      </ContIcons>
      <Input>
        <input type="text" placeholder="¿Que desea buscar?" />
      </Input>
    </ContNavBar>
  );
}
/* Contiene la configuarion del navbar */
const ContNavBar = styled.header`
  background-color: #2c3333;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  z-index: 99999999999;
`;
/* Contiene el BurgerMenu-User */
const ContBurgUser = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  justify-content: space-around;
`;

const BurgerMenu = styled.div`
  display: flex;
  .nav-icon-3 {
    width: 35px;
    height: 30px;
    margin: 10px 15px 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    transform: scale(0.8);
  }
  .nav-icon-3 span {
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-3 span:nth-child(1) {
    width: 100%;
    height: 4px;
    display: block;
    top: 0px;
    left: 0px;
  }
  .nav-icon-3 span:nth-child(2) {
    width: 100%;
    height: 4px;
    display: block;
    top: 13px;
    left: 0px;
  }
  .nav-icon-3 span:nth-child(3) {
    width: 100%;
    height: 4px;
    display: block;
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-3:not(.open):hover span:nth-child(1) {
    width: 100%;
    height: 4px;
    display: block;
    top: -2px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-3:not(.open):hover span:nth-child(2) {
    width: 100%;
    height: 4px;
    display: block;
    top: 13px;
    left: 0px;
    transition: 0.4s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-3:not(.open):hover span:nth-child(3) {
    width: 100%;
    height: 4px;
    display: block;
    bottom: -2px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-3.open {
    transform: rotate(-90deg);
  }
  .nav-icon-3.open span:nth-child(1) {
    left: 3px;
    top: 12px;
    width: 30px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(90deg);
    transition-delay: 150ms;
  }
  .nav-icon-3.open span:nth-child(2) {
    left: 2px;
    top: 20px;
    width: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(45deg);
    transition-delay: 50ms;
  }
  .nav-icon-3.open span:nth-child(3) {
    left: 14px;
    top: 20px;
    width: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(-45deg);
    transition-delay: 100ms;
  }
`;
/* Titulo del navbar */
const Title = styled.div`
  grid-column: 0/1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
`;
/* Contiene los iconos Heart - Cart */
const ContIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.2em;
`;
/* Busqueda en el navbar */
const Input = styled.div`
  grid-column: 1/4;
  display: grid;
  padding: 6px;
`;

export default NavBar;
