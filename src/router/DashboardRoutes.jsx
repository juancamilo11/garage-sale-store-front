import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminConsole from "../pages/admin-console/AdminConsole";
import GarageSalePage from "../pages/garageSale/GarageSalePage";
import StoreProductPage from "../pages/garageSale/product/StoreProductPage";
import StoreCatalogPage from "../pages/storeCatalog/StoreCatalogPage";
import StoreSetupPage from "../pages/storeSetup/StoreSetupPage";
import UserDataForm from "../pages/userProfile/UserDataForm";
import UserProfilePage from "../pages/userProfile/UserProfilePage";

const DashboardRoutes = () => {
  const { email } = useSelector((state) => state.auth);
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
      {email === "garage.sale.store.app@gmail.com" && (
        <Route exact path="/admin-console" element={<AdminConsole />} />
      )}
      <Route path="/*" element={<StoreCatalogPage />} />
    </Routes>
  );
};

export default DashboardRoutes;
