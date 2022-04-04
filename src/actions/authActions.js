import types from "../types/types";
import app from "../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { finishLoading, startLoading } from "./uiActions";
import { startFetchUserInfo } from "./usersActions";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = (
  id,
  name,
  photoUrl,
  occupation,
  cellphone,
  email,
  postalCode,
  colombianState,
  phone,
  address,
  dateOfBirth,
  registerDate
) => ({
  type: types.authLogin,
  payload: {
    id,
    name,
    photoUrl,
    occupation,
    cellphone,
    email,
    postalCode,
    colombianState,
    phone,
    address,
    dateOfBirth,
    registerDate,
  },
});

export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const firebaseResponse = await signInWithPopup(auth, provider);

      const {
        uid: id,
        displayName,
        photoUrl,
        email,
        metadata,
      } = firebaseResponse.user;
      const { creationTime } = metadata;
      const userFromServer = await startFetchUserInfo(
        id,
        displayName,
        photoUrl,
        email,
        new Date(creationTime)
      );
      if (userFromServer) {
        dispatch(
          login(
            userFromServer.id,
            userFromServer.name,
            userFromServer.photoUrl,
            userFromServer.occupation,
            userFromServer.cellphone,
            userFromServer.email,
            userFromServer.postalCode,
            userFromServer.colombianState,
            userFromServer.phone,
            userFromServer.address,
            userFromServer.dateOfBirth,
            userFromServer.registerDate
          )
        );
      }
    } catch (err) {
      dispatch(finishLoading());
    }
  };
};

export const logout = () => ({
  type: types.authLogout,
});

export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => {
      dispatch(logout());
    });
  };
};
