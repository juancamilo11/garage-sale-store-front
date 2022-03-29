import { v4 as uuidv4 } from "uuid";

const newStoreObjectBuilder = (store) => {
  // localStorage.setItem("StoreWithoutModify", JSON.stringify(store));

  const storeToSend = {
    id: store.storeId,
    storeName: store.storeName,
    storeExistencePeriod: {
      startingDate: store.startingDate,
      endingDate: store.endingDate,
    },
    storeDescription: {
      slogan: store.slogan,
      description: store.description,
      tagsList: store.tagsList,
    },
    storeVisualDescription: {
      portraitUrl: store.portraitUrl,
      prevImagesList: store.prevImagesList,
      physicalStoreImageUrl: store.physicalStoreImageUrl,
    },
    user: store.id,
    storeAddress: {
      latitude: store.address.latitude,
      longitude: store.address.longitude,
    },
    productCategoryList: store.productCategoryList.map((productCategory) => {
      return {
        ...productCategory,
        productList: store.productList
          .filter(
            (product) => product.category === productCategory.categoryName
          )
          .map((product) => ({
            ...product,
            id: uuidv4(),
            productQuestionList: [],
            quantity: parseInt(product.quantity),
            price: parseFloat(product.price),
          })),
      };
    }),
    purchaseTestimonialList: [],
    purchaseOrderList: [],
  };
  localStorage.removeItem("storeReadyToSend");
  localStorage.setItem("storeReadyToSend", JSON.stringify(storeToSend));

  return storeToSend;
};

export default newStoreObjectBuilder;
