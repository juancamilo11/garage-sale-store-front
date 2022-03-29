import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeStore,
  startFetchStoreViews,
} from "../../actions/storeCatalogActions";

const MAX_NUM_TAGS_DISPLAYED = 10;

const StoreEntry = ({
  id,
  storeName,
  storeExistencePeriod,
  storeDescription,
  storeVisualDescription,
  storeAddress,
  viewsCount,
}) => {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.stores);
  const [viewerList, setViewerList] = useState([]);
  const activeStoreItem = stores.activeStore;

  const handleSelectStore = () => {
    dispatch(
      activeStore(id, {
        storeName,
        storeExistencePeriod,
        storeDescription,
        storeVisualDescription,
        storeAddress,
        viewsCount,
      })
    );
  };

  useEffect(() => {
    startFetchStoreViews(id).then((viewerInfoList) => {
      setViewerList(viewerInfoList);
    });
  }, []);

  return (
    <div
      className="store-catalog__store-entry"
      style={{ backgroundColor: activeStoreItem?.id === id && "#94DAFF" }}
    >
      {
        <div
          className="store-catalog__store-entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${storeVisualDescription.portraitUrl})`,
          }}
        ></div>
      }

      <div className="store-catalog__store-entry-body">
        <h2 className="store-catalog__store-entry-title">{storeName}</h2>
        <div className="store-catalog__decoration-line">
          <hr />
        </div>
        <p className="store-catalog__store-entry-content store-catalog__store-entry-slogan">
          {storeDescription.slogan}
        </p>
        <p className="store-catalog__store-entry-content">
          <i class="fas fa-calendar-alt store-catalog__icon-entry-value"></i>
          Desde{" "}
          <span className="bold-text">
            {storeExistencePeriod.startingDate}
          </span>{" "}
          hasta{" "}
          <span className="bold-text">{storeExistencePeriod.endingDate}</span>
        </p>
        <p className="store-catalog__store-entry-content">
          <i class="fas fa-map-marker-alt store-catalog__icon-entry-value"></i>
          {storeAddress?.latitude || "latitude"} -{" "}
          {storeAddress?.longitude || "longitude"}
        </p>
        <p>
          <i class="fas fa-tags store-catalog__icon-entry-value"></i>
          {storeDescription.tagsList
            .slice(0, MAX_NUM_TAGS_DISPLAYED)
            .toString()
            .replaceAll(",", ", ")}
        </p>
        <div className="store-catalog__store-entry-date-box">
          <button
            className="store-catalog__visit-store mt-1"
            onClick={handleSelectStore}
          >
            Ver tienda
          </button>

          {true ? (
            <i class="fas fa-heart store-catalog__icon-fav-store"></i>
          ) : (
            <i class="far fa-heart store-catalog__icon-fav-store"></i>
          )}
          <div className="store-catalog__store-view-count text-center">
            <h6 className="mt-2">
              <i class="fas fa-eye store-catalog__icon-entry-value"></i>
              {viewerList?.length || 0} visitas
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreEntry;
