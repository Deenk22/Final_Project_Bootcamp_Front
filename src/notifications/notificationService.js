import {toast} from "react-hot-toast";

// Success

export const notifySuccess = () =>
  toast.success("Welcome", {
    duration: 2500,
    position: "top-center",
    icon: "✅",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
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
    },
  });
