import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getFromLocalStorage } from "../utills/storage";

const PrivateRoute = () => {
  const token = getFromLocalStorage("token");

  if (!token) {
    return <Navigate to="/sign-in" replace={true} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
