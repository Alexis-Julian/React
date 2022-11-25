import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
function NavBar() {
  return (
    <ConNav>
      <Link to="/">Inicio</Link>
      <Link to="/category/electronics">Electronica</Link>
      <Link to="/category/jewelery">Jewelery</Link>
      <Link to="/category/women's clothing">Ropa de Mujeres</Link>
      <Link
        to="/category/men's clothing
"
      >
        Ropa de Hombre
      </Link>
    </ConNav>
  );
}

const ConNav = styled.header`
  height: 10vh;
  width: 100%;
  background-color: blue;
  display: flex;
  box-shadow: 5px 5px 5px gray;
  align-items: center;
  gap: 0.5em;
  color: white;
  margin-bottom: 5px;
`;
export default NavBar;
