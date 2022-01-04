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
import ImagesTagList from "../../components/storeSetup/ImagesTagList";

const FormSection02 = ({ formChecking, setFormsChecking }) => {
  const [errorsState, setErrorsState] = useState(section_02ErrorState);

  const [imagesState, setImagesState] = useState({
    portraitUrl: null,
    prevImagesUrls: [],
    physicalStoreUrl: null,
  });

  const { portraitUrl, prevImagesUrls, physicalStoreUrl } = imagesState;

  const handleFormSection_02Submit = (e) => {
    e.preventDefault();
  };

  const handleImageLoad = (e) => {
    // window.alert("imagen cargada");
  };
  const handleInputChange = (e) => {
    // window.alert(e.target.files[0].type.startsWith("image"));
  };

  const handleMultipleInputChange = (e) => {
    // window.alert(e.target.files[0].type.startsWith("image"));
  };

  const handleResetForm = () => {};

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
                <button className="store-setup__mult-images-button">
                  Carga un archivo
                </button>
                <input
                  type="file"
                  className="store-setup__input-images"
                  onChange={handleInputChange}
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
            </div>
            <div className="store-setup__input-container">
              <label
                htmlFor="prevImages"
                className="store-setup__input-image-label"
              >
                Imágenes de Previsualización
              </label>
              <div className="store-setup__mult-images-container">
                <button className="store-setup__mult-images-button">
                  Carga un archivo
                </button>
                <input
                  type="file"
                  className="store-setup__input-images"
                  onChange={handleMultipleInputChange}
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
              setImagesList={setImagesState}
            />
            <div className="store-setup__input-container">
              <label
                htmlFor="physicalStoreImg"
                className="store-setup__input-image-label"
              >
                Imágen de la venta de garaje física
              </label>
              <div className="store-setup__mult-images-container">
                <button className="store-setup__mult-images-button">
                  Carga un archivo
                </button>
                <input
                  type="file"
                  className="store-setup__input-images"
                  onChange={handleInputChange}
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
