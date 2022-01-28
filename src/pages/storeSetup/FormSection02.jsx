import React, { useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";

import section02Validator, {
  form02SubmitValidation,
  resetImagesFromView,
  section_02FormValues,
} from "./../../helpers/storeSetupHelpers/SetupStoreSection02Validator";
import { section_02ErrorState } from "./../../helpers/storeSetupHelpers/SetupStoreSection02Validator";

import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import {
  sweetalertForErrorsReportForm02StoreSetupBuilder,
  sweetalertForGenericSuccessBuilder,
} from "../../helpers/SweetalertBuilder";
import form02ReadyObjectBuilder from "../../helpers/storeSetupHelpers/formValuesToObjectBuilder/form02ReadyObjectBuilder";

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
    e.preventDefault();
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
    e.preventDefault();
    Swal.fire({
      title:
        "¿Está seguro que desea resetear los valores del segundo formulario?",
      text: "Los cambios de la sección de imágenes aún no se han guardado",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      allowEnterKey: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: 10000,
    }).then((res) => {
      if (res.isConfirmed) {
        resetForm(section_02FormValues);
        resetTags();
        resetImagesFromView(setErrorsState);
      }
    });
  };

  const resetTags = () => {
    const portraitImageUrl = document.getElementById("portrait-preview-url");
    portraitImageUrl.setAttribute("href", "#");
    portraitImageUrl.textContent = "";

    Array(3)
      .fill("")
      .map((value, index) => {
        const prevImageUrl = document.getElementById(
          `previsualization-preview${index + 1}-url`
        );
        prevImageUrl.setAttribute("href", "#");
        prevImageUrl.textContent = "";
      });

    const physicalStoreImageUrl = document.getElementById(
      "physical-store-preview-url"
    );
    physicalStoreImageUrl.setAttribute("href", "#");
    physicalStoreImageUrl.textContent = "";
  };

  const handleFormSection_02Submit = (e) => {
    e.preventDefault();
    const portraitUrl = document
      .getElementById("portrait-preview-url")
      .getAttribute("href");

    const prevImagesList = new Array(3)
      .fill("")
      .map((value, index) =>
        document
          .getElementById(`previsualization-preview${index + 1}-url`)
          .getAttribute("href")
      );

    const physicalStoreImageUrl = document
      .getElementById("physical-store-preview-url")
      .getAttribute("href");

    const errorsReport = form02SubmitValidation(
      portraitUrl,
      prevImagesList,
      physicalStoreImageUrl,
      errorsState
    );
    if (errorsReport.hasErrors) {
      sweetalertForErrorsReportForm02StoreSetupBuilder(errorsReport);
      return;
    }
    sweetalertForGenericSuccessBuilder(
      "Segunda parte completada exitosamente, vamos por la última parte!"
    );

    //Enviar este objeto al reducer de la construccion de la tienda
    const JSONform02 = form02ReadyObjectBuilder({
      portraitUrl,
      prevImagesList,
      physicalStoreImageUrl,
    });

    //console.log(JSONform02);

    setFormsChecking((values) => {
      return { ...values, formCheckSection02IsValidated: true };
    });
  };

  return (
    <div className="store-setup__images-main-container">
      <h2 className="store-setup__section-enum mb-3 mt-5">
        2. Sube algunas imágenes representativas
      </h2>
      <div className="store-setup__form-main-container">
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
                    disabled={!formChecking}
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
              <label id="url-portrait-img"></label>
              <div className="store-setup__error-flag mt-2 mb-4">
                {errorsState.portraitUrl.hasErrors && (
                  <ErrorFlag
                    message={errorsState.portraitUrl.message}
                    width="100%"
                  />
                )}
                <img
                  src={process.env.PUBLIC_URL + "/assets/common/emptyImage.png"}
                  className="portrait-preview--no-content"
                  id="portrait-preview"
                  alt=" "
                />{" "}
                <a
                  href="#"
                  target="_blank"
                  className="store-setup__url-image-label"
                  id="portrait-preview-url"
                ></a>
              </div>
              <div className="store-setup__input-images-container">
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
                    disabled={!formChecking}
                  >
                    Carga un archivo
                  </button>
                  <input
                    type="file"
                    multiple="multiple"
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
              {new Array(3).fill(0).map((elem, index) => (
                <>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/common/emptyImage.png"
                    }
                    className="portrait-preview--no-content"
                    id={"previsualization-preview" + `${index + 1}`}
                    alt=" "
                  />
                  <a
                    href="#"
                    target="_blank"
                    className="store-setup__url-image-label"
                    id={"previsualization-preview" + `${index + 1}-url`}
                  ></a>
                </>
              ))}
              <div className="store-setup__input-images-container">
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
                    disabled={!formChecking}
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
                <img
                  src={process.env.PUBLIC_URL + "/assets/common/emptyImage.png"}
                  className="portrait-preview--no-content"
                  id="physical-store-preview"
                  alt=" "
                />{" "}
                <a
                  href="#"
                  target="_blank"
                  className="store-setup__url-image-label"
                  id="physical-store-preview-url"
                ></a>
              </div>
            </div>
          </div>
          <div className="store-setup__final-form-ind">
            <hr />
          </div>
          <div className="store-setup__centered-container mb-">
            <div className="store-setup__buttons-container">
              <button
                className="store-setup__button-update"
                type="submit"
                disabled={!formChecking}
              >
                Confirmar cambios
              </button>
              <button
                className="store-setup__button-update"
                onClick={handleResetForm}
                disabled={!formChecking}
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

export default FormSection02;
