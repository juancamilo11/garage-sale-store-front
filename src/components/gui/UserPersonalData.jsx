import React from "react";
import { useSelector } from "react-redux";

const userData = {
  name: "Juan Camilo Cardona",
  email: "juancamilo19997814@gmail.com",
  cellphone: "(4) 5537781",
  phone: "(+57) 3122555477",
  dateOfBirth: "1999-02-25",
  dateRegistred: "2021-12-15",
  address: "Crra 14# 8-21 Barrio el divino niño",
  postalCode: "055010",
};

const UserPersonalData = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="userprofile__data-main-container">
      <table className="userprofile__data-table">
        <tr className="userprofile__table-row">
          <td className="userprofile__table-item">
            <div className="userprofile__item-container">
              <i className="fas fa-user-circle userprofile__data-item-icon"></i>
              <div className="userprofile__data-item">
                <h4>Nombre</h4>
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
                    <h4>Correo electrónico</h4>
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
                    <h4>Teléfono</h4>
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
                    <h4>Fecha de nacimiento</h4>
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
                    <h4>Celular</h4>
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
                    <h4>Fecha de registro</h4>
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
                    <h4>Dirección</h4>
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
                    <h4>Código Postal</h4>
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
    </div>
  );
};

export default UserPersonalData;
