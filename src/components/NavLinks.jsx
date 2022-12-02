import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function NavLinks(data) {
  const { HandleClick, BurgerActive } = data;
  const pages = [
    { name: "Inicio", route: "/" },
    { name: "Hombres", route: "/category/men's clothing" },
    { name: "Mujeres", route: "/category/women's clothing" },
    { name: "Bebes", route: "/category/bebes" },
    { name: "Joyas", route: "/category/jewelery" },
    { name: "Electronica", route: "/category/electronics" },
    { name: "Registrarse", route: "/signin" },
    { name: "Mas informacion", route: "/" },
  ];

  const Links = () => {
    let id = 0;
    return pages.map((page) => {
      id = id + 1;
      return (
        <Link key={id} to={`${page.route}`}>
          <li>{page.name}</li>
        </Link>
      );
    });
  };
  return (
    <ContDropRightMenu>
      <nav className={`Nav ${BurgerActive ? "" : String(BurgerActive)}`}>
        <ul>
          <Links />
        </ul>
      </nav>
      <div
        className={`Close ${BurgerActive ? "" : String(BurgerActive)}`}
        onClick={HandleClick}
      ></div>
    </ContDropRightMenu>
  );
}

const ContDropRightMenu = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  visibility: collapse;
  .Nav {
    visibility: visible;
    background-color: white;
    color: black;
    width: 50%;
    left: 0;
    transform: translate(0);
    transition: 800ms;
    z-index: 1000;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      a {
        &:first-child {
          background-color: gray;
          color: white;
        }
        color: black;
        border-bottom: 1px solid black;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        text-decoration: none;
        list-style: none;
      }
    }
  }
  .Close {
    position: absolute;
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    background-color: rgba(243, 243, 243, 0.2);
    width: 50%;
    height: 100vh;
    right: 0;
    transform: translate(0);
    transition: 1000ms;
    visibility: visible;
  }
  .false {
    transform: translate(-500px) scale(0.3);
    transition: 1000ms;
  }
`;

export default NavLinks;
