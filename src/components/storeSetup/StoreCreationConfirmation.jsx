import React from "react";

const StoreCreationConfirmation = ({ setFormsChecking }) => {
  const handleConfirmationChange = (e) => {
    const confirmationSelection = e.target.id.split("-")[1];
    console.log(confirmationSelection);
    if (confirmationSelection === "yes") {
      setFormsChecking((formsChecking) => {
        return {
          ...formsChecking,
          creationConfirmation: { isConfirmed: true },
        };
      });
    }
    if (confirmationSelection === "no") {
      setFormsChecking((formsChecking) => {
        return {
          ...formsChecking,
          creationConfirmation: { isConfirmed: false },
        };
      });
    }
  };

  return (
    <form className="store-setup__creation-confirmation-form">
      <label
        htmlFor="createStoreConfirmation"
        className="store-setup__input-label my-3 mx-3"
      >
        Acepto los{" "}
        <a href="#" target="_blank">
          Términos y condiciones
        </a>{" "}
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
