import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/authActions";

const NavBarStoreGateway = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeStore: active } = useSelector((state) => state.stores);

  const handleGoToCatalog = () => {
    navigate("/store-catalog");
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar-store-gateway__main-container">
      <div className="navbar-store-gateway__links-container">
        <ul className="navbar-store-gateway__links-list">
          <li className="navbar-store-gateway__link">
            <a href="#navbar-store-gateway__section">
              {JSON.stringify(active)}
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-store-gateway__buttons-container">
        <button
          className="navbar-store-gateway__button"
          onClick={handleGoToCatalog}
        >
          Regresar al catálogo de tiendas
        </button>
        <button className="nav-user-profile__button" onClick={handleLogout}>
          Salir
        </button>
      </div>
    </nav>
  );
};

export default NavBarStoreGateway;
