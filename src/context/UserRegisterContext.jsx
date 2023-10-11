import {createContext, useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {toast} from "react-hot-toast";
import success from "../assets/audio/success.mp3";
import error from "../assets/audio/error.mp3";

const url = "http://localhost:3000/user";

const colorPalettes = {
  blue: "#162938",
  skyBlue: "#D0E4E9",
};

const toastStyles = {
  duration: 2800,
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

const toastStylesPhoto = {
  duration: 2800,
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
  function successPlay() {
    new Audio(success).play();
  }

  function errorPlay() {
    new Audio(error).play();
  }

  const mutation = useMutation({
    mutationFn: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("surname", values.surname);
      formData.append("email", values.regEmail);
      formData.append("password", values.regPassword);
      formData.append("avatar", values.avatar);

      return await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },

    onError: (err) => {
      if (err.response.status === 409) {
        const {message} = err.response.data;
        toast.error(message, toastStyles);
        errorPlay();
      } else if (err.response.status === 500) {
        const {message} = err.response.data;
        toast.error(message, toastStyles);
        errorPlay();
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
        values.avatar
          ? toast.success(userWelcomeMessageReg, toastStyles)
          : toast.success(
              "Done! Remember to Upload the Photo!",
              toastStylesPhoto
            );
        successPlay();
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
