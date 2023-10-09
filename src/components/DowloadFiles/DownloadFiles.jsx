import {Box, Typography} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import {CSVLink} from "react-csv";
import "./style.css";

export default function DownloadFiles({allOperations}) {
  const operationData = allOperations?.map((operation) => {
    const {
      operationType,
      stockName,
      strategyName,
      brokerName,
      volume,
      priceOpen,
      stopLoss,
      takeProfit,
      priceClose,
      commission,
      swap,
      changeRate,
      operationDate,
    } = operation;
    return {
      OperationType: operationType,
      Stock: stockName,
      Strategy: strategyName,
      Broker: brokerName,
      Volume: volume,
      PriceOpen: priceOpen,
      StopLoss: stopLoss,
      TakeProfit: takeProfit,
      PriceClose: priceClose,
      Commission: commission,
      Swap: swap,
      ChangeRate: changeRate,
      OperationDate: operationDate,
    };
  });

  const headers = [
    {label: "OperationType", key: "OperationType"},
    {label: "Stock", key: "Stock"},
    {label: "Strategy", key: "Strategy"},
    {label: "Broker", key: "Broker"},
    {label: "Volume", key: "Volume"},
    {label: "PriceOpen", key: "PriceOpen"},
    {label: "StopLoss", key: "StopLoss"},
    {label: "TakeProfit", key: "TakeProfit"},
    {label: "PriceClose", key: "PriceClose"},
    {label: "Commission", key: "Commission"},
    {label: "Swap", key: "Swap"},
    {label: "ChangeRate", key: "ChangeRate"},
    {label: "OperationDate", key: "OperationDate"},
  ];

  const data = operationData ? operationData : null;

  return (
    <CSVLink
      className="link-csv"
      data={data}
      headers={headers}
      filename={"operaciones.csv"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        top={24}
        gap={1}
      >
        <Typography variant="body2">Download CSV</Typography>
        <DownloadIcon />
      </Box>
    </CSVLink>
  );
}
