import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(20, "Only a maximum of 25 words is allowed")
    .required("Name is required"),
  surname: yup
    .string()
    .min(2, "Surname must be at least 2 characters long")
    .max(20, "Only a maximum of 25 words is allowed"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});
