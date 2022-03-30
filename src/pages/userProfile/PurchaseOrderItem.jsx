import React, { useEffect, useState } from "react";
import { startFetchStoreById } from "../../actions/storeCatalogActions";
import { startFetchUserInfoById } from "../../actions/usersActions";
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

  useEffect(() => {}, [storeInfo]);

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

      <div className="purchase-order__purchase-info">
        {JSON.stringify(productInfo)}
      </div>
    </div>
  );
};

export default PurchaseOrderItem;
