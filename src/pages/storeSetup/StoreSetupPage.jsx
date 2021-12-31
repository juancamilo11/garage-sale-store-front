import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ErrorFlag from "../../components/ErrorFlag";
import NavBarFormUserData from "../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../components/SectionTitle";
import userDataFormValidator from "../../helpers/userDataFormValidator";
import useForm from "../../hooks/useForm";
import latamCountries from "./../../helpers/latamCountries";

const initialErrorsState = {
  storeName: { hasErrors: false, message: "" },
  storeProductTags: { hasErrors: false, message: "" },
  slogan: { hasErrors: false, message: "" },
  description: { hasErrors: false, message: "" },
  startingDate: { hasErrors: false, message: "" },
  endingDate: { hasErrors: false, message: "" },
  address: { hasErrors: false, message: "" },
};

const UserDataForm = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const initialFormValues = {
    storeName: "",
    storeProductTags: "",
    slogan: "",
    description: "",
    startingDate: "",
    endingDate: "",
    address: "",
  };

  const [formValues, handleInputChange, resetForm] = useForm(initialFormValues);

  const {
    name,
    occupation,
    cellphone,
    email,
    postalCode,
    countryCode,
    phone,
    address,
    dateOfBirth,
    registerDate,
  } = formValues;

  const [errorsState, setErrorsState] = useState(initialErrorsState);

  const handleInputValidation = (e) => {
    handleInputChange(e);
    userDataFormValidator(e, setErrorsState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const errorReport = userDataFormValidator(formValues);
    // if (!errorReport.hasErrors()) {
    //   console.log("Los datos han sido actualizados exitosamente.");
    // } else {
    //   //Se muestra un mensaje de error con sweetalert o con toastify
    // }
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(initialFormValues);
    setErrorsState(initialErrorsState);
  };

  return (
    <div className="user-form-data__main-container">
      <NavBarFormUserData />

      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Creación de una nueva venta de garaje" />
      </div>

      <h2 className="store-setup__section-enum">
        1. Parámetros descriptivos de la tienda
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="user-form-data__form-container">
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                Nombre
              </label>
              <input
                type="text"
                readOnly
                name="name"
                id="name"
                value={name}
                className="user-form-data__input"
                autoComplete="off"
                readOnly
              />
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="occupation"
                className="user-form-data__input-label"
              >
                Occupation
              </label>
              <input
                type="text"
                name="occupation"
                id="occupation"
                value={occupation}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.occupation.hasErrors && (
                <ErrorFlag
                  message={errorsState.occupation.message}
                  width="93%"
                />
              )}
            </div>

            <div className="user-form-data__input-container">
              <label
                htmlFor="cellphone"
                className="user-form-data__input-label"
              >
                Teléfono
              </label>
              <input
                type="text"
                name="cellphone"
                id="cellphone"
                value={cellphone}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.cellphone.hasErrors && (
                <ErrorFlag
                  message={errorsState.cellphone.message}
                  width="93%"
                />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="email" className="user-form-data__input-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className="user-form-data__input"
                autoComplete="off"
                readOnly
              />
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="postalCode"
                className="user-form-data__input-label"
              >
                Código Postal
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={postalCode}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.postalCode.hasErrors && (
                <ErrorFlag
                  message={errorsState.postalCode.message}
                  width="93%"
                />
              )}
            </div>
          </div>
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label
                htmlFor="countryCode"
                className="user-form-data__input-label"
              >
                País
              </label>
              <select
                type="select"
                name="countryCode"
                id="countryCode"
                value={countryCode}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              >
                <option value={latamCountries[0].code}>
                  {latamCountries[0].name}
                </option>
                <optgroup label="Norteamérica">
                  {latamCountries
                    .filter((country) => country.region === "North America")
                    .map((country) => (
                      <option value={country.code}>{country.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Centroamérica">
                  {latamCountries
                    .filter((country) => country.region === "Central America")
                    .map((country) => (
                      <option value={country.code}>{country.name}</option>
                    ))}
                </optgroup>
                <optgroup label="Suramérica">
                  {latamCountries
                    .filter((country) => country.region === "South America")
                    .map((country) => (
                      <option value={country.code}>{country.name}</option>
                    ))}
                </optgroup>
                <optgroup label="El Caribe">
                  {latamCountries
                    .filter((country) => country.region === "Caribean")
                    .map((country) => (
                      <option value={country.code}>{country.name}</option>
                    ))}
                </optgroup>
              </select>
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.countryCode.hasErrors && (
                <ErrorFlag
                  message={errorsState.countryCode.message}
                  width="93%"
                />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="phone" className="user-form-data__input-label">
                Celular
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.phone.hasErrors && (
                <ErrorFlag message={errorsState.phone.message} width="93%" />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="address" className="user-form-data__input-label">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.address.hasErrors && (
                <ErrorFlag message={errorsState.address.message} width="93%" />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="dateOfBirth"
                className="user-form-data__input-label"
              >
                F. de Nacimiento
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.dateOfBirth.hasErrors && (
                <ErrorFlag
                  message={errorsState.dateOfBirth.message}
                  width="93%"
                />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="registerDate"
                className="user-form-data__input-label"
              >
                F.de registro
              </label>
              <input
                type="text"
                name="registerDate"
                id="registerDate"
                value={registerDate}
                className="user-form-data__input"
                autoComplete="off"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="user-form-data__centered-container">
          <div className="user-form-data__buttons-container">
            <button className="user-form-data__button-update" type="submit">
              Confirmar cambios
            </button>
            <button
              className="user-form-data__button-update"
              onClick={handleResetForm}
            >
              Resetear los datos
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;
