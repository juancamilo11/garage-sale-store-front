import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarFormUserData = () => {
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    navigate("/user-profile");
  };

  const handleLogout = () => {
    window.alert("pendiente: hacer el logout de firebase");
  };

  return (
    <nav className="navbar-user-profile__main-container">
      <div className="nav-user-profile__links-container"></div>
      <div className="nav-form-data__buttons-container">
        <button
          className="nav-user-profile__button"
          onClick={handleGoToProfile}
        >
          Regresar a tu perfil
        </button>
        <button className="nav-user-profile__button" onClick={handleLogout}>
          Salir
        </button>
      </div>
    </nav>
  );
};

export default NavBarFormUserData;
