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
    <div className="userprofile__fav-store-item-container">
      <div
        className="userprofile__fav-store-item-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/user-profile/user-home-photo.jpg"
          })`,
        }}
      ></div>
      <div className="userprofile__fav-store-item-info">
        <div className="userprofile__fav-store-main-container">
          <h3 className="userprofile__fav-store-item-name">
            {favStoreData.storeName}
          </h3>
        </div>
        <div className="userprofile__fav-store-info-container">
          <p className="userprofile__fav-store-item-description">
            En favoritos desde: {favStoreData.favoriteSince}
          </p>
          <p className="userprofile__fav-store-item-description">
            Vendedor: {favStoreData.seller}
          </p>
        </div>
        <button
          className="userprofile__fav-store-item-button"
          onClick={handleGoToStore}
        >
          Ver más...
        </button>
        <button
          className="userprofile__fav-store-item-button userprofile__fav-store-button-delete"
          onClick={handleGoToStore}
        >
          Eliminar de Favoritos
        </button>
      </div>
    </div>
  );
};

export default FavoriteStoreCard;
