import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonCreateNewStore from "../../components/ButtonCreateNewStore";
import StoreEntry from "./StoreEntry";

const StoreEntries = () => {
  const NUM_DISPLAYED_STORES = 10;
  const { garageSaleStores } = useSelector((state) => state.stores);
  const [recordsRange, setRecordsRange] = useState({
    min: 0,
    max: NUM_DISPLAYED_STORES,
  });
  const { min, max } = recordsRange;

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

  return (
    <div className="store-catalog__entries">
      <ButtonCreateNewStore />
      {garageSaleStores.slice(min, max).map((store) => (
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
      </div>
    </div>
  );
};

export default StoreEntries;
