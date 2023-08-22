import UserLoginContextProvider from "./context/UserLoginContext";
import UserRegisterContextProvider from "./context/UserRegisterContext";
import {Route, Routes} from "react-router-dom";
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute";
import LandingPage from "./views/LandingPage/LandingPage";
import Loginview from "./views/Login/LoginView";
import Unauthorized from "./views/Unauthorized/Unauthorized";
import Dashboard from "./views/Dashboard/Dashboard";
import About from "./views/About/About";
import Layout from "./components/Layout/Layout";
import {userRoles} from "./const/userRoles";
import "./App.css";

function App() {
  return (
    <>
      <UserRegisterContextProvider>
        <UserLoginContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Loginview />} />
            </Route>
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute allowedUserRoles={userRoles.ALL_USERS} />}
            >
              <Route element={<Layout />}>
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
            <Route
              path="/about"
              element={<PrivateRoute allowedUserRoles={[userRoles.ADMIN]} />}
            >
              <Route element={<Layout />}>
                <Route index element={<About />} />
              </Route>
            </Route>
          </Routes>
        </UserLoginContextProvider>
      </UserRegisterContextProvider>
    </>
  );
}

export default App;
