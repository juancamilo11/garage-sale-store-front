import React from "react";
import { useState } from "react";
import SectionTitle from "../../components/gui/SectionTitle";
import useForm from "../../hooks/useForm";
import latamCountries from "./../../helpers/latamCountries";

const UserDataForm = () => {
  const [formValues, handleInputChange, resetForm] = useForm({
    name: "",
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
    cellphone,
    email,
    postalCode,
    countryCode,
    address,
    dateOfBirth,
    registerDate,
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="user-form-data__main-container">
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
                onChange={handleInputChange}
                className="user-form-data__input"
                autoComplete="off"
              />
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
                onChange={handleInputChange}
                className="user-form-data__input"
                autoComplete="off"
              />
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
                onChange={handleInputChange}
                className="user-form-data__input"
                autoComplete="off"
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
                onChange={handleInputChange}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label htmlFor="country" className="user-form-data__input-label">
                País
              </label>
              <select
                type="select"
                name="country"
                id="country"
                value={countryCode}
                onChange={handleInputChange}
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
            <div className="user-form-data__input-container">
              <label htmlFor="address" className="user-form-data__input-label">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={handleInputChange}
                className="user-form-data__input"
                autoComplete="off"
              />
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
                onChange={handleInputChange}
                className="user-form-data__input"
                autoComplete="off"
              />
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
                onChange={handleInputChange}
                className="user-form-data__input"
                autoComplete="off"
              />
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
