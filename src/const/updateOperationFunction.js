export const updateOperationFunction = (values) => {
  const {...operation} = values;
  const newOperation = {
    operationType: operation.operationType,
    volume: operation.volume ? operation.volume : "",
    priceOpen: operation.priceOpen ? operation.priceOpen : "",
    stopLoss: operation.stopLoss ? operation.stopLoss : "",
    takeProfit: operation.takeProfit ? operation.takeProfit : "",
    priceClose: operation.priceClose ? operation.priceClose : "",
    commission: operation.commission ? operation.commission : "",
    swap: operation.swap ? operation.swap : "",
    changeRate: operation.changeRate ? operation.changeRate : "",
  };
  return newOperation;
};
