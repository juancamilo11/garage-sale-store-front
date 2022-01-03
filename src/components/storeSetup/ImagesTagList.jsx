import React from "react";

const ImagesTagList = ({ images, setImagesList }) => {
  const handleDeleteTag = (tagToDelete) => {
    const newTagList = images.filter((tag) => tag !== tagToDelete);
    setImagesList(newTagList);
  };

  return (
    <div className="store-setup__product-tags-list">
      <div className="store-setup__left-counting-tags">
        {images.length > 0 && images.length < 3 && (
          <div className="alert alert-primary text-center mt-3">
            Aún te faltan {3 - images.length} imágenes de previsualización de la
            tienda por ingresar (Debes ingresar tres).
          </div>
        )}
      </div>

      {images.length > 0 ? (
        images.map((tag) => (
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
          No hay imágenes de previsualización de la tienda, ingresa tres.
        </div>
      )}
    </div>
  );
};

export default ImagesTagList;

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
