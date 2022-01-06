import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import section01Validator from "../../helpers/SetupStoreSection01Validator";

import { section_01FormValues } from "./../../helpers/SetupStoreSection01Validator";
import { section_01ErrorState } from "./../../helpers/SetupStoreSection01Validator";

import { section_02FormValues } from "./../../helpers/SetupStoreSection02Validator";
import { section_02ErrorState } from "./../../helpers/SetupStoreSection02Validator";

import section03Validator, {
  section_03FormValues,
} from "./../../helpers/SetupStoreSection03Validator";
import { section_03ErrorState } from "./../../helpers/SetupStoreSection03Validator";

import storeSetupReducer from "./../../reducers/storeSetupReducer";
import useForm from "../../hooks/useForm";
import ProductTagList from "../../components/storeSetup/ProductTagList";
import Swal from "sweetalert2";

const FormSection03 = ({ formChecking, setFormsChecking }) => {
  const [formValues, handleInputChange, resetForm] =
    useForm(section_03FormValues);

  const [arrProducts, setArrProducts] = useState([]);

  const [errorsState, setErrorsState] = useState(section_03ErrorState);

  const {
    categoryName,
    categoryImage,
    productName,
    category,
    quantity,
    price,
    productState,
    productTags,
    freeShipping,
    productImages,
  } = formValues;

  const handleAddNewTag = (e) => {};

  const handleInputValidation = (e) => {
    handleInputChange(e);
    section03Validator(e, setErrorsState);
  };

  const handleFormSection_03Submit = (e) => {
    e.preventDefault();
    // const errorReport = Section01Validator(formValues);
    // if (!errorReport.hasErrors()) {
    //   console.log("Los datos han sido actualizados exitosamente.");
    // } else {
    //   //Se muestra un mensaje de error con sweetalert o con toastify
    // }
  };

  const handleSelectImageToLoad = () => {};

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(section_03FormValues);
    setErrorsState(section_03ErrorState);
  };

  const handleSubmitNewCategory = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="store-setup__section-enum mt-5">
        3. Creación de los productos para la venta
      </h2>
      <form onsubmit={handleSubmitNewCategory}>
        <div className="store-setup__product-category-container">
          <label htmlFor="productCategory" className="store-setup__input-label">
            Nombre de la categoria
          </label>
          <input
            type="text"
            name="productCategory"
            id="productCategoryName"
            className="store-setup__input"
            autoComplete="off"
            value={categoryName}
            onChange={handleInputValidation}
          />
          <div className="store-input-image-container mt-3">
            <label
              htmlFor="productCategory"
              className="store-setup__input-label"
            >
              Imágen representativa
            </label>
            <button
              className="store-setup__category-img-button"
              id="category-button"
              onClick={handleSelectImageToLoad}
            >
              Carga un archivo
            </button>
            <input
              type="file"
              name="categoryImage"
              className="store-setup__input-images"
              id="store-setup__input-physic-img"
              value={categoryImage}
              onChange={handleInputValidation}
            />
          </div>
          <div className="store-setup__centered-container">
            <button className="store-setup__button-update" type="submit">
              Agregar nueva categoría
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSection03;
