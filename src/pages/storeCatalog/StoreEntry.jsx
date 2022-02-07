import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeStore } from "../../actions/storeCatalogActions";

const MAX_NUM_TAGS_DISPLAYED = 10;

const StoreEntry = ({
  id,
  nombre,
  slogan,
  fechaCierre,
  ubicación,
  etiquetas,
  urlTienda,
  estaEnFavorito,
  numeroVistas,
  urlImagenPortadaTienda,
}) => {
  const dispatch = useDispatch();

  const handleSelectStore = () => {
    dispatch(
      activeStore(id, {
        nombre,
        slogan,
        fechaCierre,
        ubicación,
        etiquetas,
        urlTienda,
        estaEnFavorito,
        numeroVistas,
        urlImagenPortadaTienda,
      })
    );
  };

  return (
    <div className="store-catalog__store-entry" onClick={handleSelectStore}>
      {
        <div
          className="store-catalog__store-entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${urlImagenPortadaTienda})`,
          }}
        ></div>
      }

      <div className="store-catalog__store-entry-body">
        <h3 className="store-catalog__store-entry-title">{nombre}</h3>
        <p className="store-catalog__store-entry-content">{slogan}</p>
        <p className="store-catalog__store-entry-content">
          Abierta hasta el {fechaCierre}
        </p>
        <p className="store-catalog__store-entry-content">ubicación</p>

        <p>
          {etiquetas
            .slice(0, MAX_NUM_TAGS_DISPLAYED)
            .forEach((storeTag, index) => (
              <>
                {index === MAX_NUM_TAGS_DISPLAYED - 1 ? (
                  <span>{storeTag + ", "} </span>
                ) : (
                  <span>{storeTag + "."} </span>
                )}
              </>
            ))}
        </p>
      </div>

      <div className="store-catalog__store-date-container">
        <div className="store-catalog__store-entry-date-box">
          <button className="store-catalog__store-entry-country mt-1">
            Ver más...
          </button>
          <h6>
            {estaEnFavorito ? (
              <i class="fas fa-heart"></i>
            ) : (
              <i class="far fa-heart"></i>
            )}
          </h6>
          <h4>
            <i class="fas fa-eye"></i>
          </h4>
          <h6>{numeroVistas}</h6>
        </div>
      </div>
    </div>
  );
};

export default StoreEntry;
