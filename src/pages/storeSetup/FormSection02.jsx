import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import Section01Validator from "../../helpers/SetupStoreSection01Validator";

import { section_01FormValues } from "./../../helpers/SetupStoreSection01Validator";
import { section_01ErrorState } from "./../../helpers/SetupStoreSection01Validator";

import section02Validator, {
  section_02FormValues,
} from "./../../helpers/SetupStoreSection02Validator";
import { section_02ErrorState } from "./../../helpers/SetupStoreSection02Validator";

import { section_03FormValues } from "./../../helpers/SetupStoreSection03Validator";
import { section_03ErrorState } from "./../../helpers/SetupStoreSection03Validator";

import storeSetupReducer from "./../../reducers/storeSetupReducer";
import useForm from "../../hooks/useForm";
import ProductTagList from "../../components/storeSetup/ProductTagList";
import Swal from "sweetalert2";
import ImagesTagList from "../../components/storeSetup/ImagesTagList";

const FormSection02 = ({ formChecking, setFormsChecking }) => {
  const [errorsState, setErrorsState] = useState(section_02ErrorState);

  const [formValues, handleInputChange, resetForm] =
    useForm(section_02FormValues);

  const { portraitUrl, prevImagesUrls, physicalStoreUrl } = formValues;

  const handleInputValidation = (e) => {
    handleInputChange(e);
    section02Validator(e, setErrorsState);
  };

  const handleSelectImageToLoad = (e) => {
    const { id } = e.target;
    switch (id) {
      case "portrait-button":
        document.getElementById("store-setup__input-portrait").click();
        break;
      case "preview-button":
        document.getElementById("store-setup__input-previews").click();
        break;
      case "physic-button":
        document.getElementById("store-setup__input-physic-img").click();
        break;
      default:
        break;
    }
  };

  const handleResetForm = (e) => {
    Swal.fire({
      title:
        "¿Está seguro que desea resetear los valores del segundo formulario?",
      text: "Los cambios aún no se han guardado",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      timer: 10000,
    }).then((res) => {
      res.isConfirmed && resetForm();
    });
  };

  const handleFormSection_02Submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="store-setup__images-main-container">
      <h2 className="store-setup__section-enum">
        2. Sube algunas imágenes representativas
      </h2>
      <form onSubmit={handleFormSection_02Submit}>
        <div className="store-setup__images-container">
          <div className="store-setup__images-inputs-container">
            <div className="store-setup__input-images-container">
              <label
                htmlFor="portrait"
                className="store-setup__input-image-label"
              >
                Imágen de portada
              </label>
              <div className="store-setup__mult-images-container">
                <button
                  className="store-setup__mult-images-button"
                  id="portrait-button"
                  onClick={handleSelectImageToLoad}
                >
                  Carga un archivo
                </button>
                <input
                  type="file"
                  name="portraitUrl"
                  className="store-setup__input-images"
                  id="store-setup__input-portrait"
                  value={portraitUrl}
                  onChange={handleInputValidation}
                />
              </div>
            </div>
            <div className="store-setup__error-flag mt-2 mb-4">
              {errorsState.portraitUrl.hasErrors && (
                <ErrorFlag
                  message={errorsState.portraitUrl.message}
                  width="100%"
                />
              )}
              <img
                src="./../../assets/img/store-setup/emptyImage.png"
                className="portrait-preview--no-content"
                width="10%"
                id="portrait-preview"
                alt=" "
              />
            </div>
            <div className="store-setup__input-container">
              <label
                htmlFor="prevImages"
                className="store-setup__input-image-label"
              >
                Imágenes de Previsualización
              </label>
              <div className="store-setup__mult-images-container">
                <button
                  className="store-setup__mult-images-button"
                  id="preview-button"
                  onClick={handleSelectImageToLoad}
                >
                  Carga un archivo
                </button>
                <input
                  type="file"
                  name="prevImagesUrls"
                  className="store-setup__input-images"
                  id="store-setup__input-previews"
                  value={prevImagesUrls}
                  onChange={handleInputValidation}
                />
              </div>
            </div>
            <div className="store-setup__error-flag">
              {errorsState.prevImagesUrls.hasErrors && (
                <ErrorFlag
                  message={errorsState.prevImagesUrls.message}
                  width="100%"
                />
              )}
            </div>
            <ImagesTagList
              images={prevImagesUrls}
              setImagesList={handleInputChange}
            />
            <div className="store-setup__input-container">
              <label
                htmlFor="physicalStoreImg"
                className="store-setup__input-image-label"
              >
                Imágen de la venta de garaje física
              </label>
              <div className="store-setup__mult-images-container">
                <button
                  className="store-setup__mult-images-button"
                  id="physic-button"
                  onClick={handleSelectImageToLoad}
                >
                  Carga un archivo
                </button>
                <input
                  type="file"
                  name="physicalStoreUrl"
                  className="store-setup__input-images"
                  id="store-setup__input-physic-img"
                  value={physicalStoreUrl}
                  onChange={handleInputValidation}
                />
              </div>
            </div>
            <div className="store-setup__error-flag mt-2 mb-4">
              {errorsState.physicalStoreUrl.hasErrors && (
                <ErrorFlag
                  message={errorsState.physicalStoreUrl.message}
                  width="100%"
                />
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

export default FormSection02;
