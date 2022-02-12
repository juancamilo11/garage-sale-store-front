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

  return (
    <div className="store-gateway__main-container">
      <div className="store-gateway__content">
        <NavBarStoreGateway storeName={activeStore.name} />
        <div className="user-form-data__section-title user-form-data__section-title-store-catalog">
          <SectionTitle sectionTitle="Previsualización de la tienda" />
        </div>
        {/* {JSON.stringify(activeStore)} */}
        <div className="store-gateway__description">
          <div className="store-gateway__description-text">
            <p className="store-gateway__descriptor">"{activeStore.slogan}"</p>
            <p className="store-gateway__descriptor">
              {activeStore.description}
            </p>
            <p className="store-gateway__store-taglist">
              {activeStore.storeTags.map((storeTag) => (
                <h6 key={storeTag}>{storeTag}</h6>
              ))}
            </p>
            <button
              className="nav-user-profile__button mr-2"
              onClick={handleVisitStore}
            >
              Visitar la tienda
            </button>
          </div>
          <div className="store-gateway__description-img-container">
            <img
              className="store-gateway__description-img"
              src={process.env.PUBLIC_URL + "/assets/common/emptyImage.png"}
              alt="empty"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreGatewayScreen;
