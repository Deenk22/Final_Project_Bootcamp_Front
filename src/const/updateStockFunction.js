export const updateStockFunction = (values) => {
  const {...stock} = values;
  const updateStock = {
    name: stock.name ? stock.name : "",
    country: stock.country ? stock.country : "",
    ticker: stock.ticker ? stock.ticker : "",
    sector: stock.sector ? stock.sector : "",
    industry: stock.industry ? stock.industry : "",
  };
  return updateStock;
};
