//Initial values for the section #2 form of the store setup's.
export const section_02FormValues = {
  storeName: "",
  storeProductTags: "",
  slogan: "",
  description: "",
  startingDate: "",
  endingDate: "",
  address: "",
};

//Initial values for the section #2 errors of the store setup's.
export const section_02ErrorState = {
  storeName: { hasErrors: false, message: "" },
  storeProductTags: { hasErrors: false, message: "" },
  slogan: { hasErrors: false, message: "" },
  description: { hasErrors: false, message: "" },
  startingDate: { hasErrors: false, message: "" },
  endingDate: { hasErrors: false, message: "" },
  address: { hasErrors: false, message: "" },
};

const section02Validator = () => {};

export default section02Validator;
