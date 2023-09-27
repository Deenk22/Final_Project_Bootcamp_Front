import AddStockForm from "../../components/AddStockForm/AddStockForm";
import StockTable from "../../components/Tables/StockTable";

export default function AddStockView({allStocks}) {
  return (
    <>
      <AddStockForm />
      <StockTable allStocks={allStocks} />
    </>
  );
}
