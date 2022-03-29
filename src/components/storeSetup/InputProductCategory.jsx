import React from "react";
import { useState } from "react";
import { uploadFileToCloudinary } from "../../actions/cloudinaryActions";
import section03Validator, {
  formInputCategorySubmitValidation,
  isTheCategoryAlreadyDefined,
  section_03ErrorState,
} from "../../helpers/storeSetupHelpers/SetupStoreSection03Validator";
import { sweetalertForErrorsReportInputCategoryForm03StoreSetupBuilder } from "../../helpers/SweetalertBuilder";
import useForm from "../../hooks/useForm";
import ErrorFlag from "../ErrorFlag";
import ProductCategoryWithImageTagList from "./ProductCategoryWithImageTagList";

const InputProductCategory = ({
  categoryList,
  setCategoryList,
  formChecking,
  setArrProducts,
}) => {
  const [formValues, handleCategoryInputChange, resetForm] = useForm({
    categoryName: "sdsfsdfsdf",
    categoryImage: "",
    imageUrl:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646359679/vefj8oqpik715qwsu8ja.jpg",
  });

  const [errorsState, setErrorsState] = useState(section_03ErrorState);

  const { categoryName, categoryImage } = formValues;

  const handleInputValidation = (e) => {
    handleCategoryInputChange(e);
    section03Validator(e, setErrorsState);

    if (e.target.name === "categoryName") {
      isTheCategoryAlreadyDefined(e.target.value, categoryList, setErrorsState);
    }
  };

  const handleImageToLoad = (e) => {
    e.preventDefault();
    document.getElementById("store-setup__input-category-img").click();
  };

  const handleSubmitNewCategory = (e) => {
    e.preventDefault();
    const errorsReport = formInputCategorySubmitValidation(
      formValues,
      errorsState
    );
    if (errorsReport.hasErrors) {
      sweetalertForErrorsReportInputCategoryForm03StoreSetupBuilder(
        errorsReport
      );
      return;
    }
    const imageFile = document.getElementById("store-setup__input-category-img")
      .files[0];
    uploadFileToCloudinary(imageFile).then((responseImageUrl) => {
      setCategoryList([
        ...categoryList,
        {
          categoryName,
          categoryImage: URL.createObjectURL(imageFile),
          imageUrl: responseImageUrl,
        },
      ]);
    });
    resetForm({
      categoryName: "",
      categoryImage: "",
      imageUrl: "",
    });
    const categoryImage = document.getElementById("product-category-preview");
    categoryImage.src =
      process.env.PUBLIC_URL + "/assets/common/emptyImage.png";
    categoryImage.classList.replace(
      "portrait-preview--with-content",
      "portrait-preview--no-content"
    );
  };

  return (
    <div className="store-setup__product-category-main-container">
      <div className="store-setup__product-category-content">
        <form
          onSubmit={handleSubmitNewCategory}
          className="store-setup__product-category-form"
        >
          <div className="store-setup__product-category-container">
            <label htmlFor="categoryName" className="store-setup__input-label">
              Nombre de la categoria
            </label>
            <input
              type="text"
              name="categoryName"
              id="categoryName"
              className="store-setup__input"
              autoComplete="off"
              value={categoryName}
              onChange={handleInputValidation}
            />
            {errorsState.categoryName.hasErrors && (
              <div
                className="store-setup__product-categories-error-flag"
                style={{ marginTop: "50px", backgroundColor: "blue" }}
              >
                <ErrorFlag
                  message={errorsState.categoryName.message}
                  width="100%"
                />
              </div>
            )}
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
                onClick={handleImageToLoad}
                disabled={!formChecking}
              >
                Carga un archivo
              </button>
              <input
                type="file"
                name="categoryImage"
                className="store-setup__input-images"
                id="store-setup__input-category-img"
                value={categoryImage}
                onChange={handleInputValidation}
              />
            </div>
            {errorsState.categoryImage.hasErrors && (
              <ErrorFlag
                message={errorsState.categoryImage.message}
                width="100%"
              />
            )}
            <img
              src={process.env.PUBLIC_URL + "/assets/common/emptyImage.png"}
              className="portrait-preview--no-content"
              id="product-category-preview"
              alt=" "
            />
            <div className="store-setup__final-form-ind store-setup__final-form-ind--product-category">
              <hr />
            </div>
            <div className="store-setup__centered-container">
              <button
                className="store-setup__button-update"
                type="submit"
                disabled={
                  errorsState.categoryName.hasErrors ||
                  categoryName === "" ||
                  !formChecking
                }
              >
                Agregar nueva categoría
              </button>
            </div>
          </div>
        </form>
        <div className="store-setup__product-category-list-main-container">
          <div className="store-setup__product-category-border-container">
            <h4>Lista Actual de etiquetas</h4>
            <ul>
              {categoryList.length > 0 ? (
                <ProductCategoryWithImageTagList
                  categoryList={categoryList}
                  setCategoryList={setCategoryList}
                  setArrProducts={setArrProducts}
                />
              ) : (
                <ErrorFlag
                  message="Aún no hay etiquetas de productos agregadas, ingresa máximo treinta."
                  width="90%"
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputProductCategory;
