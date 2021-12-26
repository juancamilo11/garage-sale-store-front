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
    case "cellphone":
      handleCellphoneValidation(value, setErrorsState);
      break;
    case "email":
      handleEmailValidation(value, setErrorsState);
      break;
    case "postalCode":
      handlePostalCodeValidation(value, setErrorsState);
      break;
    case "countryCode":
      handleCountryCodeValidation(value, setErrorsState);
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
const handleCellphoneValidation = (value, setErrorsState) => {
  const cellphoneRegex = new RegExp("^[A-Z a-z]{1,}[.]{0,1}[A-Z a-z]{3,50}$");
};
const handleEmailValidation = (value, setErrorsState) => {};
const handlePostalCodeValidation = (value, setErrorsState) => {};
const handleCountryCodeValidation = (value, setErrorsState) => {};
const handleAddressValidation = (value, setErrorsState) => {};
const handleDateOfBirthValidation = (value, setErrorsState) => {};
const handleRegisterDateValidation = (value, setErrorsState) => {};

export default userDataFormValidator;
