import React from "react";

const NavBarUserProfile = () => {
  return (
    <nav className="navbar__main-container">
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
    </nav>
  );
};

export default NavBarUserProfile;
