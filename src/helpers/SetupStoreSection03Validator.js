//Initial values for the section #3 form of the store setup's.
export const section_03FormValues = {
  productName: "",
  category: "",
  quantity: "",
  price: "",
  productState: "",
  productTags: "",
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
  productState: { hasErrors: false, message: "" },
  productTags: { hasErrors: false, message: "" },
  freeShipping: { hasErrors: false, message: "" },
  productImages: { hasErrors: false, message: "" },
};

const section03Validator = (e, setErrorsState) => {
  const { name: fieldName, value } = e.target;
  switch (fieldName) {
    case "categoryName":
      handleCategoryNameValidation(value, setErrorsState);
      break;
    case "categoryImage":
      handleCategoryImageValidation(value, setErrorsState);
      break;
    case "productName":
      handleproductNameValidation(value, setErrorsState);
      break;
    case "category":
      handlecategoryValidation(value, setErrorsState);
      break;
    case "quantity":
      handlequantityValidation(value, setErrorsState);
      break;
    case "price":
      handlepriceValidation(value, setErrorsState);
      break;
    case "productState":
      handleproductStateValidation(value, setErrorsState);
      break;
    case "productTags":
      handleproductTagsValidation(value, setErrorsState);
      break;
    case "freeShipping":
      handlefreeShippingValidation(value, setErrorsState);
      break;
    case "productImages":
      handleproductImagesValidation(value, setErrorsState);
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
      category.categoryName.trim().toLowerCase() ===
      categoryName.trim().toLowerCase()
  );
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
        ["portraitUrl"]: {
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
  const imagePreview = document.getElementById("portrait-preview");
  imagePreview.src = URL.createObjectURL(file);
  imagePreview.classList.replace(
    "portrait-preview--no-content",
    "portrait-preview--with-content"
  );
  setErrorsState((state) => {
    return {
      ...state,
      ["portraitUrl"]: { hasErrors: false, message: "", hasContent: true },
    };
  });
};

const handleproductNameValidation = (value, setErrorsState) => {
  //toDo
};
const handlecategoryValidation = (value, setErrorsState) => {
  //toDo
};
const handlequantityValidation = (value, setErrorsState) => {
  //toDo
};
const handlepriceValidation = (value, setErrorsState) => {
  //toDo
};
const handleproductStateValidation = (value, setErrorsState) => {
  //toDo
};
const handleproductTagsValidation = (value, setErrorsState) => {
  //toDo
};
const handlefreeShippingValidation = (value, setErrorsState) => {
  //toDo
};
const handleproductImagesValidation = (value, setErrorsState) => {
  //toDo
};

export default section03Validator;
