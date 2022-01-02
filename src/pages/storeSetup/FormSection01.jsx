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
import ProductTagList from "../../components/storeSetup/ProductTagList";
import Swal from "sweetalert2";

const FormSection01 = ({ formChecking, setFormsChecking }) => {
  const [formValues, handleInputChange, resetForm] =
    useForm(section_01FormValues);

  const [tagsList, setTagsList] = useState([]);

  const [errorsState, setErrorsState] = useState(section_01ErrorState);

  const [storeSetupState, dispatch] = useReducer(storeSetupReducer);

  const {
    storeName,
    tag,
    slogan,
    description,
    startingDate,
    endingDate,
    address,
  } = formValues;

  const handleRequestLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        const event = { target: { name: "address", value: res } };
        handleInputValidation(event);
      },
      (err) => {
        const event = { target: { name: "address", value: err } };
        handleInputValidation(event);
        Swal.fire({
          title: "Posición física denegada",
          text: "Tenga presente que la nueva tienda no podrá ser ubicada mediante mapas.",
          icon: "warning",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    );
  };

  const handleAddNewTag = (e) => {
    const newTag = document.getElementById("tag").value;

    if (!errorsState.tag.hasErrors && newTag.trim() !== "") {
      setTagsList([...tagsList, newTag]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `La etiqueta '${newTag}' no se ha podido ingresar, intenta con otro valor.`,
        showConfirmButton: false,
        timer: 3500,
      });
    }
  };

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
            <div className="store-setup__error-flag mt-2 mb-4">
              {errorsState.storeName.hasErrors && (
                <ErrorFlag
                  message={errorsState.storeName.message}
                  width="100%"
                />
              )}
            </div>

            <div className="store-setup__input-container">
              <label htmlFor="slogan" className="store-setup__input-label">
                Slogan
              </label>
              <textarea
                style={{ resize: "vertical" }}
                type="text"
                name="slogan"
                id="slogan"
                value={slogan}
                onChange={handleInputValidation}
                className="store-setup__input store-setup__textarea-slogan"
                autoComplete="off"
              />
            </div>
            <div className="store-setup__error-flag">
              {errorsState.slogan.hasErrors && (
                <ErrorFlag message={errorsState.slogan.message} width="100%" />
              )}
            </div>

            <div className="store-setup__input-container">
              <label htmlFor="tag" className="store-setup__input-label">
                ¿Qué venderás?
              </label>
              <input
                type="text"
                name="tag"
                id="tag"
                value={tag}
                onChange={handleInputValidation}
                className="store-setup__input"
                autoComplete="off"
              />
              <button
                onClick={handleAddNewTag}
                className="store-setup__input btn btn-primary"
              >
                Ingresar
              </button>
            </div>
            <div className="store-setup__error-flag">
              {errorsState.tag.hasErrors && (
                <ErrorFlag message={errorsState.tag.message} width="100%" />
              )}
              <ProductTagList tags={tagsList} />
            </div>
          </div>
          <div className="store-setup__inputs-container">
            <div className="store-setup__input-container">
              <label htmlFor="description" className="store-setup__input-label">
                Descripción
              </label>
              <textarea
                style={{ resize: "vertical" }}
                type="text"
                name="description"
                id="description"
                value={description}
                className="store-setup__input store-setup__textarea-description"
                autoComplete="off"
                onChange={handleInputValidation}
              />
            </div>
            <div className="store-setup__error-flag">
              {errorsState.description.hasErrors && (
                <ErrorFlag
                  message={errorsState.description.message}
                  width="100%"
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
                className="store-setup__input-date-label"
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
                  width="100%"
                />
              )}
            </div>

            <div className="store-setup__input-container">
              <label className="store-setup__input-label">
                Dirección física
              </label>
              <button
                onClick={handleRequestLocation}
                className="store-setup__input btn btn-primary store-setup__input-address"
              >
                Obtener tu dirección actual
              </button>
            </div>
            <div className="store-setup__error-flag">
              {errorsState.address.hasErrors && (
                <ErrorFlag message={errorsState.address.message} width="100%" />
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
