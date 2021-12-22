import types from "../types/types";
import app from "../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { finishLoading, startLoading } from "./uiActions";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = (uid, displayName, photoUrl) => ({
  action: types.authLogin,
  payload: { uid, displayName, photoUrl },
});

export const startGoogleLogin = () => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        // console.log(user.displayName);
        // console.log(user.email);
        // console.log(user.uid);
        dispatch(login(user.uid, user.displayName, user.photoURL));
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        console.log(err);
      });
  };
};
