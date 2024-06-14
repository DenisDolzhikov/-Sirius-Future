import { useAppSelector } from "./useAppSelector";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuthenticated = useAppSelector(state => state.auth.isLoggedIn);

  return isAuthenticated ? children : <Navigate to='/login' />
}

export { RequireAuth };