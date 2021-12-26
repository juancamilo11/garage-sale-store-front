import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorFlag from "./ErrorFlag";

const userData = {
  name: "Juan Camilo Cardona",
  email: "juancamilo19997814@gmail.com",
  cellphone: "(4) 5537781",
  phone: "",
  dateOfBirth: "",
  dateRegistred: "2021-12-15",
  address: "Crra 14# 8-21 Barrio el divino niño",
  postalCode: "055010",
};

const UserPersonalData = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const showUserFormData = () => {
    navigate("/user-data-form");
  };

  return (
    <div className="userprofile__data-main-container">
      {(userData.cellphone === "" ||
        userData.phone === "" ||
        userData.dateOfBirth === "" ||
        userData.address === "" ||
        userData.postalCode === "") && (
        <ErrorFlag
          message="Aún te faltan datos personales por especificar"
          width="100%"
        />
      )}

      <table className="userprofile__data-table">
        <tr className="userprofile__table-row">
          <td className="userprofile__table-item">
            <div className="userprofile__item-container">
              <i className="fas fa-user-circle userprofile__data-item-icon"></i>
              <div className="userprofile__data-item">
                <h4 className="userprofile__data-title">Nombre</h4>
                <span className="userprofile__data-item-value">
                  {auth.name}
                </span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <td className="userprofile__table-item">
                <div className="userprofile__item-container">
                  <i className="fas fa-envelope-open-text userprofile__data-item-icon"></i>
                  <div className="userprofile__data-item">
                    <h4 className="userprofile__data-title">
                      Correo electrónico
                    </h4>
                    <span className="userprofile__data-item-value">
                      {userData.email}
                    </span>
                  </div>
                </div>
              </td>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div>
              <td className="userprofile__table-item">
                <div className="userprofile__item-container">
                  <i className="fas fa-phone-square userprofile__data-item-icon"></i>
                  <div className="userprofile__data-item">
                    <h4 className="userprofile__data-title">Teléfono</h4>
                    <span className="userprofile__data-item-value">
                      {userData.cellphone}
                    </span>
                  </div>
                </div>
              </td>
            </div>
          </td>
          <td>
            <div>
              <td className="userprofile__table-item">
                <div className="userprofile__item-container">
                  <i className="fas fa-calendar-alt userprofile__data-item-icon"></i>
                  <div className="userprofile__data-item">
                    <h4 className="userprofile__data-title">
                      Fecha de nacimiento
                    </h4>
                    <span className="userprofile__data-item-value">
                      {userData.dateOfBirth}
                    </span>
                  </div>
                </div>
              </td>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div>
              <td className="userprofile__table-item">
                <div className="userprofile__item-container">
                  <i className="fas fa-mobile-alt userprofile__data-item-icon"></i>
                  <div className="userprofile__data-item">
                    <h4 className="userprofile__data-title">Celular</h4>
                    <span className="userprofile__data-item-value">
                      {userData.phone}
                    </span>
                  </div>
                </div>
              </td>
            </div>
          </td>
          <td>
            <div>
              <td className="userprofile__table-item">
                <div className="userprofile__item-container">
                  <i className="fas fa-user-plus userprofile__data-item-icon"></i>
                  <div className="userprofile__data-item">
                    <h4 className="userprofile__data-title">
                      Fecha de registro
                    </h4>
                    <span className="userprofile__data-item-value">
                      {userData.dateRegistred}
                    </span>
                  </div>
                </div>
              </td>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div>
              <td className="userprofile__table-item">
                <div className="userprofile__item-container">
                  <i className="fas fa-home userprofile__data-item-icon"></i>
                  <div className="userprofile__data-item">
                    <h4 className="userprofile__data-title">Dirección</h4>
                    <span className="userprofile__data-item-value">
                      {userData.address}
                    </span>
                  </div>
                </div>
              </td>
            </div>
          </td>
          <td>
            <div>
              <td className="userprofile__table-item">
                <div className="userprofile__item-container">
                  <i className="fas fa-mail-bulk userprofile__data-item-icon"></i>
                  <div className="userprofile__data-item">
                    <h4 className="userprofile__data-title">Código Postal</h4>
                    <span className="userprofile__data-item-value">
                      {userData.postalCode}
                    </span>
                  </div>
                </div>
              </td>
            </div>
          </td>
        </tr>
      </table>
      <div className="userprofile__centered-container">
        <button
          className="userprofile__button-update"
          onClick={showUserFormData}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default UserPersonalData;
