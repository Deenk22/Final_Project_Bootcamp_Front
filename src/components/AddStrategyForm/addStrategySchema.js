import * as yup from "yup";

export const addStrategySchema = yup.object().shape({
  name: yup.string().required("Required FIeld"),
  description: yup.string(),
  budget: yup.number(),
  brokerId: yup.number(),
});
