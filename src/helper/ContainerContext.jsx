import React, { createContext, useState, useEffect } from "react";
import { resolvePath } from "react-router-dom";
import { FetchProduct } from "./ApiFetchProduct";
export const ApiProductContext = createContext();

export default function ContainerContext({ children }) {
  /* Peticion a la API */
  const [Products, SetProducts] = useState([]);
  useEffect(() => {
    FetchProduct().then((res) => SetProducts(res));
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
      }
      rej(null);
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
      value={{ Products, SetProducts, User, SetUser }}
    >
      {children}
    </ApiProductContext.Provider>
  );
}
