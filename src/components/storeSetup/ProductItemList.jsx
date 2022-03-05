import React from "react";
import SectionTitle from "../SectionTitle";
import ProductItem from "./ProductItem";

const ProductItemList = ({ arrProducts, setArrProducts }) => {
  return (
    <>
      <div
        className="user-form-data__section-title"
        style={{ marginTop: "-50px" }}
      >
        <SectionTitle sectionTitle="Lista actual de productos para tu nueva tienda" />
      </div>
      <div className="products-list__main-container">
        {arrProducts.map((product) => (
          <ProductItem
            key={`${product.productName + " " + product.price}`}
            product={product}
            setArrProducts={setArrProducts}
          />
        ))}
      </div>
    </>
  );
};

export default ProductItemList;
