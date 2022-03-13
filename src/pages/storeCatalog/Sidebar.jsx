import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCatalogStoreFakeData } from "../../helpers/catalogStoreFakeData";
import { sweetalertForSearchAndFilterStoresBuilder } from "../../helpers/SweetalertBuilder";
import StoreEntries from "./StoreEntries";
import ButtonCreateNewStore from "./../../components/ButtonCreateNewStore";
import { startLogout } from "../../actions/authActions";
import { startFetchAllActiveStores } from "../../actions/storeCatalogActions";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  //const { stores } = useSelector((state) => state);
  //Aquí es donde se llevan a cabo los procesos de filtrado y búsqueda y ordenamiento
  const [stores, setStores] = useState(getCatalogStoreFakeData);
  const [searchValue, setSearchValue] = useState("");

  const handleGoToProfile = (e) => {
    e.preventDefault();
    navigate("/user-profile");
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    sweetalertForSearchAndFilterStoresBuilder();
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
      <StoreEntries />
    </aside>
  );
};

export default Sidebar;
