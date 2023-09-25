import {Typography} from "@mui/material";
import {Box} from "@mui/system";

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
};

// Hacer el map en la vista!!

export default function OperationsCard({
  operationType,
  id,
  commission,
  takeProfit,
}) {
  return (
    <Box
      mb={4}
      sx={{
        bgcolor: chartColorsPalette.blue,
        boxShadow: 1,
        borderRadius: 4,
        p: 2.5,
        width: 200,
        height: 200,
      }}
    >
      <Typography variant="body2" color={chartColorsPalette.skyBlue}>
        Profits
      </Typography>

      <Box key={id}>
        <Typography variant="h3" color={chartColorsPalette.skyBlue}>
          {operationType} / {takeProfit}
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={1}
          position={"relative"}
          top={30}
        >
          <Typography
            variant="body1"
            color={chartColorsPalette.lightPink}
            sx={{
              display: "inline",
            }}
          >
            {commission}
          </Typography>
          <Typography
            variant="body2"
            color={chartColorsPalette.skyBlue}
            sx={{
              display: "inline",
            }}
          >
            Commission
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
