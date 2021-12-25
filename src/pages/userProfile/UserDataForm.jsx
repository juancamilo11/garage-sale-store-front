import React from "react";
import SectionTitle from "../../components/gui/SectionTitle";

const UserDataForm = () => {
  const handleSubmit = () => {};

  return (
    <div className="user-form-data__main-container">
      <div className="user-form-data__section-title">
        <SectionTitle sectionTitle="Edición de datos personales" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="user-form-data__form-container">
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                Nombre
              </label>
              <input
                autoFocus="true"
                type="text"
                name="name"
                id="name"
                valie=""
                // onChange={}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__input-container">
              <label
                htmlFor="cellphone"
                className="user-form-data__input-label"
              >
                Teléfono
              </label>
              <input
                type="text"
                name="cellphone"
                id="cellphone"
                value=""
                // onChange={}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="email" className="user-form-data__input-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value=""
                // onChange={}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                Código Postal
              </label>
              <input
                type="text"
                name="codPostal"
                id="codPostal"
                value=""
                // onChange={}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="user-form-data__inputs-container">
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                País
              </label>
              <select
                type="select"
                name="country"
                id="country"
                value=""
                onChange=""
                className="user-form-data__input"
                autoComplete="off"
              >
                <option
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/assets/user-profile/user-home-photo.jpg"
                    })`,
                  }}
                >
                  Colombia
                </option>
              </select>
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value=""
                // onChange={}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                Fecha de Nacimiento:
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value=""
                // onChange={}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
            <div className="user-form-data__input-container">
              <label htmlFor="name" className="user-form-data__input-label">
                Fecha de registro
              </label>
              <input
                type="date"
                name="registerDate"
                id="registerDate"
                value=""
                // onChange={}
                className="user-form-data__input"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="user-form-data__centered-container">
          <button className="user-form-data__button-update" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;
