import {createContext, useState, useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {IM_INVESTING_KEY} from "../const/IM_investingKey";
import {
  userSuccessfullySignIn,
  inputsError,
  authenticationError,
  databaseNotFoundUser,
} from "../notifications/notificationService";

const url = "http://localhost:3000/user/login";

const UserLoginContext = createContext({
  user: null,
  signIn: () => {},
  logout: () => {},
});

// Preguntar a Nacho si usar useMemo... para envolver la petición.
export default function UserLoginContextProvider({children}) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(IM_INVESTING_KEY)) ?? null
  );

  const mutation = useMutation({
    mutationFn: async ({email, password}) => {
      return await axios.post(url, {
        email: email,
        password: password,
      });
    },
    onError: async (err) => {
      if (err.response.status === 400) {
        inputsError();
      } else if (err.response.status === 401) {
        authenticationError();
      } else if (err.response.status === 404) {
        databaseNotFoundUser();
      }
    },
    onSuccess: () => {
      return signIn;
    },
  });

  async function signIn({email, password}) {
    try {
      const {data, status} = await mutation.mutateAsync({email, password});
      if (status === 200) {
        const token = data.jwt;
        const user = jwtDecode(token);
        setUser(user);
        const userWelcomeMessageLogin = user.name;
        // Esta notificación debemos cambiarla a la vista Dashboard.
        userSuccessfullySignIn(userWelcomeMessageLogin);
        localStorage.setItem(IM_INVESTING_KEY, JSON.stringify(user));
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

// Manera Antigua

// const mutation = useMutation(async ({email, password}) => {
//   return await axios
//     .post(url, {
//       email: email,
//       password: password,
//     })
//     .catch((error) => {
//       if (error.response.status === 400) {
//         inputsError();
//       } else if (error.response.status === 401) {
//         authenticationError();
//       } else if (error.response.status === 404) {
//         databaseNotFoundUser();
//       }
//     });
// });
