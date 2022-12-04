import "./style/App.css";
import { Route, Routes, useParams } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import ContainerContext from "./helper/ContainerContext";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import ItemDetail from "./components/ItemDetail";
import ItemDetailsContainer from "./components/ItemDetailsContainer";
import Cart from "./components/CartWidget";
function App() {
  return (
    <ContainerContext>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:cate" element={<ItemDetailsContainer />} />
          <Route path="/category/:cate/:idp" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ContainerContext>
  );
}
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
export default App;
