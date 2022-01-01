import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import Section01Validator from "../../helpers/SetupStoreSection01Validator";
import section_01InitialFormValues from "../../helpers/SetupStoreSection01Validator";
import section_01ErrorState from "../../helpers/SetupStoreSection01Validator";

import useForm from "../../hooks/useForm";

const FormSection01 = ({ formStateSection01, setGlobalFormStates }) => {
  const [formValues, handleInputChange, resetForm] = useForm(
    section_01InitialFormValues
  );

  const [errorsState, setErrorsState] = useState(section_01ErrorState);

  //   const [state, dispatch] = useReducer(reducer, initialState, init);

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
    resetForm(section_01InitialFormValues);
    setErrorsState(section_01ErrorState);
  };

  return (
    <div>
      <h2 className="store-setup__section-enum">
        1. Parámetros descriptivos de la tienda
      </h2>
      <form onSubmit={handleFormSection_01Submit}>
        <div className="user-form-data__form-container">
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label
                htmlFor="storeName"
                className="user-form-data__input-label"
              >
                Nombre de la tienda
              </label>
              <input
                type="text"
                name="storeName"
                id="storeName"
                className="user-form-data__input"
                autoComplete="off"
                value={storeName}
                onChange={handleInputValidation}
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.storeName.hasErrors && (
                <ErrorFlag
                  message={errorsState.storeName.message}
                  width="93%"
                />
              )}
            </div>

            <div className="user-form-data__input-container">
              <label htmlFor="slogan" className="user-form-data__input-label">
                Slogan
              </label>
              <textarea
                style={{ resize: "none" }}
                type="text"
                name="slogan"
                id="slogan"
                value={slogan}
                onChange={handleInputValidation}
                className="user-form-data__input user-form-data__textarea"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.slogan.hasErrors && (
                <ErrorFlag message={errorsState.slogan.message} width="93%" />
              )}
            </div>

            <div className="user-form-data__input-container">
              <label
                htmlFor="storeProductTags"
                className="user-form-data__input-label"
              >
                ¿Qué venderás?
              </label>
              <input
                type="text"
                name="storeProductTags"
                id="storeProductTags"
                value={storeProductTags}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.storeProductTags.hasErrors && (
                <ErrorFlag
                  message={errorsState.storeProductTags.message}
                  width="93%"
                />
              )}
            </div>
          </div>
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label
                htmlFor="description"
                className="user-form-data__input-label"
              >
                Descripción
              </label>
              <textarea
                style={{ resize: "none" }}
                type="text"
                name="description"
                id="description"
                value={description}
                className="user-form-data__input"
                autoComplete="off"
                onChange={handleInputValidation}
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.description.hasErrors && (
                <ErrorFlag
                  message={errorsState.description.message}
                  width="93%"
                />
              )}
            </div>

            <div className="user-form-data__input-container">
              <label
                htmlFor="startingDate"
                className="user-form-data__input-label"
              >
                Fecha de apertura
              </label>
              <input
                type="date"
                name="startingDate"
                id="startingDate"
                value={startingDate}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
              <label
                htmlFor="endingDate"
                className="user-form-data__input-label"
              >
                Hasta
              </label>
              <input
                type="date"
                name="endingDate"
                id="endingDate"
                value={endingDate}
                readOnly
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.startingDate.hasErrors && (
                <ErrorFlag
                  message={errorsState.startingDate.message}
                  width="93%"
                />
              )}
            </div>

            <div className="user-form-data__input-container">
              <label className="user-form-data__input-label">
                Dirección física
              </label>
              <button
                type="select"
                name="address"
                id="address"
                value={address}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              >
                Obtener tu dirección actual
              </button>
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.address.hasErrors && (
                <ErrorFlag message={errorsState.address.message} width="93%" />
              )}
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

export default FormSection01;
