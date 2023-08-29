import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {createContext, useContext} from "react";
import {
  inputsError,
  internalServerError,
  userAlreadyExists,
  userSuccessfullyRegistered,
} from "../notifications/notificationService";

const url = "http://localhost:3000/user";

const UserRegisterContext = createContext({
  signUp: () => {},
});

// Preguntar a Nacho como mejorar este código / Could not Fast Refresh.
export default function UserRegisterContextProvider({children}) {
  const mutation = useMutation({
    mutationFn: async (values) => {
      const {name, surname, regEmail, regPassword} = values;
      return await axios.post(url, {
        name: name,
        surname: surname,
        email: regEmail,
        password: regPassword,
      });
    },
    onError: (err) => {
      if (err.response.status === 400) {
        inputsError();
      } else if (err.response.status === 409) {
        userAlreadyExists();
      } else if (err.response.status === 500) {
        internalServerError();
      }
    },
    onSuccess: (data) => {
      return data;
    },
  });

  const signUp = async (values) => {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        const userWelcomeMessageReg = data;
        userSuccessfullyRegistered(userWelcomeMessageReg);
      }
    } catch (err) {
      throw new Error(`something went wrong with the Sign-Up: ${err.message}`);
    }
  };

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
