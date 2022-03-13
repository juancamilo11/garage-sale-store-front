import React from "react";

const StoreProductItem = ({
  id,
  productName,
  additionalDescription,
  price,
  quantity,
  productStatus,
  productImageUrlList,
  productTagList,
}) => {
  const handleShowProductDetail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-item__main-container">
      <div
        className="product-item__main-image"
        style={{
          backgroundImage: `url(${productImageUrlList[0]})`,
        }}
      ></div>
      <div className="product-item__description">
        <div className="product-item__description--header">
          <h5 className="product-item__name">{productName}</h5>
          <h4 className="product-item__price">
            <b>$</b> {price}
          </h4>
        </div>
        <div className="product-item__description--secondary">
          <span className="product-item__secondary">
            Categoría:{" "}
            <span className="product-item__category">{productStatus}</span>
          </span>
          <p className="product-item__secondary--quantity">
            Cantidad: <b>{quantity}</b> Unidades
          </p>
        </div>
      </div>
      <button
        className="product-item__show-btn"
        onClick={handleShowProductDetail}
      >
        Ver más...
      </button>
    </div>
  );
};

export default StoreProductItem;
