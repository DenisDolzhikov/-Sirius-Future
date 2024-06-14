import { ReactNode } from "react";
import { useAppSelector } from "./useAppSelector";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, redirectTo }) => {
  const isAuthenticated = useAppSelector(state => state.auth.isLoggedIn);

  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export { RequireAuth };