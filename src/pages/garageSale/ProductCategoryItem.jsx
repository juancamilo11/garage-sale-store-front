import React from "react";

const ProductCategoryItem = ({
  name,
  imageUrl,
  activeCategory,
  setActiveCategory,
}) => {
  const handleSetActiveCategory = (e) => {
    e.preventDefault();
    setActiveCategory(name);
  };

  return (
    <div
      className="hcategory__item-container"
      onClick={handleSetActiveCategory}
      style={{ backgroundColor: activeCategory === name ? "#5c62c5" : "white" }}
    >
      <div
        className="hcategory__item-img-container"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: "white",
        }}
      ></div>
      <p className="hcategory__item-name">{name}</p>
    </div>
  );
};

export default ProductCategoryItem;
