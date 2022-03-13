import React from "react";
import ProductCategoryItem from "./ProductCategoryItem";

const HorizontalProductCategoryList = ({
  setActiveCategory,
  productCategoryList,
}) => {
  const productCategoryList2 = [
    ...productCategoryList,
    ...productCategoryList,
    ...productCategoryList,
    ...productCategoryList,
    ...productCategoryList,
    ...productCategoryList,
    ...productCategoryList,
  ];

  return (
    <div className="hcategory-list__main-container">
      {productCategoryList2.map((productCategory) => (
        <ProductCategoryItem
          {...productCategory}
          setActiveCategory={setActiveCategory}
        />
      ))}
    </div>
  );
};

export default HorizontalProductCategoryList;
