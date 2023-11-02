import {Box, Grid, Typography} from "@mui/material";
import AddStrategyForm from "../../components/AddStrategyForm/AddStrategyForm";
import StrategyTable from "../../components/Tables/StrategyTable";

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
    </>
  );
}
