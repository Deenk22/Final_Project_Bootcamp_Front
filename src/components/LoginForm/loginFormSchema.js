import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string(),
  // .min(5, "Password must be at least 5 characters long")
  // .max(25, "Only a maximum of 25 words is allowed")
  // .matches(
  //   passwordRules,
  //   "Remember, password must contain at least one number and lowercase letter"
  // )
  // .required("Password is required"),
});
