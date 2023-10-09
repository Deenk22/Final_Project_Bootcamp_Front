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

export default function OperationDateSearch({
  endDate,
  startDate,
  handleSearchByDate,
  handleEndDateChange,
  handleStartDateChange,
}) {
  return (
    <Box border={"2px solid black"} marginX={48} borderRadius={4} paddingY={4}>
      <Typography textAlign={"center"} variant="h3" mb={2}>
        search by date
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
        <TextField
          type="date"
          id="startDate"
          size="small"
          value={startDate}
          onChange={handleStartDateChange}
          sx={{
            background: chartColorsPalette.skyBlue,
          }}
        />
        <TextField
          type="date"
          id="endDate"
          size="small"
          value={endDate}
          onChange={handleEndDateChange}
          sx={{
            background: chartColorsPalette.skyBlue,
          }}
        />
      </Box>
      <Box textAlign={"center"}>
        <Typography
          onClick={handleSearchByDate}
          component={"button"}
          paddingX={2}
          paddingY={0.5}
          mt={2}
          borderRadius={1}
          sx={{
            border: "none",
            bgcolor: chartColorsPalette.blue,
            color: chartColorsPalette.skyBlue,
            cursor: "pointer",
          }}
        >
          Search
        </Typography>
      </Box>
    </Box>
  );
}
