import {createContext, useState, useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {IM_INVESTING_KEY} from "../const/IM_investingKey";
import toastFunctions from "../notifications/notificationService";

// Tareas pendientes > 1. / Modificar el código, eliminar TanStack del contexto.

const url = "http://localhost:3000/user/login";

const UserLoginContext = createContext({
  user: null,
  signIn: () => {},
  logout: () => {},
});

export default function UserLoginContextProvider({children}) {
  const userLogged = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const [user, setUser] = useState(userLogged ? jwtDecode(userLogged) : null);

  const mutation = useMutation({
    mutationFn: async ({email, password}) => {
      return await axios.post(url, {
        email,
        password,
      });
    },

    onError: (err) => {
      if (err.response.status === 401) {
        toastFunctions.authenticationError();
      } else if (err.response.status === 404) {
        toastFunctions.databaseNotFoundUser();
      }
    },

    onSuccess: (data) => {
      return data;
    },
  });

  async function signIn({email, password}) {
    try {
      const {data, status} = await mutation.mutateAsync({email, password});
      if (status === 200) {
        const token = data.jwt;
        const user = jwtDecode(token);
        setUser(user);
        localStorage.setItem(IM_INVESTING_KEY, JSON.stringify(token));
      }
    } catch (err) {
      throw new Error(`Something went wrong with the Sign-in: ${err.message}`);
    }
  }

  function logout() {
    localStorage.removeItem(IM_INVESTING_KEY);
    setUser(null);
  }

  const valueProvide = {
    user,
    signIn,
    logout,
  };

  return (
    <UserLoginContext.Provider value={valueProvide}>
      {children}
    </UserLoginContext.Provider>
  );
}

export function useUserLoginContext() {
  return useContext(UserLoginContext);
}
