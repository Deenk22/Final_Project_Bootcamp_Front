import * as yup from "yup";

export const addStrategySchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  budget: yup.number(),
});
