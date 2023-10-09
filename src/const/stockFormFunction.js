export const stockFormFunction = (values) => {
  const {...stock} = values;
  console.log(stock);
  const newStock = {
    stockTypeId: stock.stockTypeId,
    brokerId: stock.brokerId,
    name: stock.name,
    country: stock.country ? stock.country : null,
    ticker: stock.ticker ? stock.ticker : null,
    type: stock.type ? stock.type : null,
    sector: stock.sector ? stock.sector : null,
    industry: stock.industry ? stock.industry : null,
  };
  return newStock;
};
