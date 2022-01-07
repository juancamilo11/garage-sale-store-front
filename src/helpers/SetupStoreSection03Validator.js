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
