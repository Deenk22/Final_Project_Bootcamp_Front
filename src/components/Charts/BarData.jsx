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
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

export default function BarData({allOperations}) {
  const [isCompare, setIsCompare] = useState(null);

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
          padding: 16,
        },
      },
    },
  };

  const data = {
    labels: allOperations?.map((type) => type.operationType),
    datasets: [
      {
        label: "StopLoss",
        data: allOperations?.map((priceClose) => priceClose.priceClose),
        barThickness: isCompare ? 32 : 16,
        grouped: isCompare ? false : true,
        borderRadius: 2,
        backgroundColor: chartColorsPalette.lightYellow,
        hoverBackgroundColor: chartColorsPalette.shadowYellow,
        // base: 0,
        // pointStyle: "circle",
        // skipNull
      },
      {
        label: "TakeProfit",
        data: allOperations?.map((priceOpen) => priceOpen.priceOpen),
        borderRadius: 2,
        backgroundColor: chartColorsPalette.tealBlue2,
        hoverBackgroundColor: chartColorsPalette.shadowtealBlue2,
      },
    ],
  };

  return (
    <Box width={800}>
      <Bar data={data} options={options} />
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
