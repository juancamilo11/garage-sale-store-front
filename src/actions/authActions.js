import types from "../types/types";
import app from "../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = (uid, displayName, photoUrl) => ({
  action: types.authLogin,
  payload: { uid, displayName, photoUrl },
});

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        // console.log(user.displayName);
        // console.log(user.email);
        // console.log(user.uid);
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
