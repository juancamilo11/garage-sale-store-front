import React from "react";

const NoProductCategorySelected = () => {
  return (
    <div className="no-pcategory__main-container">
      <img
        src={process.env.PUBLIC_URL + "/assets/garage-store/choose.png"}
        className="no-pcategory__img"
        alt="dsfsd"
      />
      <h2 className="no-pcategory__text">
        No has seleccionado ninguna categoría de producto
      </h2>
    </div>
  );
};

export default NoProductCategorySelected;
