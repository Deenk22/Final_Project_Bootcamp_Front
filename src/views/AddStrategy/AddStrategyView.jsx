import {Box, Grid, Typography} from "@mui/material";
import AddStrategyForm from "../../components/AddStrategyForm/AddStrategyForm";
import StrategyTable from "../../components/Tables/StrategyTable";
import StrategyDateSearch from "../../components/DateForm/StrategyDateSearch";
import StrategyDateSearchCard from "../../components/InfoCards/StrategyDateSearchCards";
import DetailCards from "../../components/InfoCards/DetailCards";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.6)",
  lightPink: "rgba(255, 99, 132, 0.6)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  blueOpacity: "rgba(22, 41, 56, 0.2)",
  skyBlue: "rgba(208, 228, 233)",
  skyBlueOpacity: "rgba(208, 228, 233, 0.2)",
};

export default function AddStrategyView({
  allStrategies,
  strategiesByDate,
  endDate,
  startDate,
  handleSearchByDate,
  handleEndDateChange,
  handleStartDateChange,
  strategyDeleteMutation,
}) {
  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={8}
      >
        <Grid item mb={8} xs={10}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography color={chartColorsPalette.blue} variant="h3" mb={1}>
              Strategy Control Panel
            </Typography>
            <AddStrategyForm />
          </Box>
        </Grid>
        <Grid item mb={8} xs={10}>
          <Box>
            <StrategyTable
              allStrategies={allStrategies}
              strategyDeleteMutation={strategyDeleteMutation}
            />
          </Box>
        </Grid>
      </Grid>
      {/* <Box my={8}>
        <StrategyDateSearch
          startDate={startDate}
          endDate={endDate}
          handleSearchByDate={handleSearchByDate}
          handleEndDateChange={handleEndDateChange}
          handleStartDateChange={handleStartDateChange}
        />
      </Box>
      <Grid container spacing={1} mb={8}>
        {strategiesByDate
          ?.map((strategy) => {
            const {id, name} = strategy;
            return (
              <Grid
                display={"flex"}
                justifyContent={"center"}
                item
                key={id}
                xs={10}
                sm={5}
                md={4}
              >
                <StrategyDateSearchCard id={id} name={name} />
              </Grid>
            );
          })
          .toSpliced(9)}
      </Grid> */}
      {/* <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        spacing={2}
        mt={4}
        mb={8}
      >
        {allStrategies
          ?.map((operationByType) => {
            const {id, name, budget, createDate} = operationByType;
            return (
              <Grid item key={id} xs={10} sm={5} md={5} lg={3}>
                <DetailCards
                  type={"strategy"}
                  id={id}
                  name={name}
                  budget={budget}
                  createDate={createDate}
                />
              </Grid>
            );
          })
          .toSpliced(4)}
      </Grid> */}
    </>
  );
}
