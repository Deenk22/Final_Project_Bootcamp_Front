import {Box, Grid, Typography} from "@mui/material";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{
          bgcolor: colorPalettes.blue,
        }}
        mt={16}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <img
              src="./src/assets/logo-fonto-transparente.png"
              alt="Logo"
              width={256}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography variant="h5" color={colorPalettes.skyBlue}>
              IM
            </Typography>
            <Typography color={colorPalettes.skyBlue} variant="body2">
              The platform provides investors with the ability to manage their
              portfolios and investments efficiently. With an intuitive design.
              It offers complete control and organization to maximize financial
              potential.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
}
