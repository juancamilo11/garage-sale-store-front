import React, { useState } from "react";
import { useEffect } from "react";
import { fakeBuyData, fakeSellData } from "../../helpers/fakeData";
import TransactionCard from "./TransactionCard";

const TransactionList = ({ transactionType }) => {
  //***************IMPLEMENTACION A FUTURO***************
  // const [transactionsList, setTransactionsList] = useState([]);

  // useEffect(() => {
  //   if(transactionType === "buy") {
  // Hacer un query solicitando el historial de transacciones del usuario y que tengan el transactionType igual a buy(Usar el useFetch)
  //   } else if(transactionType ==="sell"){
  // Hacer un query solicitando el historial de transacciones del usuario y que tengan el transactionType igual a sell(Usar el useFetch)

  //   }
  // }, []);

  return (
    <section className="userprofile__transaction-list">
      {new Array(8).fill(0).map((element) => (
        <TransactionCard
          transactionData={
            transactionType === "buy" ? fakeBuyData : fakeSellData
          }
        />
      ))}
    </section>
    //***************IMPLEMENTACION A FUTURO***************
    // <section className="userprofile__transaction-list">
    //   {transactionsList
    //     .filter(
    //       (transaction) => transaction.transactionType === transactionType
    //     )
    //     .map((transaction) => (
    //       <TransactionCard transactionType={transaction} />
    //     ))}
    // </section>
  );
};

export default TransactionList;
