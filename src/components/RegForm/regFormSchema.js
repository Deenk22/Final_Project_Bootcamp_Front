import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const regFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(20, "Only a maximum of 25 words is allowed")
    .required("Name is required"),
  surname: yup
    .string()
    .min(2, "Surname must be at least 2 characters long")
    .max(20, "Only a maximum of 25 words is allowed"),
  regEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  regPassword: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(25, "Only a maximum of 25 words is allowed")
    .matches(
      passwordRules,
      "Password must contain at least one number and uppercase letter"
    )
    .required("Password is required"),
  regConfirmPassword: yup
    .string()
    .oneOf([yup.ref("regPassword"), null], "Passwords must match")
    .required("Required"),
});
