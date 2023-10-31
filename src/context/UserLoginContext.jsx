import {createContext, useState, useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {IM_INVESTING_KEY} from "../const/IM_investingKey";
import {toast} from "react-hot-toast";

// Tareas pendientes > 1. / Modificar el código, eliminar TanStack del contexto.

const url = "http://localhost:3000/user/login";

const colorPalettes = {
  blue: "#162938",
  skyBlue: "#D0E4E9",
};

const toastStyles = {
  duration: 2500,
  position: "top-center",
  style: {
    marginTop: "64px",
    margin: 0,
    padding: 16,
    fontFamily: "sans-serif",
    backgroundColor: colorPalettes.blue,
    color: colorPalettes.skyBlue,
  },
};

const UserLoginContext = createContext({
  user: null,
  signIn: () => {},
  logout: () => {},
});

export default function UserLoginContextProvider({children}) {
  const userLogged = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  const [user, setUser] = useState(userLogged ? jwtDecode(userLogged) : null);

  // function errorPlay() {
  //   new Audio(error).play();
  // }

  const mutation = useMutation({
    mutationFn: async ({email, password}) => {
      return await axios.post(url, {
        email,
        password,
      });
    },

    onError: (err) => {
      if (err.response.status === 401) {
        const {message} = err.response.data;
        toast.error(message, toastStyles);
        // errorPlay();
      } else if (err.response.status === 404) {
        const {message} = err.response.data;
        toast.error(message, toastStyles);
        // errorPlay();
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
        const token = data?.data.jwt;
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
