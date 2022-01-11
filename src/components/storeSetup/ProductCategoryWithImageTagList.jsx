import React from "react";

const ProductCategoryWithImageTagList = ({
  categoriesList,
  setCategoriesList,
}) => {
  const handleDeleteTag = (categoryToDelete) => {
    const newCategoryList = categoriesList.filter(
      (category) => category.categoryName !== categoryToDelete
    );
    setCategoriesList(newCategoryList);
  };

  return (
    <div className="store-setup__product-tags-list">
      <div className="store-setup__left-counting-categoriesList">
        {categoriesList.length > 0 && categoriesList.length < 30 && (
          <div className="alert alert-primary text-center mt-3">
            Puedes ingresar {30 - categoriesList.length} más (Máximo treinta)
          </div>
        )}
      </div>
      {categoriesList.length > 0 &&
        categoriesList.map((category) => (
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
            <button
              className="btn btn-danger btn-delete-tag"
              onClick={(e) => handleDeleteTag(category.categoryName)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductCategoryWithImageTagList;
