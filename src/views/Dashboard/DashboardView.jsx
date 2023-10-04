// import DoughnutData from "../../components/Charts/DoughnutData";
import BarData from "../../components/Charts/BarData";
import OperationsCard from "../../components/InfoCards/OperationsCard";
import {Box, Grid} from "@mui/material";
import StrategySelect from "../../components/Select/StrategySelect";
import DoughnutData from "../../components/Charts/DoughnutData";
import StockSelect from "../../components/Select/StockSelect";
// import OperationSelect from "../../components/Select/OperationSelect";
import "./styleDashboard.css";
import {useState} from "react";
// import LineData from "../../components/Charts/LineData";
import BarChart from "../../components/Charts/BarChart";
// import StockTypeSelect from "../../components/Select/StockTypesSelect";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

export default function DashboardView({
  allOperations,
  allStrategies,
  allStocks,
  allStockTypes,
}) {
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedStrategy, setSelectedStrategy] = useState("");
  // const [selectedStockType, setSelectedStockType] = useState("");

  const handleStockChange = (selectedStock) => {
    setSelectedStock(selectedStock);
  };

  const handleStrategyChange = (selectedStrategy) => {
    setSelectedStrategy(selectedStrategy);
  };

  // const handleStockTypeChange = (selectedStockType) => {
  //   setSelectedStockType(selectedStockType);
  // };

  return (
    <main>
      <Box display={"flex"} justifyContent={"center"} gap={4}>
        {/* <OperationSelect allOperations={allOperations} /> */}
        <StrategySelect
          allStrategies={allStrategies}
          onStrategyChange={handleStrategyChange}
        />
        <StockSelect allStocks={allStocks} onStockChange={handleStockChange} />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems={"center"}
        mt={4}
        paddingY={16}
        bgcolor={chartColorsPalette.blue}
      >
        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          xs={10}
          sm={10}
          md={10}
          lg={4}
        >
          <Box>
            {/* Ajustar MediaQueries */}
            <Box display={"flex"} justifyContent={"center"}>
              <BarData
                allOperations={allOperations}
                selectedStock={selectedStock}
                selectedStrategy={selectedStrategy}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={4}>
          {/* Ajustar MediaQueries */}
          <Box display={"flex"} justifyContent={"center"}>
            <DoughnutData
              allOperations={allOperations}
              selectedStock={selectedStock}
            />
          </Box>
        </Grid>
      </Grid>
      {/* Este grid deberia ir en una section fuera de aqui */}
      <Box display={"flex"} justifyContent={"center"} mt={16}>
        {/* <StockTypeSelect
          allStockTypes={allStockTypes}
          onStockTypeChange={handleStockTypeChange}
        /> */}
        <BarChart
          allOperations={allOperations}
          allStrategies={allStrategies}
          allStockTypes={allStockTypes}
          allStocks={allStocks}
          selectedStrategy={selectedStrategy}
          // selectedStockType={selectedStockType}
        />
        {/* <LineData /> */}
      </Box>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        spacing={1}
        my={16}
      >
        {allOperations
          ?.map((operation) => {
            const {operationType, id, commission, takeProfit, stopLoss} =
              operation;
            return (
              <Grid
                className="animation-operation-cards"
                item
                xs={12}
                sm={5}
                md={3}
                lg={2}
                key={id}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
              >
                <OperationsCard
                  operationType={operationType}
                  id={id}
                  commission={commission}
                  takeProfit={takeProfit}
                  stopLoss={stopLoss}
                />
              </Grid>
            );
          })
          .toSpliced(4)}
      </Grid>
      {/* <Grid
        container
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        mt={8}
      >
        <Grid item>
          <Box className="fade-table media-query"></Box>
        </Grid>
        <Grid item>
          <Box className="fade-table"></Box>
        </Grid>
      </Grid> */}
    </main>
  );
}
