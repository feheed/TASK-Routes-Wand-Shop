import React from "react";
import Wands from "../Wands";
import { useState } from "react";
import ProductInfo from "./ProductInfo";
import Button from "react-bootstrap/Button";

function Products() {
  const [productQuery, setproductQuery] = useState("");

  const product = Wands.filter((element) =>
    element.core.toLowerCase().includes(productQuery.toLowerCase())
  ).map((element) => <ProductInfo product={element} />);

  // const productsList = Wands.map((element) => (
  //  <ProductInfo product={element} /> ));
  // <h2>{product}</h2> <h2>{product.wood}</h2><h2>{product.length}</h2>
  return (
    <div className="divButton">
      <input
        className="inputSearch"
        placeholder="Make A Wish Here ..."
        onChange={(e) => setproductQuery(e.target.value)}
      />

      <div className="divButton">{product}</div>
    </div>
  );
}

export default Products;
