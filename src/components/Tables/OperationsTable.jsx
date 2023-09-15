import {Box, Grid, Paper, Typography} from "@mui/material";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function OperationsTable({...props}) {
  const {id, operationType, priceOpen, stopLoss, takeProfit, commission} =
    props;
  return (
    <Paper
      elevation={12}
      sx={{
        marginTop: 2,
        borderRadius: 2,
      }}
    >
      <Box padding={2}>
        <Typography variant="body2" color={colorPalettes.tealBlue}>
          {operationType}
        </Typography>
      </Box>
    </Paper>
  );
}
