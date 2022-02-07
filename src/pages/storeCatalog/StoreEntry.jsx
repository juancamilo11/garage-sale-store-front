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
    <div className="store-catalog__store-entry">
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
        <h2 className="store-catalog__store-entry-title">{nombre}</h2>
        <div className="store-catalog__decoration-line">
          <hr />
        </div>

        <p className="store-catalog__store-entry-content">{slogan}</p>
        <p className="store-catalog__store-entry-content">
          Abierta hasta el {fechaCierre}
        </p>
        <p className="store-catalog__store-entry-content">ubicación</p>
        <p>
          {etiquetas
            .slice(0, MAX_NUM_TAGS_DISPLAYED)
            .toString()
            .replaceAll(",", ", ")}
        </p>
        <div className="store-catalog__store-entry-date-box">
          <button
            className="store-catalog__store-entry-country mt-1"
            onClick={handleSelectStore}
          >
            Visitar tienda
          </button>

          {estaEnFavorito ? (
            <i class="fas fa-heart"></i>
          ) : (
            <i class="far fa-heart"></i>
          )}
          <div>
            <h4>
              <i class="fas fa-eye"></i>
            </h4>
            <h6>{numeroVistas} visitas</h6>
          </div>
        </div>
      </div>

      {/* <div className="store-catalog__store-date-container"></div> */}
    </div>
  );
};

export default StoreEntry;
