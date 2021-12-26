import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonCreateNewStore = () => {
  const navigate = useNavigate();

  const handleCreateNewStore = () => {
    navigate("/store-setup");
  };

  return (
    <button
      onClick={handleCreateNewStore}
      className="buttons__button-new-store"
      title="Crear una nueva venta de garaje"
    >
      <i class="fas fa-store"></i>
    </button>
  );
};

export default ButtonCreateNewStore;
