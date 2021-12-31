import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavoriteStoreCard = ({ favStoreData }) => {
  //   const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const handleGoToStore = (e) => {
    //Registrar la ruta con los query params
    //navigate(`/transaction?uid=${auth.uid}&transactionId=${12345}`);
  };

  return (
    <div className="userprofile__transaction-item-container">
      <div
        className="userprofile__transaction-item-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/user-profile/user-home-photo.jpg"
          })`,
        }}
      ></div>
      <div className="userprofile__transaction-item-info">
        <div className="userprofile__transaction-main-container">
          <h3 className="userprofile__transaction-item-name">
            {favStoreData.storeName}
          </h3>
        </div>
        <br />
        <p className="userprofile__transaction-item-description">
          Disponible hasta el: {favStoreData.endingDate}
        </p>
        <p className="userprofile__transaction-item-description">
          Vendedor: {favStoreData.seller}
        </p>
        <button
          className="userprofile__transaction-item-button"
          onClick={handleGoToStore}
        >
          Ver más...
        </button>
      </div>
    </div>
  );
};

export default FavoriteStoreCard;
