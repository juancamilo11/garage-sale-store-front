import React from "react";
import { useSelector } from "react-redux";

const FavoriteProductCard = ({ favProductData }) => {
  //   const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const handleGoToProduct = (e) => {
    //Registrar la ruta con los query params
    //navigate(`/transaction?uid=${auth.uid}&transactionId=${12345}`);
  };

  return (
    <div className="userprofile__fav-product-item-container">
      <div
        className="userprofile__fav-product-item-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/assets/common/fake-products/img-shirt.jpg"
          })`,
        }}
      ></div>
      <div className="userprofile__fav-product-item-info">
        <div className="userprofile__fav-product-main-container">
          <h3 className="userprofile__fav-product-item-name">
            {favProductData.productName}
          </h3>
        </div>
        <p className="userprofile__fav-store-item-description">
          Vendido en: {favProductData.storeName}
        </p>
        <p className="userprofile__fav-product-item-description">
          En favoritos desde: {favProductData.favoriteSince}
        </p>
        <p className="userprofile__fav-product-item-description">
          Vendedor: {favProductData.seller}
        </p>
        <div className="userprofile__fav-product-button-container">
          <button
            className="userprofile__fav-product-item-button"
            onClick={handleGoToProduct}
          >
            Ver más...
          </button>
          <button
            className="userprofile__fav-product-item-button userprofile__fav-product-button-delete"
            onClick={handleGoToProduct}
          >
            Eliminar de Favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProductCard;
