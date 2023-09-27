export const updateStrategyFunction = (values) => {
  const {...strategy} = values;
  const updateStrategy = {
    nombre: strategy.operationType,
    description: strategy.description ? strategy.description : "",
    budget: strategy.budget ? strategy.budget : "",
  };
  return updateStrategy;
};
