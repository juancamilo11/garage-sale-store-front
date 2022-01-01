import React from "react";

const fakeTags = [
  // "ropa",
  // "juguetes",
  // "adornos",
  // "productos de belleza",
  // "libros",
];

const handleDeleteTag = () => {};

const ProductTagList = ({ tags }) => {
  return (
    <div className="store-setup__product-tags-list">
      {fakeTags.length > 0 ? (
        fakeTags.map((tag) => (
          <div key={tag.id} className="store-setup__tag-item">
            <span className="store-setup__tag-name mb-2">{tag}</span>
            <button
              id={`${tag.id}_button_delete_tag`}
              className="btn btn-danger btn-delete-tag"
              onClick={() => handleDeleteTag()}
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

/*
{tags.length > 0 ? (
              tags.map((tag) => (
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
