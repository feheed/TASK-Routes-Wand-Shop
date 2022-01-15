import React from "react";

function ProductInfo({ product }) {
  return (
    <div>
      <button>
        <h2>{product.core}</h2>
        <h4>{product.wood}</h4>
        <h4>{product.length}</h4>

        <img src={product.imageUrl} />
      </button>
    </div>
  );
}

export default ProductInfo;
