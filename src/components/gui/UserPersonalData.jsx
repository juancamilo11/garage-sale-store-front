import React from "react";
import { useSelector } from "react-redux";

const userData = {
  name: "Juan Camilo Cardona",
  email: "juancamilo19997814@gmail.com",
  cellphone: "(4) 5537781",
  phone: "(+57) 3122555477",
  dateOfBirth: "1999-02-25",
  dateRegistred: "2021-12-15",
  address: "Crra 14# 8-21",
  postalCode: "055010",
};

const UserPersonalData = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="userprofile__data-main-container">
      <table>
        <tr>
          <td>
            <div>
              <i class="fas fa-user-circle"></i>
              <div className="userprofile__data-item">
                <h3>Nombre</h3>
                <span>{auth.name}</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <i class="fas fa-envelope-open-text"></i>
              <div className="userprofile__data-item">
                <h3>Correo electrónico</h3>
                <span>{userData.email}</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div>
              <i class="fas fa-phone-square"></i>
              <div className="userprofile__data-item">
                <h3>Teléfono</h3>
                <span>{userData.cellphone}</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <i class="fas fa-calendar-alt"></i>
              <div className="userprofile__data-item">
                <h3>Fecha de nacimiento</h3>
                <span>{userData.dateOfBirth}</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div>
              <i class="fas fa-mobile-alt"></i>
              <div className="userprofile__data-item">
                <h3>Celular</h3>
                <span>{userData.phone}</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <i class="fas fa-user-plus"></i>
              <div className="userprofile__data-item">
                <h3>Fecha de registro</h3>
                <span>{userData.dateRegistred}</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div>
              <i class="fas fa-home"></i>
              <div className="userprofile__data-item">
                <h3>Dirección</h3>
                <span>{userData.address}</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <i class="fas fa-mail-bulk"></i>
              <div className="userprofile__data-item">
                <h3>Código Postal</h3>
                <span>{userData.postalCode}</span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UserPersonalData;
