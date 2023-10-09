import * as yup from "yup";

export const addOperationSchema = yup.object().shape({
  strategyId: yup.number().required("Required Field"),
  stockId: yup.number(),
  brokerId: yup.number(),
  operationType: yup.string().required("Required Field"),
  volume: yup.number(),
  priceOpen: yup.number(),
  stopLoss: yup.number(),
  takeProfit: yup.number(),
  priceClose: yup.number(),
  commission: yup.number(),
  swap: yup.number(),
  changeRate: yup.number(),
});
