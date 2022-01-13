import moment from "moment";
import validator from "validator";

//Initial values for the section #1 form of the store setup.
export const section_01FormValues = {
  storeName: "",
  tag: "",
  slogan: "",
  description: "",
  startingDate: "",
  endingDate: "",
  address: "",
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
    // case "endingDate":
    //   handleEndingDateValidation(value, setErrorsState);
    //   break;
    // case "address":
    //   handleAddressValidation(value, setErrorsState);
    //   break;
    default:
      break;
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
};

export default section01Validator;
