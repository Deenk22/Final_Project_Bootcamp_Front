import {createContext, useState, useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {IM_INVESTING_KEY} from "../const/IM_investingKey";

const url = "http://localhost:3000/user/login";

const UserLoginContext = createContext({
  user: {},
  signIn: () => {},
  logout: () => {},
});

// Manejo de errores! Vamos por el buen camino!

export default function UserLoginContextProvider({children}) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(IM_INVESTING_KEY)) ?? null
  );

  const mutation = useMutation(async ({email, password}) => {
    return await axios.post(url, {
      email: email,
      password: password,
    });
  });

  const signIn = async ({email, password}) => {
    try {
      await mutation.mutateAsync({email, password});
      console.log("Successfully Sign-in");
      const token = mutation.data.data.jwt;
      const user = jwtDecode(token);
      setUser(user);
      localStorage.setItem(IM_INVESTING_KEY, JSON.stringify(user));
    } catch (err) {
      // Cambiar el console.error por throw
      console.error("Something went wrong with the Sign-in:", err);
    }
  };

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
