import moment from "moment";
import validator from "validator";

//Initial values for the section #1 form of the store setup's.
export const section_02FormValues = {
  portraitUrl: "",
  prevImagesUrls: [],
  physicalStoreUrl: "",
};

//Initial values for the section #1 errors of the store setup's.
export const section_02ErrorState = {
  portraitUrl: { hasErrors: false, message: "" },
  prevImagesUrls: { hasErrors: false, message: "" },
  physicalStoreUrl: { hasErrors: false, message: "" },
};

const section02Validator = (e, setErrorsState) => {
  const { name: fieldName, files } = e.target;
  switch (fieldName) {
    case "portraitUrl":
      handlePortraitUrlValidation(files[0], setErrorsState);
      break;
    case "prevImagesUrls":
      handlePrevImagesUrlsValidation(files, setErrorsState);
      break;
    case "physicalStoreUrl":
      handlePhysicalStoreUrlValidation(files[0], setErrorsState);
      break;
    default:
      break;
  }
};

const sendImageToCloudinary = () => {};

const handlePortraitUrlValidation = (file, setErrorsState) => {
  if (!file.type.startsWith("image")) {
    setErrorsState((state) => {
      return {
        ...state,
        ["portraitUrl"]: {
          hasErrors: true,
          message:
            "Error: El archivo ingresado no es una imágen, por favor suba un archivo con formato correcto.",
        },
      };
    });
    return;
  }
  const blah = document.getElementById("portrait-preview");
  blah.src = URL.createObjectURL(file);
  sendImageToCloudinary();
};
const handlePrevImagesUrlsValidation = (arrfiles, setErrorsState) => {};
const handlePhysicalStoreUrlValidation = (file, setErrorsState) => {};

export default section02Validator;
