import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/authActions";

const NavBarUserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    navigate("/store-catalog");
  };

  return (
    <nav className="navbar-user-profile__main-container">
      <div className="nav-user-profile__links-container">
        <ul className="nav-user-profile__links-list">
          <li className="nav-user-profile__link">
            <a href="#navbar-user-profile__section">Principal</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#user-personal-data__section">Acerca de ti</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#store-card-list__section">Tiendas</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#transaction-card-list__section">Historiales</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#favorite-store-list__section">Favoritos</a>
          </li>
        </ul>
      </div>
      <div className="nav-user-profile__buttons-container">
        <button
          className="nav-user-profile__button"
          onClick={handleGoToCatalog}
        >
          Regresar al catálogo de tiendas
        </button>
      </div>
    </nav>
  );
};

export default NavBarUserProfile;
