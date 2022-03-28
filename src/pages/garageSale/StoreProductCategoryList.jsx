import React, { useEffect, useState } from "react";
import StoreProductItem from "./StoreProductItem";

const StoreProductCategoryList = ({
  productCategoryList,
  activeCategory,
  storeId,
}) => {
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

  console.log(JSON.stringify(productList));

  return (
    <>
      <div className="products-list__main-container">
        {productList.map((product) => (
          <StoreProductItem
            {...product}
            storeId={storeId}
            activeCategory={activeCategory}
          />
        ))}
      </div>
    </>
  );
};

export default StoreProductCategoryList;
