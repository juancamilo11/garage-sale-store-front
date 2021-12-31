import React from "react";

const fakeStore = {
  name: "La tienda de Maria",
  startingDate: "2021-10-22",
  endingDate: "2021-10-27",
};

const StoreCard = () => {
  return (
    <div className="userprofile__store-item-container">
      <div
        className="userprofile__store-item-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/user-profile/user-home-photo.jpg"
          })`,
        }}
      ></div>
      <div className="userprofile__store-item-info">
        <h3 className="userprofile__store-item-name">{fakeStore.name}</h3>
        <h6 className="userprofile__store-item-duration">
          Disponible desde el {fakeStore.startingDate} hasta el{" "}
          {fakeStore.endingDate}
        </h6>
        <button className="userprofile__store-item-button">Ver más...</button>
      </div>
    </div>
  );
};

export default StoreCard;
