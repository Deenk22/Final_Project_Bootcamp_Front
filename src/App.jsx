import "./App.css";
import RegForm from "./components/RegForm/RegForm";
import UserLoginContextProvider from "./context/UserLoginContext";
import UserRegisterContextProvider from "./context/UserRegisterContext";
import Loginview from "./views/LoginView/LoginView";

function App() {
  return (
    <>
      <UserRegisterContextProvider>
        <UserLoginContextProvider>
          <Loginview />
          <RegForm />
        </UserLoginContextProvider>
      </UserRegisterContextProvider>
    </>
  );
}

export default App;
