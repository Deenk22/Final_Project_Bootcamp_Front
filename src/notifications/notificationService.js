import {toast} from "react-hot-toast";
import {colorPalettes} from "../const/colorPalettes";

// Success

// export const userSuccessfullySignIn = () =>
//   toast.success(`Welcome`, {
//     duration: 2500,
//     position: "top-center",
//     icon: "✅",
//     style: {
//       marginTop: "64px",
//       margin: 0,
//       padding: 24,
//       fontFamily: "sans-serif",
//     },
//   });

export const userSuccessfullyRegistered = (userWelcomeMessageReg) =>
  toast.success(userWelcomeMessageReg, {
    duration: 2500,
    position: "top-center",
    icon: "✅",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
    },
  });

// Errors

export const inputsError = () =>
  toast.success("Check the data entered", {
    duration: 2500,
    position: "top-center",
    icon: "❌",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
    },
  });

export const authenticationError = () =>
  toast.success("Incorrect email or password", {
    duration: 2500,
    position: "top-center",
    icon: "⛔",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.white,
    },
  });

export const databaseNotFoundUser = () =>
  toast.success("User not found", {
    duration: 2500,
    position: "top-center",
    icon: "📡",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.white,
    },
  });

export const userAlreadyExists = () =>
  toast.success("User already exists", {
    duration: 2500,
    position: "top-center",
    icon: "📡",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.white,
    },
  });

export const internalServerError = () =>
  toast.success("Internal server error", {
    duration: 2500,
    position: "top-center",
    icon: "❌",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.white,
    },
  });
