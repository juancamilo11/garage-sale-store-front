import React from "react";
import { NavLink } from "react-router-dom";
const StoreCatalogPage = () => {
  return (
    <div>
      <h1>Home Store Catalog</h1>
      <NavLink to="/user-profile" activeClassName="selected">
        User profile
      </NavLink>
    </div>
  );
};

export default StoreCatalogPage;
