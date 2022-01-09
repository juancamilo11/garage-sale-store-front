import React from "react";
import { useState } from "react";
import section03Validator, {
  isTheCategoryAlreadyDefined,
} from "../../helpers/SetupStoreSection03Validator";
import useForm from "../../hooks/useForm";
import ErrorFlag from "../ErrorFlag";
import ProductCategoryWithImageTagList from "./ProductCategoryWithImageTagList";
import ProductWithImageTagList from "./ProductCategoryWithImageTagList";

const InputProductCategory = ({
  categoriesList,
  setCategoriesList,
  errorsState,
  setErrorsState,
}) => {
  const [formValues, handleCategoryInputChange, resetForm] = useForm({
    categoryName: "",
    categoryImage: "",
  });
  const { categoryName, categoryImage } = formValues;

  const handleInputValidation = (e) => {
    handleCategoryInputChange(e);
    section03Validator(e, setErrorsState);

    if (e.target.name === "categoryName") {
      isTheCategoryAlreadyDefined(
        e.target.value,
        categoriesList,
        setErrorsState
      );
    }
  };

  const handleImageToLoad = (e) => {
    e.preventDefault();
    document.getElementById("store-setup__input-category-img").click();
  };

  const handleSubmitNewCategory = (e) => {
    e.preventDefault();
    if (
      !errorsState.categoryName.hasErrors &&
      !errorsState.categoryImage.hasErrors
    ) {
      const imageFile = document.getElementById(
        "store-setup__input-category-img"
      ).files[0];
      setCategoriesList([
        ...categoriesList,
        { categoryName, categoryImage: URL.createObjectURL(imageFile) },
      ]);
      resetForm({
        categoryName: "",
        categoryImage: "",
      });
      const categoryImage = document.getElementById(
        "store-setup__input-category-img"
      ).files[0];
      categoryImage.src = "./../../assets/img/store-setup/emptyImage.png";
    }
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
              <ErrorFlag
                message={errorsState.categoryName.message}
                width="100%"
              />
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
              <button className="store-setup__button-update" type="submit">
                Agregar nueva categoría
              </button>
            </div>
          </div>
        </form>
        <div className="store-setup__product-category-list-main-container">
          <div className="store-setup__product-category-border-container">
            <h4>Lista Actual de etiquetas</h4>
            <ul>
              {categoriesList.length > 0 ? (
                <ProductCategoryWithImageTagList
                  categoriesList={categoriesList}
                  setCategoriesList={setCategoriesList}
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
