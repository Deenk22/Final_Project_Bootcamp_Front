import {Pie} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {Box} from "@mui/material";

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

export default function DoughnutData() {
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

  const data = {
    labels: ["01", "02", "03"],
    datasets: [
      {
        label: ["01", "02", "03"],
        data: ["01", "02", "03"],
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
    <Box width={448}>
      <Pie data={data} options={options} />
    </Box>
  );
}
