import React from "react";
import { useSelector } from "react-redux";
import StoreEntry from "./StoreEntry";
import JournalEntry from "./StoreEntry";

const StoreEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="jorunal__entries">
      {notes
        .sort((note1, note2) => note2.date - note1.date)
        .map((note) => (
          <StoreEntry key={note.id} {...note} />
        ))}
    </div>
  );
};

export default StoreEntries;
