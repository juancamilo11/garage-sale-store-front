import React from "react";
import { useState } from "react";
import ErrorFlag from "../../components/gui/ErrorFlag";
import NavBarFormUserData from "../../components/gui/navbar/NavBarFormUserData";
import SectionTitle from "../../components/gui/SectionTitle";
import userDataFormValidator from "../../helpers/userDataFormValidator";
import useForm from "../../hooks/useForm";
import latamCountries from "./../../helpers/latamCountries";

const UserDataForm = () => {
  const [formValues, handleInputChange, resetForm] = useForm({
    name: "",
    occupation: "",
    cellphone: "",
    email: "",
    postalCode: "",
    countryCode: "",
    address: "",
    dateOfBirth: "",
    registerDate: "",
  });

  const {
    name,
    occupation,
    cellphone,
    email,
    postalCode,
    countryCode,
    address,
    dateOfBirth,
    registerDate,
  } = formValues;

  const [errorsState, setErrorsState] = useState({
    name: { hasErrors: false, message: "" },
    occupation: { hasErrors: false, message: "" },
    cellphone: { hasErrors: false, message: "" },
    email: { hasErrors: false, message: "" },
    postalCode: { hasErrors: false, message: "" },
    countryCode: { hasErrors: false, message: "" },
    address: { hasErrors: false, message: "" },
    dateOfBirth: { hasErrors: false, message: "" },
    registerDate: { hasErrors: false, message: "" },
  });

  const handleInputValidation = (e) => {
    handleInputChange(e);
    userDataFormValidator(e, setErrorsState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorReport = userDataFormValidator(formValues);
    if (!errorReport.hasErrors()) {
      console.log("Los datos han sido actualizados exitosamente.");
    } else {
      //Se muestra un mensaje de error con sweetalert o con toastify
    }
  };
  return (
    <div className="user-form-data__main-container">
      <NavBarFormUserData />
      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Edición de datos personales" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="user-form-data__form-container">
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                Nombre
              </label>
              <input
                autoFocus="true"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.name.hasErrors && (
                <ErrorFlag message={errorsState.name.message} width="93%" />
              )}
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
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.email.hasErrors && (
                <ErrorFlag message={errorsState.email.message} width="93%" />
              )}
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
              <label htmlFor="country" className="user-form-data__input-label">
                País
              </label>
              <select
                type="select"
                name="country"
                id="country"
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
                type="date"
                name="registerDate"
                id="registerDate"
                value={registerDate}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.registerDate.hasErrors && (
                <ErrorFlag
                  message={errorsState.registerDate.message}
                  width="93%"
                />
              )}
            </div>
          </div>
        </div>
        <div className="user-form-data__centered-container">
          <button className="user-form-data__button-update" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;
