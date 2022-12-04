import React, { createContext, useState, useEffect } from "react";
import { resolvePath } from "react-router-dom";
import { FetchProduct } from "./ApiFetchProduct";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ApiProductContext = createContext();
/* import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore"; */
export default function ContainerContext({ children }) {
  /* Peticion a la API */
  const [Products, SetProducts] = useState();
  const DBPeticion = (DocumentConection) => {
    const db = getFirestore();
    const Doc = collection(db, DocumentConection);
    const FetchDB = new Promise((resolve, reject) => {
      getDocs(Doc).then((res) => {
        const ArrayNormalized = res.docs.map((ele) => {
          return { idLink: ele.id, ...ele.data() };
        });
        try {
          resolve(ArrayNormalized);
        } catch {
          reject([]);
        }
      });
    });
    return FetchDB;
  };
  useEffect(() => {
    DBPeticion("Items").then((res) => SetProducts(res));
  }, []);
  console.log(Products);
  /* Cierre de sesion de la session */
  useEffect(() => {
    return window.sessionStorage.removeItem("user");
  }, []);
  /* Peticion al LocalStoarge y SessionSt}orage */
  const [User, SetUser] = useState(null);
  useEffect(() => {
    const Session = new Promise((res, rej) => {
      let aux1 = window.sessionStorage.getItem("user");
      let aux2 = window.localStorage.getItem("user");
      if (aux1 || aux2) {
        aux1 && res(aux1);
        aux2 && res(aux2);
      } else {
        rej(null);
      }
    });
    Session.then((res) => res && SetUser(JSON.parse(res)));
  }, []);

  useEffect(() => {
    if (User) {
      window.sessionStorage.setItem("user", JSON.stringify(User));
    }
  }, [User]);

  return (
    <ApiProductContext.Provider
      value={{ Products, SetProducts, User, SetUser, DBPeticion }}
    >
      {children}
    </ApiProductContext.Provider>
  );
}
