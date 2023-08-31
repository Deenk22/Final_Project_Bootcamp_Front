import DoughnutData from "../../components/Charts/DoughnutData";
import DoughnutChartCards from "../../components/InfoCards/DoughnutChartCards";
import BarData from "../../components/Charts/BarData";
import BarChartCards from "../../components/InfoCards/BarChartCards";
import GraphicIcons from "../../components/common/GraphicIcons/GraphicIcons";
import CardsSections from "../../components/CardsSections/CardsSections";
import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";
import "./styleDashboard.css";

export default function DashboardView({articles}) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        mt={16}
      >
        <Grid item xs={10} sm={10} md={4}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            mt={4}
            padding={2}
            className="blur-effect-doughnut-chart-left"
          >
            <DoughnutData />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={6}>
          <GraphicIcons />
          <Box padding={4}>
            <Box>
              <Typography variant="h4" color={colorPalettes.blue} mb={1}>
                Data Management
              </Typography>
              <Typography variant="body2" color={colorPalettes.tealBlue}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur velit harum, alias voluptatem laudantium, nobis nam
                blanditiis quia tempore dignissimos iure qui! Tenetur Lorem
                ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
              <DoughnutChartCards />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CardsSections />
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={10} sm={10} md={6} mb={4}>
          <GraphicIcons />
          <Box padding={4}>
            <Box>
              <Typography variant="h4" color={colorPalettes.blue} mb={1}>
                Total Capital Invested
              </Typography>
              <Typography variant="body2" color={colorPalettes.tealBlue}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur velit harum, alias voluptatem laudantium, nobis nam
                blanditiis quia tempore dignissimos iure qui! Tenetur Lorem
                ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
              <BarChartCards />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={4}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={2}
            className="blur-effect-doughnut-chart-right"
          >
            <BarData />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
