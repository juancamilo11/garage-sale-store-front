import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Paginator from "../../components/Paginator";
import { getCatalogStoreFakeData } from "../../helpers/catalogStoreFakeData";
import { sweetalertForSearchAndFilterStoresBuilder } from "../../helpers/SweetalertBuilder";
import StoreEntries from "./StoreEntries";

const Sidebar = () => {
  const navigate = useNavigate();

  //const { stores } = useSelector((state) => state);
  //Aquí es donde se llevan a cabo los procesos de filtrado y búsqueda y ordenamiento
  const [stores, setStores] = useState(getCatalogStoreFakeData);
  const [storesPagination, setStoresPagination] = useState({
    skip: 0,
    limit: 30,
  });
  const [searchValue, setSearchValue] = useState("");

  const handleGoToProfile = (e) => {
    e.preventDefault();
    navigate("/user-profile");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    sweetalertForSearchAndFilterStoresBuilder();
  };

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  return (
    <aside className="store-catalog__sidebar">
      <div className="store-catalog__sidebar-navbar">
        <div
          className="store-catalog__sidebar-user-info"
          onClick={handleGoToProfile}
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
        <button className="store-catalog__search-button" onClick={handleSearch}>
          Buscar y filtrar
        </button>
      </div>

      <StoreEntries stores={stores} />
      <Paginator />
    </aside>
  );
};

export default Sidebar;
