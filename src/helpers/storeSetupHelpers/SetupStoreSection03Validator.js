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

const sendImageToCloudinary = () => {
  //no impl yet
};

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
    console.log(file);
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
  //no impl yet
};
const handleQuantityValidation = (value, setErrorsState) => {
  const quantity = parseInt(value);
  if (value.trim().length === 0) {
    setErrorsState((state) => {
      return { ...state, ["quantity"]: { hasErrors: false, message: "" } };
    });
    return;
  }
  if (quantity <= 0) {
    setErrorsState((state) => {
      return {
        ...state,
        ["quantity"]: {
          hasErrors: true,
          message:
            "La cantidad de productos en venta de este producto debe ser mayor que 0.",
        },
      };
    });
  }
};

const handlePriceValidation = (value, setErrorsState) => {
  const price = parseInt(value);
  if (value.trim().length === 0) {
    setErrorsState((state) => {
      return { ...state, ["price"]: { hasErrors: false, message: "" } };
    });
    return;
  }
  if (price <= 0.0) {
    setErrorsState((state) => {
      return {
        ...state,
        ["price"]: {
          hasErrors: true,
          message:
            "El precio unitario de venta de este producto debe ser mayor que 0.",
        },
      };
    });
  }
};

const handleCurrencyValidation = (value, setErrorsState) => {
  //no impl yet
};

const handleProductStateValidation = (value, setErrorsState) => {
  //no impl yet
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
  setErrorsState((state) => {
    return {
      ...state,
      ["productImages"]: {
        hasErrors: false,
        message: "",
        hasContent: true,
      },
    };
  });
};

export const formInputCategorySubmitValidation = (formValues, errorsState) => {
  let errorsReport = { hasErrors: false };

  const { categoryName } = formValues;

  if (categoryName === "" || errorsState.categoryName.hasErrors) {
    errorsReport = {
      ...errorsReport,
      categoryName: "Has dejado el nombre de la categoría vacío o con errores",
      hasErrors: true,
    };
  }
  if (errorsState.categoryImage.hasErrors) {
    errorsReport = {
      ...errorsReport,
      categoryImage: "La imágen representativa de la categoría tiene errores",
      hasErrors: true,
    };
  }
  return errorsReport;
};

export const form03SubmitValidation = (
  formValues,
  errorsState,
  setErrorsState,
  productTagList
) => {
  const {
    productName,
    category,
    currency,
    quantity,
    price,
    productState,
    freeShipping,
    // productTag,
    productImages,
  } = formValues;

  let errorsReport = { hasErrors: false };

  if (productName === "" || errorsState.productName.hasErrors) {
    errorsReport = {
      ...errorsReport,
      productName: "Has dejado el nombre del producto vacío o con errores",
      hasErrors: true,
    };
  }

  if (!category) {
    setErrorsState((state) => {
      return {
        ...state,
        ["category"]: {
          hasErrors: true,
          message: "No has seleccionado categoría para el producto",
        },
      };
    });
  }

  if (errorsState.category.hasErrors) {
    errorsReport = {
      ...errorsReport,
      category: "No ha seleccionado categoría para el producto",
      hasErrors: true,
    };
  }

  if (!currency) {
    setErrorsState((state) => {
      return {
        ...state,
        ["currency"]: {
          hasErrors: true,
          message: "No ha seleccionado la moneda para el precio del producto",
        },
      };
    });
  }

  if (errorsState.currency.hasErrors) {
    errorsReport = {
      ...errorsReport,
      currency: "No ha seleccionado la moneda base para el precio del producto",
      hasErrors: true,
    };
  }

  if (quantity === "" || errorsState.quantity.hasErrors) {
    errorsReport = {
      ...errorsReport,
      quantity:
        "Has dejado la cantidad existente del producto vacía o con errores",
      hasErrors: true,
    };
  }

  if (price === "" || errorsState.price.hasErrors) {
    errorsReport = {
      ...errorsReport,
      price: "Has dejado el precio del producto vacío o con errores",
      hasErrors: true,
    };
  }

  if (productState === 0) {
    //0 === no product state selected
    setErrorsState((state) => {
      return {
        ...state,
        ["productState"]: {
          hasErrors: true,
          message: "No has seleccionado el estado actual del producto",
        },
      };
    });
  }

  if (errorsState.productState.hasErrors) {
    errorsReport = {
      ...errorsReport,
      productState: "No has seleccionado el estado actual del producto",
      hasErrors: true,
    };
  }

  if (freeShipping === "") {
    setErrorsState((state) => {
      return {
        ...state,
        ["freeShipping"]: {
          hasErrors: true,
          message:
            "No has seleccionado una opción para el tipo de envío del producto",
        },
      };
    });
  }

  if (errorsState.freeShipping.hasErrors) {
    errorsReport = {
      ...errorsReport,
      freeShipping:
        "No has seleccionado una opción para el tipo de envío del producto",
      hasErrors: true,
    };
  }

  if (errorsState.productTag.hasErrors) {
    errorsReport = {
      ...errorsReport,
      productTag: "La etiqueta del producto que estás ingresando es inválida",
      hasErrors: true,
    };
  }

  if (productTagList.length < 3 || productTagList.length > 10) {
    errorsReport = {
      ...errorsReport,
      productTag: "Debes ingresar entre 3 y 10 etiquetas por producto",
      hasErrors: true,
    };
  }

  if (errorsState.productImages.hasErrors) {
    errorsReport = {
      ...errorsReport,
      productImages: "Debes ingresar como entre 3 y 5 imágenes del producto",
      hasErrors: true,
    };
  }

  return errorsReport;
};

export default section03Validator;
