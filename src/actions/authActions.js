import types from "../types/types";
import app from "../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { finishLoading, startLoading } from "./uiActions";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = (
  uid,
  displayName,
  email,
  photoUrl,
  creationTime,
  lastSignInTime
) => ({
  type: types.authLogin,
  payload: { uid, displayName, email, photoUrl, creationTime, lastSignInTime },
});

export const logout = () => ({
  type: types.authLogout,
});

export const startGoogleLogin = () => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login(
            user.uid,
            user.displayName,
            user.email,
            user.photoURL,
            user.metadata.creationTime,
            user.metadata.lastSignInTime
          )
        );
        console.warn(user);
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        console.log(err);
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => {
      dispatch(logout());
      // dispatch(finishLoading());
    });
  };
};
