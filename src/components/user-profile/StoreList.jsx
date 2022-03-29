import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { startFetchAllActiveStoresBySellerId } from "../../actions/storeCatalogActions";
import StoreCard from "./StoreCard";

const StoreList = () => {
  const { id } = useSelector((state) => state.auth);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    startFetchAllActiveStoresBySellerId(id).then((storeList) => {
      setStores(storeList);
    });
  }, []);

  return (
    <section className="userprofile__store-list">
      {stores?.map((store) => (
        <StoreCard {...store} />
      ))}
    </section>
  );
};

export default StoreList;
