import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import StoreCatalogPage from "../pages/storeCatalog/StoreCatalogPage";
import UserDataForm from "../pages/userProfile/UserDataForm";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  if (auth?.id) {
    return <Navigate to="/store-catalog" element={<StoreCatalogPage />} />;
  } else {
    return children;
  }
};

export default PublicRoute;
