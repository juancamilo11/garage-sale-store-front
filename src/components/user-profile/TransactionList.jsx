import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionList = () => {
  return (
    <section className="userprofile__transaction-list">
      {new Array(8).fill(0).map((store) => (
        <TransactionCard />
      ))}
    </section>
  );
};

export default TransactionList;
