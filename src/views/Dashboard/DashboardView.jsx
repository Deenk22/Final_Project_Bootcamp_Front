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
import LooksOneIcon from "@mui/icons-material/LooksOne";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StrategiesBarChart from "../../components/Charts/StrategiesBarChart";
import StrategiesPieChart from "../../components/Charts/StrategiesPieChart";
import "./styleDashboard.css";
import StockTypesBarChart from "../../components/Charts/StockTypesBarChart";
import BrokersChart from "../../components/Charts/BrokersChart";
import StockTypePieChart from "../../components/Charts/StockTypePieChart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditNoteIcon from "@mui/icons-material/EditNote";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  red: "rgba(200, 15, 00, 0.7)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.1)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  blueOpacity: "rgba(22, 41, 56, 0.2)",
  blueOpacityTwo: "rgba(22, 41, 56, 0.6)",
  skyBlue: "rgba(208, 228, 233)",
  tealBlue: "rgba(54, 117, 136, 1)",
  tealBlueOpacity: "rgba(54, 117, 136, 0.1)",
  green: "rgba(73, 184, 123, 1)",
};

export default function DashboardView({
  allStocks,
  allBrokers,
  allOperations,
  allStrategies,
  allStockTypes,
  totalAmount2022,
  onIdBrokerChange,
  onIdStrategyChange,
  totalAmountByBroker,
  totalAmountByStrategy,
  totalOperationBenefits,
  totalBrokerAmountPerYear,
  totalBenefitsByOperation,
  brokersJoinOperationsData,
  strategyJoinOperationData,
  benefitsLastOperationAdded,
  totalStockTypesAmountPerYear,
  totalPerStrategyByYearStockType,
  onOperationPerBrokerAndYearChange,
}) {
  console.log(totalAmountByBroker);
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

  // Total Benefits

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
      {/* PORTFOLIO */}
      <Grid
        container
        justifyContent={"space-evenly"}
        direction={"row"}
        alignItems={"center"}
        mt={16}
        mb={16}
      >
        <Grid item xs={10} sm={10} md={5} lg={5}>
          <Typography
            variant="h2"
            component={"h1"}
            color={chartColorsPalette.blue}
          >
            Track Your Portfolio
          </Typography>
          <Typography variant="body2" color={chartColorsPalette.blue}>
            By tracking and comparing this data over time, as well as
            benchmaking it against industry peers, we are able to make informed
            investment decisions and identify opportunities for our client.
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            mt={4}
            padding={2}
            borderRadius={4}
            bgcolor={chartColorsPalette.tealBlueOpacity}
            boxShadow={"8px 4px 8px 2px rgba(54, 117, 136, 0.2)"}
            border={"1px solid rgba(54, 117, 136, 0.2)"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {totalOperationBenefits > 0 ? (
                <ArrowDropUpIcon sx={{color: chartColorsPalette.green}} />
              ) : (
                <ArrowDropDownIcon sx={{color: chartColorsPalette.red}} />
              )}
              <Typography
                variant="h3"
                fontFamily={"Comfortaa"}
                color={chartColorsPalette.blue}
              >
                {totalOperationBenefits}€
              </Typography>
              <Typography variant="body2" color={chartColorsPalette.blue}>
                Total Profits or Losses
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {benefitsLastOperationAdded > 0 ? (
                <ArrowDropUpIcon sx={{color: chartColorsPalette.green}} />
              ) : (
                <ArrowDropDownIcon sx={{color: chartColorsPalette.red}} />
              )}
              <Typography
                variant="h3"
                fontFamily={"Comfortaa"}
                color={chartColorsPalette.blue}
              >
                {benefitsLastOperationAdded}€
              </Typography>
              <Typography variant="body2" color={chartColorsPalette.blue}>
                Last Operation Added
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {totalAmount2022 > 0 ? (
                <ArrowDropUpIcon sx={{color: chartColorsPalette.green}} />
              ) : (
                <ArrowDropDownIcon sx={{color: chartColorsPalette.red}} />
              )}
              <Typography
                variant="h3"
                fontFamily={"Comfortaa"}
                color={chartColorsPalette.blue}
              >
                {totalAmount2022}€
              </Typography>
              <Typography variant="body2" color={chartColorsPalette.blue}>
                Profits or Losses / Last Year
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            display={"flex"}
            justifyContent={"center"}
            color={chartColorsPalette.blue}
            mt={4}
            gap={0.5}
          >
            <EditNoteIcon
              fontSize="large"
              sx={{
                position: "relative",
                bottom: 4,
                color: chartColorsPalette.lightPink,
              }}
            />
            A quick glance at the total profit, the latest transaction added,
            and a swift balance of the last year, providing an instant overview
            of financial performance and investments.
          </Typography>
        </Grid>
        {/* MANAGE */}
        <Grid item xs={10} sm={10} md={4} lg={4}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <img
                src="./src/assets/controlPanel.png"
                alt="controlPanel"
                width={140}
              />
              <Box
                width={"100%"}
                height={100}
                borderRadius={4}
                display={"flex"}
                justifyContent={"right"}
                alignItems={"center"}
                bgcolor={chartColorsPalette.tealBlueOpacity}
              >
                <Box
                  display={"flex"}
                  justifyContent={"right"}
                  alignItems={"center"}
                  gap={2}
                  mr={2}
                >
                  <Box
                    width={100}
                    height={80}
                    borderRadius={4}
                    bgcolor={chartColorsPalette.blue}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                      backgroundImage: `url('./src/assets/svg/charts/skyBlue.svg')`,
                      backgroundSize: "cover",
                    }}
                  ></Box>
                  <Box
                    width={100}
                    height={80}
                    borderRadius={4}
                    bgcolor={chartColorsPalette.blue}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    sx={{
                      backgroundImage: `url('./src/assets/svg/charts/greenChart.svg')`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontSize={"0.75rem"}
                      color={chartColorsPalette.skyBlue}
                    >
                      Profitability
                    </Typography>
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      fontFamily={"Comfortaa"}
                      justifyContent={"center"}
                      color={chartColorsPalette.skyBlue}
                      variant="h6"
                      fontSize={"1rem"}
                    >
                      521,969€
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography variant="h3" color={chartColorsPalette.blue}>
              Manage Your Own Panel
            </Typography>
            <Typography variant="body2" color={chartColorsPalette.blue}>
              Empower your financial journey with Manage Your Own Dashboard.
              Seamlessly handle trades, execute strategies, and monitor
              investments. Stay in control with comprehensive management,
              effortless additions, and thorough verifications, ensuring a
              seamless investment experience.
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={2}
            alignItems={"center"}
          >
            <Box
              width={100}
              height={100}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src="./src/assets/svg/icons/inbestMe_logo-black.svg"
                alt=""
                width={80}
              />
            </Box>
            <Box
              width={100}
              height={100}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src="./src/assets/svg/icons/logo.8ba43bf4.svg"
                alt=""
                width={74}
              />
            </Box>
            <Box
              width={100}
              height={100}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src="./src/assets/svg/icons/urbanitae-logo-verde.svg"
                alt=""
                width={90}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        display={"flex"}
        justifyContent={"center"}
        position={"relative"}
        top={64}
        gap={2}
        marginX={64}
        paddingTop={8}
        bgcolor={chartColorsPalette.skyBlue}
        sx={{borderBottomLeftRadius: 16, borderBottomRightRadius: 16}}
      >
        <Box
          width={50}
          height={64}
          bgcolor={chartColorsPalette.blue}
          position={"relative"}
          right={110}
          sx={{borderTopRightRadius: 64}}
        ></Box>
        <BrokerSelect
          allBrokers={allBrokers}
          onBrokerChange={handleBrokerChange}
        />
        <StrategySelect
          allStrategies={allStrategies}
          onStrategyChange={handleStrategyChange}
        />
        <Box
          width={50}
          height={64}
          bgcolor={chartColorsPalette.blue}
          position={"relative"}
          left={110}
          sx={{borderTopLeftRadius: 64}}
        ></Box>
      </Box>
      <Grid
        container
        direction="row"
        alignItems={"center"}
        justifyContent="space-evenly"
        paddingY={16}
        bgcolor={chartColorsPalette.blue}
      >
        <Grid
          className="graphics"
          display={"flex"}
          justifyContent={"center"}
          item
          xs={10}
          sm={10}
          md={10}
          lg={4}
        >
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
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        mt={16}
        mb={8}
      >
        <Grid item xs={10} sm={10} md={5} lg={5}>
          <Box className="movement-manage-strategies">
            <Typography variant="h2" color={chartColorsPalette.blue}>
              Most Commonly Used Strategies
            </Typography>
            <Typography variant="body2" color={chartColorsPalette.blue}>
              By tracking and comparing this data over time, as well as
              benchmaking it against industry peers, we are able to make
              informed investment decisions and identify opportunities for our
              client.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={2}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <img
              src="./src/assets/dashboard.png"
              alt="controlPanel"
              width={160}
            />
            {/* <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="body1">
                Interacted with the charts
              </Typography>
              <Typography variant="body1">
                Quickly find what you need
              </Typography>
              <Typography variant="body1">
                Manage your transactions meticulously
              </Typography>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
      <BarChart
        allOperations={allOperations}
        allStrategies={allStrategies}
        allStockTypes={allStockTypes}
        allStocks={allStocks}
        selectedStrategy={selectedStrategy}
      />

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
