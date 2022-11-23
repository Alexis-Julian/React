import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <ConNav>
      <Link to="/">Inicio</Link>
      <Link to="/electronica">Electronica</Link>
      <Link to="/ropa">Ropa</Link>
    </ConNav>
  );
}

const ConNav = styled.header`
  height: 10vh;
  background-color: blue;
  display: flex;
  box-shadow: 5px 5px 5px gray;
  align-items: center;
  gap: 0.5em;
  color: white;
`;
export default NavBar;
