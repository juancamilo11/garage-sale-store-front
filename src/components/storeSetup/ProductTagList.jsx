import React from "react";

const ProductTagList = ({ tags, setTagsList }) => {
  const handleDeleteTag = (tagToDelete) => {
    const newTagList = tags.filter((tag) => tag !== tagToDelete);
    setTagsList(newTagList);
  };

  return (
    <div className="store-setup__product-tags-list">
      <div className="store-setup__left-counting-tags">
        {tags.length > 0 && tags.length < 10 && (
          <div className="alert alert-primary text-center mt-3">
            Debes tener entre <b>tres</b> y <b>diez</b> etiquetas para cada
            producto, aún puedes ingresar {10 - tags.length} etiquetas (Máximo
            diez).
          </div>
        )}
      </div>
      <div className="store-setup__left-counting-tags">
        {tags.length === 10 && (
          <div className="alert alert-primary text-center mt-3">
            Número máximo de etiquetas para este producto alcanzado.
          </div>
        )}
      </div>

      {tags.length > 0 ? (
        tags.map((tag) => (
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

export default ProductTagList;
