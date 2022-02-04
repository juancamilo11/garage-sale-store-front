import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { NothingSelected } from "./NothingSelected";
import Sidebar from "./Sidebar";
import StoreGatewayScreen from "./StoreGatewayScreen";
const StoreCatalogPage = () => {
  const { stores } = useSelector((state) => state);

  //This useEffect'll be used to make a request for user current location
  useEffect(() => {
    return () => {};
  }, []);

  // return (
  //   <div className="home__main-container">
  //     <Sidebar />
  //     <main>
  //       {stores.active ? <StoreGatewayScreen /> : <NothingSelected />}
  //     </main>
  //   </div>
  // );
  return <NothingSelected />;
};

export default StoreCatalogPage;
