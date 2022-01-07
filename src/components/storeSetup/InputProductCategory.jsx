import React from "react";
import { useState } from "react";
import section03Validator from "../../helpers/SetupStoreSection03Validator";
import useForm from "../../hooks/useForm";

const InputProductCategory = ({
  categoriesList,
  setCategoriesList,
  setErrorsState,
}) => {
  const handleInputValidation = (e) => {
    handleCategoryInputChange(e);
    section03Validator(e, setErrorsState);
  };

  const [formValues, handleCategoryInputChange, resetForm] = useForm({
    categoryName: "",
    categoryImage: "",
  });

  const { categoryName, categoryImage } = formValues;

  const handleImageToLoad = (e) => {
    e.preventDefault();
    document.getElementById("store-setup__input-category-img").click();
  };

  const handleSubmitNewCategory = (e) => {
    e.preventDefault();
  };

  return (
    <div className="store-setup__product-category-main-container">
      <div className="store-setup__product-category-content">
        <form
          onsubmit={handleSubmitNewCategory}
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

            <div className="store-setup__centered-container">
              <button className="store-setup__button-update" type="submit">
                Agregar nueva categoría
              </button>
            </div>
          </div>
        </form>
        <div className="store-setup__product-category-list-container">
          <h4>Lista Actual de etiquetas</h4>
          <ul className="store-setup__product-category-list">
            <li className="store-setup__product-category-item">Camisas</li>
            <li className="store-setup__product-category-item">Accesorios</li>
            <li className="store-setup__product-category-item">Juguetes</li>
            <li className="store-setup__product-category-item">A. Belleza</li>
            <li className="store-setup__product-category-item">Zapatos</li>
            <li className="store-setup__product-category-item">Libros</li>
            <li className="store-setup__product-category-item">Miscelánea</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InputProductCategory;
