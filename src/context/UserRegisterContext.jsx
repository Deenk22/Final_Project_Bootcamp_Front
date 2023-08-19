import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {createContext, useContext} from "react";

const url = "http://localhost:3000/user";

const UserRegisterContext = createContext({
  signUp: () => {},
});

// Manejo de errores! Vamos por el buen camino!

export default function UserRegisterContextProvider({children}) {
  const mutation = useMutation(async (values) => {
    const {name, surname, regEmail, regPassword} = values;
    return await axios.post(url, {
      name: name,
      surname: surname,
      email: regEmail,
      password: regPassword,
    });
  });

  const signUp = async (values) => {
    try {
      await mutation.mutateAsync(values);
      console.log("Successfully Sign-Up");
    } catch (err) {
      // Cambiar el console.error por throw
      console.error("something went wrong with the Sign-Up:", err);
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
