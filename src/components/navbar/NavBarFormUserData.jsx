import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBarFormUserData = () => {
  const navigate = useNavigate();

  const handleGoToStoreCatalog = () => {
    navigate("/store-catalog");
  };

  return (
    <nav className="navbar-user-profile__main-container">
      <div className="nav-user-profile__links-container"></div>
      <div className="nav-form-data__buttons-container">
        <button
          className="nav-user-profile__button"
          onClick={handleGoToStoreCatalog}
        >
          Regresar al catálogo de tiendas
        </button>
      </div>
    </nav>
  );
};

export default NavBarFormUserData;
