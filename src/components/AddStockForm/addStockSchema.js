import * as yup from "yup";

export const addStockSchema = yup.object().shape({
  stockTypeId: yup.number(),
  name: yup.string().required("Required Field"),
  country: yup.string(),
  ticker: yup.string(),
  type: yup.string(),
  sector: yup.string(),
  industry: yup.string(),
});
