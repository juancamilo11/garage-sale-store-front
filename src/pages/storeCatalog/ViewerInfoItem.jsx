import React from "react";

const ViewerInfoItem = ({ name, photoUrl, email }) => {
  return (
    <div className="store-view__main-container">
      <img src={photoUrl} alt="" className="product-view__photo" />
      <p className="product-view__name">{name}</p>
      <p className="product-view__email">{email}</p>
    </div>
  );
};

export default ViewerInfoItem;
