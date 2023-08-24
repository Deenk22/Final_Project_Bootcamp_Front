import {useUserLoginContext} from "../../context/UserLoginContext";
export default function DashboardView() {
  const {logout} = useUserLoginContext();
  return (
    <>
      <h1>Hola soy el DashboardView</h1>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
}
