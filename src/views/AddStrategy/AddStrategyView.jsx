import {Box, Grid, Typography} from "@mui/material";
import AddStrategyForm from "../../components/AddStrategyForm/AddStrategyForm";
import StrategyTable from "../../components/Tables/StrategyTable";
import StrategyDateSearch from "../../components/DateForm/StrategyDateSearch";
import StrategyDateSearchCard from "../../components/InfoCards/StrategyDateSearchCards";

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
      >
        <Grid item mb={10} xs={10}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography variant="h3" mb={6}>
              Strategy Control Panel
            </Typography>
            <AddStrategyForm />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <StrategyTable
              allStrategies={allStrategies}
              strategyDeleteMutation={strategyDeleteMutation}
            />
          </Box>
        </Grid>
      </Grid>
      <Box my={8}>
        <StrategyDateSearch
          startDate={startDate}
          endDate={endDate}
          handleSearchByDate={handleSearchByDate}
          handleEndDateChange={handleEndDateChange}
          handleStartDateChange={handleStartDateChange}
        />
      </Box>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        spacing={2}
        mt={4}
        mb={8}
        // sx={{
        //   display: "grid",
        //   gridTemplateColumns: "repeat(2, 1fr)",
        //   gap: 1,
        // }}
      >
        {strategiesByDate
          ?.map((strategy) => {
            const {id, name} = strategy;
            return (
              <Grid item key={id} xs={10} sm={5} md={5} lg={3}>
                <StrategyDateSearchCard id={id} name={name} />
              </Grid>
            );
          })
          .toSpliced(8)}
      </Grid>
    </>
  );
}
