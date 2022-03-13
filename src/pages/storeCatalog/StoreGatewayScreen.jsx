import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBarStoreGateway from "../../components/navbar/NavBarStoreGateway";
import SectionTitle from "../../components/SectionTitle";

const StoreGatewayScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeStore } = useSelector((state) => state.stores);

  const handleVisitStore = (e) => {
    e.preventDefault();
    navigate(`/store/${activeStore.id}`);
  };
  /*

    id
    storeName,
    storeExistencePeriod,
    storeDescription,
    storeVisualDescription,
    storeAddress,
    viewsCount,
      
*/

  return (
    <div className="store-gateway__main-container">
      <div className="store-gateway__content">
        <NavBarStoreGateway storeName={activeStore.storeName} />
        <div className="user-form-data__section-title user-form-data__section-title-store-catalog mt-5">
          <SectionTitle sectionTitle="Previsualización de la tienda" />
        </div>
        {/* {JSON.stringify(activeStore)} */}
        <div className="store-gateway__description">
          <div className="store-gateway__description-text">
            <p className="store-gateway__descriptor">
              "{activeStore.storeDescription.slogan}"
            </p>
            <p className="store-gateway__descriptor">
              {activeStore.storeDescription.description}
            </p>
            <p className="store-gateway__store-taglist">
              {activeStore.storeDescription.tagsList.map((storeTag) => (
                <h6 key={storeTag}>{storeTag}</h6>
              ))}
            </p>
            <button
              className="nav-user-profile__button visit-store__button"
              onClick={handleVisitStore}
            >
              Visitar la tienda
            </button>
          </div>
          <div className="store-gateway__description-img-container">
            <img
              className="store-gateway__description-img"
              src={activeStore.storeVisualDescription.physicalStoreImageUrl}
              alt="empty"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreGatewayScreen;
