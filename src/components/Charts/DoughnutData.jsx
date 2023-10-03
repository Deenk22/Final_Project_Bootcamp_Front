import {Pie} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {Box, Typography} from "@mui/material";
import {useState} from "react";

// const lastOperations = allOperations ? allOperations.toSpliced(3) : null;
// const operationsValues = allOperations ? allOperations[0] : null;
// const operationLabels = operationsValues
//   ? Object.keys(operationsValues)
//   : null;

// const operationData = lastOperations
//   ? lastOperations.map((operation) => Object.values(operation))
//   : null;
// const operationSelectedData = allOperations?.find(
//   (operation) => operation.operationType === operationSelected
// );

// const labelsData = operationSelectedData
//   ? Object.values(operationSelectedData)
//   : null;

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

export default function DoughnutData({allOperations, selectedStock}) {
  const operationByStock = selectedStock
    ? allOperations?.filter((operation) => operation.stockId === selectedStock)
    : null;

  const operationLabel = operationByStock?.map(
    (operation) => operation.operationType
  );

  // c = close / o = open
  const priceOpen = operationByStock?.map((o) => o.priceOpen);
  const priceClose = operationByStock?.map((c) => c.priceClose);

  const differences = priceOpen?.map((open, index) => open - priceClose[index]);

  // const negativeResult = differences?.filter((result) => result < 0);

  // Restamos PriceOpen - PriceClose = Resultado / priceOpen * 100
  const percentageDifferences = differences?.map((difference, index) => {
    const open = priceOpen[index];
    const percentage = open !== 0 ? (difference / open) * 100 : 0;
    return percentage.toFixed(2);
  });

  const negativeResults = percentageDifferences?.filter(
    (percentage) => percentage <= 0
  );

  const totalNegativeResult = negativeResults?.length;

  const data = {
    labels: operationLabel,
    datasets: [
      {
        label: "Percentage",
        data: percentageDifferences,
        backgroundColor: [
          chartColorsPalette.lightPink,
          chartColorsPalette.lightYellow,
          chartColorsPalette.orange,
          chartColorsPalette.tealBlue2,
          chartColorsPalette.shadowtealBlue2,
          chartColorsPalette.skyBlue,
        ],
        hoverBorderColor: chartColorsPalette.skyBlue,
        borderColor: chartColorsPalette.blue,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left",
        labels: {
          font: {
            size: 12,
          },
          color: chartColorsPalette.skyBlue,
          padding: 10,
        },
        rtl: false,
      },
      tooltip: {
        borderColor: chartColorsPalette.lightPink,
        borderWidth: 1,
      },
    },
  };

  return (
    <Box>
      <Box width={430}>
        <Pie data={data} options={options} />
      </Box>
      {selectedStock ? (
        <Typography
          variant="body2"
          textAlign={"center"}
          color={chartColorsPalette.skyBlue}
        >
          Negative Results: {totalNegativeResult}
        </Typography>
      ) : null}

      {/* <Box display={"flex"} justifyContent={"center"}>
        <Typography
          textAlign={"center"}
          variant="body2"
          mt={4}
          color={chartColorsPalette.skyBlue}
        >
          Operations By Stock
        </Typography>
      </Box> */}
    </Box>
  );
}
