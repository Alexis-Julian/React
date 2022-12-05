import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ApiProductContext } from "../helper/ContainerContext";
import SppinerLoading from "./widgets/SppinerLoading";
function NavLinks(data) {
  const { User, SetUser } = useContext(ApiProductContext);
  const [LinksDB, SetLinksDB] = useState();
  const [UserConnected, SetUserConnected] = useState();
  const { HandleClick, BurgerActive } = data;
  const { DBPeticion } = useContext(ApiProductContext);
  useEffect(() => {
    return () => {
      console.log("123");
    };
  }, []);

  useEffect(() => {
    DBPeticion("Categorias").then((res) => SetLinksDB(res));
  }, []);

  const Links = () => {
    if (LinksDB) {
      return LinksDB.map((res) => {
        return (
          <Link key={res.categoria} to={`/category/${res.categoria}`}>
            <li>{res.description}</li>
          </Link>
        );
      });
    } else {
      return <SppinerLoading />;
    }
  };
  useEffect(() => {
    const ModdifiedLink = () => {
      const Remove = () => {
        window.localStorage.removeItem("user");
        window.sessionStorage.removeItem("user");
        SetUser(null);
      };
      if (User) {
        return (
          <Link
            to={"/"}
            onClick={() => {
              Remove();
            }}
          >
            <li>Desconectar</li>
          </Link>
        );
      } else {
        return (
          <Link to={"/signin"}>
            <li>Registrarse</li>
          </Link>
        );
      }
    };
    SetUserConnected(() => ModdifiedLink());
  }, [User]);
  return (
    <ContDropRightMenu>
      <nav className={`Nav ${BurgerActive ? "" : String(BurgerActive)}`}>
        <ul>
          <Link to={"/"}>
            <li>Inicio</li>
          </Link>
          <Links />
          {UserConnected}
          <Link to={"/"}>
            <li>Mas informacion</li>
          </Link>
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
        font-weight: 400;
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
