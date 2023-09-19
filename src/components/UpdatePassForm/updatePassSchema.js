import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const updatePassSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .matches(
      passwordRules,
      "Password must contain at least one number and uppercase letter"
    )
    .required("Required"),
  newPassword: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(25, "Only a maximum of 25 words is allowed")
    .matches(
      passwordRules,
      "Password must contain at least one number and uppercase letter"
    )
    .required("New password is required"),
  retypePassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required("Required"),
});
