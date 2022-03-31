import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonCreateNewStore from "../../components/ButtonCreateNewStore";
import StoreEntry from "./StoreEntry";

const StoreEntries = ({ searchValue }) => {
  const NUM_DISPLAYED_STORES = 10;
  const { garageSaleStores } = useSelector((state) => state.stores);
  const [recordsRange, setRecordsRange] = useState({
    min: 0,
    max: NUM_DISPLAYED_STORES,
  });
  const { min, max } = recordsRange;
  const [garageSaleStoreToShow, setGarageSaleStoreToShow] =
    useState(garageSaleStores);

  const handlePreviousResults = (e) => {
    e.preventDefault();
    setRecordsRange({
      min: min - NUM_DISPLAYED_STORES,
      max: max - NUM_DISPLAYED_STORES,
    });
  };

  const handleNextResults = (e) => {
    e.preventDefault();
    setRecordsRange({
      min: min + NUM_DISPLAYED_STORES,
      max: max + NUM_DISPLAYED_STORES,
    });
  };

  useEffect(() => {
    setGarageSaleStoreToShow(() => {
      if (searchValue === "") {
        return garageSaleStores;
      }
      return garageSaleStores.filter((garageSaleStore) =>
        garageSaleStore.storeName
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase())
      );
    });
  }, [searchValue]);

  return (
    <div className="store-catalog__entries">
      <ButtonCreateNewStore />
      {/* {JSON.stringify(garageSaleStores)} */}
      {garageSaleStoreToShow.slice(min, max).map((store) => (
        <StoreEntry key={store.id} {...store} />
      ))}
      <div className="stores__pagination-buttons">
        <button
          className="stores__pagination-button"
          onClick={handlePreviousResults}
          disabled={min === 0}
        >
          Anterior
        </button>
        <button
          className="stores__pagination-button"
          onClick={handleNextResults}
          disabled={max >= garageSaleStores.length}
        >
          Siguiente
        </button>
        <h6 className="stores__pagination-quantity-title">
          10 tiendas por página
        </h6>
      </div>
    </div>
  );
};

export default StoreEntries;
