import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <>
      <div className="App"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/electronica" element={<ItemListContainer />} />
        <Route path="/electronica/:id" element={<ItemListContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
