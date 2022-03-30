import React, { useEffect, useState } from "react";
import { startFetchStoreById } from "../../actions/storeCatalogActions";
import { startFetchUserInfoById } from "../../actions/usersActions";
import getProductInformationById from "../../helpers/store/storeHelpers";
import { sweetAlertForShowUserInfo } from "../../helpers/SweetalertBuilder";

const PurchaseOrderItem = ({
  type,
  orderId,
  storeId,
  productId,
  sellerId,
  quantity,
  customerId,
  dateCreated,
}) => {
  const [userInfo, setUserInfo] = useState({});
  const [storeInfo, setStoreInfo] = useState({});
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (type === "BUY") {
      // --> Debemos traer la información del seller
      startFetchUserInfoById(sellerId).then((res) => {
        setUserInfo(res);
      });
    } else if (type === "SELL") {
      // --> Debemos traer la información del customer
      startFetchUserInfoById(customerId).then((res) => {
        setUserInfo(res);
      });
    }
  }, []);

  useEffect(() => {
    startFetchStoreById(storeId).then((res) => {
      setStoreInfo(res);
    });
  }, []);

  useEffect(() => {
    setProductInfo(getProductInformationById(storeInfo, productId));
  }, [storeInfo]);

  const handleShowUserInfo = (e) => {
    e.preventDefault();
    sweetAlertForShowUserInfo(userInfo);
  };

  return (
    <div className="purchase-order__item-main-container">
      <div className="purchase-order__store-info">
        <h4 className="purchase-order__title">
          Orden de compra en la tienda <b>{storeInfo?.storeName}</b>
        </h4>
        <h6 className="purchase-order__title">
          Disponible hasta el{" "}
          <b>{storeInfo?.storeExistencePeriod?.endingDate}</b>
        </h6>
      </div>
      <div className="purchase-order__user-info">
        <h4 className="purchase-order__user-info-title">
          {type === "BUY"
            ? "Información de tu vendedor"
            : "Información de tu comprador"}
        </h4>
        <div className="store-view__main-container purchase-order__user-info-container">
          <img
            src={userInfo?.photoUrl}
            alt=""
            className="product-view__photo purchase-order__user-photo"
          />
          <b className="purchase-order__name">{userInfo?.name}</b>
          <b className="purchase-order__email">{userInfo?.email}</b>
          <button
            onClick={handleShowUserInfo}
            className="store-catalog__search-button purchase-order__info-button"
          >
            Ver más...
          </button>
        </div>
      </div>

      {JSON.stringify(productInfo)}

      <div className="purchase-order__user-info">
        <h4 className="purchase-order__user-info-title">
          {type === "BUY"
            ? "Información del producto a comprar"
            : "Información del producto a vender"}
        </h4>
        <div className="store-view__main-container purchase-order__user-info-container">
          <div className="purchase-order__product-images-container">
            {productInfo?.productUrlImages.map((productUrlImage) => (
              <img
                src={productUrlImage}
                alt=""
                className="product-view__photo purchase-order__user-photo purchase-order__product-image"
              />
            ))}
          </div>
          <b className="purchase-order__name">{productInfo?.productName}</b>
          <b className="purchase-order__price">{productInfo?.price} COP</b>
          <b className="purchase-order__quantity">{quantity} unidades</b>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderItem;
