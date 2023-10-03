import {Box} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

export default function LineData() {
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: ["Hola", "Que"],
    datasets: [
      {
        label: ["Hola"],
        data: ["15", "26"],
        // grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.tealBlue2,
        hoverBackgroundColor: chartColorsPalette.tealBlueOpacity,
      },
    ],
  };
  return (
    <Box width={768}>
      <Line data={data} options={options} />
    </Box>
  );
}
