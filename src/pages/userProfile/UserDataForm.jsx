import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUpdateUserInformation } from "../../actions/usersActions";
import ErrorFlag from "../../components/ErrorFlag";
import NavBarFormUserData from "../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../components/SectionTitle";
import { colombianStatesList } from "../../helpers/colombianStatesList";
import { sweetalertForErrorsReportUserDataFormBuilder } from "../../helpers/SweetalertBuilder";
import userDataFormValidator, {
  userDataFormSubmitValidation,
  userFormDataInitialErrorsState,
  userFormDataInitialFormValues,
} from "../../helpers/userDataFormValidator";
import useForm from "../../hooks/useForm";

const UserDataForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [formValues, handleInputChange, resetForm] = useForm(
    userFormDataInitialFormValues(auth)
  );
  const [errorsState, setErrorsState] = useState(
    userFormDataInitialErrorsState
  );

  const {
    // id,
    name,
    occupation,
    cellphone,
    email,
    postalCode,
    colombianState,
    phone,
    address,
    dateOfBirth,
    registerDate,
  } = formValues;

  const handleInputValidation = (e) => {
    handleInputChange(e);
    userDataFormValidator(e, setErrorsState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsReport = userDataFormSubmitValidation(formValues, errorsState);
    if (errorsReport.hasErrors) {
      sweetalertForErrorsReportUserDataFormBuilder(errorsReport);
      return;
    }
    dispatch(startUpdateUserInformation(formValues));
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    resetForm(userFormDataInitialFormValues(auth));
    setErrorsState(userFormDataInitialErrorsState);
  };

  return (
    <div className="user-form-data__main-container">
      <NavBarFormUserData />
      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Edici??n de datos personales" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="user-form-data__form-container">
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                Nombre
              </label>
              <input
                type="text"
                readOnly
                name="name"
                id="name"
                value={name}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="occupation"
                className="user-form-data__input-label"
              >
                Ocupaci??n
              </label>
              <input
                type="text"
                name="occupation"
                id="occupation"
                value={occupation}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.occupation.hasErrors && (
                <ErrorFlag
                  message={errorsState.occupation.message}
                  width="93%"
                />
              )}
            </div>

            <div className="user-form-data__input-container">
              <label
                htmlFor="cellphone"
                className="user-form-data__input-label"
              >
                Tel??fono
              </label>
              <input
                type="text"
                name="cellphone"
                id="cellphone"
                value={cellphone}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.cellphone.hasErrors && (
                <ErrorFlag
                  message={errorsState.cellphone.message}
                  width="93%"
                />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="email" className="user-form-data__input-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className="user-form-data__input"
                autoComplete="off"
                readOnly
              />
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="postalCode"
                className="user-form-data__input-label"
              >
                C??digo Postal
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={postalCode}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.postalCode.hasErrors && (
                <ErrorFlag
                  message={errorsState.postalCode.message}
                  width="93%"
                />
              )}
            </div>
          </div>
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label
                htmlFor="colombianState"
                className="user-form-data__input-label"
              >
                Departamento de Residencia
              </label>
              <select
                type="select"
                name="colombianState"
                id="colombianState"
                value={colombianState}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              >
                <option value="NN">Seleccione el departamento</option>
                {colombianStatesList.map((state) => (
                  <option key={state.id} value={state.value}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.colombianState.hasErrors && (
                <ErrorFlag
                  message={errorsState.colombianState.message}
                  width="93%"
                />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="phone" className="user-form-data__input-label">
                Celular
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.phone.hasErrors && (
                <ErrorFlag message={errorsState.phone.message} width="93%" />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="address" className="user-form-data__input-label">
                Direcci??n
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.address.hasErrors && (
                <ErrorFlag message={errorsState.address.message} width="93%" />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="dateOfBirth"
                className="user-form-data__input-label"
              >
                F. de Nacimiento
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={handleInputValidation}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__error-flag">
              {errorsState.dateOfBirth.hasErrors && (
                <ErrorFlag
                  message={errorsState.dateOfBirth.message}
                  width="93%"
                />
              )}
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="registerDate"
                className="user-form-data__input-label"
              >
                F. de registro
              </label>
              <input
                type="date"
                name="registerDate"
                id="registerDate"
                value={registerDate}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="user-form-data__centered-container">
          <div className="user-form-data__buttons-container">
            <button className="user-form-data__button-update" type="submit">
              Actualizar datos
            </button>
            <button
              className="user-form-data__button-update"
              onClick={handleResetForm}
            >
              Resetear los datos
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;
