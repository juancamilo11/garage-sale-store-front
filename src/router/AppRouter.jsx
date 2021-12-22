import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { login } from "../actions/authActions";
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

  return (
    <div>
      <h1>App router</h1>
    </div>
  );
};

export default AppRouter;
