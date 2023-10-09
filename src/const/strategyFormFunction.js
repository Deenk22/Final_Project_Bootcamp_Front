export const strategyFormFunction = (values) => {
  const {...strategy} = values;
  const newStrategy = {
    name: strategy.name,
    brokerId: strategy.brokerId,
    description: strategy.description ? strategy.description : null,
    budget: strategy.budget ? strategy.budget : null,
  };
  return newStrategy;
};
