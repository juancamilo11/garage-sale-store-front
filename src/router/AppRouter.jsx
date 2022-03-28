import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { login, startGoogleLogin } from "../actions/authActions";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import DashboardRoutes from "./DashboardRoutes";
import Loader from "../components/Loader";
import { startFetchAllActiveStores } from "../actions/storeCatalogActions";
import { startFetchUserInfo } from "../actions/usersActions";
const AppRouter = () => {
  const [checkingAuthState, setCheckingAuthState] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.state);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        const {
          uid: id,
          displayName,
          photoURL: photoUrl,
          email,
          metadata,
        } = user;
        const { creationTime } = metadata;

        startFetchUserInfo(
          id,
          displayName,
          photoUrl,
          email,
          new Date(creationTime)
        ).then((res) => {
          dispatch(
            login(
              user.uid,
              user.displayName,
              user.photoURL,
              res.occupation,
              res.cellphone,
              res.email,
              res.postalCode,
              res.colombianState,
              res.phone,
              res.address,
              res.dateOfBirth,
              user.metadata.creationTime
            )
          );
        });
        dispatch(startFetchAllActiveStores());
      } else {
        setIsLoggedIn(false);
      }
      setCheckingAuthState(false);
    });
  }, []);

  if (checkingAuthState) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
