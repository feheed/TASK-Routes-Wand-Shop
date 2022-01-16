import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Products from "./Component/Products";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
