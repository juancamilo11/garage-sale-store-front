import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import StoreEntry from "./StoreEntry";
import { getCatalogStoreFakeData } from "../../helpers/catalogStoreFakeData";
const StoreEntries = () => {
  //const { stores } = useSelector((state) => state);

  //Aquí es donde se llevan a cabo los procesos de filtrado y búsqueda y ordenamiento

  const [stores, setStores] = useState(getCatalogStoreFakeData);

  return (
    <div className="store-catalog__entries">
      {/* {stores.garageSaleStores */}
      {/* stores.sort((store1, store2) => store2.dateEnd - store1.dateEnd) */}
      {stores.map((store) => (
        <StoreEntry key={store.id} {...store} />
      ))}
    </div>
  );
};

export default StoreEntries;
