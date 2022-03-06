import React from "react";
import { useSelector } from "react-redux";
import newStoreObjectBuilder from "../../helpers/storeSetupHelpers/newStoreObjectBUilder";

const FinalSectionStoreSetup = () => {
  const { firstFormInfo, secondFormInfo, thirdFormInfo } = useSelector(
    (state) => state.storeSetup
  );

  const handleFinishStoreCreation = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "newStore",
      JSON.stringify({
        ...firstFormInfo,
        ...secondFormInfo,
        productList: thirdFormInfo,
      })
    );
    newStoreObjectBuilder({
      ...firstFormInfo,
      ...secondFormInfo,
      productList: thirdFormInfo,
    });
  };

  return (
    <div>
      <div className="store-setup__centered-container">
        <h4 className="text-center">
          ¡Todo está listo, haz click en Crear tienda y podrás empezar a vender
          tus productos!
          <br />
          info de tu tienda
        </h4>
      </div>
      <div className="store-setup__centered-container">
        <div className="store-setup__buttons-container">
          <button
            className="store-setup__button-update"
            onClick={handleFinishStoreCreation}
          >
            Crear tienda
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalSectionStoreSetup;
