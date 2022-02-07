import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import StoreEntries from "./StoreEntries";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleGoToProfile = () => {
    navigate("/user-profile");
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
        <button className="store-catalog__search-button">
          Buscar y filtrar
        </button>
      </div>

      <StoreEntries />
    </aside>
  );
};

export default Sidebar;
