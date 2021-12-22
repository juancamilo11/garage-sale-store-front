import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth?.uid ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
