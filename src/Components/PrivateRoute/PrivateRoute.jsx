import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Loader from "../loader/loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="mt-20">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/LogIn" replace />;
  }

  return children;
};

export default PrivateRoute;
