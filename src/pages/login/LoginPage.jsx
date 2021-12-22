import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../../actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = (e) => {
    dispatch(startGoogleLogin());
  };

  const handleLoginWithFacebook = (e) => {
    // dispatch(startFacebookLogin());
  };

  const handleLoginWithMicrosoft = (e) => {
    // dispatch(startMicrosoftLogin());
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
          <h6 className="login__welcome-section-title">
            Ingresa y explora el mundo de las ventas de garaje
          </h6>
        </div>
        <div className="login__login-buttons-section">
          <button
            onClick={handleLoginWithGoogle}
            className="login__button-login login__button-google"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/login-buttons/google-img.png"
              }
              className="login__login-buttons-img"
              alt="google-login"
            />
            Login with Google
          </button>
          <button
            onClick={handleLoginWithFacebook}
            className="login__button-login login__button-facebook"
          >
            Login with Facebook
          </button>
          <button
            onClick={handleLoginWithMicrosoft}
            className="login__button-login login__button-microsoft"
          >
            Login with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
