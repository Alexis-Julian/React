import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiProductContext } from "../helper/ContainerContext";
import SppinerLoading from "./widgets/SppinerLoading";
import styled from "styled-components";
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
  /* Envio del agregado al carrito */
  let aux;
  const FuncAddCart = () => {
    aux = ArrayCart;
    /* Linea Ninja que mapea los productos y los filtra por lo que el cliente ingreso */
    aux.push(
      ...Products.map((ele) => {
        return {
          idLink: ele.idLink,
          id: ele.id,
          img: ele.img,
          price: ele.price,
          title: ele.title,
          count: 1,
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
  };
  /* Filtrado del producto */
  const [DetailProduct, SetDetailProduct] = useState();
  useEffect(() => {
    if (Products) {
      SetDetailProduct(Products.filter((ele) => ele.idLink === idp));
    }
  }, [Products]);
  /* Renderizacion de la tarjeta de detailitem */
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
            <span>
              <p>{description}</p>
            </span>
            <div
              onClick={() => {
                SetArrayCart(FuncAddCart);
              }}
            >
              <button>Agregar al carrito</button>
            </div>
            <div>
              <button>Cantidad</button>
            </div>
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
      border: 1px solid;
      border-radius: 5%;
      background: rgb(255, 255, 255);
      img {
        min-width: 80%;
      }
    }
  }
  .ItemDetail__buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 0.4fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    span {
      grid-row: 1/2;
      grid-column: 1/4;
      display: flex;
      text-align: center;
      font-weight: 300;
      align-items: center;
      font-size: 16px;
      padding: 5px;
    }
    div {
      grid-row: 2/3;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        padding: 5px 8px;
        background-color: rgb(255, 255, 255);
        border: 1px solid black;
        border-radius: 5px;
        box-shadow: 0 2px 5px;
      }
    }
  }
`;
export default ItemDetail;
