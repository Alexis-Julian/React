import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <DivContainer>
      <Navbar />
      <ItemListContainer greeting={"Hola como estas?"} />
    </DivContainer>
  );
}

export default App;

const DivContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
