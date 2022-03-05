import React from "react";
import ProductItem from "./ProductItem";

const ProductItemList = ({ arrProducts, setArrProducts }) => {
  return (
    <div className="products-list__main-container">
      {arrProducts.map((product) => (
        <ProductItem
          key={`${product.productName + " " + product.price}`}
          product={product}
          setArrProducts={setArrProducts}
        />
      ))}
    </div>
  );
};

export default ProductItemList;
