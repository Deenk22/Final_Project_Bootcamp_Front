import {useState} from "react";
import Select from "react-select";
import {Box, Typography} from "@mui/material";

export default function StockSelect({allStocks}) {
  const [stockSelected, setStockSelected] = useState("");

  const stockName = allStocks?.map((stock) => stock.name);

  const defaultValue = stockName ? stockName[0] : "";

  const handleSelectChange = (value) => {
    setStockSelected(value);
    console.log(stockSelected);
  };
  return (
    <Box width={320}>
      <Typography variant="body2">Stock by Name</Typography>
      <Select
        defaultValue={{label: defaultValue}}
        options={allStocks?.map((stock) => ({
          label: stock.name,
          value: stock.id,
        }))}
        onChange={handleSelectChange}
      />
    </Box>
  );
}
