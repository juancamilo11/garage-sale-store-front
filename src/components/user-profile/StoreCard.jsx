import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activeStore } from "../../actions/storeCatalogActions";

const StoreCard = ({
  id,
  storeName,
  storeExistencePeriod,
  storeDescription,
  storeVisualDescription,
  storeAddress,
  purchaseOrderList, // --> Podría servir para mostrar el número de ordenes de compra pendientes
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoToStore = (e) => {
    e.preventDefault();

    dispatch(
      activeStore(id, {
        storeName,
        storeExistencePeriod,
        storeDescription,
        storeVisualDescription,
        storeAddress,
        viewsCount: 0,
      })
    );

    navigate(`/store/${id}`);
  };

  return (
    <div className="userprofile__store-item-container">
      <div
        className="userprofile__store-item-img"
        style={{
          backgroundImage: `url(${storeVisualDescription.portraitUrl})`,
        }}
      ></div>
      <div className="userprofile__store-item-info">
        <h3 className="userprofile__store-item-name">{storeName}</h3>
        <h6 className="userprofile__store-item-duration">
          Disponible desde el {storeExistencePeriod.startingDate} hasta el{" "}
          {storeExistencePeriod.endingDate}
        </h6>
        <button
          className="userprofile__store-item-button"
          onClick={handleGoToStore}
        >
          Ver más...
        </button>
      </div>
    </div>
  );
};

export default StoreCard;
