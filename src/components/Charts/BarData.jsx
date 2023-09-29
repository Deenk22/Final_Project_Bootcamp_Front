import {Box, Switch, Typography} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {useState} from "react";
import {Bar} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

export default function BarData({allOperations}) {
  const [isCompare, setIsCompare] = useState(null);

  const lastOperations = allOperations ? allOperations.toSpliced(3) : null;
  const operationsValues = allOperations ? allOperations[0] : null;
  const operationLabels = operationsValues
    ? Object.keys(operationsValues)
    : null;

  const operationData = lastOperations
    ? lastOperations.map((operation) => Object.values(operation))
    : null;

  // const operationNameLabel = lastOperations
  //   ? lastOperations.map((operation) => Object.keys(operation))
  //   : null;

  // const hola = [...new Set(allOperations?.map((type) => type.operationType))];
  // console.log(hola);

  function handleCompare() {
    setIsCompare(!isCompare);
  }

  const options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,
          },
          color: chartColorsPalette.skyBlue,
          padding: 10,
        },
      },
    },
  };

  const data = {
    labels: operationLabels
      ? operationLabels.toSpliced(0, 4).slice(0, -3)
      : null,
    datasets: [
      {
        label: operationData ? operationData[0][3] : null,
        data: operationData ? operationData[0].toSpliced(0, 4) : null,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.tealBlue2,
        hoverBackgroundColor: chartColorsPalette.tealBlueOpacity,
      },
      {
        label: operationData ? operationData[1][3] : null,
        data: operationData ? operationData[1].toSpliced(0, 4) : null,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.lightPink,
        hoverBackgroundColor: chartColorsPalette.lightPinkOpacity,
      },
      {
        label: operationData ? operationData[2][3] : null,
        data: operationData ? operationData[2].toSpliced(0, 4) : null,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.lightYellow,
        hoverBackgroundColor: chartColorsPalette.lightYellowOpacity,
      },
    ],
  };

  return (
    <Box>
      <Box width={560}>
        <Bar data={data} options={options} />
      </Box>
      <Typography
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        variant="body2"
        mt={4}
        onClick={handleCompare}
        color={chartColorsPalette.skyBlue}
      >
        <Switch color="primary" size="lg" variant="outlined" />
        Visual Assessment
      </Typography>
    </Box>
  );
}
