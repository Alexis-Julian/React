import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

const firebaseConfig = {
  apiKey: "AIzaSyD4-FzzCWZ1lL9-PMk_ASafWq3NCFuUGAA",
  authDomain: "jazmin-ecommerce.firebaseapp.com",
  projectId: "jazmin-ecommerce",
  storageBucket: "jazmin-ecommerce.appspot.com",
  messagingSenderId: "348205301656",
  appId: "1:348205301656:web:b3c30860f56b35b0e335ed",
};

initializeApp(firebaseConfig);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
