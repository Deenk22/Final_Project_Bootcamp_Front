import {useUserLoginContext} from "../../context/UserLoginContext";
import DashboardView from "./DashboardView";

export default function Dashboard() {
  const {user} = useUserLoginContext();

  return (
    <>
      <h1>Welvome {user.name}</h1>
      <DashboardView />
    </>
  );
}
