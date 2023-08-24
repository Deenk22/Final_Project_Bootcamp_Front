import {Route, Routes} from "react-router-dom";
import UserLoginContextProvider from "./context/UserLoginContext";
import UserRegisterContextProvider from "./context/UserRegisterContext";
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute";
import Layout from "./components/Layout/Layout";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginView from "./views/Login/Loginview";
import Dashboard from "./views/Dashboard/Dashboard";
import Stocks from "./views/Stocks/Stocks";
import Strategies from "./views/Strategies/Strategies";
import Transactions from "./views/Transactions/Transactions";
import Settings from "./views/Settings/Settings";
import Unauthorized from "./views/Unauthorized/Unauthorized";
import {userRoles} from "./const/userRoles";
import "./App.css";

// Arreglar las rutas ... cuando hago click en sign-in o sign-up, despues tengo que darle hacia atrás las mismas veces que le di a cada link.

function App() {
  return (
    <>
      <UserRegisterContextProvider>
        <UserLoginContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginView />} />
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
              path="/stocks"
              element={<PrivateRoute allowedUserRoles={[userRoles.ADMIN]} />}
            >
              <Route element={<Layout />}>
                <Route index element={<Stocks />} />
              </Route>
            </Route>
            <Route
              path="/strategies"
              element={<PrivateRoute allowedUserRoles={[userRoles.ADMIN]} />}
            >
              <Route element={<Layout />}>
                <Route index element={<Strategies />} />
              </Route>
            </Route>
            <Route
              path="/transactions"
              element={<PrivateRoute allowedUserRoles={[userRoles.ADMIN]} />}
            >
              <Route element={<Layout />}>
                <Route index element={<Transactions />} />
              </Route>
            </Route>
            <Route
              path="/settings"
              element={<PrivateRoute allowedUserRoles={[userRoles.ADMIN]} />}
            >
              <Route element={<Layout />}>
                <Route index element={<Settings />} />
              </Route>
            </Route>
          </Routes>
        </UserLoginContextProvider>
      </UserRegisterContextProvider>
    </>
  );
}

export default App;
