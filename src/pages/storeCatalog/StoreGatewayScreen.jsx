import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  startFetchStoreViews,
  startRegisterStoreVisualization,
} from "../../actions/storeCatalogActions";
import { startFetchUsersInfoByIds } from "../../actions/usersActions";
import NavBarStoreGateway from "../../components/navbar/NavBarStoreGateway";
import SectionTitle from "../../components/SectionTitle";
import ViewerInfoList from "./ViewerInfoList";

const StoreGatewayScreen = () => {
  const { id: userId } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeStore } = useSelector((state) => state.stores);

  const [viewerList, setViewerList] = useState([]);
  const [viewerInfoList, setViewerInfoList] = useState([]);
  const [showViewerList, setShowViewerList] = useState(false);

  const handleVisitStore = (e) => {
    e.preventDefault();
    startRegisterStoreVisualization(userId, activeStore.id).then((res) => {
      navigate(`/store/${activeStore.id}`);
    });
  };

  useEffect(() => {
    if (showViewerList) {
      startFetchStoreViews(activeStore.id).then((viewerInfoList) => {
        setViewerList(viewerInfoList);
        // window.alert(viewerList);
      });
    }
  }, [activeStore, showViewerList]);

  useEffect(() => {
    startFetchUsersInfoByIds(viewerList?.map((viewer) => viewer.userId)).then(
      (viewersInfo) => {
        setViewerInfoList(viewersInfo);
        // window.alert(viewerInfoList);
      }
    );
  }, [viewerList]);

  const handleShowViewerList = (e) => {
    e.preventDefault();
    setShowViewerList((showViewerList) => !showViewerList);
  };

  return (
    <div className="store-gateway__main-container">
      <div className="store-gateway__content">
        <NavBarStoreGateway storeName={activeStore.storeName} />
        <div className="user-form-data__section-title user-form-data__section-title-store-catalog mt-5">
          <SectionTitle sectionTitle="Previsualización de la tienda" />
        </div>
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
            <button
              className="nav-user-profile__button visit-store__button show-viewers__button"
              onClick={handleShowViewerList}
            >
              {showViewerList ? "Ocultar visitantes" : "Ver visitantes"}
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
      {showViewerList && (
        <>
          <div className="user-form-data__section-title user-form-data__section-title-store-catalog">
            <SectionTitle sectionTitle="Lista de usuarios que han visto la tienda" />
          </div>
          {viewerInfoList?.length > 0 ? (
            <ViewerInfoList viewerInfoList={viewerInfoList} />
          ) : (
            <h4 className="text-center">
              Nadie ha visto esta venta de garaje aún
            </h4>
          )}
        </>
      )}
    </div>
  );
};

export default StoreGatewayScreen;
