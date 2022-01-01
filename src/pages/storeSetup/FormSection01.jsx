import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import Section01Validator from "../../helpers/SetupStoreSection01Validator";

import { section_01FormValues } from "./../../helpers/SetupStoreSection01Validator";
import { section_01ErrorState } from "./../../helpers/SetupStoreSection01Validator";

import { section_02FormValues } from "./../../helpers/SetupStoreSection02Validator";
import { section_02ErrorState } from "./../../helpers/SetupStoreSection02Validator";

import { section_03FormValues } from "./../../helpers/SetupStoreSection03Validator";
import { section_03ErrorState } from "./../../helpers/SetupStoreSection03Validator";

import storeSetupReducer from "./../../reducers/storeSetupReducer";
import useForm from "../../hooks/useForm";

const FormSection01 = ({ formChecking, setFormsChecking }) => {
  const [formValues, handleInputChange, resetForm] =
    useForm(section_01FormValues);

  const [errorsState, setErrorsState] = useState(section_01ErrorState);

  const [storeSetupState, dispatch] = useReducer(storeSetupReducer);

  const {
    storeName,
    storeProductTags,
    slogan,
    description,
    startingDate,
    endingDate,
    address,
  } = formValues;

  const handleInputValidation = (e) => {
    handleInputChange(e);
    Section01Validator(e, setErrorsState);
  };

  const handleFormSection_01Submit = (e) => {
    e.preventDefault();
    // const errorReport = Section01Validator(formValues);
    // if (!errorReport.hasErrors()) {
    //   console.log("Los datos han sido actualizados exitosamente.");
    // } else {
    //   //Se muestra un mensaje de error con sweetalert o con toastify
    // }
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(section_01FormValues);
    setErrorsState(section_01ErrorState);
  };

  return (
    <div>
      <h2 className="store-setup__section-enum">
        1. Parámetros descriptivos de la tienda
      </h2>
      <form onSubmit={handleFormSection_01Submit}>
        <div className="store-setup__form-container">
          <div className="store-setup__inputs-container">
            <div className="store-setup__input-container">
              <label htmlFor="storeName" className="store-setup__input-label">
                Nombre de la tienda
              </label>
              <input
                type="text"
                name="storeName"
                id="storeName"
                className="store-setup__input"
                autoComplete="off"
                value={storeName}
                onChange={handleInputValidation}
              />
            </div>
            <div className="store-setup__error-flag">
              {errorsState.storeName.hasErrors && (
                <ErrorFlag
                  message={errorsState.storeName.message}
                  width="93%"
                />
              )}
            </div>

            <div className="store-setup__input-container">
              <label htmlFor="slogan" className="store-setup__input-label">
                Slogan
              </label>
              <textarea
                style={{ resize: "none" }}
                type="text"
                name="slogan"
                id="slogan"
                value={slogan}
                onChange={handleInputValidation}
                className="store-setup__input store-setup__textarea"
                autoComplete="off"
              />
            </div>
            <div className="store-setup__error-flag">
              {errorsState.slogan.hasErrors && (
                <ErrorFlag message={errorsState.slogan.message} width="93%" />
              )}
            </div>

            <div className="store-setup__input-container">
              <label
                htmlFor="storeProductTags"
                className="store-setup__input-label"
              >
                ¿Qué venderás?
              </label>
              <input
                type="text"
                name="storeProductTags"
                id="storeProductTags"
                value={storeProductTags}
                onChange={handleInputValidation}
                className="store-setup__input"
                autoComplete="off"
              />
            </div>
            <div className="store-setup__error-flag">
              {errorsState.storeProductTags.hasErrors && (
                <ErrorFlag
                  message={errorsState.storeProductTags.message}
                  width="93%"
                />
              )}
            </div>
          </div>
          <div className="store-setup__inputs-container">
            <div className="store-setup__input-container">
              <label htmlFor="description" className="store-setup__input-label">
                Descripción
              </label>
              <textarea
                style={{ resize: "none" }}
                type="text"
                name="description"
                id="description"
                value={description}
                className="store-setup__input"
                autoComplete="off"
                onChange={handleInputValidation}
              />
            </div>
            <div className="store-setup__error-flag">
              {errorsState.description.hasErrors && (
                <ErrorFlag
                  message={errorsState.description.message}
                  width="93%"
                />
              )}
            </div>

            <div className="store-setup__input-container">
              <label
                htmlFor="startingDate"
                className="store-setup__input-label"
              >
                Fecha de apertura
              </label>
              <input
                type="date"
                name="startingDate"
                id="startingDate"
                value={startingDate}
                onChange={handleInputValidation}
                className="store-setup__input store-setup__input-date"
                autoComplete="off"
              />
              <label
                htmlFor="endingDate"
                style={{ margin: "0px 5px 0px 10px", width: "7%" }}
              >
                Hasta
              </label>
              <input
                type="date"
                name="endingDate"
                id="endingDate"
                value={endingDate}
                readOnly
                className="store-setup__input store-setup__input-date"
                autoComplete="off"
              />
            </div>
            <div className="store-setup__error-flag">
              {errorsState.startingDate.hasErrors && (
                <ErrorFlag
                  message={errorsState.startingDate.message}
                  width="93%"
                />
              )}
            </div>

            <div className="store-setup__input-container">
              <label className="store-setup__input-label">
                Dirección física
              </label>
              <button
                type="select"
                name="address"
                id="address"
                value={address}
                onChange={handleInputValidation}
                className="store-setup__input"
                autoComplete="off"
              >
                Obtener tu dirección actual
              </button>
            </div>
            <div className="store-setup__error-flag">
              {errorsState.address.hasErrors && (
                <ErrorFlag message={errorsState.address.message} width="93%" />
              )}
            </div>
          </div>
        </div>
        <div className="store-setup__centered-container">
          <div className="store-setup__buttons-container">
            <button className="store-setup__button-update" type="submit">
              Confirmar cambios
            </button>
            <button
              className="store-setup__button-update"
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

export default FormSection01;
