import {toast} from "react-hot-toast";
// import success from "../assets/audio/success.mp3";
// import error from "../assets/audio/error.mp3";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.6)",
  lightPink: "rgba(255, 99, 132, 0.6)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

const toastStylesError = {
  duration: 2500,
  position: "top-center",
  style: {
    marginTop: "64px",
    margin: 0,
    padding: 16,
    fontFamily: "sans-serif",
    border: "2px solid " + chartColorsPalette.lightPink,
    backgroundColor: chartColorsPalette.blue,
    color: chartColorsPalette.skyBlue,
  },
};

// function successPlay() {
//   new Audio(success).play();
// }
// function errorPlay() {
//   new Audio(error).play();
// }

export const errorNotification = (message) => {
  toast.error(message, toastStylesError);
  // errorPlay();
};

const toastStylesSuccess = {
  duration: 2500,
  position: "top-center",
  style: {
    marginTop: "64px",
    margin: 0,
    padding: 16,
    fontFamily: "sans-serif",
    border: "2px solid " + chartColorsPalette.skyBlue,
    backgroundColor: chartColorsPalette.blue,
    color: chartColorsPalette.skyBlue,
  },
};

export const doneNotification = (message) => {
  toast.success(message, toastStylesSuccess);
  // successPlay();
};
