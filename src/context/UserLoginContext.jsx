import { createContext, useState, useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { IM_INVESTING_KEY } from '../const/IM_investingKey';
import {
  notifySuccess,
  inputsError,
  authenticationError,
  databaseNotFoundUser,
} from '../notifications/notificationService';

const url = 'http://localhost:3000/user/login';

const UserLoginContext = createContext({
  user: {},
  signIn: () => {},
  logout: () => {},
});

// Manejo de errores! Vamos por el buen camino!
// Gestion de Tokens

export default function UserLoginContextProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(IM_INVESTING_KEY)) ?? null
  );

  const mutation = useMutation(async ({ email, password }) => {
    return await axios
      .post(url, {
        email: email,
        password: password,
      })
      .catch((error) => {
        if (error.response.status === 400) {
          inputsError();
        } else if (error.response.status === 401) {
          authenticationError();
        } else if (error.response.status === 404) {
          databaseNotFoundUser();
        }
      });
  });

  const signIn = async ({ email, password }) => {
    try {
      const res = await mutation.mutateAsync({ email, password });
      const token = res.data.jwt;
      const user = jwtDecode(token);
      setUser(user);
      console.log('Successfully Sign-in');
      const userWelcomeMessageLogin = user.name;
      notifySuccess(userWelcomeMessageLogin);
      localStorage.setItem(IM_INVESTING_KEY, JSON.stringify(user));
    } catch (err) {
      throw new Error(`Something went wrong with the Sign-in: ${err.message}`);
    }
  };

  // mutation.isLoading
  // mutation.isSuccess
  // mutation.isError

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
