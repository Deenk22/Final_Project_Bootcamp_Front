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
    padding: 16,
    fontFamily: "sans-serif",
    backgroundColor: colorPalettes.blue,
    color: colorPalettes.skyBlue,
  },
};

const toastFunctions = {
  // Success
  userSuccessfullySignIn: () => toast.success("Welcome", toastStyles),
  userSuccessfullyRegistered: (userWelcomeMessageReg) =>
    toast.success(userWelcomeMessageReg, toastStyles),
  userSuccessfullyUploaded: (message) => toast.success(message, toastStyles),
  passwordSuccessfullyUpdated: (message) => toast.success(message, toastStyles),
  operationSuccessfullyAdded: (message) => toast.success(message, toastStyles),

  // Errors
  authorizationError: (message) => toast.error(message, toastStyles),
  userAlreadyExists: () => toast.error("User already exists", toastStyles),
  authenticationError: () =>
    toast.error("Incorrect Email or Password", toastStyles),
  databaseNotFoundUser: () => toast.error("User not found", toastStyles),
  errorPasswordMatch: () =>
    toast.error("Current Password does not Match", toastStyles),
  internalServerError: () =>
    toast.error("Sorry, Internal server error", toastStyles),
};

export default toastFunctions;
