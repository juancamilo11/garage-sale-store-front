import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../../actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();

  const loginWithGoogle = (e) => {
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default LoginPage;
