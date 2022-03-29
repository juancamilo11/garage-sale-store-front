import React from "react";
import { useSelector } from "react-redux";
import { NothingSelected } from "./NothingSelected";
import Sidebar from "./Sidebar";
import StoreGatewayScreen from "./StoreGatewayScreen";
const StoreCatalogPage = () => {
  const { stores } = useSelector((state) => state);

  return (
    <div className="store-catalog__main-content">
      <Sidebar />
      {stores.activeStore ? <StoreGatewayScreen /> : <NothingSelected />}
    </div>
  );
};

export default StoreCatalogPage;
