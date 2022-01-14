import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import wands from "./wands";
import Products from "./component/Products";
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
