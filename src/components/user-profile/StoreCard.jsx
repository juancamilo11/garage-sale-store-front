import React from "react";

const fakeStore = {
  name: "La tienda de Maria",
  startingDate: "2021-10-22",
  endingDate: "2021-10-27",
};

const StoreCard = () => {
  return (
    <div className="userprofile__store-item-container">
      <div className="userprofile__store-item-img"></div>
      <div className="userprofile__store-item-info">
        <h3>{fakeStore.name}</h3>
        <h6>
          Disponible desde el {fakeStore.startingDate} hasta el{" "}
          {fakeStore.endingDate}
        </h6>
        <button>Ver más...</button>
      </div>
    </div>
  );
};

export default StoreCard;
