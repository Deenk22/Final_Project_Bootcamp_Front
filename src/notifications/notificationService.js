import {toast} from "react-hot-toast";

export const notifySuccess = () =>
  toast.success("Welcome", {
    duration: 2000,
    position: "bottom-right",
    icon: "✅",
    style: {
      marginTop: "64px",
      margin: 0,
      padding: 24,
      fontFamily: "sans-serif",
    },
  });
