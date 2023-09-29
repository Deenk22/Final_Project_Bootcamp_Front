export const updateStrategyFunction = (values) => {
  const {...strategy} = values;
  const updateStrategy = {
    name: strategy.name,
    description: strategy.description ? strategy.description : "",
    budget: strategy.budget ? strategy.budget : "",
  };
  return updateStrategy;
};
