import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth?.id ? (
    children
  ) : (
    <Navigate to="/auth/login" element={<loginPage />} />
  );
};

export default PrivateRoute;
