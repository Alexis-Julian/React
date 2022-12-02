import React, { useState, useContext, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import Close from "./Close";
import styled from "styled-components";
import CardUser from "../CardUser";
import CardUserLogin from "../CardUserLogin";
import { ApiProductContext } from "../../helper/ContainerContext";

function User() {
  const { User } = useContext(ApiProductContext);
  useEffect(() => {
    console.log(User);
  }, [User]);
  /* Click al icono de user */
  const [ActiveMenuUser, SetActiveMenuUser] = useState(false);
  const HandleClickMenuUser = () => {
    SetActiveMenuUser(!ActiveMenuUser);
  };
  /* Carta del menu de user */
  const DropDownMenuUser = () => {
    return (
      <ContDropDownMenu>
        <div className={`MenuUser ${ActiveMenuUser && "ActiveUser"} `}>
          <div className="cerratres" onClick={HandleClickMenuUser}>
            <Close />
          </div>
          {User ? (
            <CardUser Usuario={User} />
          ) : (
            <CardUserLogin
              alert={ActiveMenuUser}
              HandleClick={HandleClickMenuUser}
            />
          )}
        </div>
      </ContDropDownMenu>
    );
  };
  return (
    <ContUser>
      {DropDownMenuUser()}
      <BsFillPersonFill onClick={HandleClickMenuUser} />
    </ContUser>
  );
}

const ContUser = styled.div`
  border: 1px solid white;
  border-radius: 50%;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContDropDownMenu = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  right: 0;
  visibility: collapse;
  bottom: 0;
  .MenuUser {
    visibility: visible;
    height: 100%;
    width: 100%;
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    background-color: rgba(243, 243, 243, 0.2);
    transform: translateY(-1000px);
    transition: 700ms;
  }
  .ActiveUser {
    visibility: visible;
    transition: 700ms;
    transform: translateY(0);
  }
  .cerratres {
    position: absolute;
  }
`;

export default User;
