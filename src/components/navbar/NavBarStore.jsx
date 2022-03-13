import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBarStore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    navigate("/store-catalog");
  };

  const handleAddOrRemoveFromFavorites = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar-user-profile__main-container">
      <div className="nav-user-profile__links-container">
        <ul className="nav-user-profile__links-list">
          <li className="nav-user-profile__link">
            <a href="#navbar-user-profile__section">Principal</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#store-card-list__section">Productos</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#transaction-card-list__section">Testimonios</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#favorite-store-list__section">Contactos</a>
          </li>
        </ul>
      </div>
      <div className="nav-user-profile__buttons-container nav-store__buttons-container">
        <button
          className="nav-user-profile__button nav-store__button"
          onClick={handleAddOrRemoveFromFavorites}
        >
          Agregar a tus favoritos
        </button>
        <button
          className="nav-user-profile__button nav-store__button"
          onClick={handleGoToCatalog}
        >
          Ir al catalogo de tiendas
        </button>
      </div>
    </nav>
  );
};

export default NavBarStore;
