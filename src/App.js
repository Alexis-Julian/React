import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { useEffect, useState } from "react";
import GetProduct from "./helper/GetProduct";
import NavBar from "./components/NavBar";
import NotFound from "./components/pages/NotFound";
import ItemDetailsContainers from "./components/ItemDetailsContainers";
function App() {
  /* Hooks */
  const [Product, SetProduct] = useState([]);
  /* Llamada a la API para los productos */
  /* UseEffect se ejecuta una sola vez para hacer una llamada a la api */
  useEffect(() => {
    const fetchProduct = async () => {
      const promesa = await GetProduct();
      SetProduct(promesa);
    };
    fetchProduct();
  }, []);
  return (
    <>
      <div className="App"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer cards={Product} />} />
        <Route
          path="/category/:type"
          element={<ItemListContainer cards={Product} />}
        />
        <Route
          path="/category/electronics/:idp"
          element={<ItemDetailsContainers detpro={Product} />}
        />
        <Route
          path="/category/jewelery/:idp"
          element={<ItemDetailsContainers detpro={Product} />}
        />
        <Route
          path="/category/women's clothing/:idp"
          element={<ItemDetailsContainers detpro={Product} />}
        />
        <Route
          path="/category/men's clothing/:idp"
          element={<ItemDetailsContainers detpro={Product} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
