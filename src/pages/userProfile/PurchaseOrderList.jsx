import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { startFetchAllPurchaseOrdersByType } from "../../actions/usersActions";
import PurchaseOrderItem from "./PurchaseOrderItem";

const PurchaseOrderList = ({ type }) => {
  const { id } = useSelector((state) => state.auth);

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    if (type === "BUY") {
      startFetchAllPurchaseOrdersByType("BUY", id).then((result) => {
        setOrderList(result);
      });
    }
    if (type === "SELL") {
      startFetchAllPurchaseOrdersByType("SELL", id).then((result) => {
        setOrderList(result);
      });
    }
  }, []);

  return (
    <div className="purchase-order__list-container">
      <h3>{orderList.length === 0 && <h3>No hay ordenes aquí</h3>}</h3>
      {orderList?.map((orderItem) => (
        <PurchaseOrderItem {...orderItem} type={type} />
      ))}
    </div>
  );
};

export default PurchaseOrderList;
