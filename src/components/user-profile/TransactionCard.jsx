import React from "react";

const fakeTransaction = {
  name: "La tienda de Maria",
  startingDate: "2021-10-22",
  endingDate: "2021-10-27",
  seller: "Pedro perez",
  purchaseDate: "2021-12-28",
  quantity: 3,
};

const TransactionCard = () => {
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
        <h3 className="userprofile__transaction-item-name">
          {fakeTransaction.name}
        </h3>
        <p className="userprofile__transaction-item-description">
          Vendedor: {fakeTransaction.seller}
        </p>
        <p className="userprofile__transaction-item-description">
          Cantidad: {fakeTransaction.quantity} unidades compradas
        </p>
        <p className="userprofile__transaction-item-description">
          Fecha de compra: {fakeTransaction.purchaseDate}
        </p>
        <button className="userprofile__transaction-item-button">
          Ver más...
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
