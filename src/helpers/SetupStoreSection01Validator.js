import moment from "moment";
import validator from "validator";

//Initial values for the section #1 form of the store setup's.
export const section_01FormValues = {
  storeName: "",
  tag: "",
  slogan: "",
  description: "",
  startingDate: "",
  endingDate: "",
  address: "",
};

//Initial values for the section #1 errors of the store setup's.
export const section_01ErrorState = {
  storeName: { hasErrors: false, message: "", hasContent: false },
  tag: { hasErrors: false, message: "", hasContent: false },
  slogan: { hasErrors: false, message: "", hasContent: false },
  description: { hasErrors: false, message: "", hasContent: false },
  startingDate: { hasErrors: false, message: "", hasContent: false },
  endingDate: { hasErrors: false, message: "", hasContent: false },
  address: { hasErrors: false, message: "", hasContent: false },
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
    case "address":
      handleAddressValidation(value, setErrorsState);
      break;
    default:
      break;
  }
};

const handleStoreNameValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 8 && value.trim().length <= 30) ||
    value.trim() === ""
  ) {
    setErrorsState((state) => {
      return { ...state, ["storeName"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["storeName"]: {
          hasErrors: true,
          message: "El nombre de la tienda debe tener entre 8 y 30 caracteres.",
        },
      };
    });
  }
};

const handleSloganCodeValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 10 && value.trim().length <= 100) ||
    value.trim() === ""
  ) {
    setErrorsState((state) => {
      return { ...state, ["slogan"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["slogan"]: {
          hasErrors: true,
          message:
            "El slogan de la tienda debe tener entre 10 y 100 caracteres.",
        },
      };
    });
  }
};

const handleDescriptionValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 20 && value.trim().length <= 200) ||
    value.trim() === ""
  ) {
    setErrorsState((state) => {
      return { ...state, ["description"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["description"]: {
          hasErrors: true,
          message:
            "La descripción de la tienda debe tener entre 10 y 200 caracteres.",
        },
      };
    });
  }
};

const handleTagValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 3 && value.trim().length <= 20) ||
    value.trim().length === 0
  ) {
    setErrorsState((state) => {
      return {
        ...state,
        ["tag"]: { hasErrors: false, message: "" },
      };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["tag"]: {
          hasErrors: true,
          message:
            "El nombre de la etiqueta de un producto debe tener entre 3 y 20 caracteres.",
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
