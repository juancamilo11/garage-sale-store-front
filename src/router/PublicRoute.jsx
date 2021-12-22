import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import StoreCatalogPage from "../pages/storeCatalog/StoreCatalogPage";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth?.uid ? (
    <Navigate to="/store" element={<StoreCatalogPage />} />
  ) : (
    children
  );
};

export default PublicRoute;
