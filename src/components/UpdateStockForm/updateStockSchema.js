import * as yup from "yup";

export const updateStockSchema = yup.object().shape({
  name: yup.string().required("Required Field"),
  country: yup.string(),
  ticker: yup.string(),
  sector: yup.string(),
  industry: yup.string(),
});
