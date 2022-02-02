import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import section01Validator, {
  form01SubmitValidation,
  isTheTagAlreadyDefined,
} from "../../helpers/storeSetupHelpers/SetupStoreSection01Validator";

import { section_01FormValues } from "../../helpers/storeSetupHelpers/SetupStoreSection01Validator";
import { section_01ErrorState } from "../../helpers/storeSetupHelpers/SetupStoreSection01Validator";

import useForm from "../../hooks/useForm";
import ProductTagList from "../../components/storeSetup/ProductTagList";
import {
  sweetalertForErrorsReportForm01StoreSetupBuilder,
  sweetalertForGenericSuccessBuilder,
  sweetalertForInputCurrentLocationForStoreSetupBuilder,
  sweetalertForInputTagAlreadyDefinedBuilder,
  sweetalertForInputTagErrorBuilder,
} from "../../helpers/SweetalertBuilder";
import storeSetupReducer from "../../reducers/storeSetupReducer";
import { form01ReadyObjectBuilder } from "../../helpers/storeSetupHelpers/formValuesToObjectBuilder/ObjectBuilderForCompletedForm";
import types from "../../types/types";

const FormSection01 = ({ setFormsChecking, storeSetupDispatch }) => {
  const [formValues, handleInputChange, resetForm] =
    useForm(section_01FormValues);

  const [tagsList, setTagsList] = useState([]);
  const [errorsState, setErrorsState] = useState(section_01ErrorState);

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
    sweetalertForInputCurrentLocationForStoreSetupBuilder(
      handleInputValidation
    );
  };

  const handleAddNewTag = (e) => {
    e.preventDefault();
    const tagInput = document.getElementById("tag");
    const newTag = tagInput.value.trim();
    const cleanEvent = { target: { name: "tag", value: "" } };

    if (newTag === "") return;

    if (errorsState.tag.hasErrors) {
      sweetalertForInputTagErrorBuilder(
        newTag,
        handleInputValidation,
        cleanEvent
      );
      return;
    }
    if (isTheTagAlreadyDefined(newTag, tagsList, setErrorsState)) {
      sweetalertForInputTagAlreadyDefinedBuilder(newTag);
      return;
    }
    setTagsList([...tagsList, newTag]);
    handleInputValidation(cleanEvent);
  };

  const handleInputValidation = (e) => {
    handleInputChange(e);
    section01Validator(e, setErrorsState);
  };

  const handleFormSection_01Submit = (e) => {
    e.preventDefault();
    const errorsReport = form01SubmitValidation(
      formValues,
      tagsList,
      errorsState
    );
    if (errorsReport.hasErrors) {
      sweetalertForErrorsReportForm01StoreSetupBuilder(errorsReport);
      return;
    }
    sweetalertForGenericSuccessBuilder(
      "Primera parte completada exitosamente, vamos por la segunda parte!"
    );
    //Enviar este objeto al reducer de la construccion de la tienda
    storeSetupDispatch({
      action: {
        type: types.addFirstFormInfoToCreateStore,
        payload: form01ReadyObjectBuilder(formValues, tagsList),
      },
    });

    setFormsChecking((values) => {
      return { ...values, formCheckSection01IsValidated: true };
    });
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(section_01FormValues);
    setTagsList([]);
    setErrorsState(section_01ErrorState);
    storeSetupDispatch({
      action: { type: types.resetFirstFormInfoToCreateStore },
    });
  };

  return (
    <div>
      <h2 className="store-setup__section-enum mb-3 mt-1">
        1. Parámetros descriptivos de la tienda
      </h2>
      <div className="store-setup__form-main-container">
        <form onSubmit={handleFormSection_01Submit} id="form01-store-setup">
          <div className="store-setup__form-container">
            <div className="store-setup__inputs-container">
              <div className="store-setup__input-container">
                <label htmlFor="storeName" className="store-setup__input-label">
                  Nombre de la tienda
                </label>
                <input
                  type="text"
                  autoFocus="true"
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
                    marginTop="-25px"
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
                  <ErrorFlag
                    message={errorsState.slogan.message}
                    width="100%"
                    marginTop="-25px"
                  />
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
                  className="store-setup__input store-setup__input-tag"
                  autoComplete="off"
                />
                <button
                  onClick={handleAddNewTag}
                  className="store-setup__input store-setup__button-input-tag btn btn-primary"
                  disabled={errorsState.tag.hasErrors}
                  type="button"
                >
                  Ingresar
                </button>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.tag.hasErrors && (
                  <ErrorFlag
                    message={errorsState.tag.message}
                    width="100%"
                    marginTop="-25px"
                  />
                )}
                <ProductTagList tags={tagsList} setTagsList={setTagsList} />
              </div>
            </div>
            <div className="store-setup__inputs-container">
              <div className="store-setup__input-container">
                <label
                  htmlFor="description"
                  className="store-setup__input-label"
                >
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
                    marginTop="-25px"
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
                  onChange={handleInputValidation}
                  className="store-setup__input store-setup__input-date"
                  autoComplete="off"
                />
              </div>
              <div className="store-setup__error-flag">
                {errorsState.startingDate.hasErrors && (
                  <ErrorFlag
                    message={errorsState.startingDate.message}
                    width="100%"
                    marginTop="-25px"
                  />
                )}
              </div>
              <div
                className="store-setup__error-flag"
                style={{ marginTop: "33px" }}
              >
                {errorsState.endingDate.hasErrors && (
                  <ErrorFlag
                    message={errorsState.endingDate.message}
                    width="100%"
                    marginTop="-25px"
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
                  type="button"
                >
                  Obtener tu dirección actual
                </button>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.address.hasErrors && (
                  <ErrorFlag
                    message={errorsState.address.message}
                    width="100%"
                    marginTop="-25px"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="store-setup__final-form-ind">
            <hr />
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
    </div>
  );
};

export default FormSection01;
