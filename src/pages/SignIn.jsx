import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
function SignIn() {
  const db = getFirestore();
  const Users = collection(db, "Usuarios");
  const { register, handleSubmit } = useForm();
  const OnSubmit = (data) => {
    data = { ...data, cart: [], checkout: [] };
    addDoc(Users, data).then((res) => console.log(res.id));
  };
  return (
    <ContSignIn>
      <h3>Registrar Usuario</h3>
      <div className="content_form">
        <h4>Datos de usuario</h4>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password")}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirmar contraseña"
              {...register("passwordtwo")}
              required
            />
          </div>
          <div>
            <input type="date" {...register("date")} required />
          </div>
          <div>
            <p>Informacion personal</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              {...register("name")}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder=" Apellido"
              {...register("surname")}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Numero de DNI o CUIT"
              {...register("dni")}
              required
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Numero de telefono"
              {...register("phone")}
              required
            />
          </div>
          <div className="button">
            <button>Enviar</button>
          </div>
          <div className="help">
            <span>
              <div>
                <p>Recordar: </p>
                <input type="checkbox" />
              </div>
            </span>
            <span>
              <Link to={"asd"}>Olvidate tu contraseña?</Link>
            </span>
          </div>
        </form>
      </div>
    </ContSignIn>
  );
}
const ContSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  h3 {
    text-decoration: underline;
    text-underline-offset: 5px;
    font-weight: 400;
    flex-grow: 1;
    display: flex;
    align-items: center;
    font-size: 1.4em;
  }
  .content_form {
    flex-grow: 5;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      text-underline-offset: 3px;
      padding: 10px;
      font-size: 1.3em;
      font-weight: 400;
    }
    form {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      div {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        input {
          padding: 0.5em;
          width: 60%;
        }
      }
      .button {
        margin-top: 5px;
        button {
          background-color: white;
          padding: 5px;
          min-width: 8em;
          border: 1px solid black;
        }
      }
      .help {
        gap: 1em;
        font-size: 1em;
        span {
          display: flex;
          div {
            input {
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
`;
export default SignIn;
