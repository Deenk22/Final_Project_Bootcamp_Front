import {Pie} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {Box, Skeleton, Typography} from "@mui/material";

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

export default function DoughnutData({allOperations, operationSelected}) {
  const operationSelectedData = allOperations?.find(
    (operation) => operation.operationType === operationSelected
  );

  const labelsInfo = operationSelectedData
    ? Object.keys(operationSelectedData)
    : null;

  const labelsData = operationSelectedData
    ? Object.values(operationSelectedData)
    : null;

  const data = {
    labels: labelsInfo ? labelsInfo.toSpliced(0, 4) : labelsInfo,
    datasets: [
      {
        label: "Quantity",
        data: labelsData,
        backgroundColor: [
          chartColorsPalette.lightPink,
          chartColorsPalette.lightYellow,
          chartColorsPalette.orange,
          chartColorsPalette.tealBlue2,
          chartColorsPalette.lightYellow,
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
          padding: 16,
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
    <Box width={400}>
      {operationSelected ? (
        <Box>
          {/* <Typography
            variant="body2"
            textAlign={"center"}
            color={chartColorsPalette.skyBlue}
          >
            Operation Selected
          </Typography> */}
          <Typography
            variant="h4"
            textAlign={"center"}
            color={chartColorsPalette.skyBlue}
          >
            {operationSelected}
          </Typography>
          <Pie data={data} options={options} />
        </Box>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            color={chartColorsPalette.skyBlue}
          >
            Select Operations
          </Typography>
          <Skeleton
            variant="rectangular"
            width={350}
            height={350}
            sx={{bgcolor: "rgba(255, 205, 86, 0.1)", borderRadius: 50}}
          />
        </Box>
      )}
    </Box>
  );
}
