import {Box, Typography} from "@mui/material";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 1)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.1)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56, 0.9)",
  blueOpacity: "rgba(22, 41, 56, 0.2)",
  skyBlue: "rgba(208, 228, 233)",
  tealBlue: "rgba(54, 117, 136, 1)",
  tealBlueOpacity: "rgba(54, 117, 136, 0.1)",
  green: "rgba(73, 184, 123, 0.5)",
};

export default function StatisticsHeader({brokerName, totalAmount}) {
  const totalAmountFixed = parseFloat(totalAmount).toFixed(3);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"left"}
      flexDirection={"column"}
      width={"80%"}
      height={64}
      bgcolor={chartColorsPalette.blue}
    >
      <Typography
        fontFamily={"Comfortaa"}
        textAlign={"center"}
        variant="body2"
        color={chartColorsPalette.skyBlue}
      >
        {brokerName}
      </Typography>
      <Typography
        fontFamily={"Comfortaa"}
        textAlign={"center"}
        variant="h6"
        color={chartColorsPalette.skyBlue}
      >
        {totalAmountFixed}
      </Typography>
    </Box>
  );
}
