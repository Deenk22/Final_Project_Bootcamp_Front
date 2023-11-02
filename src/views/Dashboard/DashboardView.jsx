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

import {Box, Grid, Typography} from "@mui/material";
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
  skyBlueButtonOpacity: "rgba(208, 228, 233, 0.4)",
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
  const [isHowToUseBrokerVisible, setIsHowToUseBrokerVisible] = useState(true);
  const [isHowToUseTypeVisible, setIsHowToUseTypeVisible] = useState(true);
  const [isHowToUseSelectVisible, setIsHowToUseSelectVisible] = useState(true);

  function toggleHowToUseBroker() {
    setIsHowToUseBrokerVisible(!isHowToUseBrokerVisible);
  }

  function toggleHowToUseType() {
    setIsHowToUseTypeVisible(!isHowToUseTypeVisible);
  }

  function toggleHowToUseSelect() {
    setIsHowToUseSelectVisible(!isHowToUseSelectVisible);
  }

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

  function toggleChangeBrokerBar() {
    setIsBrokerGraphicSelected(!isBrokerGraphicSelected);
  }

  function toggleBrokerDefault() {
    setSelectedBroker("");
  }

  // Cambia la vista de la gráfica mostrando el dinero total por broker.
  function toggleChangeTotalAmountPerBroker() {
    setIsTotalPerBrokerVisible(!isTotalPerBrokerVisible);
  }

  return (
    <main>
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
                    flexDirection={"column"}
                    sx={{
                      backgroundImage: `url('./src/assets/svg/charts/skyBlue.svg')`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontSize={"0.75rem"}
                      color={chartColorsPalette.skyBlue}
                    >
                      Total
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
                      9.521,969€
                    </Typography>
                  </Box>
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
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            {isBrokerGraphicSelected ? (
              <Box textAlign={"center"} mb={4}>
                <Typography
                  borderRadius={1}
                  variant="body2"
                  width={"24%"}
                  component={"button"}
                  onClick={toggleChangeBrokerBar}
                  sx={{
                    border: "none",
                    cursor: "pointer",
                    transition: "0.2s",
                    ":hover": {
                      color: chartColorsPalette.skyBlue,
                      bgcolor: chartColorsPalette.blueOpacity,
                      boxShadow: "0px 0px 2px 1px rgba(208, 228, 233, 0.8)",
                    },
                  }}
                  paddingY={1}
                  bgcolor={chartColorsPalette.skyBlue}
                >
                  Go to Broker
                </Typography>
              </Box>
            ) : (
              <Box textAlign={"center"} mb={4}>
                <Typography
                  borderRadius={1}
                  variant="body2"
                  component={"button"}
                  width={"24%"}
                  onClick={toggleChangeBrokerBar}
                  sx={{
                    border: "none",
                    cursor: "pointer",
                    transition: "0.3s",
                    ":hover": {
                      color: chartColorsPalette.skyBlue,
                      bgcolor: chartColorsPalette.blueOpacity,
                      boxShadow: "0px 0px 2px 1px rgba(208, 228, 233, 0.8)",
                    },
                  }}
                  bgcolor={chartColorsPalette.skyBlue}
                  paddingY={1}
                >
                  Go to Type
                </Typography>
              </Box>
            )}
            {isBrokerGraphicSelected ? (
              <StockTypesBarChart
                selectedYearStockType={selectedYearStockType}
                setSelectedYearStockType={setSelectedYearStockType}
                totalStockTypesAmountPerYear={totalStockTypesAmountPerYear}
              />
            ) : selectedBroker === "" ? (
              <Box>
                <BrokersChart
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                  totalBrokerAmountPerYear={totalBrokerAmountPerYear}
                />
              </Box>
            ) : (
              <Box textAlign={"center"}>
                <BrokerSelectedBarChart
                  allOperations={allOperations}
                  selectedBroker={selectedBroker}
                />
              </Box>
            )}
            {/* <StrategiesBarChart
                strategyJoinOperationData={strategyJoinOperationData}
                totalPerStrategyByYearStockType={
                  totalPerStrategyByYearStockType
                }
              /> */}
          </Box>
        </Grid>
        <Grid className="graphics" item xs={10} sm={10} md={10} lg={4}>
          <Box display={"flex"} justifyContent={"center"}>
            {/* Buena!! */}
            {isBrokerGraphicSelected ? (
              <StockTypePieChart
                totalStockTypesAmountPerYear={totalStockTypesAmountPerYear}
                selectedYearStockType={selectedYearStockType}
              />
            ) : (
              <BrokerPieChart
                totalBrokerAmountPerYear={totalBrokerAmountPerYear}
                toggleChangeTotalAmountPerBroker={
                  toggleChangeTotalAmountPerBroker
                }
                totalAmountByBroker={totalAmountByBroker}
                selectedYear={selectedYear}
                isTotalPerBrokerVisible={isTotalPerBrokerVisible}
              />
            )}
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
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        mb={-6}
        mt={10}
        className="up-transition-howToUse"
      >
        <Typography
          textAlign={"center"}
          variant="h3"
          color={chartColorsPalette.blue}
          mt={4}
        >
          Quick Guide
        </Typography>
        <Typography
          variant="body2"
          color={chartColorsPalette.blue}
          textAlign={"center"}
        >
          Click on the buttons to see other tips..
        </Typography>
      </Box>
      <section>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(500px, 1fr))"
          gap={4}
          marginX={8}
          mt={8}
          bgcolor={chartColorsPalette.blue}
          paddingY={8}
          paddingX={4}
          borderRadius={4}
          alignItems="center"
          justifyContent="center"
          className="up-transition-howToUse"
        >
          {isHowToUseBrokerVisible ? (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <img
                  src="./src/assets/dashboard.png"
                  alt="dashboard"
                  width={128}
                />
                <Typography
                  mt={1}
                  variant="h4"
                  color={chartColorsPalette.skyBlue}
                >
                  Go to Broker?
                </Typography>
              </Box>
              <Typography
                textAlign={"center"}
                variant="h6"
                fontSize={"0.88rem"}
                color={chartColorsPalette.skyBlue}
              >
                Selecting this button, you will be able to access the total sum
                of money grouped by broker and year. While viewing the broker's
                chart, you will find another button to return to the stock type
                view.
              </Typography>
              <Typography
                onClick={toggleHowToUseBroker}
                component={"button"}
                variant="body2"
                marginX={24}
                mt={2}
                borderRadius={2}
                paddingY={1}
                sx={{cursor: "pointer", border: "none"}}
                color={chartColorsPalette.blue}
                bgcolor={chartColorsPalette.skyBlue}
              >
                Broker's Tips
              </Typography>
            </Box>
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <img src="./src/assets/use01.png" alt="dashboard" width={128} />
                <Typography
                  mt={1}
                  variant="h4"
                  color={chartColorsPalette.skyBlue}
                >
                  When does the broker selector work?
                </Typography>
              </Box>
              <Typography
                textAlign={"center"}
                variant="h6"
                fontSize={"0.88rem"}
                color={chartColorsPalette.skyBlue}
              >
                When viewing the brokers chart, you can choose the specific
                broker you wish to inspect in the selector. This allows you to
                examine the priceOpen and priceClose fields down to the smallest
                detail.
              </Typography>
              <Typography
                component={"button"}
                variant="body2"
                marginX={24}
                mt={2}
                borderRadius={2}
                paddingY={1}
                sx={{cursor: "pointer", border: "none"}}
                color={chartColorsPalette.blue}
                onClick={toggleHowToUseBroker}
                bgcolor={chartColorsPalette.skyBlue}
              >
                See Previous Tips
              </Typography>
            </Box>
          )}
          {isHowToUseTypeVisible ? (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <img
                  src="./src/assets/controlPanel.png"
                  alt="dashboard"
                  width={128}
                />
                <Typography
                  mt={1}
                  variant="h4"
                  color={chartColorsPalette.skyBlue}
                >
                  Go to Stock Type?
                </Typography>
              </Box>
              <Typography
                textAlign={"center"}
                variant="h6"
                fontSize={"0.88rem"}
                color={chartColorsPalette.skyBlue}
              >
                This button is only available when viewing the broker's chart.
                By clicking this button, you can access the total amount of
                money grouped by StockType and year. Which means you will return
                to the first chart.
              </Typography>
              <Typography
                component={"button"}
                variant="body2"
                marginX={24}
                mt={2}
                borderRadius={2}
                paddingY={1}
                sx={{cursor: "pointer", border: "none"}}
                color={chartColorsPalette.blue}
                bgcolor={chartColorsPalette.skyBlue}
                onClick={toggleHowToUseType}
              >
                StockType's Tips
              </Typography>
            </Box>
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <img src="./src/assets/use04.png" alt="dashboard" width={128} />
                <Typography
                  mt={1}
                  variant="h4"
                  color={chartColorsPalette.skyBlue}
                >
                  Why does the pie chart react?
                </Typography>
              </Box>
              <Typography
                textAlign={"center"}
                variant="h6"
                fontSize={"0.88rem"}
                color={chartColorsPalette.skyBlue}
              >
                When interacting with the bar chart, the pie chart automatically
                reacts by displaying the corresponding data. The information is
                presented in percentages. There is an option where you can
                change the total per year.
              </Typography>
              <Typography
                component={"button"}
                variant="body2"
                marginX={24}
                mt={2}
                borderRadius={2}
                paddingY={1}
                sx={{cursor: "pointer", border: "none"}}
                color={chartColorsPalette.blue}
                onClick={toggleHowToUseType}
                bgcolor={chartColorsPalette.skyBlue}
              >
                See Previous Tips
              </Typography>
            </Box>
          )}
          {isHowToUseSelectVisible ? (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <img
                  src="./src/assets/settings.png"
                  alt="dashboard"
                  width={128}
                />
                <Typography
                  mt={1}
                  variant="h4"
                  color={chartColorsPalette.skyBlue}
                >
                  When does the strategy selector work?
                </Typography>
              </Box>
              <Typography
                textAlign={"center"}
                variant="h6"
                fontSize={"0.88rem"}
                color={chartColorsPalette.skyBlue}
              >
                When interacting with the broker selector, you can
                simultaneously interact with the strategy selector, displaying
                the relevant information in both charts. Pie chart reacts
                automatically.
              </Typography>
              <Typography
                component={"button"}
                variant="body2"
                marginX={24}
                mt={2}
                borderRadius={2}
                paddingY={1}
                sx={{cursor: "pointer", border: "none"}}
                color={chartColorsPalette.blue}
                onClick={toggleHowToUseSelect}
                bgcolor={chartColorsPalette.skyBlue}
              >
                Strategies
              </Typography>
            </Box>
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <img src="./src/assets/use03.png" alt="dashboard" width={128} />
                <Typography
                  mt={1}
                  variant="h4"
                  color={chartColorsPalette.skyBlue}
                >
                  Improvements in the use
                </Typography>
              </Box>
              <Typography
                textAlign={"center"}
                variant="h6"
                fontSize={"0.88rem"}
                color={chartColorsPalette.skyBlue}
              >
                We are working to create a simple and fast user experience. Our
                goal is to add more detailed information and create a complete
                link between the charts. More news on this will be coming soon..
              </Typography>
              <Typography
                component={"button"}
                variant="body2"
                marginX={24}
                mt={2}
                borderRadius={2}
                paddingY={1}
                sx={{cursor: "pointer", border: "none"}}
                color={chartColorsPalette.blue}
                onClick={toggleHowToUseSelect}
                bgcolor={chartColorsPalette.skyBlue}
              >
                See Previous Tips
              </Typography>
            </Box>
          )}
        </Box>
      </section>
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        mt={18}
        mb={12}
      >
        <Grid item>
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
      </Grid>
      <BarChart
        allOperations={allOperations}
        allStrategies={allStrategies}
        allStockTypes={allStockTypes}
        allStocks={allStocks}
        selectedStrategy={selectedStrategy}
      />
    </main>
  );
}
