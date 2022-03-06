import moment from "moment";
import { v4 as uuidv4 } from "uuid";

//Initial values for the section #1 form of the store setup.
export const section_01FormValues = {
  storeId: uuidv4(),
  storeName: "nombre de la tienda",
  tag: "",
  slogan: "Slogan de la tienda nueva",
  description: "Descripcion de la tienda nueva, prueba",
  startingDate: "03-02-2022",
  endingDate: "04-02-2022",
  address: { latitude: 0, longitude: 0 },
  seller: {},
};

//Initial values for the section #1 errors of the store setup.
export const section_01ErrorState = {
  storeName: { hasErrors: false, message: "" },
  tag: { hasErrors: false, message: "" },
  slogan: { hasErrors: false, message: "" },
  description: { hasErrors: false, message: "" },
  startingDate: { hasErrors: false, message: "" },
  endingDate: { hasErrors: false, message: "" },
  address: { hasErrors: false, message: "" },
};

const section01Validator = (e, setErrorsState) => {
  const { name: fieldName, value } = e.target;
  switch (fieldName) {
    case "storeName":
      handleStoreNameValidation(value, setErrorsState);
      break;
    case "slogan":
      handleSloganCodeValidation(value, setErrorsState);
      break;
    case "description":
      handleDescriptionValidation(value, setErrorsState);
      break;
    case "tag":
      handleTagValidation(value, setErrorsState);
      break;
    case "startingDate":
      handleStartingDateValidation(value, setErrorsState);
      break;
    case "endingDate":
      handleEndingDateValidation(value, setErrorsState);
      break;
    // case "address":
    //   handleAddressValidation(value, setErrorsState);
    //   break;
    default:
      break;
  }
};

export const isTheTagAlreadyDefined = (tagName, tagsList, setErrorsState) => {
  const arrFiltered = tagsList.filter(
    (tag) => tag.trim().toLowerCase() !== tagName.trim().toLowerCase()
  );
  console.log(arrFiltered);
  console.log(tagsList);
  if (arrFiltered.length !== tagsList.length) {
    setErrorsState((state) => {
      return {
        ...state,
        ["tag"]: {
          hasErrors: true,
          message: `El nombre de la etiqueta '${tagName}' ya ha sido ingresado, intente con otro.`,
        },
      };
    });
    return true;
  }
};

const setErrorStateForField = (
  setErrorsState,
  fieldName,
  hasErrors,
  message
) => {
  setErrorsState((state) => {
    return {
      ...state,
      [`${fieldName}`]: {
        hasErrors,
        message,
      },
    };
  });
};

const handleStoreNameValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 8 && value.trim().length <= 30) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "storeName", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "storeName",
    true,
    "El nombre de la tienda debe tener entre 8 y 30 caracteres."
  );
};

const handleSloganCodeValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 10 && value.trim().length <= 100) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "slogan", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "slogan",
    true,
    "El slogan de la tienda debe tener entre 10 y 100 caracteres."
  );
};

const handleDescriptionValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 20 && value.trim().length <= 200) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "description", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "description",
    true,
    "La descripción de la tienda debe tener entre 10 y 200 caracteres."
  );
};

const handleTagValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 3 && value.trim().length <= 20) ||
    value.trim().length === 0
  ) {
    setErrorStateForField(setErrorsState, "tag", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "tag",
    true,
    "El nombre de la etiqueta de un producto debe tener entre 3 y 20 caracteres."
  );
};

const handleStartingDateValidation = (value, setErrorsState) => {
  console.log(value);
  const startingDate = moment(value);
  const now = moment();

  if (startingDate.isBefore(now)) {
    setErrorStateForField(
      setErrorsState,
      "startingDate",
      true,
      "La fecha ingresada para el inicio de la tienda está en el pasado, por favor ingresa una fecha válida."
    );
    return;
  }
  if (startingDate.isAfter(now.add(3, "month"))) {
    setErrorStateForField(
      setErrorsState,
      "startingDate",
      true,
      "Sólo se pueden ingresar ventas de garaje dentro de los próximos 90 días"
    );
    return;
  }
  setErrorStateForField(setErrorsState, "startingDate", false, "");
  // const endingDate = document.getElementsByName("endingDate");
  // endingDate.value = moment( "").add("15", "days");
  // console.log(endingDate);
  // console.log(moment(value, "YYYY-MM-DD").add(15, "days").toArray());
  const newDate = moment(value).add(15, "days").toObject();
  document.getElementById("endingDate").value =
    newDate.years + "-" + (newDate.months + 1) + "-" + newDate.days;
};

const handleEndingDateValidation = (value, setErrorsState) => {
  console.log(value);
  const endingDate = moment(value);
  const startingDate = moment(document.getElementById("startingDate").value);

  if (endingDate.isBefore(startingDate)) {
    setErrorStateForField(
      setErrorsState,
      "endingDate",
      true,
      "La fecha ingresada para el cierre de la tienda es inválida, por favor ingresa una fecha válida."
    );
    return;
  }
  if (endingDate.isAfter(startingDate.add(1, "month"))) {
    setErrorStateForField(
      setErrorsState,
      "endingDate",
      true,
      "Una venta de garaje sólo puede durar como máximo 30 días."
    );
    return;
  }
  setErrorStateForField(setErrorsState, "endingDate", false, "");
};

export const form01SubmitValidation = (formValues, tagsList, errorsState) => {
  const { storeName, slogan, description, startingDate, endingDate } =
    formValues;

  let errorsReport = { hasErrors: false };

  if (storeName === "" || errorsState.storeName.hasErrors) {
    errorsReport = {
      ...errorsReport,
      storeName: "Has dejado el nombre de la tienda vacío",
      hasErrors: true,
    };
  }
  if (slogan === "" || errorsState.slogan.hasErrors) {
    errorsReport = {
      ...errorsReport,
      slogan: "Has dejado el slogan de la tienda vacío",
      hasErrors: true,
    };
  }
  if (errorsState.tag.hasErrors) {
    errorsReport = {
      ...errorsReport,
      tag: "La etiqueta que estás ingresando es inválida",
      hasErrors: true,
    };
  }
  if (description === "" || errorsState.description.hasErrors) {
    errorsReport = {
      ...errorsReport,
      description: "La etiqueta que estás ingresando es inválida",
      hasErrors: true,
    };
  }
  if (!moment(startingDate).isValid() || errorsState.startingDate.hasErrors) {
    errorsReport = {
      ...errorsReport,
      startingDate: "La fecha de apertura de la tienda es inválida",
      hasErrors: true,
    };
  }
  if (!moment(endingDate).isValid() || errorsState.endingDate.hasErrors) {
    errorsReport = {
      ...errorsReport,
      endingDate: "La fecha de cierre de la tienda es inválida",
      hasErrors: true,
    };
  }
  if (tagsList.length < 3) {
    errorsReport = {
      ...errorsReport,
      tagsList: "Debes ingresar como mínimo 3 etiquetas para la tienda",
      hasErrors: true,
    };
  }
  return errorsReport;
};

export default section01Validator;
