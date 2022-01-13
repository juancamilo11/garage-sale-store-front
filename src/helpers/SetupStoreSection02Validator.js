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

const setErrorStateForField = (
  setErrorsState,
  fieldName,
  hasErrors,
  message,
  hasContent
) => {
  setErrorStateForField(setErrorsState);
  setErrorsState((state) => {
    return {
      ...state,
      [`${fieldName}`]: {
        hasErrors,
        message,
        hasContent,
      },
    };
  });
};

export const resetImagesFromView = (setErrorsState) => {
  new Array(3).fill(0).forEach((num, index) => {
    const imagePreview = document.getElementById(
      `${"previsualization-preview" + (index + 1)}`
    );
    imagePreview.setAttribute("src", "/assets/common/emptyImage.png");
    imagePreview.classList.replace(
      "portrait-preview--with-content",
      "portrait-preview--no-content"
    );
  });
  setErrorsState((state) => section_02ErrorState);
};

const handlePortraitUrlValidation = (file, setErrorsState) => {
  if (!file?.type.startsWith("image")) {
    const imagePreview = document.getElementById("portrait-preview");
    imagePreview.setAttribute("src", "/assets/common/emptyImage.png");
    imagePreview.classList.replace(
      "portrait-preview--with-content",
      "portrait-preview--no-content"
    );
    setErrorStateForField(
      setErrorsState,
      "portraitUrl",
      true,
      "Error: El archivo ingresado no es una imágen, por favor suba un archivo con formato correcto.",
      false
    );
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
  setErrorStateForField(setErrorsState, "portraitUrl", false, "", true);
};

//Todos las imágenes se van a subir al mismo tiempo
const handlePrevImagesUrlsValidation = (arrFiles, setErrorsState) => {
  if (arrFiles.length !== 3) {
    setErrorStateForField(
      setErrorsState,
      "prevImagesUrls",
      true,
      "Error: Ha ingresado una cantidad inválida de imágenes, se deben subir exactamente tres.",
      false
    );
    return;
  }
  //arrFiles es de tipo FileList, no deriva de Array (pero si es iterable), por ende
  //se debe generar un array para poder recorrer este objeto
  if (
    !new Array(3)
      .fill(0)
      .every((num, index) => arrFiles.item(index).type.startsWith("image"))
  ) {
    new Array(3).fill(0).forEach((num, index) => {
      const imagePreview = document.getElementById(
        `${"previsualization-preview" + (index + 1)}`
      );
      imagePreview.setAttribute("src", "/assets/common/emptyImage.png");
      imagePreview.classList.replace(
        "portrait-preview--with-content",
        "portrait-preview--no-content"
      );
    });
    setErrorStateForField(
      setErrorsState,
      "prevImagesUrls",
      true,
      "Error: Ha ingresado un archivo inválido, por favor ingrese solamente imágenes.",
      false
    );
    return;
  }

  //En este punto ya todo está bien validado

  //Enviar la imagen a cloudinary y en base a la peticion hacer lo siguiente.
  sendImageToCloudinary();

  new Array(3).fill(0).forEach((num, index) => {
    const imagePreview = document.getElementById(
      `${"previsualization-preview" + (index + 1)}`
    );
    imagePreview.src = URL.createObjectURL(arrFiles.item(index));
    imagePreview.classList.replace(
      "portrait-preview--no-content",
      "portrait-preview--with-content"
    );
  });
};

const handlePhysicalStoreUrlValidation = (file, setErrorsState) => {
  //Continuar con esto basándome de lo que ya se hizo en la imágen de portada
  if (!file?.type.startsWith("image")) {
    const imagePreview = document.getElementById("physical-store-preview");
    imagePreview.setAttribute("src", "/assets/common/emptyImage.png");
    imagePreview.classList.replace(
      "portrait-preview--with-content",
      "portrait-preview--no-content"
    );
    setErrorStateForField(
      setErrorsState,
      "physicalStoreUrl",
      true,
      "Error: El archivo ingresado no es una imágen, por favor suba un archivo con formato correcto.",
      false
    );
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
  setErrorStateForField(setErrorsState, "physicalStoreUrl", false, "", true);
};

export default section02Validator;
