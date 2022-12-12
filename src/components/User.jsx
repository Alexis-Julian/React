import React, { useState, useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import Close from "./widgets/Close";
import styled from "styled-components";
import UserCard from "./UserCard";
import UserCardLogin from "./UserCardLogin";
import { ApiProductContext } from "../helper/ContainerContext";

function UserWidget() {
  const { User } = useContext(ApiProductContext);

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
            <UserCard Usuario={User} />
          ) : (
            <UserCardLogin
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
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  visibility: collapse;

  .MenuUser {
    visibility: visible;
    height: 100%;
    width: 100%;
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    background-color: rgba(207, 245, 231, 0.5);
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
    font-size: 1.5em;
    padding: 5px;
    z-index: 100;
  }
`;

export default UserWidget;
