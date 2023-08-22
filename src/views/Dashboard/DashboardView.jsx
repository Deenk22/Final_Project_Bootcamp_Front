import {Button} from "@mui/material";
import {useUserLoginContext} from "../../context/UserLoginContext";

export default function DashboardView() {
  const {logout} = useUserLoginContext();
  return (
    <>
      <h1>Hola soy el DashboardView</h1>
      <Button onClick={() => logout()}>Logout</Button>
    </>
  );
}
