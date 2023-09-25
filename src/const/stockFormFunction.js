export const stockFormFunction = (values) => {
  const {...stock} = values;
  const newStock = {
    name: stock.name,
    country: stock.country ? stock.country : null,
    ticker: stock.ticker ? stock.ticker : null,
    type: stock.type ? stock.type : null,
    sector: stock.sector ? stock.sector : null,
    industry: stock.industry ? stock.industry : null,
  };
  return newStock;
};
