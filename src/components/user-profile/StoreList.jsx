import React, { useEffect } from "react";
import StoreCard from "./StoreCard";

const StoreList = () => {
  return (
    <section className="userprofile__store-list">
      {new Array(10).fill(0).map((store) => (
        <StoreCard />
      ))}
    </section>
  );
};

export default StoreList;
