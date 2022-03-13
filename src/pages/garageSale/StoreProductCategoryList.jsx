import React, { useEffect, useState } from "react";
import StoreProductItem from "./StoreProductItem";

const StoreProductCategoryList = ({ productCategoryList, activeCategory }) => {
  const [activeProductCategory, setActiveProductCategory] = useState(
    getActiveProductCategory()
  );

  useEffect(() => {
    setActiveProductCategory(getActiveProductCategory());
  }, [activeCategory]);

  const { productList } = activeProductCategory;

  function getActiveProductCategory() {
    return productCategoryList.filter(
      (productCategory) => productCategory.name === activeCategory
    )[0];
  }

  return (
    <>
      <div className="products-list__main-container">
        {productList.map((product) => (
          <StoreProductItem {...product} />
        ))}
      </div>
    </>
  );
};

export default StoreProductCategoryList;
