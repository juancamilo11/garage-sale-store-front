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
  if (!file?.type.startsWith("image")) {
    const imagePreview = document.getElementById("portrait-preview");
    imagePreview.setAttribute("src", "/assets/common/emptyImage.png");
    imagePreview.classList.replace(
      "portrait-preview--with-content",
      "portrait-preview--no-content"
    );
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
  const imagePreview = document.getElementById("portrait-preview");
  imagePreview.src = URL.createObjectURL(file);
  imagePreview.classList.replace(
    "portrait-preview--no-content",
    "portrait-preview--with-content"
  );
  setErrorsState((state) => {
    return {
      ...state,
      ["portraitUrl"]: { hasErrors: false, message: "", hasContent: true },
    };
  });
};

const handlePrevImagesUrlsValidation = (arrfiles, setErrorsState) => {};

const handlePhysicalStoreUrlValidation = (file, setErrorsState) => {
  //Continuar con esto basándome de lo que ya se hizo en la imágen de portada
  if (!file?.type.startsWith("image")) {
    const imagePreview = document.getElementById("physical-store-preview");
    imagePreview.setAttribute("src", "/assets/common/emptyImage.png");
    imagePreview.classList.replace(
      "portrait-preview--with-content",
      "portrait-preview--no-content"
    );
    setErrorsState((state) => {
      return {
        ...state,
        ["physicalStoreUrl"]: {
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
  const imagePreview = document.getElementById("physical-store-preview");
  imagePreview.src = URL.createObjectURL(file);
  imagePreview.classList.replace(
    "portrait-preview--no-content",
    "portrait-preview--with-content"
  );
  setErrorsState((state) => {
    return {
      ...state,
      ["physicalStoreUrl"]: { hasErrors: false, message: "", hasContent: true },
    };
  });
};

export default section02Validator;
