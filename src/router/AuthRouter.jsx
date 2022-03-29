import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/auth/login" element={<LoginPage />} />
        <Route path="/*" element={<GarageSalePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRouter;
