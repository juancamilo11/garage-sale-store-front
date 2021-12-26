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
    case "name":
      handleNameValidation(value, setErrorsState);
      break;
    case "occupation":
      handleOccupationValidation(value, setErrorsState);
      break;
    case "cellphone":
      handleCellphoneValidation(value, setErrorsState);
      break;
    case "email":
      handleEmailValidation(value, setErrorsState);
      break;
    case "postalCode":
      handlePostalCodeValidation(value, setErrorsState);
      break;
    // case "countryCode":
    //   handleCountryCodeValidation(value, setErrorsState);
    //   break;
    case "phone":
      handlePhoneValidation(value, setErrorsState);
      break;
    case "address":
      handleAddressValidation(value, setErrorsState);
      break;
    case "dateOfBirth":
      handleDateOfBirthValidation(value, setErrorsState);
      break;
    case "registerDate":
      handleRegisterDateValidation(value, setErrorsState);
      break;
    default:
      break;
  }
};

const handleNameValidation = (value, setErrorsState) => {
  const nameRegex = new RegExp("^[A-Z a-z]{1,}[.]{0,1}[A-Z a-z]{3,50}$");

  if (nameRegex.test(value)) {
    setErrorsState((state) => {
      return { ...state, ["name"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["name"]: {
          hasErrors: true,
          message:
            "El nombre '" + value + "' es inválido, intente con otro nombre.",
        },
      };
    });
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
  const phoneRegex = new RegExp(
    "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$"
  );

  if (phoneRegex.test(value)) {
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

const handleEmailValidation = (value, setErrorsState) => {
  if (validator.isEmail(value)) {
    setErrorsState((state) => {
      return { ...state, ["email"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["email"]: {
          hasErrors: true,
          message:
            "El email telefónico '" +
            value +
            "' es inválido, intente con otro email.",
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

// const handleCountryCodeValidation = (value, setErrorsState) => {
//   //Utilizar la librería validator
// };

const handlePhoneValidation = (value, setErrorsState) => {
  const cellphoneRegex = new RegExp("^[A-Z a-z]{1,}[.]{0,1}[A-Z a-z]{3,50}$");
};

const handleAddressValidation = (value, setErrorsState) => {
  //Utilizar la librería validator
};

const handleDateOfBirthValidation = (value, setErrorsState) => {
  //Utilizar la librería validator
};

const handleRegisterDateValidation = (value, setErrorsState) => {
  //Utilizar la librería validator
};

export default userDataFormValidator;
