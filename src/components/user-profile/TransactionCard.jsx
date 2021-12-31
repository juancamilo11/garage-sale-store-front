import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TransactionCard = ({ transactionData }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const handleGoToProduct = (e) => {
    //Registrar la ruta con los query params
    //navigate(`/transaction?uid=${auth.uid}&transactionId=${12345}`);
  };

  return (
    <div className="userprofile__transaction-item-container">
      <div
        className="userprofile__transaction-item-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/assets/common/fake-products/img-shirt.jpg"
          })`,
        }}
      ></div>
      <div className="userprofile__transaction-item-info">
        <div className="userprofile__transaction-main-container">
          <h3 className="userprofile__transaction-item-name">
            {transactionData.productName}
          </h3>
          <h3 className="userprofile__transaction-item-price">
            {transactionData.price} {transactionData.currency}
          </h3>
        </div>
        <p className="userprofile__transaction-item-description">
          {transactionData.transactionType === "buy" ? "Vendedor" : "Comprador"}
          :
          {transactionData.transactionType === "buy"
            ? `${transactionData.seller}`
            : `${transactionData.buyer}`}
        </p>
        <p className="userprofile__transaction-item-description">
          Cantidad: {transactionData.quantity} unidades compradas
        </p>
        <p className="userprofile__transaction-item-description">
          Fecha de compra: {transactionData.transactionDate}
        </p>
        <button
          className="userprofile__transaction-item-button"
          onClick={handleGoToProduct}
        >
          Ver más...
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
