import React from "react";

const ProductCategoryWithImageTagList = ({
  categoriesList,
  setCategoriesList,
}) => {
  const handleDeleteTag = (tagToDelete) => {
    const newTagList = categoriesList.filter((tag) => tag !== tagToDelete);
    setCategoriesList(newTagList);
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
        categoriesList.map((tag) => (
          <div key={tag} className="store-setup__product-tag-item">
            <span className="store-setup__tag-name mb-2">{tag}</span>
            <button
              className="btn btn-danger btn-delete-tag"
              onClick={(e) => handleDeleteTag(tag)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductCategoryWithImageTagList;
