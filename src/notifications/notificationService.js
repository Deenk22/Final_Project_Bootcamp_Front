import {toast} from "react-hot-toast";
import {colorPalettes} from "../const/colorPalettes";

// Success

export const userSuccessfullySignIn = () =>
  toast.success(`Welcome`, {
    duration: 2500,
    position: "top-center",
    icon: "✅",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.skyBlue,
    },
  });

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
      color: colorPalettes.skyBlue,
    },
  });

// Errors

export const inputsError = () =>
  toast.error("Check the data entered", {
    duration: 2500,
    position: "top-center",
    icon: "❌",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.skyBlue,
    },
  });

export const authenticationError = () =>
  toast.error("Incorrect email or password", {
    duration: 2500,
    position: "top-center",
    icon: "⛔",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.skyBlue,
    },
  });

export const databaseNotFoundUser = () =>
  toast.error("User not found", {
    duration: 2500,
    position: "top-center",
    icon: "📡",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.skyBlue,
    },
  });

export const userAlreadyExists = () =>
  toast.error("User already exists", {
    duration: 2500,
    position: "top-center",
    icon: "📡",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.skyBlue,
    },
  });

export const internalServerError = () =>
  toast.error("Internal server error", {
    duration: 2500,
    position: "top-center",
    icon: "❌",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
      backgroundColor: colorPalettes.blue,
      color: colorPalettes.skyBlue,
    },
  });
