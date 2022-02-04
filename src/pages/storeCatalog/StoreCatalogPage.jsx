import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const StoreCatalogPage = () => {
  //This useEffect'll be used to make a request for user current location
  useEffect(() => {
    return () => {};
  }, []);

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
