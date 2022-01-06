//Initial values for the section #3 form of the store setup's.
export const section_03FormValues = {
  productName: "",
  category: "",
  quantity: "",
  price: "",
  productState: "",
  productTags: "",
  freeShipping: "",
  productImages: [],
};

//Initial values for the section #3 errors of the store setup's.
export const section_03ErrorState = {
  productName: { hasErrors: false, message: "" },
  category: { hasErrors: false, message: "" },
  quantity: { hasErrors: false, message: "" },
  price: { hasErrors: false, message: "" },
  productState: { hasErrors: false, message: "" },
  productTags: { hasErrors: false, message: "" },
  freeShipping: { hasErrors: false, message: "" },
  productImages: { hasErrors: false, message: "" },
};

const section03Validator = () => {};

export default section03Validator;
