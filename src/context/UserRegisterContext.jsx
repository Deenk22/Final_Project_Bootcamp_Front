import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {createContext, useContext} from "react";

const url = "http://localhost:3000/user";

const UserRegisterContext = createContext({
  signUp: () => {},
});

// Manejo de errores! Vamos por el buen camino!
// Confirmar que name, surname, etc, traen información.

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
      const res = await mutation.mutateAsync(values);
      console.log(res);
      console.log("Successfully Sign-Up");
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
