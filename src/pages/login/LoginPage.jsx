import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../../actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  const handleLoginWithFacebook = (e) => {
    e.preventDefault();
  };

  const handleLoginWithMicrosoft = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login__main-container">
      <div className="login__sidebar">
        <div className="login__welcome-section">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/logo/store_128.png"}
            className="login__welcome-section-img"
            alt="logo"
          />
          <h5 className="login__welcome-section-title">
            Ingresa y explora el mundo de las ventas de garaje
          </h5>
        </div>
        <div className="login__login-buttons-section">
          <button
            onClick={handleLoginWithGoogle}
            className="login__button-login login__button-google"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/login/login-buttons/google-img.png"
              }
              className="login__login-buttons-img"
              alt="google-login"
            />
            <span className="login__login-button-text">
              Ingresar con Google
            </span>
          </button>
          <button
            onClick={handleLoginWithFacebook}
            className="login__button-login login__button-facebook"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/login/login-buttons/facebook-img.png"
              }
              className="login__login-buttons-img"
              id="login__login-facebook-button"
              alt="facebook-login"
            />
            <span className="login__login-button-text">
              Ingresar con Facebook
            </span>
          </button>
          <button
            onClick={handleLoginWithMicrosoft}
            className="login__button-login login__button-microsoft"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/login/login-buttons/microsoft-img.png"
              }
              className="login__login-buttons-img"
              id="login__login-microsoft-button"
              alt="microsoft-login"
            />
            <span className="login__login-button-text">
              Ingresar con Microsoft
            </span>
          </button>
        </div>
      </div>
      <div
        className="login__welcome-img-container"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/img/login/login-main-image.jpg"
          })`,
        }}
      >
        <section className="login__store-description">
          <h1 className="login__store-description-title">Garage Sale Store</h1>
          <h5 className="login__store-description-title">
            Compra y vende productos de la vida cotidiana
          </h5>
          <h3 className="login__store-description-title">
            ¡Todo a un buen precio!
          </h3>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
