import DoughnutData from "../../components/Charts/DoughnutData";
import DoughnutChartCards from "../../components/InfoCards/DoughnutChartCards";
import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";
import "./styleDashboard.css";

export default function DashboardView({data}) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
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
            <DoughnutData dataDemo={data} />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={6} padding={2}>
          <Box padding={8} bgcolor={colorPalettes.blue}>
            <Typography
              variant="h3"
              fontFamily={"Bebas Neue"}
              color={colorPalettes.skyBlue}
              mb={1}
            >
              Data Management / Portfolio
            </Typography>
            <Typography variant="body1" color={colorPalettes.skyBlue}>
              Improve your investment strategy with our Doughnut charts.
              Streamline data management, merging key financial metrics to make
              informed decisions. These visualisations provide valuable insights
              for a data-driven investment approach.
            </Typography>
            <DoughnutChartCards dataDemo={data} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
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
