import {Navigate, Outlet} from "react-router-dom";
import {useUserLoginContext} from "../../context/UserLoginContext";

export default function PublicRoute() {
  const {user} = useUserLoginContext();
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
