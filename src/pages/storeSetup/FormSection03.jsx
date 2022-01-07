import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import section01Validator from "../../helpers/SetupStoreSection01Validator";

import { section_01FormValues } from "./../../helpers/SetupStoreSection01Validator";
import { section_01ErrorState } from "./../../helpers/SetupStoreSection01Validator";

import { section_02FormValues } from "./../../helpers/SetupStoreSection02Validator";
import { section_02ErrorState } from "./../../helpers/SetupStoreSection02Validator";

import section03Validator, {
  section_03FormValues,
} from "./../../helpers/SetupStoreSection03Validator";
import { section_03ErrorState } from "./../../helpers/SetupStoreSection03Validator";

import storeSetupReducer from "./../../reducers/storeSetupReducer";
import useForm from "../../hooks/useForm";
import ProductTagList from "../../components/storeSetup/ProductTagList";
import Swal from "sweetalert2";
import InputProductCategory from "../../components/storeSetup/InputProductCategory";

const FormSection03 = ({ formChecking, setFormsChecking }) => {
  const [formValues, handleInputChange, resetForm] =
    useForm(section_03FormValues);

  const [arrProducts, setArrProducts] = useState([]);

  const [errorsState, setErrorsState] = useState(section_03ErrorState);

  const {
    categoryName,
    categoryImage,
    productName,
    category,
    quantity,
    price,
    productState,
    productTags,
    freeShipping,
    productImages,
  } = formValues;

  const handleAddNewTag = (e) => {};

  const handleFormSection_03Submit = (e) => {
    e.preventDefault();
    // const errorReport = Section01Validator(formValues);
    // if (!errorReport.hasErrors()) {
    //   console.log("Los datos han sido actualizados exitosamente.");
    // } else {
    //   //Se muestra un mensaje de error con sweetalert o con toastify
    // }
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(section_03FormValues);
    setErrorsState(section_03ErrorState);
  };

  return (
    <div>
      <h2 className="store-setup__section-enum mb-5 mt-3">
        3. Creación de los productos para la venta
      </h2>
      <InputProductCategory
        handleInputChange={handleInputChange}
        setErrorsState={setErrorsState}
      />
      {/* El form está en el escritorio */}
    </div>
  );
};

export default FormSection03;
