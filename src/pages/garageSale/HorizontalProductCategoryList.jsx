import React from "react";
import ProductCategoryItem from "./ProductCategoryItem";

const HorizontalProductCategoryList = ({
  setActiveCategory,
  activeCategory,
  productCategoryList,
}) => {
  const productCategoryList2 = [...productCategoryList];

  return (
    <div
      className="hcategory-list__main-container"
      id="hcategory-list__main-container"
    >
      {productCategoryList2.map((productCategory) => (
        <ProductCategoryItem
          {...productCategory}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
};

export default HorizontalProductCategoryList;
