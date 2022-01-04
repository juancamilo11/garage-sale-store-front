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
  portraitUrl: { hasErrors: false, message: "", hasContent: false },
  prevImagesUrls: { hasErrors: false, message: "", hasContent: false },
  physicalStoreUrl: { hasErrors: false, message: "", hasContent: false },
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

const sendImageToCloudinary = () => {
  //Pendiente, conectar con la api de cloudinary.
};

const handlePortraitUrlValidation = (file, setErrorsState) => {
  if (!file.type.startsWith("image")) {
    setErrorsState((state) => {
      return {
        ...state,
        ["portraitUrl"]: {
          hasErrors: true,
          message:
            "Error: El archivo ingresado no es una imágen, por favor suba un archivo con formato correcto.",
          hasContent: false,
        },
      };
    });
    return;
  }
  //Enviar la imagen a cloudinary y en base a la peticion hacer lo siguiente.
  sendImageToCloudinary();
  setErrorsState((state) => {
    return {
      ...state,
      ["portraitUrl"]: { hasErrors: false, message: "", hasContent: true },
    };
  });
  const imagePreview = document.getElementById("portrait-preview");
  imagePreview.src = URL.createObjectURL(file);
};

const handlePrevImagesUrlsValidation = (arrfiles, setErrorsState) => {};

const handlePhysicalStoreUrlValidation = (file, setErrorsState) => {};

export default section02Validator;
