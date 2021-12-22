import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { auth } = useSelector((state) => state.state);

  return auth?.uid ? <Navigate to="/store" /> : children;
};

export default PublicRoute;
