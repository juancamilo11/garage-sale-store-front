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
    <div className="store-setup__product-categoriesList-list">
      <div className="store-setup__left-counting-categoriesList">
        {categoriesList.length > 0 && categoriesList.length < 3 && (
          <div className="alert alert-primary text-center mt-3">
            Aún te faltan {3 - categoriesList.length} etiquetas por ingresar
            (Mínimo tres)
          </div>
        )}
      </div>

      {categoriesList.length > 0 ? (
        categoriesList.map((tag) => (
          <div key={tag} className="store-setup__tag-item">
            <span className="store-setup__tag-name mb-2">{tag}</span>
            <button
              className="btn btn-danger btn-delete-tag"
              onClick={(e) => handleDeleteTag(tag)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))
      ) : (
        <div className="alert alert-primary text-center mt-3">
          No hay etiquetas de productos para la nueva tienda, ingresa por lo
          menos tres.
        </div>
      )}
    </div>
  );
};

export default ProductCategoryWithImageTagList;

/*
{categoriesList.length > 0 ? (
              categoriesList.map((tag) => (
                <div key={tag.id} className="training__tag-selected">
                  <span className="text-center mb-3">{tag.name}</span>
                  <button
                    id={`${tag.id}_button_delete_tag`}
                    className="btn btn-danger btn-delete-tag"
                    onClick={() =>
                      handleUnselecttag(
                        tag.id,
                        settagesList,
                        handleInputChange,
                        tagesList,
                        tages
                      )
                    }
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))
            ) : (
              <div className="alert alert-primary text-center training__alert-primary mt-5 b-5">
                No hay tages asignados para el training
              </div>
            )}
*/
