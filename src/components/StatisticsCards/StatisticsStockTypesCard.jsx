import {Box, Typography} from "@mui/material";

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
  skyBlue: "rgba(208, 228, 233)",
  skyBlueOpacity: "rgba(208, 228, 233, 0.2)",
  green: "rgba(73, 184, 123, 1)",
};

export default function StatisticsStockTypesCard() {
  return (
    <Box
      mt={4}
      sx={{
        bgcolor: chartColorsPalette.skyBlue,
        boxShadow: 1,
        borderRadius: 2,
        p: 2.5,
        width: 216,
        height: 120,
      }}
    >
      <Typography
        textAlign={"left"}
        variant="body2"
        color={chartColorsPalette.blue}
      >
        Operation Type
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={1}
        mt={1}
      >
        <Typography fontFamily={"Comfortaa"} variant="h5">
          652.152
        </Typography>
        <Typography
          variant="body2"
          fontSize={"0.75rem"}
          color={chartColorsPalette.blue}
        >
          Percent Change
        </Typography>
      </Box>
    </Box>
  );
}
