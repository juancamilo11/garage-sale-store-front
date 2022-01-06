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

const FormSection03 = ({ formChecking, setFormsChecking }) => {
  const [formValues, handleInputChange, resetForm] =
    useForm(section_03FormValues);

  const [arrProducts, setArrProducts] = useState([]);

  const [errorsState, setErrorsState] = useState(section_03ErrorState);

  const {
    storeName,
    tag,
    slogan,
    description,
    startingDate,
    endingDate,
    address,
  } = formValues;

  const handleAddNewTag = (e) => {
    const tagInput = document.getElementById("tag");
    const newTag = tagInput.value;
    const cleanEvent = { target: { name: "tag", value: "" } };

    if (!errorsState.tag.hasErrors && newTag.trim() !== "") {
      setTagsList([...tagsList, newTag]);
      handleInputValidation(cleanEvent);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `La etiqueta '${newTag}' no se ha podido ingresar, intenta con otro valor.`,
        showConfirmButton: false,
        timer: 3500,
      }).then((res) => {
        handleInputValidation(cleanEvent);
      });
    }
  };

  const handleInputValidation = (e) => {
    handleInputChange(e);
    section03Validator(e, setErrorsState);
  };

  const handleFormSection_01Submit = (e) => {
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
      <h2 className="store-setup__section-enum">
        3. Creación de los productos para la venta
      </h2>
    </div>
  );
};

export default FormSection03;
