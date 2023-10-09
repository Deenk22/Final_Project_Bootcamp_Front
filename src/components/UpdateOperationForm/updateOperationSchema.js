import * as yup from "yup";

export const updateFormSchema = yup.object().shape({
  operationType: yup.string(),
  volume: yup.number(),
  priceOpen: yup.number(),
  stopLoss: yup.number(),
  takeProfit: yup.number(),
  priceClose: yup.number(),
  commission: yup.number(),
  swap: yup.number(),
  changeRate: yup.number(),
});
