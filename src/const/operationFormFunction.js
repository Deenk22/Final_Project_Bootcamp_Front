export const operationFormFunction = (values) => {
  const {...operation} = values;
  const newOperation = {
    strategyId: operation.strategyId,
    stockId: operation.stockId,
    brokerId: operation.brokerId,
    operationType: operation.operationType,
    volume: operation.volume ? operation.volume : 0,
    priceOpen: operation.priceOpen ? operation.priceOpen : 0,
    stopLoss: operation.stopLoss ? operation.stopLoss : 0,
    takeProfit: operation.takeProfit ? operation.takeProfit : 0,
    priceClose: operation.priceClose ? operation.priceClose : 0,
    commission: operation.commission ? operation.commission : 0,
    swap: operation.swap ? operation.swap : 0,
    changeRate: operation.changeRate ? operation.changeRate : 0,
  };
  return newOperation;
};
