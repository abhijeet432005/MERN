import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuraMark from "../components/shared/AuraMark";

/**
 * Gate for authenticated-only pages. Waits for the initial auth check
 * (`authChecked`) before deciding anything, so a logged-in user doesn't
 * get flash-redirected to /login on a hard refresh.
 */
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authChecked } = useSelector((state) => state.authSlice);

  if (!authChecked) {
    return (
      <></>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

/**
 * Inverse gate for /login and /register — an already-authenticated user
 * shouldn't be able to see the auth forms again.
 */
export const GuestRoute = ({ children }) => {
  const { isAuthenticated, authChecked } = useSelector((state) => state.authSlice);

  if (!authChecked) return null;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
