import {Route, Routes} from "react-router-dom";
import UserLoginContextProvider from "./context/UserLoginContext";
import UserRegisterContextProvider from "./context/UserRegisterContext";
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute";
import Layout from "./components/Layout/Layout";
import LandingPage from "./views/LandingPage/LandingPage";
import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./views/Login/Login";
import Account from "./views/Account/Account";
import AddOperation from "./views/AddOperation/AddOperation";
import OperationDetails from "./views/OperationDetails/OperationsDetails";
import AddStock from "./views/AddStock/AddStock";
import AddStrategy from "./views/AddStrategy/AddStrategy";
import Unauthorized from "./views/Unauthorized/Unauthorized";
import {ThemeProvider} from "@mui/material";
import {userRoles} from "./const/userRoles";
import {Toaster} from "react-hot-toast";
import {typeScale} from "./const/typeScale";
import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <ThemeProvider theme={typeScale}>
        <UserRegisterContextProvider>
          <UserLoginContextProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="unauthorized" element={<Unauthorized />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute allowedUserRoles={userRoles.ALL_USERS} />
                }
              >
                <Route element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route
                    path="operationdetails/:id"
                    element={<OperationDetails />}
                  />
                </Route>
              </Route>
              <Route
                path="/account"
                element={
                  <PrivateRoute allowedUserRoles={userRoles.ALL_USERS} />
                }
              >
                <Route element={<Layout />}>
                  <Route index element={<Account />} />
                </Route>
              </Route>
              <Route
                path="/addoperation"
                element={<PrivateRoute allowedUserRoles={[userRoles.ADMIN]} />}
              >
                <Route element={<Layout />}>
                  <Route index element={<AddOperation />} />
                  <Route
                    path="operationdetails/:id"
                    element={<OperationDetails />}
                  />
                </Route>
              </Route>
              <Route
                path="/addstock"
                element={<PrivateRoute allowedUserRoles={[userRoles.ADMIN]} />}
              >
                <Route element={<Layout />}>
                  <Route index element={<AddStock />} />
                </Route>
              </Route>
              <Route
                path="/addstrategy"
                element={<PrivateRoute allowedUserRoles={[userRoles.ADMIN]} />}
              >
                <Route element={<Layout />}>
                  <Route index element={<AddStrategy />} />
                </Route>
              </Route>
            </Routes>
          </UserLoginContextProvider>
        </UserRegisterContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
