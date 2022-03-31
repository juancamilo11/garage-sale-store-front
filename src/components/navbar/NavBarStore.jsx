import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBarStore = () => {
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
            <a href="#">Principal</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#hcategory-list__main-container">Productos</a>
          </li>
          <li className="nav-user-profile__link">
            <a href="#store__map-section">Ubicación</a>
          </li>
        </ul>
      </div>
      <div className="nav-user-profile__buttons-container nav-store__buttons-container">
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
