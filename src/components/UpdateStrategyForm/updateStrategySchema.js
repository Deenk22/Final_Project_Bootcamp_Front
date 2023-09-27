import * as yup from "yup";

export const updateStrategySchema = yup.object().shape({
  name: yup.string().required("Required Field"),
  description: yup
    .string()
    .min(2, "description must be at least 5 characters long")
    .max(150, "Only a maximum of 25 words is allowed"),
  budget: yup.number(),
});
