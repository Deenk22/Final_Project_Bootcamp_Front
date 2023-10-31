import {Box, Grid, Typography} from "@mui/material";
import "./Style.css";

const chartColorsPalette = {
  tealBlue: "#367588",
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
  skyBlue: "rgba(208, 228, 233)",
  skyBlueOpacity: "rgba(208, 228, 233, 0.1)",
};

export default function Carrousel() {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      direction={"column"}
      mb={8}
    >
      <Grid item xs={10} sm={10} md={3} lg={4} mt={8}>
        <Box>
          <Typography variant="h2" color={chartColorsPalette.blue}>
            Coming Soon...
          </Typography>
          <Typography variant="body2" color={chartColorsPalette.blue}>
            Take a look at the cards we will soon unveil in this section. Enjoy
            total control over your operations, down to the smallest detail.
            Watch out for an unparalleled investment experience, where
            meticulous supervision meets effortless management.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={10} sm={10} md={3} lg={4}>
        <Box className="container up-transition">
          <Box mb={8}>
            <Box className="content">
              <Typography variant="h5">Enhance</Typography>
              <Typography variant="body2">Application performance</Typography>
            </Box>
          </Box>
          <Box mb={8}>
            <Box className="content">
              <Typography variant="h5">Connectivity</Typography>
              <Typography variant="body2">On all devices</Typography>
            </Box>
          </Box>
          <Box mb={8}>
            <Box className="content">
              <Typography variant="h5">Monitoring</Typography>
              <Typography variant="body2">
                Perfection in Every Detail
              </Typography>
            </Box>
          </Box>
          <Box mb={8}>
            <Box className="content">
              <Typography variant="h5"> Optimize</Typography>
              <Typography variant="body2">
                Your investment experience
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
