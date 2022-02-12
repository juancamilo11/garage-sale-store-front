import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/authActions";

const NavBarStoreGateway = ({ storeName }) => {
  const dispatch = useDispatch();

  const handleAddStoreToFavorites = (e) => {
    e.preventDefault();
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
          Agregar a favoritos
        </button>
      </div>
    </nav>
  );
};

export default NavBarStoreGateway;
