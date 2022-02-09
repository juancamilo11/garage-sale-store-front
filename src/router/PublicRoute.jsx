import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import StoreCatalogPage from "../pages/storeCatalog/StoreCatalogPage";
import UserDataForm from "../pages/userProfile/UserDataForm";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  console.log(auth.creationTime);
  console.log(auth.lastSignInTime);

  if (auth?.uid && auth.creationTime === auth.lastSignInTime) {
    return <Navigate to="/user-data-form" element={<UserDataForm />} />;
  } else if (auth?.uid && auth.creationTime !== auth.lastSignInTime) {
    return <Navigate to="/store-catalog" element={<StoreCatalogPage />} />;
  } else {
    return children;
  }
};

export default PublicRoute;
