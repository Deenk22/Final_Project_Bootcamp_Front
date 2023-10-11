import {Typography} from "@mui/material";
import {Box} from "@mui/system";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.6)",
  lightPink: "rgba(255, 99, 132, 0.8)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
  green: "rgba(73, 184, 123, 1)",
};

// Hacer el map en la vista!!

export default function OperationsCard({operationType, priceClose, priceOpen}) {
  const percentage = ((priceOpen - priceClose) / priceOpen) * 100;

  return (
    <Box
      sx={{
        bgcolor: chartColorsPalette.blue,
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        width: 224,
        height: 128,
        backgroundImage: `url(${
          percentage < 0
            ? "./src/assets/svg/charts/redChart.svg"
            : "./src/assets/svg/charts/greenChart.svg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top right",
      }}
    >
      <Typography
        textAlign={"left"}
        variant="body2"
        color={chartColorsPalette.skyBlue}
      >
        Operation Type
      </Typography>

      <Typography
        textAlign={"left"}
        variant="h3"
        color={chartColorsPalette.skyBlue}
        mt={-0.5}
      >
        {operationType}
        {percentage < 0 ? (
          <ArrowDropDownIcon
            fontSize="large"
            sx={{
              position: "relative",
              left: 8,
              color: chartColorsPalette.lightPink,
            }}
          />
        ) : (
          <ArrowDropUpIcon
            fontSize="large"
            sx={{
              position: "relative",
              left: 8,
              color: chartColorsPalette.green,
            }}
          />
        )}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={1}
        mt={2}
      >
        <Typography
          variant="body1"
          color={
            percentage < 0
              ? chartColorsPalette.lightPink
              : chartColorsPalette.green
          }
          sx={{
            display: "inline",
          }}
        >
          {`${percentage.toFixed(2) + "%"}`}
        </Typography>
        <Typography
          variant="body2"
          fontSize={"0.75rem"}
          color={chartColorsPalette.skyBlue}
        >
          Percent Change
        </Typography>
      </Box>
    </Box>
  );
}
