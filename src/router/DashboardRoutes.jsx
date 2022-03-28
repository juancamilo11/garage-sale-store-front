import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GarageSalePage from "../pages/garageSale/GarageSalePage";
import StoreProductPage from "../pages/garageSale/product/StoreProductPage";
import StoreCatalogPage from "../pages/storeCatalog/StoreCatalogPage";
import StoreSetupPage from "../pages/storeSetup/StoreSetupPage";
import UserDataForm from "../pages/userProfile/UserDataForm";
import UserProfilePage from "../pages/userProfile/UserProfilePage";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route exact path="/store-catalog" element={<StoreCatalogPage />} />
      <Route exact path="/store/:storeId" element={<GarageSalePage />} />
      <Route
        exact
        path="/store/:storeId/product/:productId/:categoryName"
        element={<StoreProductPage />}
      />
      <Route exact path="/store-setup" element={<StoreSetupPage />} />
      <Route exact path="/user-profile" element={<UserProfilePage />} />
      <Route exact path="/user-data-form" element={<UserDataForm />} />

      <Route path="/*" element={<StoreCatalogPage />} />
    </Routes>
  );
};

export default DashboardRoutes;
