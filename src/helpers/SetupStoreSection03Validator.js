//Initial values for the section #3 form of the store setup's.
export const section_03FormValues = {
  productName: "",
  category: "",
  quantity: "",
  price: "",
  currency: "",
  productState: "",
  productTag: "",
  freeShipping: "",
  productImages: [],
};

//Initial values for the section #3 errors of the store setup's.
export const section_03ErrorState = {
  categoryName: { hasErrors: false, message: "" },
  categoryImage: { hasErrors: false, message: "" },
  productName: { hasErrors: false, message: "" },
  category: { hasErrors: false, message: "" },
  quantity: { hasErrors: false, message: "" },
  price: { hasErrors: false, message: "" },
  currency: { hasErrors: false, message: "" },
  productState: { hasErrors: false, message: "" },
  productTag: { hasErrors: false, message: "" },
  freeShipping: { hasErrors: false, message: "" },
  productImages: { hasErrors: false, message: "" },
};

const section03Validator = (e, setErrorsState) => {
  const { name: fieldName, value, files } = e.target;
  switch (fieldName) {
    case "categoryName":
      handleCategoryNameValidation(value, setErrorsState);
      break;
    case "categoryImage":
      handleCategoryImageValidation(files[0], setErrorsState);
      break;
    case "productName":
      handleProductNameValidation(value, setErrorsState);
      break;
    case "category":
      handleCategoryValidation(value, setErrorsState);
      break;
    case "quantity":
      handleQuantityValidation(value, setErrorsState);
      break;
    case "price":
      handlePriceValidation(value, setErrorsState);
      break;
    case "currency":
      handleCurrencyValidation(value, setErrorsState);
      break;
    case "productState":
      handleProductStateValidation(value, setErrorsState);
      break;
    case "productTag":
      handleProductTagValidation(value, setErrorsState);
      break;
    case "freeShipping":
      handleFreeShippingValidation(value, setErrorsState);
      break;
    case "productImages":
      handleProductImagesValidation(files, setErrorsState);
      break;
    default:
      break;
  }
};

const sendImageToCloudinary = () => {};

export const isTheCategoryAlreadyDefined = (
  categoryName,
  categoryList,
  setErrorsState
) => {
  const arrFiltered = categoryList.filter(
    (category) =>
      category.categoryName.trim().toLowerCase() !==
      categoryName.trim().toLowerCase()
  );
  console.log(categoryList);
  console.log(arrFiltered);
  if (arrFiltered.length !== categoryList.length) {
    setErrorsState((state) => {
      return {
        ...state,
        ["categoryName"]: {
          hasErrors: true,
          message: `El nombre de la categoría ${categoryName} ya ha sido ingresado, intente con otro`,
        },
      };
    });
  }
};

const handleCategoryNameValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 3 && value.trim().length <= 20) ||
    value.trim() === ""
  ) {
    setErrorsState((state) => {
      return { ...state, ["categoryName"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["categoryName"]: {
          hasErrors: true,
          message:
            "El nombre de la categoría debe tener entre 3 y 20 caracteres.",
        },
      };
    });
  }
};

const handleCategoryImageValidation = (file, setErrorsState) => {
  if (!file?.type.startsWith("image")) {
    const imagePreview = document.getElementById("product-category-preview");
    imagePreview.setAttribute("src", "/assets/common/emptyImage.png");
    imagePreview.classList.replace(
      "portrait-preview--with-content",
      "portrait-preview--no-content"
    );
    setErrorsState((state) => {
      return {
        ...state,
        ["categoryImage"]: {
          hasErrors: true,
          message:
            "Error: El archivo ingresado no es una imágen, por favor suba un archivo con formato correcto.",
          hasContent: false,
        },
      };
    });
    return;
  }

  //Enviar la imagen a cloudinary y en base a la peticion hacer lo siguiente.
  sendImageToCloudinary();
  const imagePreview = document.getElementById("product-category-preview");
  imagePreview.src = URL.createObjectURL(file);
  imagePreview.classList.replace(
    "portrait-preview--no-content",
    "portrait-preview--with-content"
  );
  setErrorsState((state) => {
    return {
      ...state,
      ["categoryImage"]: { hasErrors: false, message: "", hasContent: true },
    };
  });
};

const handleProductNameValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 8 && value.trim().length <= 30) ||
    value.trim() === ""
  ) {
    setErrorsState((state) => {
      return { ...state, ["productName"]: { hasErrors: false, message: "" } };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["productName"]: {
          hasErrors: true,
          message: "El nombre del producto debe tener entre 8 y 30 caracteres.",
        },
      };
    });
  }
};

const handleCategoryValidation = (value, setErrorsState) => {
  console.log("//////////////////" + value);
  // if (
  //   (value.trim().length >= 8 && value.trim().length <= 30) ||
  //   value.trim() === ""
  // ) {
  //   setErrorsState((state) => {
  //     return { ...state, ["category"]: { hasErrors: false, message: "" } };
  //   });
  // } else {
  //   setErrorsState((state) => {
  //     return {
  //       ...state,
  //       ["category"]: {
  //         hasErrors: true,
  //         message: "El nombre del producto debe tener entre 8 y 30 caracteres.",
  //       },
  //     };
  //   });
  // }
};
const handleQuantityValidation = (value, setErrorsState) => {
  //toDo
};
const handlePriceValidation = (value, setErrorsState) => {
  //toDo
};

const handleCurrencyValidation = (value, setErrorsState) => {
  //toDo
};

const handleProductStateValidation = (value, setErrorsState) => {
  //toDo
};
const handleProductTagValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 3 && value.trim().length <= 20) ||
    value.trim().length === 0
  ) {
    setErrorsState((state) => {
      return {
        ...state,
        ["productTag"]: { hasErrors: false, message: "" },
      };
    });
  } else {
    setErrorsState((state) => {
      return {
        ...state,
        ["productTag"]: {
          hasErrors: true,
          message:
            "El nombre de la etiqueta de un producto debe tener entre 3 y 20 caracteres.",
        },
      };
    });
  }
};
const handleFreeShippingValidation = (value, setErrorsState) => {
  //toDo
};
const handleProductImagesValidation = (arrFiles, setErrorsState) => {
  if (arrFiles.length < 3 || arrFiles.length > 5) {
    setErrorsState((state) => {
      return {
        ...state,
        ["productImages"]: {
          hasErrors: true,
          message:
            "Error: Ha ingresado una cantidad inválida de imágenes del producto, se deben subir entre tres y cinco imágenes.",
          hasContent: false,
        },
      };
    });
    return;
  }
  //arrFiles es de tipo FileList, no deriva de Array (pero si es iterable), por ende
  //se debe generar un array para poder recorrer este objeto
  if (
    !new Array(arrFiles.length)
      .fill(0)
      .every((num, index) => arrFiles.item(index).type.startsWith("image"))
  ) {
    new Array(arrFiles.length).fill(0).forEach((num, index) => {
      const imagePreview = document.getElementById(
        `${"product-previsualization-preview" + (index + 1)}`
      );
      imagePreview.setAttribute("src", "/assets/common/emptyImage.png");
      imagePreview.classList.replace(
        "product-preview--with-content",
        "product-preview--no-content"
      );
    });
    setErrorsState((state) => {
      return {
        ...state,
        ["productImages"]: {
          hasErrors: true,
          message:
            "Error: Ha ingresado un archivo inválido, por favor ingrese solamente imágenes.",
          hasContent: false,
        },
      };
    });
    return;
  }

  //En este punto ya todo está bien validado

  //Enviar la imagen a cloudinary y en base a la peticion hacer lo siguiente.
  sendImageToCloudinary();

  new Array(arrFiles.length).fill(0).forEach((num, index) => {
    const imagePreview = document.getElementById(
      `${"product-previsualization-preview" + (index + 1)}`
    );
    imagePreview.src = URL.createObjectURL(arrFiles.item(index));
    imagePreview.classList.replace(
      "product-preview--no-content",
      "product-preview--with-content"
    );
  });
};

export default section03Validator;
