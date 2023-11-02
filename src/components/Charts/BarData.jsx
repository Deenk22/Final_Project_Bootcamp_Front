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
import LensIcon from "@mui/icons-material/Lens";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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

export default function BarData({
  allOperations,
  selectedStock,
  selectedStrategy,
  isSelected,
}) {
  const [isCompare, setIsCompare] = useState(null);

  const handleMouseEnter = (e) => {
    console.log("Mouse enter event:", e);
  };

  const handleMouseLeave = (e) => {
    console.log("Mouse leave event:", e);
  };

  // STOCKS
  const operationByStock = selectedStock
    ? allOperations?.filter((operation) => operation.stockId === selectedStock)
    : null;

  const priceOpenByStock = operationByStock?.map((o) => o.priceOpen);
  const priceCloseByStock = operationByStock?.map((c) => c.priceClose);

  const maxValuePriceOpen = priceOpenByStock
    ? Math.max(...priceOpenByStock)
    : null;
  const maxValuePriceClose = priceCloseByStock
    ? Math.max(...priceCloseByStock)
    : null;

  // STRATEGIES
  const operationByStrategy = selectedStrategy
    ? allOperations
        ?.filter((operation) => operation.strategyId === selectedStrategy)
        .toSpliced(10)
    : null;

  const strategyLabel = operationByStrategy?.map(
    (operation) => operation.operationType
  );

  const priceOpenByStrategy = operationByStrategy?.map((o) => o.priceOpen);
  const priceCloseByStrategy = operationByStrategy?.map((c) => c.priceClose);

  const maxValuePriceOpenStrategy = priceOpenByStrategy
    ? Math.max(...priceOpenByStrategy)
    : null;

  const maxValuePriceCloseStrategy = priceCloseByStrategy
    ? Math.max(...priceCloseByStrategy)
    : null;

  function handleCompare() {
    setIsCompare(!isCompare);
  }

  const options = {
    scales: {
      x: {
        ticks: {
          color: chartColorsPalette.skyBlue,
        },
      },
    },
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

  const stockData = {
    labels: ["Broker1", "Broker2", "Broker3", "Broker4"],
    datasets: [
      {
        label: ["Price Open"],
        data: priceOpenByStock,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.tealBlue2,
        hoverBackgroundColor: chartColorsPalette.tealBlueOpacity,
      },
      {
        label: ["Price Close"],
        data: priceCloseByStock,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.lightPink,
        hoverBackgroundColor: chartColorsPalette.lightPinkOpacity,
      },
    ],
  };

  const strategyData = {
    labels: strategyLabel,
    datasets: [
      {
        label: ["Price Open"],
        data: priceOpenByStrategy,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.tealBlue2,
        hoverBackgroundColor: chartColorsPalette.tealBlueOpacity,
      },
      {
        label: ["Price Close"],
        data: priceCloseByStrategy,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.lightPink,
        hoverBackgroundColor: chartColorsPalette.lightPinkOpacity,
      },
    ],
  };

  return (
    <Box>
      {isSelected
        ? selectedStock && (
            <Box width={544}>
              <Bar
                data={stockData}
                options={options}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseLeave}
              />
            </Box>
          )
        : selectedStrategy && (
            <Box width={544}>
              <Bar data={strategyData} options={options} />
            </Box>
          )}
      {operationByStock !== null ? (
        <>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={2}
            gap={2}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <LensIcon
                fontSize="1rem"
                sx={{color: chartColorsPalette.tealBlue2}}
              />
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={1}
                variant="body2"
                color={chartColorsPalette.skyBlue}
              >
                Max Value <ArrowRightAltIcon fontSize="1rem" />
                {isSelected ? maxValuePriceOpen : maxValuePriceOpenStrategy}
              </Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <LensIcon
                fontSize="1rem"
                sx={{color: chartColorsPalette.lightPink}}
              />
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={1}
                variant="body2"
                color={chartColorsPalette.skyBlue}
              >
                Max Value <ArrowRightAltIcon fontSize="1rem" />
                {isSelected ? maxValuePriceClose : maxValuePriceCloseStrategy}
              </Typography>
            </Box>
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
        </>
      ) : null}
    </Box>
  );
}
