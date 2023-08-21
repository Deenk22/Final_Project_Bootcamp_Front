import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useContext } from 'react';
import {
  inputsError,
  internalServerError,
  userAlreadyExists,
  userSuccessfullyRegistered,
} from '../notifications/notificationService';

const url = 'http://localhost:3000/user';

const UserRegisterContext = createContext({
  signUp: () => {},
});

// Manejo de errores! Vamos por el buen camino!
// Confirmar que name, surname, etc, traen información.

export default function UserRegisterContextProvider({ children }) {
  const mutation = useMutation(async (values) => {
    const { name, surname, regEmail, regPassword } = values;
    return await axios
      .post(url, {
        name: name,
        surname: surname,
        email: regEmail,
        password: regPassword,
      })
      .catch((error) => {
        if (error.response.status === 400) {
          inputsError();
        } else if (error.response.status === 409) {
          userAlreadyExists();
        } else if (error.response.status === 500) {
          internalServerError();
        }
      });
  });

  const signUp = async (values) => {
    try {
      const res = await mutation.mutateAsync(values);
      if (res.status === 200) {
        const userWelcomeMessageReg = res.data;
        userSuccessfullyRegistered(userWelcomeMessageReg);
        console.log('Successfully Sign-Up');
      }
    } catch (err) {
      throw new Error(`something went wrong with the Sign-Up: ${err.message}`);
    }
  };

  // mutation.isLoading
  // mutation.isSuccess
  // mutation.isError

  const valueProvide = {
    signUp,
  };

  return (
    <UserRegisterContext.Provider value={valueProvide}>
      {children}
    </UserRegisterContext.Provider>
  );
}

export function useUserRegisterContext() {
  return useContext(UserRegisterContext);
}
