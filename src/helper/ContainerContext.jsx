import React, { createContext, useState, useEffect } from "react";
import { resolvePath } from "react-router-dom";
import { DBGetLoginsLocalStorage } from "./FetchLogin";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ApiProductContext = createContext();

export default function ContainerContext({ children }) {
  /* Peticion a la FireStore de los productos */
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
  /* Cierre de sesion de la seccion */
  useEffect(() => {
    return window.sessionStorage.removeItem("user");
  }, []);
  /* Peticion al LocalStoarge*/
  const [User, SetUser] = useState(null);
  useEffect(() => {
    if (localStorage.length > 0) {
      const LocalUser = JSON.parse(window.localStorage.getItem("user"));
      DBGetLoginsLocalStorage(LocalUser).then((res) => SetUser([res]));
    }
  }, []);
  /* Peticion a la base de datos sobre la key de la localstorage */
  useEffect(() => {
    if (User) {
      window.sessionStorage.setItem("user", JSON.stringify(User[0].idUser));
      User[0].recorder &&
        window.localStorage.setItem("user", JSON.stringify(User[0].idUser));
    }
  }, [User]);
  /* Carrito */
  useEffect(() => {}, []);
  return (
    <ApiProductContext.Provider
      value={{ Products, SetProducts, User, SetUser, DBPeticion }}
    >
      {children}
    </ApiProductContext.Provider>
  );
}
