import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import StoreEntries from "./StoreEntries";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  return (
    <aside className="store-catalog__sidebar">
      <div className="store-catalog__sidebar-navbar">
        <div className="store-catalog__sidebar-user-info">
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
      </div>
      <StoreEntries />
    </aside>
  );
};

export default Sidebar;
