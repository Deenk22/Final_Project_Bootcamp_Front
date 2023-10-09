import {Box, Button, Grid, Switch, Typography} from "@mui/material";
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
  skyBlueOpacity: "rgba(208, 228, 233, 0.2)",
};

export default function BrokerSelectedBarChart({
  selectedBroker,
  allOperations,
}) {
  const [isSellOperationsVisible, setIsSellOperationsVisible] = useState(true);
  const [isCompare, setIsCompare] = useState(null);
  const operationByBrokerSelected = allOperations?.filter(
    (operation) => operation.brokerId === selectedBroker
  );

  // VAMOS POR AQUI!!!!
  const bestFields = operationByBrokerSelected?.map((operation) => {
    const fields = {
      priceOpen: operation.priceOpen,
      priceClose: operation.priceClose,
      volume: operation.volume,
      swap: operation.swap,
      commission: operation.commission,
      operationType: operation.operationType,
    };
    return fields;
  });
  console.log(bestFields);

  // const keysName = bestFields?.map((keys) => Object.keys(keys).toSpliced(3));

  // Sell Operations
  const filterBySellOperations = bestFields?.filter(
    (operation) => operation.operationType === "Sell"
  );

  const priceOpenSell = filterBySellOperations
    ?.map((operation) => operation.priceOpen)
    .toSpliced(10);
  const priceCloseSell = filterBySellOperations
    ?.map((operation) => operation.priceClose)
    .toSpliced(10);
  const operationTypeSell = filterBySellOperations
    ?.map((operation) => operation.operationType)
    .toSpliced(10);

  // Buy Operations
  const filterByBuyOperations = bestFields?.filter(
    (operation) => operation.operationType === "Buy"
  );

  function toggleIsSellOperationsVisible() {
    setIsSellOperationsVisible(!isSellOperationsVisible);
  }

  const priceOpenBuy = filterByBuyOperations
    ?.map((operation) => operation.priceOpen)
    .toSpliced(10);
  const priceCloseBuy = filterByBuyOperations
    ?.map((operation) => operation.priceClose)
    .toSpliced(10);
  const operationTypeBuy = filterByBuyOperations
    ?.map((operation) => operation.operationType)
    .toSpliced(10);

  console.log(priceCloseBuy);

  const handleMouseEnter = (e) => {
    console.log("Mouse enter event:", e);
  };

  const handleMouseLeave = (e) => {
    console.log("Mouse leave event:", e);
  };

  function handleCompare() {
    setIsCompare(!isCompare);
  }

  const colorHover = () => {
    return (ctx) => {
      const standard = 0;
      const expenses = ctx.raw;
      const color =
        expenses > standard
          ? chartColorsPalette.skyBlueOpacity
          : expenses <= standard
          ? chartColorsPalette.lightYellow
          : "blue";
      return color;
    };
  };

  const barColorPriceOpen = () => {
    return (ctx) => {
      const standard = 0;
      const expenses = ctx.raw;
      const color =
        expenses > standard
          ? chartColorsPalette.tealBlue2
          : expenses <= standard
          ? chartColorsPalette.lightPink
          : chartColorsPalette.blue;
      return color;
    };
  };

  const barColorPriceClose = () => {
    return (ctx) => {
      const standard = 0;
      const expenses = ctx.raw;
      const color =
        expenses > standard
          ? chartColorsPalette.lightPink
          : expenses <= standard
          ? chartColorsPalette.lightPink
          : chartColorsPalette.blue;
      return color;
    };
  };

  const options = {
    scales: {
      x: {
        position: "bottom",
        ticks: {
          color: chartColorsPalette.skyBlue,
        },
      },
      y: {
        grid: {
          color: (context) => {
            // console.log(context);
            const zeroLine = context.tick.value;
            const barColor =
              zeroLine === 0
                ? chartColorsPalette.lightPink
                : chartColorsPalette.skyBlueOpacity;
            return barColor;
          },
        },
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

  const data = {
    labels: isSellOperationsVisible ? operationTypeSell : operationTypeBuy,

    datasets: [
      {
        label: "Price Open",
        data: isSellOperationsVisible ? priceOpenSell : priceOpenBuy,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: barColorPriceOpen(),
        hoverBackgroundColor: colorHover(),
      },
      {
        label: "Price Close",
        data: isSellOperationsVisible ? priceCloseSell : priceCloseBuy,
        grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: barColorPriceClose(),
        hoverBackgroundColor: colorHover(),
      },
    ],
  };
  return (
    <Grid container>
      <Grid item>
        <Box width={704}>
          <Bar
            data={data}
            options={options}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseLeave}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box>
          {isSellOperationsVisible ? (
            <Button onClick={toggleIsSellOperationsVisible}>
              Go to Buy operations
            </Button>
          ) : (
            <Button onClick={toggleIsSellOperationsVisible}>
              Go to Sell operations
            </Button>
          )}
        </Box>
        <Box>
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
      </Grid>
    </Grid>
  );
}
