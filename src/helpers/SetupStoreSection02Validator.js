import moment from "moment";
import validator from "validator";

//Initial values for the section #1 form of the store setup's.
export const section_02FormValues = {
  portraitUrl: null,
  prevImagesUrls: [],
  physicalStoreUrl: null,
};

//Initial values for the section #1 errors of the store setup's.
export const section_02ErrorState = {
  portraitUrl: { hasErrors: false, message: "" },
  prevImagesUrls: { hasErrors: false, message: "" },
  physicalStoreUrl: { hasErrors: false, message: "" },
};

const section02Validator = (e, setErrorsState) => {
  const { name: fieldName, value } = e.target;
  switch (fieldName) {
    case "portrait":
      handlePortraitValidation(value, setErrorsState);
      break;
    case "prevImagesUrls":
      handlePrevImagesUrlsValidation(value, setErrorsState);
      break;
    case "physicalStoreUrl":
      handlePhysicalStoreUrlValidation(value, setErrorsState);
      break;
    default:
      break;
  }
};

const handlePortraitValidation = (value, setErrorsState) => {};
const handlePrevImagesUrlsValidation = (value, setErrorsState) => {};
const handlePhysicalStoreUrlValidation = (value, setErrorsState) => {};

export default section02Validator;
