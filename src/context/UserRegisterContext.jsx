import {createContext, useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {toast} from "react-hot-toast";

const url = "http://localhost:3000/user";

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

const UserRegisterContext = createContext({
  signUp: () => {},
});

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
      if (err.response.status === 409) {
        const {message} = err.response.data;
        toast.error(message, toastStyles);
      } else if (err.response.status === 500) {
        const {message} = err.response.data;
        toast.error(message, toastStyles);
      }
    },

    onSuccess: (data) => {
      return data;
    },
  });

  async function signUp(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);

      if (status === 200) {
        const userWelcomeMessageReg = data?.message;
        toast.success(userWelcomeMessageReg, toastStyles);
      }
    } catch (err) {
      throw new Error(`something went wrong with the Sign-Up: ${err.message}`);
    }
  }

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
