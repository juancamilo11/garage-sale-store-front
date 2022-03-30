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

export const getUrlForWhatsappMessage = (
  phone,
  name,
  productName,
  quantity
) => {
  return `https://wa.me/${phone}/?text=Hola ${name}, te contacto para llegar a un acuerdo para la compra de ${quantity} unidad(es) del producto ${productName}. Muchas gracias!`;
};

export default getProductInformationById;
