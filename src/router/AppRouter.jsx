import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { login } from "../actions/authActions";
import { Router } from "react-router-dom";
const AppRouter = () => {
  const [checkingAuthState, setCheckingAuthState] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
      } else {
        setIsLoggedIn(false);
      }
      setCheckingAuthState(false);
    });
  }, []);

  if (checkingAuthState) {
    return (
      <div className="commons__loading-div">
        <h1 className="commons__loading-title">Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <div></div>
    </Router>
  );
};

export default AppRouter;
