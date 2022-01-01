import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ErrorFlag from "../../components/ErrorFlag";
import NavBarFormUserData from "../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../components/SectionTitle";
import section_01FormValues from "./../../helpers/SetupStoreSection01Validator";
import section_02FormValues from "./../../helpers/SetupStoreSection02Validator";
import section_03FormValues from "./../../helpers/SetupStoreSection03Validator";

import FormSection01 from "./FormSection01";
import FormSection02 from "./FormSection02";
import FormSection03 from "./FormSection03";

const StoreSetupPage = () => {
  const [globalFormValues, setGlobalFormValues] = useState({
    section_01FormValues,
    section_02FormValues,
    section_03FormValues,
  });

  return (
    <div className="user-form-data__main-container">
      <NavBarFormUserData />

      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Creación de una nueva venta de garaje" />
      </div>

      <FormSection01
        formStateSection01={globalFormValues.section_01FormValues}
        setGlobalFormStates={setGlobalFormValues}
      />

      <FormSection02
        formStateSection02={globalFormValues.section_02FormValues}
        setGlobalFormStates={setGlobalFormValues}
      />

      <FormSection03
        formStateSection03={globalFormValues.section_03FormValues}
        setGlobalFormStates={setGlobalFormValues}
      />
    </div>
  );
};

export default StoreSetupPage;
