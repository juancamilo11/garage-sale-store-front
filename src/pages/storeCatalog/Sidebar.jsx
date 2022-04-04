import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sweetalertForSearchAndFilterStoresBuilder } from "../../helpers/SweetalertBuilder";
import StoreEntries from "./StoreEntries";
import { startLogout } from "../../actions/authActions";
import { startFetchAllActiveStores } from "../../actions/storeCatalogActions";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [searchValue, setSearchValue] = useState("");
  const [hasFilters, setHasFilters] = useState(false);

  const handleGoToProfile = (e) => {
    e.preventDefault();
    navigate("/user-profile");
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    sweetalertForSearchAndFilterStoresBuilder().then((result) => {
      if (result.isConfirmed) {
        setSearchValue(result.value);
        setHasFilters(true);
      }
    });
  };

  const handleDeleteSearchValue = (e) => {
    e.preventDefault();
    setSearchValue("");
    setHasFilters(false);
  };

  const handleGoToAdminConsole = (e) => {
    e.preventDefault();
    navigate("/admin-console");
  };

  useEffect(() => {
    dispatch(startFetchAllActiveStores());
  }, []);

  return (
    <aside className="store-catalog__sidebar">
      <div className="store-catalog__sidebar-navbar">
        <div
          className="store-catalog__sidebar-user-info"
          onClick={handleGoToProfile}
          title="Ir a tu perfil personal"
        >
          {auth?.photoUrl ? (
            <img
              src={auth.photoUrl}
              alt=" "
              className="store-catalog__img-profile"
            />
          ) : (
            <i className="fas fa fa-user-circle store-catalog__logo-profile"></i>
          )}
          <span className="store-catalog__display-name"> {auth.name}</span>
        </div>
        <div>
          {searchValue !== "" && (
            <button
              className="store-catalog__search-button"
              onClick={handleDeleteSearchValue}
              title={`Click aquí para eliminar el filtro '${searchValue}'`}
            >
              <i className="fas fa fa-filter"></i>
            </button>
          )}
          {auth.email === "garage.sale.store.app@gmail.com" && (
            <button
              className="store-catalog__search-button"
              onClick={handleGoToAdminConsole}
            >
              Administración
            </button>
          )}
          <button
            className="store-catalog__search-button"
            onClick={handleSearch}
          >
            Buscar y filtrar
          </button>
          <button
            className="store-catalog__search-button store-catalog__logout-button"
            onClick={handleLogout}
          >
            Salir
          </button>
        </div>
      </div>
      <StoreEntries searchValue={searchValue} />
    </aside>
  );
};

export default Sidebar;
