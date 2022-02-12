import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarStoreGateway from "../../components/navbar/NavBarStoreGateway";

const StoreGatewayScreen = () => {
  const dispatch = useDispatch();
  const { activeStore } = useSelector((state) => state.stores);

  return (
    <div className="store-gateway__main-container">
      <div className="store-gateway__content">
        <NavBarStoreGateway />
        {JSON.stringify(activeStore)}
      </div>
    </div>
  );
};

export default StoreGatewayScreen;
