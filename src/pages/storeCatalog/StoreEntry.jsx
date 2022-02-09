import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { activeStore } from "../../actions/storeCatalogActions";

const MAX_NUM_TAGS_DISPLAYED = 10;

const StoreEntry = ({
  id,
  name,
  slogan,
  endingDate,
  location,
  storeTags,
  urlStore,
  isAFavorite,
  viewsCount,
  portraitImageUrl,
}) => {
  const dispatch = useDispatch();
  const { activeStore: active } = useSelector((state) => state.stores);

  const handleSelectStore = () => {
    dispatch(
      activeStore(id, {
        name,
        slogan,
        endingDate,
        location,
        storeTags,
        urlStore,
        isAFavorite,
        viewsCount,
        portraitImageUrl,
      })
    );
  };

  return (
    <div
      className="store-catalog__store-entry"
      style={{ backgroundColor: active.id === id && "#94DAFF" }}
    >
      {
        <div
          className="store-catalog__store-entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://cdn.blacksoft.ca/assets/blacksoft/img/empty.png)`,
          }}
        ></div>
      }

      <div className="store-catalog__store-entry-body">
        <h2 className="store-catalog__store-entry-title">{name}</h2>
        <div className="store-catalog__decoration-line">
          <hr />
        </div>
        <p className="store-catalog__store-entry-content store-catalog__store-entry-slogan">
          {slogan}
        </p>
        <p className="store-catalog__store-entry-content">
          <i class="fas fa-calendar-alt store-catalog__icon-entry-value"></i>
          Abierta hasta el <span className="bold-text">{endingDate}</span>
        </p>
        <p className="store-catalog__store-entry-content">
          <i class="fas fa-map-marker-alt store-catalog__icon-entry-value"></i>
          {location}
        </p>
        <p>
          <i class="fas fa-tags store-catalog__icon-entry-value"></i>
          {storeTags
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

          {isAFavorite ? (
            <i class="fas fa-heart store-catalog__icon-fav-store"></i>
          ) : (
            <i class="far fa-heart store-catalog__icon-fav-store"></i>
          )}
          <div className="store-catalog__store-view-count text-center">
            <h6 className="mt-2">
              <i class="fas fa-eye store-catalog__icon-entry-value"></i>
              {viewsCount} visitas
            </h6>
          </div>
        </div>
      </div>

      {/* <div className="store-catalog__store-date-container"></div> */}
    </div>
  );
};

export default StoreEntry;
