import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonCreateNewStore = () => {
  const navigate = useNavigate();

  const handleCreateNewStore = () => {
    navigate("/store-setup");
  };

  return (
    <div className="button__button-new-store-container">
      <button
        onClick={handleCreateNewStore}
        className="button__button-new-store"
        title="Crear una nueva venta de garaje"
      >
        <img
          src="https://res.cloudinary.com/dahwtwzdl/image/upload/v1646444689/garage-sale-store/assets/store-catalog/store_128_pu3frd.png"
          className="button__button-new-store-img"
        />
        <p className="button__button-new-store-text">Crear nueva tienda</p>
      </button>
    </div>
  );
};

export default ButtonCreateNewStore;
