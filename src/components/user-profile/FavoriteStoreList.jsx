import React, { useState } from "react";
import {
  fakeBuyData,
  fakeSellData,
  fakeFavStoreData,
} from "../../helpers/fakeData";
import FavoriteStoreCard from "./FavoriteStoreCard";
import TransactionCard from "./TransactionCard";

const FavoriteStoreList = () => {
  //***************IMPLEMENTACION A FUTURO***************
  //  const [favStoresList, setFavStoresList] = useState([]);

  // useEffect(() => {

  //Hacer un query solicitando las tiendas agregadas a favoritos por el usuario (Usar el useFetch)

  // }, []);

  return (
    <section className="userprofile__transaction-list">
      {new Array(15).fill(0).map((element) => (
        <FavoriteStoreCard favStoreData={fakeFavStoreData} />
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

export default FavoriteStoreList;
