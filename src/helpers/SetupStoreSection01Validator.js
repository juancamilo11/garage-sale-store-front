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
  console.log(value);
  const startingDate = moment(value);
  const now = moment();

  if (startingDate.isBefore(now)) {
    setErrorsState((state) => {
      return {
        ...state,
        ["startingDate"]: {
          hasErrors: true,
          message:
            "La fecha ingresada para el inicio de la tienda está en el pasado, por favor ingresa una fecha válida.",
        },
      };
    });
  } else if (startingDate.isAfter(now.add(3, "month"))) {
    setErrorsState((state) => {
      return {
        ...state,
        ["startingDate"]: {
          hasErrors: true,
          message:
            "Sólo se pueden ingresar ventas de garaje dentro de los próximos 90 días",
        },
      };
    });
  } else {
    setErrorsState((state) => {
      return { ...state, ["startingDate"]: { hasErrors: false, message: "" } };
    });
  }
};

const handleAddressValidation = (value, setErrorsState) => {
  console.log(value);
  const startingDate = moment(value);
  const now = moment();
  const monthsDiff = now.toObject().years - startingDate.toObject().years;
  if (startingDate.isAfter(now)) {
    setErrorsState((state) => {
      return {
        ...state,
        ["startingDate"]: {
          hasErrors: true,
          message:
            "La fecha ingresada está en el futuro, por favor ingresa una fecha válida.",
        },
      };
    });
  } else if (monthsDiff > 120) {
    setErrorsState((state) => {
      return {
        ...state,
        ["startingDate"]: {
          hasErrors: true,
          message:
            "La fecha ingresada corresponde a una persona de más de 120 años, por favor ingresa una fecha válida.",
        },
      };
    });
  } else if (monthsDiff < 14 && monthsDiff < 14 && monthsDiff >= 0) {
    setErrorsState((state) => {
      return {
        ...state,
        ["startingDate"]: {
          hasErrors: true,
          message:
            "Error: Lo sentimos, debes ser mayor de 14 años para poder tener una cuenta, al continuar aceptas estar bajo la supervisión de un adulto.",
        },
      };
    });
  } else {
    setErrorsState((state) => {
      return { ...state, ["startingDate"]: { hasErrors: false, message: "" } };
    });
  }
};

export default section01Validator;
