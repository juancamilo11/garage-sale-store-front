import React from "react";

const NavBarStoreGateway = ({ storeName }) => {
  return (
    <nav className="navbar-store-gateway__main-container">
      <div className="navbar-store-gateway__content">
        <p className="navbar-store-gateway__store-title">
          {storeName || "Nombre de la tienda"}
        </p>
      </div>
    </nav>
  );
};

export default NavBarStoreGateway;
