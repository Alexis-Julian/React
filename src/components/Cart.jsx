import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ApiProductContext } from "../helper/ContainerContext";
import Swal from "sweetalert2";
import AOS from "aos";
import SpinnerLoading from "./widgets/SppinerLoading";
import CartItem from "./CartItem";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  getFirestore,
  collection,
  getDoc,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
AOS.init();

function Cart() {
  const { SetArrayCart, ArrayCart, User } = useContext(ApiProductContext);
  const [PriceTotal, SetPriceTotal] = useState(0);

  let acum = 0;
  console.log(ArrayCart);

  useEffect(() => {
    if (ArrayCart) {
      ArrayCart.forEach((element) => {
        acum += element.price * element.count;
      });
      SetPriceTotal(acum);
    }
  }, [ArrayCart]);

  const AlertBuyComplete = () => {
    const today = new Date();
    let options = {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    };
    let now = today.toLocaleString("es-LA", options);
    const db = getFirestore();
    if (ArrayCart && User) {
      const FetchCheckoutUser = doc(db, "Usuarios", User[0].idUser);
      getDoc(FetchCheckoutUser).then((snapshot) => {
        if (snapshot.exists()) {
          try {
            const { name, email, img, phone, dni } = User[0];
            const Order = {
              buyer: {
                name: name,
                email: email,
                img: img,
                phone: phone,
                dni: dni,
              },
              products: [...ArrayCart],
              TotalPrice: PriceTotal,
            };
            const SendCheckoutAll = collection(db, "Checkouts");
            addDoc(SendCheckoutAll, Order).then(({ id }) => {
              const SendCheckoutUser = doc(db, "Usuarios", User[0].idUser);
              updateDoc(SendCheckoutUser, {
                checkout: [
                  ...snapshot.data().checkout,
                  {
                    Produtcs: [...ArrayCart],
                    OrderId: id,
                    TotalPrice: PriceTotal,
                    Date: now,
                  },
                ],
              });
              Swal.fire({
                icon: "success",
                title: "Gracias por tu compra",
                backdrop: "white",
                text: `Se enviara a tu hotmail mas informacion, Orden: ${id}`,
              });
            });
            const ClearCartUser = doc(db, "Usuarios", User[0].idUser);
            updateDoc(ClearCartUser, { cart: [] });
            SetArrayCart(null);
          } catch {
            Swal.fire({
              icon: "error",
              title: "Hubo un error en nuestro sistema",
              backdrop: "white",
              text: "Si el error sigue persistiendo comuniquese con nosotros",
            });
          }
        }
      });
    }
  };
  return (
    <ContCart>
      <div className="cart">
        <div className="cart__products">
          <nav>
            <ul className="cart__products_list">
              <CartItem items={ArrayCart} />
            </ul>
          </nav>
        </div>
        <div className="cart__button">
          <div>
            <button onClick={() => AlertBuyComplete()}>Finalizar compra</button>
          </div>
          <div>
            <p>$ {PriceTotal}</p>
          </div>
        </div>
      </div>
    </ContCart>
  );
}
const ContCart = styled.div`
  height: 85vh;
  width: 100%;
  .cart {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .cart__products {
      display: flex;
      flex-grow: 5;
      justify-content: center;
      overflow: scroll;
      nav {
        width: 100%;
        .cart__products_list {
          overflow: hidden;
          display: flex;
          padding: 10px;
          gap: 15px;
          flex-direction: column;
          li {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            div {
              flex-grow: 1;
              min-width: 25%;
              display: flex;
              align-items: center;
              font-size: 12px;
              p {
                text-align: center;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
              }
              figure {
                width: 100%;
                display: flex;
                align-items: center;
                padding: 3px;
                img {
                  border-radius: 20%;
                  border: 1px solid black;
                }
              }
            }
          }
        }
      }
    }
    .cart__button {
      min-height: 10%;
      flex-grow: 1;
      border-radius: 5%;
      background-color: #2c3333;
      display: flex;
      div {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          justify-content: center;
          height: 100%;
          width: 100%;
          display: flex;
          color: White;
          align-items: center;
        }
        button {
          padding: 4px;
          background-color: white;
          border: none;
          min-width: 140px;
        }
      }
    }
  }
`;
export default Cart;
