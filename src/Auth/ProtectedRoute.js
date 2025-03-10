import React from "react";
import { Navigate } from "react-router";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = Cookies.get("authToken");
  const isAdmin = Cookies.get("isAdmin") === "true";

  if (!isAuthenticated || !isAdmin) {
    // Redirect to home page or login page if not authenticated or not an admin
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;