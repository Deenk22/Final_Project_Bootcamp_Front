import * as yup from "yup";

export const addStockSchema = yup.object().shape({
  name: yup.string().required("Required Field"),
  country: yup.string(),
  ticker: yup.string().required("Required Field"),
  type: yup.string(),
  sector: yup.string(),
  industry: yup.string(),
});
