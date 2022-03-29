import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorFlag from "../ErrorFlag";

const UserPersonalData = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const showUserFormData = () => {
    navigate("/user-data-form");
  };

  return (
    <div className="userprofile__data-main-container">
      {(auth.cellphone === "" ||
        auth.phone === "" ||
        auth.dateOfBirth === "" ||
        auth.address === "" ||
        auth.postalCode === "") && (
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
                      {auth.email}
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
                      {auth.cellphone}
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
                      {auth.dateOfBirth}
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
                      {auth.phone}
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
                      {auth.registerDate}
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
                      {auth.address}
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
                      {auth.postalCode}
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
