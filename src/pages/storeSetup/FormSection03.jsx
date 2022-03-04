import React, { useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import section03Validator, {
  form03SubmitValidation,
  section_03FormValues,
} from "./../../helpers/storeSetupHelpers/SetupStoreSection03Validator";
import { section_03ErrorState } from "./../../helpers/storeSetupHelpers/SetupStoreSection03Validator";
import useForm from "../../hooks/useForm";
import ProductTagList from "../../components/storeSetup/ProductTagList";
import InputProductCategory from "../../components/storeSetup/InputProductCategory";
import latamCountries from "../../helpers/latamCountries";
import productStates from "./../../helpers/productStates";
import {
  sweetalertForErrorsReportForm03StoreSetupBuilder,
  sweetalertForFinalizeInputProductsBuilder,
  sweetalertForGenericSuccessBuilder,
  sweetalertForProductTagAlreadyDefinedBuilder,
} from "../../helpers/SweetalertBuilder";
import { useDispatch } from "react-redux";
import { addThirdFormInfoToCreateStore } from "../../actions/storeSetupActions";
import { useSelector } from "react-redux";

const FormSection03 = () => {
  const [formValues, handleInputChange, resetForm] =
    useForm(section_03FormValues);

  const [arrProducts, setArrProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productImagesUrlList, setProductImagesUrlList] = useState(["hola"]);
  const [productTagList, setProductTagList] = useState([]);

  const [errorsState, setErrorsState] = useState(section_03ErrorState);

  const dispatch = useDispatch();
  const storeSetupState = useSelector((state) => state.storeSetup);
  const { formCheckSection02IsValidated } = storeSetupState;

  const {
    categoryName,
    categoryImage,
    productName,
    category,
    quantity,
    price,
    productState,
    productTag,
    additionalDescription,
    productImages,
  } = formValues;

  const handleLoadimage = (e) => {
    e.preventDefault();
    const inputImage = document.getElementById("product-prev-images");
    inputImage.click();
  };

  const handleFinalizeInputProducts = (e) => {
    e.preventDefault();
    sweetalertForFinalizeInputProductsBuilder(arrProducts).then((res) => {
      if (res.isConfirmed) {
        sweetalertForGenericSuccessBuilder(
          "Última parte completada exitosamente,sólo falta un paso más y todo estará listo!"
        );
        //Enviar este objeto al reducer de la construccion de la tienda
        dispatch(addThirdFormInfoToCreateStore());
      }
    });
  };

  const handleAddNewProductTag = (e) => {
    // toDo -> Verify whether the new tag has already been added
    e.preventDefault();
    const tagInput = document.getElementById("productTag");
    const newTag = tagInput.value;
    const cleanEvent = { target: { name: "productTag", value: "" } };

    if (!errorsState.productTag.hasErrors && newTag.trim() !== "") {
      setProductTagList([...productTagList, newTag]);
      handleInputValidation(cleanEvent);
    } else {
      sweetalertForProductTagAlreadyDefinedBuilder(newTag).then((res) => {
        handleInputValidation(cleanEvent);
      });
    }
  };

  const handleInputValidation = (e) => {
    handleInputChange(e);
    section03Validator(e, setErrorsState, setProductImagesUrlList);
  };

  const handleFormSection_03Submit = (e) => {
    //Submit del formulario para el ingreso de un nuevo producto
    e.preventDefault();
    handleInputChange({
      target: { name: "productUrlImages", value: productImagesUrlList },
    });
    const errorsReport = form03SubmitValidation(
      formValues,
      errorsState,
      setErrorsState,
      productTagList
    );
    if (errorsReport.hasErrors) {
      sweetalertForErrorsReportForm03StoreSetupBuilder(errorsReport);
      return;
    }
    setArrProducts((arrProducts) => [
      ...arrProducts,
      { ...formValues, productTagList },
    ]);
    resetForm(section_03FormValues);
    setErrorsState(section_03ErrorState);
    sweetalertForGenericSuccessBuilder("¡Producto ingresado correctamente!");
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(section_03FormValues);
    setErrorsState(section_03ErrorState);
  };

  return (
    <div aria-disabled={formCheckSection02IsValidated}>
      <h2 className="store-setup__section-enum mb-3 mt-5">
        3. Creación de los productos para la venta
      </h2>
      <InputProductCategory
        categoryList={categoryList}
        setCategoryList={setCategoryList}
        formChecking={formCheckSection02IsValidated}
      />
      {categoryList.length > 0 ? (
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
                  <option value="0" selected>
                    Seleccione una categoría para el producto
                  </option>
                  {categoryList.map((category) => (
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
                  Precio unitario (COP)
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={price}
                  onChange={handleInputValidation}
                  className="store-setup__input"
                  autoComplete="off"
                  min="1"
                />
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
              <div className="store-setup__input-container">
                <label htmlFor="price" className="store-setup__input-label">
                  Descripción adicional
                </label>
                <textarea
                  name="additionalDescription"
                  id="additionalDescription"
                  value={additionalDescription}
                  onChange={handleInputValidation}
                  className="store-setup__input"
                  autoComplete="off"
                />
              </div>
              <div
                className="store-setup__error-flag"
                style={{ marginTop: "-30px" }}
              >
                {errorsState.additionalDescription.hasErrors && (
                  <ErrorFlag
                    message={errorsState.additionalDescription.message}
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
                  disabled={productTagList.length >= 10}
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
            <div className="store-setup__product-tags-list-container--products">
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
              <div className="store-setup__error-flag mt-5">
                {errorsState.productImages.hasErrors && (
                  <ErrorFlag
                    message={errorsState.productImages.message}
                    width="100%"
                    marginTop="-25px"
                  />
                )}
              </div>
              {new Array(5).fill("").map((elem, index) => (
                <>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/common/emptyImage.png"
                    }
                    className="portrait-preview--no-content"
                    id={`${"product-previsualization-preview" + (index + 1)}`}
                    alt=" "
                  />
                  <a
                    href="#"
                    target="_blank"
                    className="store-setup__url-image-label"
                    id={"product-previsualization-preview" + `${index + 1}-url`}
                  ></a>
                </>
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
          {arrProducts.length > 0 && (
            <>
              <div className="store-setup__final-form-ind store-setup__final-form-ind--product-category">
                <hr />
              </div>
              <div className="store-setup__centered-container">
                <button
                  onClick={handleFinalizeInputProducts}
                  className="store-setup__button-end-input-products"
                >
                  Finalizar Ingreso de Productos y Continuar
                </button>
              </div>
            </>
          )}
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
