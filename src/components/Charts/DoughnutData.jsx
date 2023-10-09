import {Pie} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {Box} from "@mui/material";

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

export default function DoughnutData({
  allOperations,
  selectedStock,
  selectedStrategy,
  selectedBroker,
  BrokersJoinOperationsData,
  allBrokers,
}) {
  // BROKERS
  const brokerName = allBrokers?.map((broker) => broker.name);

  const totalAmountAllBrokers = BrokersJoinOperationsData?.reduce(
    (total, operation) => {
      const operationAmount =
        (operation.priceClose - operation.priceOpen) * operation.volume -
        operation.commission -
        operation.swap;
      return total + operationAmount;
    },
    0
  );
  console.log(totalAmountAllBrokers);

  // STOCKS
  const operationsByStock = selectedStock
    ? allOperations?.filter((operation) => operation.stockId === selectedStock)
    : null;

  const operationStockLabel = operationsByStock?.map(
    (operation) => operation.operationType
  );

  // c = close / o = open
  const priceOpenByStock = operationsByStock?.map((o) => o.priceOpen);
  const priceCloseByStock = operationsByStock?.map((c) => c.priceClose);

  const stockDifferences = priceOpenByStock?.map(
    (open, index) => open - priceCloseByStock[index]
  );

  // const negativeResult = differences?.filter((result) => result < 0);

  // Restamos PriceOpen - PriceClose = Resultado / priceOpen * 100
  const percentageStockDifferences = stockDifferences?.map(
    (difference, index) => {
      const open = priceOpenByStock[index];
      const percentage = open !== 0 ? (difference / open) * 100 : 0;
      return percentage.toFixed(2);
    }
  );

  // const negativeResults = percentageDifferences?.filter(
  //   (percentage) => percentage <= 0
  // );

  // const totalNegativeResult = negativeResults?.length;

  // STRATEGIES
  const operationsByStrategy = selectedStrategy
    ? allOperations
        ?.filter((operation) => operation.strategyId === selectedStrategy)
        .toSpliced(10)
    : null;

  const operationStrategyLabel = operationsByStrategy?.map(
    (operation) => operation.operationType
  );

  const priceOpenByStrategy = operationsByStrategy?.map((o) => o.priceOpen);
  const priceCloseByStrategy = operationsByStrategy?.map((c) => c.priceClose);

  const strategyDifferences = priceOpenByStrategy?.map(
    (open, index) => open - priceCloseByStrategy[index]
  );

  const percentageStrategyDifferences = strategyDifferences?.map(
    (difference, index) => {
      const open = priceOpenByStrategy[index];
      const percentage = open !== 0 ? (difference / open) * 100 : 0;
      return percentage.toFixed(2);
    }
  );

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

  const stockData = {
    labels: brokerName,
    datasets: [
      {
        label: "Percentage",
        data: [totalAmountAllBrokers],
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

  // const strategyData = {
  //   labels: months,
  //   datasets: [
  //     {
  //       label: "Percentage",
  //       data: percentageStrategyDifferences,
  //       backgroundColor: [
  //         chartColorsPalette.lightPink,
  //         chartColorsPalette.lightYellow,
  //         chartColorsPalette.orange,
  //         chartColorsPalette.tealBlue2,
  //         chartColorsPalette.shadowtealBlue2,
  //         chartColorsPalette.skyBlue,
  //       ],
  //       hoverBorderColor: chartColorsPalette.skyBlue,
  //       borderColor: chartColorsPalette.blue,
  //       borderWidth: 2,
  //     },
  //   ],
  // };

  return (
    <Box>
      <Box width={400}>
        <Pie data={stockData} options={options} />
      </Box>
      {/* {isSelected
        ? selectedStock && (
            <Box width={400}>
              <Pie data={stockData} options={options} />
            </Box>
          )
        : selectedStrategy && (
            <Box width={400}>
              <Pie data={strategyData} options={options} />
            </Box>
          )} */}
      {/* {selectedStock ? (
        <Typography
          variant="body2"
          textAlign={"center"}
          color={chartColorsPalette.skyBlue}
        >
          Negative Results: {totalNegativeResult}
        </Typography>
      ) : null} */}

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
