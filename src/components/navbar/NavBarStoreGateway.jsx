import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { startLogout } from "../../actions/authActions";
import {
  ACTION_TYPE_ADD_NEW_FAVORITE,
  ACTION_TYPE_DELETE_FAVORITE,
  deleteStoreFromFavorites,
  FAVORITE_TYPE_STORE,
  setStoreOrProductAsFavorite,
} from "../../actions/storeCatalogActions";
import {
  sweetalertForAddingStoreToFavoritesBuilder,
  sweetalertForDeletingStoreFromFavoritesBuilder,
} from "../../helpers/SweetalertBuilder";

const NavBarStoreGateway = ({ storeName }) => {
  const auth = useSelector((state) => state.auth);
  const { activeStore } = useSelector((state) => state.stores);
  const dispatch = useDispatch();
  let currentDate = new Date().toISOString().split("T")[0];
  const handleAddOrDeleteStoreToFavorites = (e) => {
    e.preventDefault();

    if (!activeStore.isAFavorite) {
      setStoreOrProductAsFavorite(
        auth.uid,
        currentDate,
        activeStore.id,
        FAVORITE_TYPE_STORE,
        ACTION_TYPE_ADD_NEW_FAVORITE
      );
    } else {
      deleteStoreFromFavorites(
        auth.uid,
        currentDate,
        activeStore.id,
        FAVORITE_TYPE_STORE,
        ACTION_TYPE_DELETE_FAVORITE
      );
    }
  };

  return (
    <nav className="navbar-store-gateway__main-container">
      <div className="navbar-store-gateway__content">
        <p className="navbar-store-gateway__store-title">
          {storeName || "Nombre tienda"}
        </p>
        <button
          className="nav-user-profile__button"
          onClick={handleAddOrDeleteStoreToFavorites}
        >
          {activeStore.isAFavorite
            ? "Eliminar de favoritos"
            : "Agregar a tus favoritos"}
        </button>
      </div>
    </nav>
  );
};

export default NavBarStoreGateway;
