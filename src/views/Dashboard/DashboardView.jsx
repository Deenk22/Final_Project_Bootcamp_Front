// import DoughnutData from "../../components/Charts/DoughnutData";
import BarData from "../../components/Charts/BarData";
import DateForm from "../../components/DateForm/DateForm";
import OperationsCard from "../../components/InfoCards/OperationsCard";
import OperationDateSearchCard from "../../components/InfoCards/OperationDateSearchCard";
import {Box, Grid, Typography} from "@mui/material";
import StrategySelect from "../../components/Select/StrategySelect";
import DoughnutData from "../../components/Charts/DoughnutData";
import StockSelect from "../../components/Select/StockSelect";
import OperationSelect from "../../components/Select/OperationSelect";
import "./styleDashboard.css";

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
  startDate,
  endDate,
  allOperations,
  allStrategies,
  allStocks,
  operationsByDate,
  handleSearchByDate,
  handleEndDateChange,
  handleStartDateChange,
  getOperationDateError,
}) {
  return (
    <main>
      <OperationSelect allOperations={allOperations} />
      <StrategySelect allStrategies={allStrategies} />
      <StockSelect allStocks={allStocks} />
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
            <Typography
              textAlign={"center"}
              variant="h4"
              mb={4}
              color={chartColorsPalette.skyBlue}
            >
              Last Operations Added
            </Typography>
            {/* Ajustar MediaQueries */}
            <Box display={"flex"} justifyContent={"center"}>
              <BarData allOperations={allOperations} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={4}>
          {/* Ajustar MediaQueries */}
          <Box display={"flex"} justifyContent={"center"}>
            <DoughnutData />
          </Box>
        </Grid>
      </Grid>
      {/* Este grid deberia ir en una section fuera de aqui */}

      <Grid
        container
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        mt={14}
        spacing={1}
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
      <Grid
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
      </Grid>
      <Grid
        item
        xs={10}
        sm={10}
        md={4}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
          className="blur-effect-doughnut-chart-right"
        >
          <Box mb={4}>
            <DateForm
              startDate={startDate}
              endDate={endDate}
              handleSearchByDate={handleSearchByDate}
              handleEndDateChange={handleEndDateChange}
              handleStartDateChange={handleStartDateChange}
            />
            {getOperationDateError === 400 ? (
              <Typography variant="body2">
                Try another range of dates
              </Typography>
            ) : null}
          </Box>
          <Box
          // sx={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(2, 1fr)",
          //   gap: 1,
          // }}
          >
            {operationsByDate
              ?.map((operationBydate) => {
                const {id, operationType} = operationBydate;
                return (
                  <Box key={id}>
                    <OperationDateSearchCard
                      id={id}
                      operationType={operationType}
                    />
                  </Box>
                );
              })
              .toSpliced(4)}
          </Box>
        </Box>
      </Grid>
    </main>
  );
}
