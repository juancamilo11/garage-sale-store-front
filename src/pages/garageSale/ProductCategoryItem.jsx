import React from "react";

const ProductCategoryItem = ({ name, imageUrl, setActiveCategory }) => {
  const handleSetActiveCategory = (e) => {
    e.preventDefault();
    setActiveCategory(name);
  };

  return (
    <div
      className="hcategory__item-container"
      onClick={handleSetActiveCategory}
    >
      <div
        className="hcategory__item-img-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <p className="hcategory__item-name">{name}</p>
    </div>
  );
};

export default ProductCategoryItem;
