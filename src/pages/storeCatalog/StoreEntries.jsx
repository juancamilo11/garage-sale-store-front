import React from "react";
import { useSelector } from "react-redux";
import StoreEntry from "./StoreEntry";

const StoreEntries = () => {
  const { stores } = useSelector((state) => state);
  return (
    <div className="journal__entries">
      {stores
        .sort((store1, store2) => store2.date - store1.date)
        .map((note) => (
          <StoreEntry key={note.id} {...note} />
        ))}
    </div>
  );
};

export default StoreEntries;
