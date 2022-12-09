import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiProductContext } from "../helper/ContainerContext";
import SppinerLoading from "./widgets/SppinerLoading";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

function ItemDetail() {
  const { Products, SetArrayCart, ArrayCart, User } =
    useContext(ApiProductContext);
  let { idp } = useParams();

  /* Filtrado del producto
   */

  const [DetailProduct, SetDetailProduct] = useState();
  useEffect(() => {
    if (Products) {
      SetDetailProduct(Products.filter((ele) => ele.idLink === idp));
    }
  }, [Products]);

  /* Modificacionde cantidad
   */

  const [ActiveQuantity, SetActiveQuantity] = useState(false);
  const [CantProduct, SetCantProduct] = useState(1);
  const ItemQuantitySelector = () => {
    const EventClickCount = (e) => {
      if (e.target.value < 5 && e.target.value) {
        SetCantProduct(e.target.value);
        SetActiveQuantity(!ActiveQuantity);
      }
    };

    const HandleKeyPress = (e) => {
      if (e.key == "Enter") {
        SetCantProduct(e.target.value);
        if (!e.target.value) {
          SetCantProduct(1);
        }
        SetActiveQuantity(!ActiveQuantity);
      }
    };
    return (
      <ContItemQuantitySelector>
        <div
          className={
            ActiveQuantity ? "ContInputsCounts Active" : "ContInputsCounts"
          }
        >
          <ul onClick={(e) => EventClickCount(e)}>
            <li>
              <input type="text" value={1} disabled />
            </li>
            <li>
              <input type="text" value={2} disabled />
            </li>
            <li>
              <input type="text" value={3} disabled />
            </li>
            <li>
              <input className="" type="text" value={4} disabled />
            </li>
            <li onKeyPress={(e) => HandleKeyPress(e)}>
              <input id="Count" type="number" placeholder="Ingrese cantidad" />
            </li>
          </ul>
        </div>
      </ContItemQuantitySelector>
    );
  };

  /* Envio del agregado al carrito
   */

  const AddItemButton = () => {
    let aux;
    /* Renderizacion de la tarjeta de detailitem
     */
    const HandleClickCartUser = () => {
      Swal.fire({
        title: "Error",
        text: "Debes iniciar sesion ",
      });
    };
    if (User) {
      aux = ArrayCart;
      /* Linea Ninja que mapea los productos y los filtra por lo que el cliente ingreso */
      aux.push(
        ...Products.map((ele) => {
          return {
            idLink: ele.idLink,
            id: ele.id,
            img: ele.img,
            price: parseInt(ele.price),
            title: ele.title,
            count: CantProduct,
          };
        }).filter((ele) => ele.idLink == idp)
      );
      /* Busqueda para saber si el producto esta repetido agrega uno a count si esto es cierto */
      for (let i = 0; i < ArrayCart.length - 1; i++) {
        for (let x = i + 1; x < ArrayCart.length; x++) {
          if (ArrayCart[i].idLink == ArrayCart[x].idLink) {
            ArrayCart[i].count += 1;
            aux.splice(x);
          }
        }
      }
      const db = getFirestore();
      const DbCart = doc(db, "Usuarios", User[0].idUser);
      updateDoc(DbCart, { cart: [...aux] });

      return aux;
    } else {
      HandleClickCartUser();
    }
  };

  /* Renderizacion de los items
   */

  const RenderDetailItem = () => {
    if (DetailProduct) {
      const { category, description, img, price, rate, title } =
        DetailProduct[0];
      return (
        <ContItem>
          <div className="ItemDetail__info">
            <div className="ItemDetail__info_titleinfo">
              <p className="ItemDetail__info_titleinfo-title">{title}</p>
              <p className="ItemDetail__info_titleinfo-price">$ {price}</p>
            </div>
          </div>
          <div className="ItemDetail__img">
            <figure>
              <img src={img} alt="" height={"300"} width={"250"} />
            </figure>
          </div>
          <div className="ItemDetail__buttons">
            <details>
              <summary>Detalles </summary>
              {description}
            </details>
            <div
              onClick={() => {
                SetArrayCart(AddItemButton);
              }}
            >
              <button>Agregar al carrito</button>
            </div>
            <div onClick={() => SetActiveQuantity(!ActiveQuantity)}>
              <button>Cantidad ({CantProduct})</button>
            </div>
            {ItemQuantitySelector()}
          </div>
        </ContItem>
      );
    } else {
      return <SppinerLoading />;
    }
  };

  return <>{RenderDetailItem()}</>;
}

const ContItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 85vh;
  overflow: scroll;
  .ItemDetail__info {
    display: flex;
    justify-content: center;
    .ItemDetail__info_titleinfo {
      display: flex;
      flex-direction: column;
      p {
        display: Flex;
        align-items: center;
      }
      .ItemDetail__info_titleinfo-price {
        display: flex;
        justify-content: Center;
        font-size: 25px;
      }
      p {
        flex-grow: 1;
        text-align: center;
        font-size: 18px;
      }
    }
  }
  .ItemDetail__img {
    display: flex;
    justify-content: center;
    align-items: center;
    figure {
      padding: 1em;
      border-radius: 5%;
      background: rgb(255, 255, 255);
      img {
        min-width: 80%;
        border-radius: 5px;
      }
    }
  }
  .ItemDetail__buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.4fr 1fr;
    /* background-color: rgba(207, 245, 231, 0.5); */
    border-radius: 2px;
    details {
      grid-row: 2/3;
      grid-column: 1/4;
      display: flex;
      position: block;
      text-align: center;
      font-weight: 300;
      align-items: center;
      font-size: 16px;
      padding: 5px;
    }
    div {
      grid-row: 1/2;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        background-color: rgb(160, 228, 203, 0.5);
        border: 1px solid black;
        border-radius: 5px;
        min-width: 80%;
        padding: 5px;
      }
    }
  }
`;

const ContItemQuantitySelector = styled.div`
  position: absolute;
  height: 30%;
  width: 100%;
  bottom: 0;
  left: 0;
  visibility: collapse;
  overflow: hidden;
  .ContInputsCounts {
    background-color: cyan;
    visibility: visible;
    transform: translateY(300px);
    transition: 300ms;
    height: 100%;
    ul {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      background: white;
      li {
        flex-grow: 1;
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #48fafa;
        input {
          width: 100%;
          height: 100%;
          display: flex;
          text-align: center;
          border: none;
          background-color: white;
        }
      }
    }
  }
  .Active {
    transform: translateY(0);
    transition: 300ms;
  }
`;
export default ItemDetail;
