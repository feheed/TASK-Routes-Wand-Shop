import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Wands from "./Wands";
import Products from "./Component/Products";
import { useState } from "react";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>

      <div></div>
    </div>
  );
}

export default App;
