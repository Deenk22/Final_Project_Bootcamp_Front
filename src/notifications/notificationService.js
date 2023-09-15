import {toast} from "react-hot-toast";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

const toastStyles = {
  duration: 2500,
  position: "top-center",
  style: {
    marginTop: "64px",
    margin: 0,
    padding: 24,
    fontFamily: "sans-serif",
    backgroundColor: colorPalettes.blue,
    color: colorPalettes.skyBlue,
  },
};

const toastFunctions = {
  userSuccessfullySignIn: () => toast.success("Welcome", toastStyles),

  userSuccessfullyRegistered: (userWelcomeMessageReg) =>
    toast.success(userWelcomeMessageReg, toastStyles),

  authenticationError: () =>
    toast.error("Incorrect email or password", toastStyles),

  databaseNotFoundUser: () => toast.error("User not found", toastStyles),

  userAlreadyExists: () => toast.error("User already exists", toastStyles),

  internalServerError: () => toast.error("Internal server error", toastStyles),
};

export default toastFunctions;
