import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useUserLoginContext} from "../../context/UserLoginContext";

export default function PrivateRoute({allowedUserRoles}) {
  const location = useLocation();
  const {user} = useUserLoginContext();
  return allowedUserRoles?.includes(user?.userRole) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{from: location}} replace />
  ) : (
    <Navigate to="/" state={{from: location}} replace />
  );
}
