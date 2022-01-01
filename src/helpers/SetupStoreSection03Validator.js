//Initial values for the section #3 form of the store setup's.
export const section_03FormValues = {
  storeName: "",
  storeProductTags: "",
  slogan: "",
  description: "",
  startingDate: "",
  endingDate: "",
  address: "",
};

//Initial values for the section #3 errors of the store setup's.
export const section_03ErrorState = {
  storeName: { hasErrors: false, message: "" },
  storeProductTags: { hasErrors: false, message: "" },
  slogan: { hasErrors: false, message: "" },
  description: { hasErrors: false, message: "" },
  startingDate: { hasErrors: false, message: "" },
  endingDate: { hasErrors: false, message: "" },
  address: { hasErrors: false, message: "" },
};

const section03Validator = () => {};

export default section03Validator;
