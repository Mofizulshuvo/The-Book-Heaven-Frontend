import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/LogIn" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
