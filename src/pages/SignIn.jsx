import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
function SignIn() {
  const db = getFirestore();
  const Users = collection(db, "Usuarios");
  const { register, handleSubmit } = useForm();
  const OnSubmit = (data) => {
    data = { ...data, cart: [], checkout: [] };
    addDoc(Users, data).then((res) => {
      if (res.id) {
        window.location.href = "/";
        Swal.fire({
          icon: "success",
          title: "Registro completado",
          text: "Cuenta registrada con exito",
        });
      }
    });
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
              autoComplete="off"
              placeholder="Email"
              {...register("email")}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Nombre de usuario"
              autoComplete="off"
              {...register("user")}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              {...register("password")}
              required
            />
          </div>
          <div>
            <input
              type="date"
              {...register("date")}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <p>Informacion personal</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              autoComplete="off"
              {...register("name")}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder=" Apellido"
              autoComplete="off"
              {...register("surname")}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Numero de DNI o CUIT"
              autoComplete="off"
              {...register("dni")}
              required
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Numero de telefono"
              autoComplete="off"
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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='1000' preserveAspectRatio='none' viewBox='0 0 800 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1060%26quot%3b)' fill='none'%3e%3crect width='800' height='1000' x='0' y='0' fill='url(%23SvgjsLinearGradient1061)'%3e%3c/rect%3e%3cpath d='M416 10L415 541' stroke-width='10' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M727 372L726 882' stroke-width='8' stroke='url(%23SvgjsLinearGradient1063)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M460 910L459 1284' stroke-width='8' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M109 527L108 855' stroke-width='6' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M588 723L587 292' stroke-width='8' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M447 865L446 224' stroke-width='6' stroke='url(%23SvgjsLinearGradient1063)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M741 397L740 -330' stroke-width='8' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M584 452L583 191' stroke-width='10' stroke='url(%23SvgjsLinearGradient1063)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M474 126L473 -392' stroke-width='10' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M473 778L472 47' stroke-width='8' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M767 587L766 -20' stroke-width='8' stroke='url(%23SvgjsLinearGradient1063)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M799 86L798 523' stroke-width='8' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M101 651L100 -69' stroke-width='6' stroke='url(%23SvgjsLinearGradient1063)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M405 611L404 -11' stroke-width='10' stroke='url(%23SvgjsLinearGradient1063)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M694 954L693 423' stroke-width='8' stroke='url(%23SvgjsLinearGradient1063)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M403 910L402 1423' stroke-width='10' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M642 857L641 406' stroke-width='6' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M586 991L585 1596' stroke-width='6' stroke='url(%23SvgjsLinearGradient1063)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M484 46L483 -402' stroke-width='8' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M50 873L49 327' stroke-width='10' stroke='url(%23SvgjsLinearGradient1062)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1060'%3e%3crect width='800' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1061'%3e%3cstop stop-color='rgba(37%2c 94%2c 157%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(207%2c 245%2c 231%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1062'%3e%3cstop stop-color='rgba(13%2c 76%2c 146%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(13%2c 76%2c 146%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1063'%3e%3cstop stop-color='rgba(13%2c 76%2c 146%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(13%2c 76%2c 146%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  color: white;
  h3 {
    font-weight: 200;
    text-decoration: underline;
    text-underline-offset: 5px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    font-size: 1.4em;
  }
  .content_form {
    font-weight: 200;
    flex-grow: 5;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      text-underline-offset: 3px;
      padding: 10px;
      font-size: 1.3em;
      font-weight: 200;
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
          border: none;
          border-radius: 3px;
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
