import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ErrorFlag from "../../components/ErrorFlag";
import NavBarFormUserData from "../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../components/SectionTitle";

import FormSection01 from "./FormSection01";
import FormSection02 from "./FormSection02";
import FormSection03 from "./FormSection03";

const StoreSetupPage = () => {
  const [formsChecking, setFormsChecking] = useState({
    formSection01: { isValidated: true },
    formSection02: { isValidated: false },
    formSection03: { isValidated: false },
  });

  const { formSection01, formSection02, formSection03 } = formsChecking;

  return (
    <div className="user-form-data__main-container">
      <NavBarFormUserData />

      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Creación de una nueva venta de garaje" />
      </div>

      <FormSection01
        formChecking={formSection01}
        setFormsChecking={setFormsChecking}
      />

      {formSection01.isValidated && (
        <FormSection02
          formChecking={formSection02}
          setFormsChecking={setFormsChecking}
        />
      )}

      {formSection01.isValidated && formSection02.isValidated && (
        <FormSection03
          formChecking={formSection03}
          setFormsChecking={setFormsChecking}
        />
      )}

      {formSection01.isValidated &&
        formSection02.isValidated &&
        formSection03.isValidated && <button>Crear tienda</button>}
    </div>
  );
};

export default StoreSetupPage;
