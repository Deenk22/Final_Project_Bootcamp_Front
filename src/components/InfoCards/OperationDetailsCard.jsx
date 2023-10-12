import {Box, Button, Grid, Typography} from "@mui/material";

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
  blueOpacity: "rgba(22, 41, 56, 0.2)",
  skyBlue: "rgba(208, 228, 233)",
  skyBlueOpacity: "rgba(208, 228, 233, 0.2)",
};

export default function OperationDetailCard({
  brokerName,
  strategyName,
  stockTypeName,
  stockName,
  priceClose,
  priceOpen,
  commission,
  swap,
  operationDate,
  operationType,
}) {
  return (
    <Grid
      container
      mt={8}
      mb={8}
      display={"flex"}
      justifyContent={"center"}
      spacing={2}
    >
      <Grid
        item
        padding={0}
        display={"flex"}
        justifyContent={"center"}
        gap={2}
        xs={10}
        sm={8}
        md={5}
      >
        <Box width={224} height={128} bgcolor={chartColorsPalette.blue}>
          <Typography
            variant="body2"
            position={"relative"}
            bottom={40}
            padding={1}
            bgcolor={chartColorsPalette.blueOpacity}
          >
            Broker
          </Typography>
          <Typography
            variant="h4"
            mt={-2}
            ml={1}
            color={chartColorsPalette.skyBlue}
          >
            {brokerName}
          </Typography>
        </Box>
        <Box width={224} height={128} bgcolor={chartColorsPalette.blue}>
          <Typography variant="h4" color={chartColorsPalette.skyBlue}>
            {strategyName}
          </Typography>
        </Box>
        <Box width={224} height={128} bgcolor={chartColorsPalette.blue}>
          <Typography variant="h4" color={chartColorsPalette.skyBlue}>
            {stockTypeName}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        gap={2}
        xs={10}
        sm={8}
        md={5}
      >
        <Box width={224} height={128} bgcolor={chartColorsPalette.blue}>
          <Typography
            fontFamily={"Comfortaa"}
            variant="h3"
            color={chartColorsPalette.skyBlue}
          >
            {priceClose}
          </Typography>
        </Box>
        <Box width={224} height={128} bgcolor={chartColorsPalette.blue}>
          <Typography
            fontFamily={"Comfortaa"}
            variant="h3"
            color={chartColorsPalette.skyBlue}
          >
            {priceOpen}
          </Typography>
        </Box>
        <Box width={224} height={128} bgcolor={chartColorsPalette.blue}>
          <Typography
            fontFamily={"Comfortaa"}
            variant="h3"
            color={chartColorsPalette.skyBlue}
          >
            {commission}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}