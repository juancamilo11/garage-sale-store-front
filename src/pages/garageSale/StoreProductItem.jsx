import React from "react";
import { useNavigate } from "react-router-dom";
import { getProductStatusNameByNumber } from "../../helpers/productStates";

const StoreProductItem = ({
  id,
  productName,
  price,
  quantity,
  productStatus,
  productImageUrlList,
  storeId,
  activeCategory,
}) => {
  const navigate = useNavigate();

  const handleShowProductDetail = (e) => {
    e.preventDefault();
    navigate(`/store/${storeId}/product/${id}/${activeCategory}`);
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
            <b>$</b> {price} COP
          </h4>
        </div>
        <div className="product-item__description--secondary">
          <span className="product-item__secondary">
            Estado:{" "}
            <span className="product-item__category">
              {getProductStatusNameByNumber(
                parseInt(productStatus.split("_")[1])
              )}
            </span>
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
