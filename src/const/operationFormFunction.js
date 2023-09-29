export const operationFormFunction = (values) => {
  const {...operation} = values;
  console.log(operation);
  const newOperation = {
    strategyId: operation.strategyId,
    stockId: operation.stockId,
    operationType: operation.operationType,
    volume: operation.volume ? operation.volume : null,
    priceOpen: operation.priceOpen ? operation.priceOpen : null,
    stopLoss: operation.stopLoss ? operation.stopLoss : null,
    takeProfit: operation.takeProfit ? operation.takeProfit : null,
    priceClose: operation.priceClose ? operation.priceClose : null,
    commission: operation.commission ? operation.commission : null,
    swap: operation.swap ? operation.swap : null,
    changeRate: operation.changeRate ? operation.changeRate : null,
  };
  return newOperation;
};
