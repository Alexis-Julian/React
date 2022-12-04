import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { DBGetLogins } from "../helper/FetchLogin";
import { ApiProductContext } from "../helper/ContainerContext";

function UserCardLogin({ alert, HandleClick }) {
  const { User, SetUser } = useContext(ApiProductContext);
  /* Recuperacion de datos del formulario  */
  const { register, handleSubmit } = useForm();
  const [Form, SetForm] = useState(null);
  const [Loading, SetLoading] = useState(false);

  const onSubmit = (DataForm) => {
    SetForm(DataForm);
  };

  useEffect(() => {
    Form &&
      DBGetLogins(Form)
        .then((res) => res && SetUser(res))
        .then((res) => res, SetLoading(!Loading));
  }, [Form]);

  useEffect(() => {
    alert && swal("Debes estar logeado para visualizar este contenido");
  }, [alert]);

  return (
    <ContUserLogin>
      {!User && Loading ? (
        <div className="circulito">
          <div className="lds-hourglass"></div>
        </div>
      ) : null}
      <div className="content__login">
        <div className="content__title">
          <h2>Jazmin</h2>
          <h3>Iniciar Sesion</h3>
        </div>
        <div className="content_userlogin">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Ingrese su email"
                {...register("userlog")}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                {...register("password")}
              />
            </div>
            <div>
              <button onClick={() => SetLoading(!Loading)}>Ingresar</button>
            </div>
            <div>
              <span className="help_user">
                <span>
                  <Link>Olvido su contraseña</Link>
                </span>
                <div>
                  <Link
                    onClick={() => HandleClick(!alert)}
                    to={"/signin"}
                    className="asd"
                  >
                    Todavia no tiene su cuenta?
                  </Link>
                </div>
                <div className="help_user-check">
                  <span>Recordar: </span>
                  <span>
                    <input type="checkbox" />
                  </span>
                </div>
              </span>
            </div>
          </form>
        </div>
      </div>
    </ContUserLogin>
  );
}

const ContUserLogin = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .content__login {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .content__title {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1em;
      h2 {
        font-size: 3.5em;
        color: black;
        font-weight: lighter;
      }
      h3 {
        font-weight: 400;
      }
    }
    .content_userlogin {
      flex-grow: 2;
      display: flex;
      width: 100%;
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
        gap: 1em;
        div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          input {
            min-width: 70%;
            padding: 0.5em;
          }
          button {
            background-color: white;
            border: 1px solid black;
            width: 60%;
            padding: 5px;
            border-radius: 5px;
          }
        }
      }
    }
  }
  .help_user {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1rem;
    gap: 10px;
    text-decoration: none;
    .help_user-check {
      gap: 10px;
    }
  }
  .circulito {
    position: absolute;
    top: 25%;
    transition: 300ms;
    .lds-hourglass {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-hourglass:after {
      content: " ";
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: 32px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: lds-hourglass 1.2s infinite;
    }
    @keyframes lds-hourglass {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
        transform: rotate(1800deg);
      }
    }
  }
`;
export default UserCardLogin;
