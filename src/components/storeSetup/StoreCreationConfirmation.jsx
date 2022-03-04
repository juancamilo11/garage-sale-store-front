import React from "react";
import { useDispatch } from "react-redux";
import {
  confirmStoreCreation,
  unConfirmStoreCreation,
} from "../../actions/storeSetupActions";

const StoreCreationConfirmation = () => {
  const dispatch = useDispatch();

  const handleConfirmationChange = (e) => {
    const confirmationSelection = e.target.id.split("-")[1];
    if (confirmationSelection === "yes") {
      dispatch(confirmStoreCreation());
      setTimeout(() => {
        window.scrollTo(0, document.querySelector("body").scrollHeight);
      }, 100);
    }
    if (confirmationSelection === "no") {
      dispatch(unConfirmStoreCreation());
    }
  };

  return (
    <form className="store-setup__creation-confirmation-form">
      <label
        htmlFor="createStoreConfirmation"
        className="store-setup__input-label my-3 mx-3"
      >
        Acepto los{" "}
        <span style={{ textDecoration: "underline", cursor: "pointer" }}>
          Términos y condiciones
        </span>{" "}
        de Garage-Sale-Store para la creacion de una nueva venta de garaje.
      </label>
      <div className="store-setup__creation-confirm-item my-1 mx-3">
        <input
          type="radio"
          value="no"
          name="createStoreConfirmation"
          id="createStoreConfirmation-yes"
          onClick={handleConfirmationChange}
        />
        <label
          htmlFor="createStoreConfirmation-yes"
          className="store-setup__input-label ml-3"
        >
          Acepto
        </label>
      </div>
      <div className="store-setup__creation-confirm-item my-1 mx-3">
        <input
          type="radio"
          value="yes"
          name="createStoreConfirmation"
          id="createStoreConfirmation-no"
          onClick={handleConfirmationChange}
        />
        <label
          htmlFor="createStoreConfirmation-no"
          className="store-setup__input-label ml-3"
        >
          No acepto
        </label>
      </div>
    </form>
  );
};

export default StoreCreationConfirmation;
