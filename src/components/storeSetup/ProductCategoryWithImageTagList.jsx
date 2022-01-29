import React from "react";
import { sweetalertForCategoryDeleteConfirmationForm03StoreSetupBuilder } from "../../helpers/SweetalertBuilder";

const ProductCategoryWithImageTagList = ({ categoryList, setCategoryList }) => {
  const handleDeleteTag = (categoryToDelete) => {
    sweetalertForCategoryDeleteConfirmationForm03StoreSetupBuilder(
      categoryToDelete
    ).then((response) => {
      if (response.isConfirmed) {
        const newCategoryList = categoryList.filter(
          (category) => category.categoryName !== categoryToDelete.categoryName
        );
        setCategoryList(newCategoryList);
        //toDo -> Delete category image from cloudinary
      }
    });
  };

  return (
    <div className="store-setup__product-tags-list">
      <div className="store-setup__left-counting-categoryList">
        {categoryList.length > 0 && categoryList.length < 30 && (
          <div className="alert alert-primary text-center mt-3">
            Puedes ingresar {30 - categoryList.length} más (Máximo treinta)
          </div>
        )}
      </div>
      {categoryList.length > 0 &&
        categoryList.map((category) => (
          <div
            key={category.categoryName}
            className="store-setup__product-tag-item"
          >
            <span className="store-setup__tag-name mb-2">
              {category.categoryName}
            </span>
            <img
              src={`${category.categoryImage}`}
              alt=" "
              width="70px"
              height="70px"
              className="my-2"
            />
            <a href={category.imageUrl} target="_blank">
              <i
                class="fas fa-external-link-alt"
                title="Ver imágen en tamaño grande"
              ></i>
            </a>
            <button
              className="btn btn-danger btn-delete-tag"
              onClick={(e) => handleDeleteTag(category)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductCategoryWithImageTagList;
