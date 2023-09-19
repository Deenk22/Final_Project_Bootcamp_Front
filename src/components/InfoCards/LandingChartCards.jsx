import {Box, Grid} from "@mui/material";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
  tealBlue: "#367588",
};

export default function LandingChartCards() {
  return (
    <section>
      <Grid container direction={"row"} justifyContent={"space-evenly"}>
        <Grid item>
          <Box
            width={500}
            height={500}
            bgcolor={chartColorsPalette.lightPink}
          ></Box>
        </Grid>
        <Grid item>
          <Box
            width={500}
            height={500}
            bgcolor={chartColorsPalette.lightPink}
          ></Box>
        </Grid>
        <Grid item>
          <Box
            width={500}
            height={500}
            bgcolor={chartColorsPalette.lightPink}
          ></Box>
        </Grid>
      </Grid>
    </section>
  );
}
