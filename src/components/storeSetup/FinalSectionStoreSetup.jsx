import React from "react";
import { useSelector } from "react-redux";
import { startPostGarageSaleStore } from "../../actions/storeSetupActions";
import newStoreObjectBuilder from "../../helpers/storeSetupHelpers/newStoreObjectBUilder";
import { useNavigate } from "react-router-dom";

const FinalSectionStoreSetup = () => {
  const { id } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { firstFormInfo, secondFormInfo, thirdFormInfo } = useSelector(
    (state) => state.storeSetup
  );

  const handleFinishStoreCreation = (e) => {
    e.preventDefault();

    const storeReadyToSend = newStoreObjectBuilder({
      ...firstFormInfo,
      ...secondFormInfo,
      productList: thirdFormInfo.productList,
      productCategoryList: thirdFormInfo.productCategoryList,
      id,
    });
    startPostGarageSaleStore(storeReadyToSend);
    navigate(`/store-catalog`);
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
