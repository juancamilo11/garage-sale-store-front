import React from "react";
import { useSelector } from "react-redux";

export const NothingSelected = () => {
  const { auth } = useSelector((state) => state);

  return (
    <div className="nothing-selected__main-container">
      <img
        className="nothing-selected__welcome-img"
        src="https://res.cloudinary.com/dahwtwzdl/image/upload/v1643961997/store-catalog/welcome_x41vlw.png"
        alt="welcome"
      />
      <p className="nothing-selected__welcome-message">
        ¡Bienvenid@ {auth.name}!
        <br />
        No has seleccionado aún ninguna venta de garaje
      </p>
    </div>
  );
};
