import React from "react";
import { sweetalertFoProductDeleteConfirmationBuilder } from "../../helpers/SweetalertBuilder";

const ProductItem = ({ product, setArrProducts }) => {
  const handleDeleteProduct = (e, productToDelete) => {
    e.preventDefault();
    sweetalertFoProductDeleteConfirmationBuilder(product).then((result) => {
      if (result.isConfirmed) {
        setArrProducts((arrProducts) =>
          arrProducts.filter(
            (currProduct) => currProduct.productName !== product.productName
          )
        );
      }
    });
  };

  return (
    <div className="product-item__main-container">
      <div
        className="product-item__main-image"
        style={{ backgroundImage: `url(${product.productUrlImages[0]})` }}
      ></div>
      <div className="product-item__description">
        <div className="product-item__description--header">
          <h5 className="product-item__name">{product.productName}</h5>
          <h4 className="product-item__price">
            <b>$</b> {product.price}
          </h4>
        </div>
        <div className="product-item__description--secondary">
          <span className="product-item__secondary">
            Categoría:{" "}
            <span className="product-item__category">{product.category}</span>
          </span>
          <p className="product-item__secondary--quantity">
            Cantidad: <b>{product.quantity}</b> Unidades
          </p>
        </div>
      </div>
      <button
        className="product-item__delete-btn"
        onClick={handleDeleteProduct}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default ProductItem;
