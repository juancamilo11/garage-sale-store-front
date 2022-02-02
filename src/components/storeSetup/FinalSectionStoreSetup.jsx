import React from "react";

const FinalSectionStoreSetup = ({ newStoreDataState }) => {
  return (
    <div>
      <div className="store-setup__centered-container">
        <h5>
          ¡Todo está listo, haz click en Crear tienda y podrás empezar a vender
          tus productos!
          <br />
          info de tu tienda
          {JSON.stringify(newStoreDataState)}
        </h5>
      </div>
      <div className="store-setup__centered-container">
        <div className="store-setup__buttons-container">
          <button className="store-setup__button-update">Crear tienda</button>
        </div>
      </div>
    </div>
  );
};

export default FinalSectionStoreSetup;
