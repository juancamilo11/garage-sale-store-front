import React, { useState } from "react";
import {
  fakeBuyData,
  fakeSellData,
  fakeFavProductData,
} from "../../helpers/fakeData";
import FavoriteProductCard from "./FavoriteProductCard";

const FavoriteProductList = () => {
  //***************IMPLEMENTACION A FUTURO***************
  //  const [favProductList, setFavProductList] = useState([]);

  // useEffect(() => {

  //Hacer un query solicitando los productos agregados a favoritos por el usuario (Usar el useFetch)

  // }, []);

  return (
    <section className="userprofile__fav-product-list">
      {new Array(15).fill(0).map((element) => (
        <FavoriteProductCard favProductData={fakeFavProductData} />
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

export default FavoriteProductList;
