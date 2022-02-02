import React, { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ErrorFlag from "../../components/ErrorFlag";
import NavBarFormUserData from "../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../components/SectionTitle";
import FinalSectionStoreSetup from "../../components/storeSetup/FinalSectionStoreSetup";
import StoreCreationConfirmation from "../../components/storeSetup/StoreCreationConfirmation";
import storeSetupReducer from "../../reducers/storeSetupReducer";

import FormSection01 from "./FormSection01";
import FormSection02 from "./FormSection02";
import FormSection03 from "./FormSection03";

const StoreSetupPage = () => {
  const state = useSelector((state) => state.storeSetup);

  return (
    <div className="store-setup__main-container">
      <NavBarFormUserData />

      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Creación de una nueva venta de garaje" />
      </div>

      <FormSection01 />

      <FormSection02 />

      <FormSection03 />

      {formCheckSection03IsValidated && (
        <StoreCreationConfirmation setFormsChecking={setFormsChecking} />
      )}

      {creationConfirmationIsConfirmed && (
        <FinalSectionStoreSetup newStoreDataState={newStoreDataState} />
      )}
    </div>
  );
};

export default StoreSetupPage;
