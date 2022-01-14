import React from "react";
import wands from "../wands";
import { useState } from "react";
function Products() {
  const [query, setquery] = useState("");

  const ProductsList = wands
    .filter((element) =>
      element.core.toLowerCase().includes(query.toLowerCase())
    )
    .map((element) => element.core);

  return (
    <div>
      <input
        id="slug"
        className="inputSearch"
        placeholder="Make A Wish Here ..."
        onChange={(e) => setquery(e.target.value)}
      />
      <div>
        <p>{ProductsList}</p>
      </div>
    </div>
  );
}

export default Products;
