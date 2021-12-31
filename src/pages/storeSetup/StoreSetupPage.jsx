import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ErrorFlag from "../../components/ErrorFlag";
import NavBarFormUserData from "../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../components/SectionTitle";
import userDataFormValidator from "../../helpers/userDataFormValidator";
import useForm from "../../hooks/useForm";
import latamCountries from "./../../helpers/latamCountries";
import FormSection01 from "./FormSection01";
import FormSection02 from "./FormSection02";
import FormSection03 from "./FormSection03";

const section_01InitialFormValues = {
  storeName: "",
  storeProductTags: "",
  slogan: "",
  description: "",
  startingDate: "",
  endingDate: "",
  address: "",
};

const section_02InitialFormValues = {
  storeName: "",
  storeProductTags: "",
  slogan: "",
  description: "",
  startingDate: "",
  endingDate: "",
  address: "",
};

const section_03InitialFormValues = {
  storeName: "",
  storeProductTags: "",
  slogan: "",
  description: "",
  startingDate: "",
  endingDate: "",
  address: "",
};

const StoreSetupPage = () => {
  const [globalFormValues, setGlobalFormValues] = useState({
    section_01InitialFormValues,
    section_02InitialFormValues,
    section_03InitialFormValues,
  });

  return (
    <div className="user-form-data__main-container">
      <NavBarFormUserData />

      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Creación de una nueva venta de garaje" />
      </div>

      <FormSection01
        globalFormStates="globalFormValues"
        setGlobalFormStates="setGlobalFormValues"
      />

      <FormSection02
        globalFormStates="globalFormValues"
        setGlobalFormStates="setGlobalFormValues"
      />

      <FormSection03
        globalFormStates="globalFormValues"
        setGlobalFormStates="setGlobalFormValues"
      />
    </div>
  );
};

export default StoreSetupPage;
