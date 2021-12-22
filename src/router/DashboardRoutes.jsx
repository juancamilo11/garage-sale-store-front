import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GarageSalePage from "../pages/garageSale/GarageSalePage";
import StoreCatalogPage from "../pages/storeCatalog/StoreCatalogPage";
import StoreSetupPage from "../pages/storeSetup/StoreSetupPage";
import UserProfilePage from "../pages/userProfile/UserProfilePage";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route exact path="/store" element={<GarageSalePage />} />
      <Route exact path="/store-catalog" element={<StoreCatalogPage />} />
      <Route exact path="/store-setup" element={<StoreSetupPage />} />
      <Route exact path="/user-profile" element={<UserProfilePage />} />

      <Route path="/*" element={<GarageSalePage />} />
    </Routes>
  );
};

export default DashboardRoutes;
