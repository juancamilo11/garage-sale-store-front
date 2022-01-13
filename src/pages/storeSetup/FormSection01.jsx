import React, { useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import section01Validator, {
  isTheTagAlreadyDefined,
} from "../../helpers/SetupStoreSection01Validator";

import { section_01FormValues } from "./../../helpers/SetupStoreSection01Validator";
import { section_01ErrorState } from "./../../helpers/SetupStoreSection01Validator";

import useForm from "../../hooks/useForm";
import ProductTagList from "../../components/storeSetup/ProductTagList";
import Swal from "sweetalert2";

const FormSection01 = ({ formChecking, setFormsChecking }) => {
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
    Swal.fire({
      icon: "info",
      title: "Ubicación de la tienda",
      text: "A continuación se le solicitará su dirección actual para localizar la tienda físicamente.",
      footer:
        "<small>En caso de no dar su ubicación la tienda no podrá ser ubicada físicamente.</small>",
      showConfirmButton: true,
      showDenyButton: false,
      showCancelButton: true,
      cancelButtonText: "No quiero dar mi ubicación",
      cancelButtonColor: "red",
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        navigator.geolocation.getCurrentPosition((res) => {
          const event = { target: { name: "address", value: res } };
          handleInputValidation(event);
        });
      } else {
        Swal.fire({
          title: "Posición física denegada",
          text: "Tenga presente que la nueva tienda no podrá ser ubicada mediante mapas.",
          icon: "warning",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    });
  };

  const handleAddNewTag = (e) => {
    const tagInput = document.getElementById("tag");
    const newTag = tagInput.value.trim();
    const cleanEvent = { target: { name: "tag", value: "" } };

    if (newTag === "") return;
    if (errorsState.tag.hasErrors) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `La etiqueta '${newTag}' no se ha podido ingresar, intenta con otro valor.`,
        showConfirmButton: false,
        timer: 3500,
      }).then((res) => {
        handleInputValidation(cleanEvent);
      });
      return;
    }
    if (isTheTagAlreadyDefined(newTag, tagsList, setErrorsState)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `La etiqueta '${newTag}' ya ha sido ingresada, intenta con otro valor.`,
        showConfirmButton: false,
        timer: 3500,
      });
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
      <h2 className="store-setup__section-enum mb-3 mt-1">
        1. Parámetros descriptivos de la tienda
      </h2>
      <div className="store-setup__form-main-container">
        <form onSubmit={handleFormSection_01Submit}>
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
