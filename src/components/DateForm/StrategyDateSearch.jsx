import {Box, TextField, Typography} from "@mui/material";

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

export default function StrategyDateSearch({
  endDate,
  startDate,
  handleSearchByDate,
  handleEndDateChange,
  handleStartDateChange,
}) {
  return (
    <Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <TextField
          type="date"
          id="startDate"
          size="small"
          value={startDate}
          onChange={handleStartDateChange}
          sx={{
            background: chartColorsPalette.tealBlueOpacity,
          }}
        />
        <TextField
          type="date"
          id="endDate"
          size="small"
          value={endDate}
          onChange={handleEndDateChange}
          sx={{
            background: chartColorsPalette.tealBlueOpacity,
          }}
        />
        <Typography
          component={"button"}
          variant="contained"
          padding={2}
          onClick={handleSearchByDate}
        >
          Search
        </Typography>
      </Box>
    </Box>
  );
}
