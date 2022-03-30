const getProductInformationById = (storeInfo, productId) => {
  const { productCategoryList } = storeInfo;

  const category = productCategoryList?.find((productCategory) => {
    return (
      productCategory.productList.find(
        (product) => product.id === productId
      ) !== undefined
    );
  });

  return category?.productList.find((product) => product.id === productId);
};

export default getProductInformationById;
