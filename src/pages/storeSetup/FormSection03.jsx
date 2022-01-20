import React, { useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import section03Validator, {
  section_03FormValues,
} from "./../../helpers/storeSetupHelpers/SetupStoreSection03Validator";
import { section_03ErrorState } from "./../../helpers/storeSetupHelpers/SetupStoreSection03Validator";
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
  const [productTagList, setProductTagList] = useState([]);

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
    productTag,
    freeShipping,
    productImages,
  } = formValues;

  const handleLoadimage = (e) => {
    const inputImage = document.getElementById("product-prev-images");
    inputImage.click();
  };

  const handleAddNewProductTag = (e) => {
    const tagInput = document.getElementById("productTag");
    const newTag = tagInput.value;
    const cleanEvent = { target: { name: "productTag", value: "" } };

    if (!errorsState.productTag.hasErrors && newTag.trim() !== "") {
      setProductTagList([...productTagList, newTag]);
      handleInputValidation(cleanEvent);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `La etiqueta de producto '${newTag}' no se ha podido ingresar, intenta con otro valor.`,
        showConfirmButton: false,
        timer: 3500,
      }).then((res) => {
        handleInputValidation(cleanEvent);
      });
    }
  };

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

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(section_03FormValues);
    setErrorsState(section_03ErrorState);
  };

  return (
    <div aria-disabled={formChecking}>
      <h2 className="store-setup__section-enum mb-3 mt-5">
        3. Creación de los productos para la venta
      </h2>
      <InputProductCategory
        categoriesList={categoriesList}
        setCategoriesList={setCategoriesList}
        disabled={!formChecking}
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
                    marginTop="-25px"
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
                    marginTop="-25px"
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
                    marginTop="-25px"
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
                  <option value="no-category-selected" selected="true">
                    Seleccione una categoría para el producto
                  </option>
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
                    marginTop="-25px"
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
                        : "Moneda"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.price.hasErrors && (
                  <ErrorFlag
                    message={errorsState.price.message}
                    width="100%"
                    marginTop="-25px"
                  />
                )}
              </div>
              <div className="store-setup__error-flag">
                {errorsState.currency.hasErrors && (
                  <ErrorFlag
                    message={errorsState.currency.message}
                    width="100%"
                    marginTop="-25px"
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
                      className="store-setup__input-label store-setup__input-ratio-label"
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
                      className="store-setup__input-label store-setup__input-ratio-label"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="store-setup__error-flag"
                style={{ marginTop: "-30px" }}
              >
                {errorsState.freeShipping.hasErrors && (
                  <ErrorFlag
                    message={errorsState.freeShipping.message}
                    width="100%"
                    marginTop="-25px"
                  />
                )}
              </div>
            </div>
            <div className="store-setup__inputs-container">
              <div className="store-setup__input-container">
                <label
                  htmlFor="productTag"
                  className="store-setup__input-label"
                >
                  Etiquetas del producto
                </label>
                <input
                  type="text"
                  name="productTag"
                  id="productTag"
                  value={productTag}
                  onChange={handleInputValidation}
                  className="store-setup__input store-setup__input-tag"
                  autoComplete="off"
                />
                <button
                  onClick={handleAddNewProductTag}
                  className="store-setup__input store-setup__button-input-tag btn btn-primary"
                >
                  Ingresar
                </button>
              </div>
              <div className="store-setup__error-flag mb-3">
                {errorsState.productTag.hasErrors && (
                  <ErrorFlag
                    message={errorsState.productTag.message}
                    width="100%"
                    marginTop="-25px"
                  />
                )}
              </div>
            </div>
            <div className="store-setup__product-tags-list-container--produts">
              <ProductTagList
                tags={productTagList}
                setTagsList={setProductTagList}
              />
            </div>
            <div className="mt-5">
              <div className="store-setup__product-images-container">
                <label
                  htmlFor="product-prev-images"
                  className="store-setup__input-image-label"
                >
                  Imágenes del producto
                </label>
                <div className="store-setup__mult-images-container">
                  <button
                    className="store-setup__mult-images-button"
                    id="preview-button"
                    onClick={handleLoadimage}
                  >
                    Carga un archivo
                  </button>
                  <input
                    type="file"
                    multiple="multiple"
                    name="productImages"
                    className="store-setup__input-images"
                    id="product-prev-images"
                    value={productImages}
                    onChange={handleInputValidation}
                  />
                </div>
              </div>
              <div className="store-setup__error-flag">
                {errorsState.productImages.hasErrors && (
                  <ErrorFlag
                    message={errorsState.productImages.message}
                    width="100%"
                    marginTop="-25px"
                  />
                )}
              </div>
              {new Array(5).fill(0).map((elem, index) => (
                <img
                  src={process.env.PUBLIC_URL + "/assets/common/emptyImage.png"}
                  className="portrait-preview--no-content"
                  id={`${"product-previsualization-preview" + (index + 1)}`}
                  alt=" "
                />
              ))}
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
