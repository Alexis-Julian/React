import React from "react";
import styled from "styled-components";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <NavContainer>
      <div className="Brand">
        <span className="Brand__Flower">
          <FilterVintageIcon />
        </span>
        Jazmin
      </div>
      <nav>
        <ul>
          <a href="#">
            <li>Inicio</li>
          </a>
          <a href="#">
            <li>Hombres</li>
          </a>
          <a href="#">
            <li>Mujeres</li>
          </a>
          <a href="#">
            <li>Niños</li>
          </a>
        </ul>
      </nav>
      <ul className="Icons">
        <CartWidget color={"white"} />
      </ul>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: #e0144c;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0px 0px 5px black;
  .Brand {
    flex-grow: 1;
    display: flex;
    font-size: 1.5em;
    gap: 10px;
    cursor: pointer;
  }
  nav {
    flex-grow: 1;
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: space-around;
      a {
        color: black;
      }
      a:hover {
        transition: 300ms;
        color: white;
      }
    }
  }
  .Icons {
    display: flex;
    margin: 0;
    padding: 0;
    margin-right: 10px;
    flex-grow: 1;
    justify-content: flex-end;
  }
`;
