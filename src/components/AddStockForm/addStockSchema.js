import * as yup from "yup";

export const addStockSchema = yup.object().shape({
  name: yup.string(),
  country: yup.string(),
  ticker: yup.string(),
  type: yup.string(),
  sector: yup.string(),
  industry: yup.string(),
});
