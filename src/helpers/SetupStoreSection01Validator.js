import moment from "moment";
import validator from "validator";

//Initial values for the section #1 form of the store setup's.
export const section_01FormValues = {
  storeName: "",
  storeProductTags: "",
  slogan: "",
  description: "",
  startingDate: "",
  endingDate: "",
  address: "",
};

//Initial values for the section #1 errors of the store setup's.
export const section_01ErrorState = {
  storeName: { hasErrors: false, message: "" },
  storeProductTags: { hasErrors: false, message: "" },
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
    case "storeProductTags":
      handleStoreProductTagsValidation(value, setErrorsState);
      break;
    case "slogan":
      handleSloganCodeValidation(value, setErrorsState);
      break;
    case "description":
      handleDescriptionValidation(value, setErrorsState);
      break;
    case "startingDate":
      handleStartingDateValidation(value, setErrorsState);
      break;
    // case "endingDate":
    //   handleEndingDateValidation(value, setErrorsState);
    //   break;
    case "address":
      handleAddressValidation(value, setErrorsState);
      break;
    default:
      break;
  }
};

const handleStoreNameValidation = (value, setErrorsState) => {
  if (value.trim().length >= 8 && value.trim().length <= 30) {
    setErrorsState((state) => {
      return { ...state, ["storeName"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["storeName"]: {
          hasErrors: true,
          message: "El nombre de la tienda debe tener entre 8 y 30 caracteres",
        },
      };
    });
  }
};
const handleStoreProductTagsValidation = (value, setErrorsState) => {
  const cellphoneRegex = new RegExp(
    "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$"
  );
  if (cellphoneRegex.test(value)) {
    setErrorsState((state) => {
      return { ...state, ["cellphone"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["cellphone"]: {
          hasErrors: true,
          message:
            "El número telefónico '" +
            value +
            "' es inválido, intente con otro número.",
        },
      };
    });
  }
};
const handleSloganCodeValidation = (value, setErrorsState) => {
  if (validator.isPostalCode(value, "any")) {
    setErrorsState((state) => {
      return { ...state, ["postalCode"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["postalCode"]: {
          hasErrors: true,
          message:
            "El código postal '" +
            value +
            "' es inválido, intente con otro valor.",
        },
      };
    });
  }
};
const handleDescriptionValidation = (value, setErrorsState) => {
  const phoneRegex = new RegExp(
    "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$"
  );
  if (phoneRegex.test(value)) {
    setErrorsState((state) => {
      return { ...state, ["phone"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["phone"]: {
          hasErrors: true,
          message:
            "El número telefónico '" +
            value +
            "' es inválido, intente con otro número.",
        },
      };
    });
  }
};
const handleStartingDateValidation = (value, setErrorsState) => {
  if (value.trim().length >= 10) {
    setErrorsState((state) => {
      return { ...state, ["address"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["address"]: {
          hasErrors: true,
          message:
            "La ocupación '" +
            value +
            "' es inválida, intente con otra ocupación.",
        },
      };
    });
  }
};
const handleAddressValidation = (value, setErrorsState) => {
  console.log(value);
  const dateOfBirth = moment(value);
  const now = moment();
  const yearsDiff = now.toObject().years - dateOfBirth.toObject().years;
  if (dateOfBirth.isAfter(now)) {
    setErrorsState((state) => {
      return {
        ...state,
        ["dateOfBirth"]: {
          hasErrors: true,
          message:
            "La fecha ingresada está en el futuro, por favor ingresa una fecha válida.",
        },
      };
    });
  } else if (yearsDiff > 120) {
    setErrorsState((state) => {
      return {
        ...state,
        ["dateOfBirth"]: {
          hasErrors: true,
          message:
            "La fecha ingresada corresponde a una persona de más de 120 años, por favor ingresa una fecha válida.",
        },
      };
    });
  } else if (yearsDiff < 14 && yearsDiff < 14 && yearsDiff >= 0) {
    setErrorsState((state) => {
      return {
        ...state,
        ["dateOfBirth"]: {
          hasErrors: true,
          message:
            "Error: Lo sentimos, debes ser mayor de 14 años para poder tener una cuenta, al continuar aceptas estar bajo la supervisión de un adulto.",
        },
      };
    });
  } else {
    setErrorsState((state) => {
      return { ...state, ["dateOfBirth"]: { hasErrors: false, message: "" } };
    });
  }
};

export default section01Validator;
