import DoughnutData from "../../components/Charts/DoughnutData";
import {Box, Grid, Typography} from "@mui/material";
import "./styleDashboard.css";
import OperationsTable from "../../components/Tables/OperationsTable";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function DashboardView({allOperations}) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems={"center"}
        mt={4}
        paddingY={16}
        bgcolor={colorPalettes.blue}
      >
        <Grid item xs={10} sm={10} md={10} lg={4} padding={2}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            border={"2px solid" + colorPalettes.blue}
          >
            <DoughnutData allOperations={allOperations} />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={6} padding={2}>
          <Box padding={4} bgcolor={colorPalettes.blue}>
            <Typography
              variant="h3"
              fontFamily={"Bebas Neue"}
              color={colorPalettes.skyBlue}
              mb={1}
            >
              Data Management / Portfolio
            </Typography>
            <Typography mb={2} variant="body1" color={colorPalettes.skyBlue}>
              Improve your investment strategy with our Doughnut charts.
              Streamline data management, merging key financial metrics to make
              informed decisions. These visualisations provide valuable insights
              for a data-driven investment approach.
            </Typography>
            <Typography
              variant="h4"
              fontFamily={"Bebas Neue"}
              color={colorPalettes.skyBlue}
            >
              Recent Operations
            </Typography>
            {allOperations?.map((operation) => {
              const {
                id,
                operationType,
                priceOpen,
                stopLoss,
                takeProfit,
                commission,
              } = operation;
              return (
                <OperationsTable
                  key={id}
                  operationType={operationType}
                  priceOpen={priceOpen}
                  stopLoss={stopLoss}
                  takeProfit={takeProfit}
                  commission={commission}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
      {/* Este grid deberia ir en una section fuera de aqui */}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        bgcolor={colorPalettes.skyBlue}
      >
        <Grid item xs={10} sm={10} md={6} mb={4}>
          <Box mt={4} padding={16}>
            <Typography variant="h4" color={colorPalettes.blue}>
              Total Capital Invested
            </Typography>
            <Typography variant="body2" color={colorPalettes.blue}>
              Improve your investment strategy with our Doughnut charts.
              Streamline data management, merging key financial metrics to make
              informed decisions. These visualisations provide valuable insights
              for a data-driven investment approach.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={4}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={2}
            className="blur-effect-doughnut-chart-right"
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
