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
import InputProductCategory from "../../components/storeSetup/InputProductCategory";
import latamCountries from "../../helpers/latamCountries";
import productStates from "./../../helpers/productStates";

const FormSection03 = ({ formChecking, setFormsChecking }) => {
  const [formValues, handleInputChange, resetForm] =
    useForm(section_03FormValues);

  const [arrProducts, setArrProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  const [errorsState, setErrorsState] = useState(section_03ErrorState);

  const {
    categoryName,
    categoryImage,
    productName,
    category,
    quantity,
    price,
    currency,
    productState,
    productTags,
    freeShipping,
    productImages,
  } = formValues;

  const handleAddNewTag = (e) => {};

  const handleInputValidation = (e) => {
    handleInputChange(e);
    section01Validator(e, setErrorsState);
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

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(section_03FormValues);
    setErrorsState(section_03ErrorState);
  };

  /*
  
  productName: "",
  category: "",
  quantity: "",
  price: "",
  productState: "",
  productTags: "",
  freeShipping: "",
  productImages: [],
  */

  return (
    <div>
      <h2 className="store-setup__section-enum mb-3 mt-5">
        3. Creación de los productos para la venta
      </h2>
      <InputProductCategory
        categoriesList={categoriesList}
        setCategoriesList={setCategoriesList}
        errorsState={errorsState}
        setErrorsState={setErrorsState}
      />

      <div style={{ margin: "10px 1%" }}>
        <hr />
      </div>
      {categoriesList.length > 0 ? (
        <form
          onSubmit={handleFormSection_03Submit}
          className="store-setup__form-main-container my-3"
        >
          <div className="store-setup__form-container">
            <div className="store-setup__inputs-container">
              <div className="store-setup__input-container">
                <label
                  htmlFor="productName"
                  className="store-setup__input-label"
                >
                  Nombre del producto
                </label>
                <input
                  type="text"
                  autoFocus="true"
                  name="productName"
                  id="productName"
                  className="store-setup__input"
                  autoComplete="off"
                  value={productName}
                  onChange={handleInputValidation}
                />
              </div>
              <div className="store-setup__error-flag mt-2 mb-4">
                {errorsState.productName.hasErrors && (
                  <ErrorFlag
                    message={errorsState.productName.message}
                    width="100%"
                  />
                )}
              </div>

              <div className="store-setup__input-container">
                <label htmlFor="quantity" className="store-setup__input-label">
                  Cantidad disponible
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={handleInputValidation}
                  className="store-setup__input"
                  autoComplete="off"
                  min="1"
                />
              </div>
              <div className="store-setup__error-flag">
                {errorsState.quantity.hasErrors && (
                  <ErrorFlag
                    message={errorsState.quantity.message}
                    width="100%"
                  />
                )}
              </div>

              <div className="store-setup__input-container">
                <label
                  htmlFor="productState"
                  className="store-setup__input-label"
                >
                  Estado
                </label>
                <select
                  name="productState"
                  id="productState"
                  value={productState}
                  onChange={handleInputValidation}
                  className="store-setup__input"
                  autoComplete="off"
                >
                  {productStates.map((state) => (
                    <option value={state.statusNumber} key={state.statusNumber}>
                      {`(${state.statusNumber}) `}
                      {state.statusName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.productState.hasErrors && (
                  <ErrorFlag
                    message={errorsState.productState.message}
                    width="100%"
                  />
                )}
              </div>
            </div>
            <div className="store-setup__inputs-container">
              <div className="store-setup__input-container">
                <label htmlFor="category" className="store-setup__input-label">
                  Categoría
                </label>
                <select
                  name="category"
                  id="category"
                  value={category}
                  onChange={handleInputValidation}
                  className="store-setup__input"
                >
                  {categoriesList.map((category) => (
                    <option
                      value={category.categoryName}
                      className="store-setup__category-option"
                    >
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.category.hasErrors && (
                  <ErrorFlag
                    message={errorsState.category.message}
                    width="100%"
                  />
                )}
              </div>

              <div className="store-setup__input-container">
                <label htmlFor="price" className="store-setup__input-label">
                  Precio unitario
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={price}
                  onChange={handleInputValidation}
                  className="store-setup__input store-setup__input--price"
                  style={{ marginRight: "4%" }}
                  autoComplete="off"
                  min="1"
                />
                <select
                  name="currency"
                  id="currency"
                  className="store-setup__input store-setup__input--price"
                  value={currency}
                  onChange={handleInputValidation}
                >
                  {latamCountries.map((country) => (
                    <option value={country.currencyCode}>
                      {country.currencyCode
                        ? "[" +
                          `${country.currencyCode}` +
                          "]" +
                          ` \t ${country.currencyName}`
                        : "Seleccione la moneda"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.price.hasErrors && (
                  <ErrorFlag message={errorsState.price.message} width="100%" />
                )}
              </div>
              <div className="store-setup__error-flag">
                {errorsState.currency.hasErrors && (
                  <ErrorFlag
                    message={errorsState.currency.message}
                    width="100%"
                  />
                )}
              </div>

              <div className="store-setup__input-container">
                <label
                  htmlFor="freeShipping"
                  className="store-setup__input-label"
                >
                  ¿Envío gratis?
                </label>
                <div className="store-setup__input-ratio-container">
                  <div className="store-setup__input-ratio-item">
                    <input
                      type="radio"
                      name="freeShipping"
                      className="store-setup__input"
                      value="yes"
                      id="freeShipping-yes"
                      onChange={handleInputValidation}
                    />
                    <label
                      htmlFor="freeShipping-yes"
                      className="store-setup__input-label"
                    >
                      Si
                    </label>
                  </div>
                  <div className="store-setup__input-ratio-item">
                    <input
                      type="radio"
                      name="freeShipping"
                      className="store-setup__input"
                      value="no"
                      id="freeShipping-no"
                      onChange={handleInputValidation}
                    />
                    <label
                      htmlFor="freeShipping-no"
                      className="store-setup__input-label"
                      style={{ marginRight: "7px" }}
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.quantity.hasErrors && (
                  <ErrorFlag
                    message={errorsState.quantity.message}
                    width="100%"
                  />
                )}
              </div>
            </div>
            <div className="store-setup__inputs-container">
              <div className="store-setup__input-container">
                <label className="store-setup__input-label">
                  Dirección física
                </label>
                <button className="store-setup__input btn btn-primary store-setup__input-address">
                  Obtener tu dirección actual
                </button>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.quantity.hasErrors && (
                  <ErrorFlag
                    message={errorsState.quantity.message}
                    width="100%"
                  />
                )}
              </div>

              <div className="store-setup__input-container">
                <label className="store-setup__input-label">
                  Dirección física
                </label>
                <button className="store-setup__input btn btn-primary store-setup__input-address">
                  Obtener tu dirección actual
                </button>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.quantity.hasErrors && (
                  <ErrorFlag
                    message={errorsState.quantity.message}
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
      ) : (
        <div style={{ margin: "10px 1%" }}>
          <ErrorFlag
            message="Ingrese al menos una categoría de producto para continuar"
            width="100%"
          />
        </div>
      )}
    </div>
  );
};

export default FormSection03;
