// import DoughnutData from "../../components/Charts/DoughnutData";
// import OperationsCard from "../../components/InfoCards/OperationsCard";
// import OperationSelect from "../../components/Select/OperationSelect";
// import DoughnutData from "../../components/Charts/DoughnutData";
// import LineData from "../../components/Charts/LineData";
// import BrokersBarChart from "../../components/CStockTypeSelectharts/BrokersBarChart";
// import BrokerBar from "../../components/Charts/BrokerBar";
// import BarData from "../../components/Charts/BarData";
import StrategySelect from "../../components/Select/StrategySelect";
import {useState} from "react";
import BarChart from "../../components/Charts/BarChart";
import BrokerSelect from "../../components/Select/BrokerSelect";
import BrokerPieChart from "../../components/Charts/BrokerPieChart";
import BrokerSelectedBarChart from "../../components/Charts/BrokerSelectedBarChart";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import {Box, Grid} from "@mui/material";
import StrategiesBarChart from "../../components/Charts/StrategiesBarChart";
import StrategiesPieChart from "../../components/Charts/StrategiesPieChart";
import "./styleDashboard.css";
import StockTypesBarChart from "../../components/Charts/StockTypesBarChart";
import BrokersChart from "../../components/Charts/BrokersChart";
import StockTypePieChart from "../../components/Charts/StockTypePieChart";

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
  allStocks,
  allBrokers,
  allOperations,
  allStrategies,
  allStockTypes,
  onIdBrokerChange,
  onIdStrategyChange,
  totalAmountByBroker,
  totalAmountByStrategy,
  totalBrokerAmountPerYear,
  brokersJoinOperationsData,
  strategyJoinOperationData,
  totalStockTypesAmountPerYear,
  totalPerStrategyByYearStockType,
  onOperationPerBrokerAndYearChange,
}) {
  // Es el ID del BROKER.
  const [selectedBroker, setSelectedBroker] = useState("");
  // Es el ID de la ESTRATEGIA.
  const [selectedStrategy, setSelectedStrategy] = useState("");
  // CAMBIO DE VISTA UNA GRÁFICA U OTRA. NO SE ESTA USANDO.
  const [isBrokerGraphicSelected, setIsBrokerGraphicSelected] = useState(true);
  // Cambiamos los años de la gráfica del total de euros por BROKER, tanto BarChart como PieChart.
  const [selectedYear, setSelectedYear] = useState(2021);
  const [selectedYearStockType, setSelectedYearStockType] = useState(2021);
  // Con este useState cuando seleccionamos el selector de Broker, podremos observar la gráfica por broker.
  const [isTotalPerBrokerVisible, setIsTotalPerBrokerVisible] = useState(false);

  // Selector Broker.
  const handleBrokerChange = (selectedBroker) => {
    setSelectedBroker(selectedBroker);
    onIdBrokerChange(selectedBroker);
  };

  // Selector Strategy.
  const handleStrategyChange = (selectedStrategy) => {
    setSelectedStrategy(selectedStrategy);
    onIdStrategyChange(selectedStrategy);
  };

  function toggleChangeBar() {
    setIsBrokerGraphicSelected(!isBrokerGraphicSelected);
  }

  // Cambia la vista de la gráfica mostrando el dinero total por broker.
  function toggleChangeTotalAmountPerBroker() {
    setIsTotalPerBrokerVisible(!isTotalPerBrokerVisible);
  }

  return (
    <main>
      <Box display={"flex"} justifyContent={"center"} gap={4}>
        <BrokerSelect
          allBrokers={allBrokers}
          onBrokerChange={handleBrokerChange}
        />
        <StrategySelect
          allStrategies={allStrategies}
          onStrategyChange={handleStrategyChange}
        />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems={"center"}
        paddingY={16}
        bgcolor={chartColorsPalette.blue}
      >
        <Grid
          className="graphics"
          item
          display={"flex"}
          justifyContent={"center"}
          xs={10}
          sm={10}
          md={10}
          lg={4}
        >
          <Box>
            <Box display={"flex"} justifyContent={"center"}>
              {/* ESTAS FUNCIONAN! */}
              {/* {selectedBroker === "" ? (
                <BrokersChart
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                  totalBrokerAmountPerYear={totalBrokerAmountPerYear}
                />
              ) : (
                <BrokerSelectedBarChart
                  allOperations={allOperations}
                  selectedBroker={selectedBroker}
                />
              )} */}
              {/* <StrategiesBarChart
                strategyJoinOperationData={strategyJoinOperationData}
                totalPerStrategyByYearStockType={
                  totalPerStrategyByYearStockType
                }
              /> */}
              <StockTypesBarChart
                selectedYearStockType={selectedYearStockType}
                setSelectedYearStockType={setSelectedYearStockType}
                totalStockTypesAmountPerYear={totalStockTypesAmountPerYear}
              />
              {/* {De aqui hacia abajo no se!!!} */}
              {/* <BarData
                allOperations={allOperations}
                selectedStock={selectedStock}
                selectedStrategy={selectedStrategy}
                isSelected={isSelected}
                allBrokers={allBrokers}
              /> */}
              {/* <BrokerBar
                totalAmountByBroker={totalAmountByBroker}
                isBrokerGraphicSelected={isBrokerGraphicSelected}
              /> */}
              {/* <BrokersBarChart
                brokersJoinOperationsData={brokersJoinOperationsData}
                strategyJoinOperationData={strategyJoinOperationData}
                allStrategies={allStrategies}
                selectedBroker={selectedBroker}
                isBrokerGraphicSelected={isBrokerGraphicSelected}
              /> */}
              {/* <TotalAmountBrokerChart
                allBrokers={allBrokers}
                allOperations={allOperations}
              /> */}
            </Box>
          </Box>
        </Grid>
        <Grid className="graphics" item xs={10} sm={10} md={10} lg={4}>
          <Box display={"flex"} justifyContent={"center"}>
            {/* Buena!! */}
            {/* <BrokerPieChart
              totalBrokerAmountPerYear={totalBrokerAmountPerYear}
              toggleChangeTotalAmountPerBroker={
                toggleChangeTotalAmountPerBroker
              }
              totalAmountByBroker={totalAmountByBroker}
              selectedYear={selectedYear}
              isTotalPerBrokerVisible={isTotalPerBrokerVisible}
            /> */}
            <StockTypePieChart
              totalStockTypesAmountPerYear={totalStockTypesAmountPerYear}
              selectedYearStockType={selectedYearStockType}
            />
            {/* <StrategiesPieChart
              totalPerStrategyByYearStockType={totalPerStrategyByYearStockType}
            /> */}
            {/* <DoughnutData
              BrokersJoinOperationsData={BrokersJoinOperationsData}
              selectedBroker={selectedBroker}
              allOperations={allOperations}
              selectedStock={selectedStock}
              selectedStrategy={selectedStrategy}
              allBrokers={allBrokers}
              // isSelected={isSelected}
            /> */}
          </Box>
          {/* <Button onClick={toggleChangeBar}>Cambia a Estrategia</Button> */}
        </Grid>
      </Grid>
      <BarChart
        allOperations={allOperations}
        allStrategies={allStrategies}
        allStockTypes={allStockTypes}
        allStocks={allStocks}
        selectedStrategy={selectedStrategy}
      />
      <Grid container>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>

      {/* <Grid
        container
        direction={"row"}
        display={"flex"}
        justifyContent={"space-evenly"}
        mt={8}
      >
        <Grid item>
          <Box>
            <LineData />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <LineData />
          </Box>
        </Grid>
      </Grid> */}
    </main>
  );
}
