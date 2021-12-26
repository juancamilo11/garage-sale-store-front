import moment from "moment";
import validator from "validator";

const userDataFormValidator = (e, setErrorsState) => {
  const { name: fieldName, value } = e.target;
  console.log(fieldName + " " + value);
  if (value === "" && fieldName !== "countryCode") {
    setErrorsState((state) => {
      return { ...state, [fieldName]: { hasErrors: false, message: "" } };
    });
    return;
  }
  if (fieldName === "countryCode" && value === "NN") {
    console.log("Entrando por aquí");
    setErrorsState((state) => {
      return { ...state, [fieldName]: { hasErrors: false, message: "" } };
    });
    return;
  }

  switch (fieldName) {
    case "occupation":
      handleOccupationValidation(value, setErrorsState);
      break;
    case "cellphone":
      handleCellphoneValidation(value, setErrorsState);
      break;
    case "postalCode":
      handlePostalCodeValidation(value, setErrorsState);
      break;
    case "phone":
      handlePhoneValidation(value, setErrorsState);
      break;
    case "address":
      handleAddressValidation(value, setErrorsState);
      break;
    case "dateOfBirth":
      handleDateOfBirthValidation(value, setErrorsState);
      break;
    default:
      break;
  }
};

const handleOccupationValidation = (value, setErrorsState) => {
  if (value.trim().length > 3) {
    setErrorsState((state) => {
      return { ...state, ["occupation"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["occupation"]: {
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

const handleCellphoneValidation = (value, setErrorsState) => {
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

const handlePostalCodeValidation = (value, setErrorsState) => {
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

const handlePhoneValidation = (value, setErrorsState) => {
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

const handleAddressValidation = (value, setErrorsState) => {
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

const handleDateOfBirthValidation = (value, setErrorsState) => {
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

export default userDataFormValidator;
