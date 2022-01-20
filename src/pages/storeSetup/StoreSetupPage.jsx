import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ErrorFlag from "../../components/ErrorFlag";
import NavBarFormUserData from "../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../components/SectionTitle";
import FinalSectionStoreSetup from "../../components/storeSetup/FinalSectionStoreSetup";
import StoreCreationConfirmation from "../../components/storeSetup/StoreCreationConfirmation";

import FormSection01 from "./FormSection01";
import FormSection02 from "./FormSection02";
import FormSection03 from "./FormSection03";

const StoreSetupPage = () => {
  const [formsChecking, setFormsChecking] = useState({
    formCheckSection01IsValidated: false,
    formCheckSection02IsValidated: false,
    formCheckSection03IsValidated: false,
    creationConfirmationIsConfirmed: false,
  });

  const {
    formCheckSection01IsValidated,
    formCheckSection02IsValidated,
    formCheckSection03IsValidated,
    creationConfirmationIsConfirmed,
  } = formsChecking;

  return (
    <div className="store-setup__main-container">
      <NavBarFormUserData />

      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Creación de una nueva venta de garaje" />
      </div>

      <FormSection01 setFormsChecking={setFormsChecking} />

      <FormSection02
        formChecking={formCheckSection01IsValidated}
        setFormsChecking={setFormsChecking}
      />

      <FormSection03
        formChecking={formCheckSection02IsValidated}
        setFormsChecking={setFormsChecking}
      />

      {formCheckSection03IsValidated && (
        <StoreCreationConfirmation setFormsChecking={setFormsChecking} />
      )}

      {creationConfirmationIsConfirmed && <FinalSectionStoreSetup />}
    </div>
  );
};

export default StoreSetupPage;
