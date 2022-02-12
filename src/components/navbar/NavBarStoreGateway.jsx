import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { startLogout } from "../../actions/authActions";
import {
  sweetalertForAddingStoreToFavoritesBuilder,
  sweetalertForDeletingStoreFromFavoritesBuilder,
} from "../../helpers/SweetalertBuilder";

const NavBarStoreGateway = ({ storeName }) => {
  const dispatch = useDispatch();
  const { activeStore } = useSelector((state) => state.stores);

  const handleAddStoreToFavorites = (e) => {
    e.preventDefault();
    if (activeStore.isAFavorite) {
      //logica
      sweetalertForAddingStoreToFavoritesBuilder(activeStore.name);
    } else {
      //logica
      sweetalertForDeletingStoreFromFavoritesBuilder(activeStore.name);
    }
  };

  return (
    <nav className="navbar-store-gateway__main-container">
      <div className="navbar-store-gateway__content">
        <p className="navbar-store-gateway__store-title">
          {storeName || "Nombre tienda"}
        </p>
        <button
          className="nav-user-profile__button mr-2"
          onClick={handleAddStoreToFavorites}
        >
          {activeStore.isAFavorite
            ? "Eliminar de favoritos"
            : "Agregar a tusfavoritos"}
        </button>
      </div>
    </nav>
  );
};

export default NavBarStoreGateway;
