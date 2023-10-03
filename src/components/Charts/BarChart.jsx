import {Box} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
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
  blueOpacity: "rgba(22, 41, 56, 0.7)",
  skyBlue: "rgba(208, 228, 233)",
};

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

export default function BarChart({
  selectedStrategy,
  allOperations,
  allStockTypes,
  allStocks,
  // selectedStockType,
}) {
  // Seleccionamos una estrategia y como resultado <operationsByStrategy> todas las operaciones relacionadas.
  const operationsByStrategy = allOperations?.filter(
    (operation) => operation.strategyId === selectedStrategy
  );

  const strategyLabel = operationsByStrategy?.map(
    (label) => label.operationType
  );

  // Al seleccionar una estrategia y conseguir todas las operaciones relacionadas con dicha estrategia, recuperamos el stockId de cada operación. Solo recuperamos el ID del stock.
  const stockIds = operationsByStrategy?.map((stock) => stock.stockId);

  // Aqui al recuperar el stockId de las operaciones relacionadas con la estrategia seleccinada, recuperamos toda la información de los stocks.
  const stockIdtoType = allStocks?.filter((stock) =>
    stockIds.includes(stock.id)
  );

  // Con toda la información ya recuperada de los stocks relacionados con las operaciones que a su vez, estas estan relacionadas con las estrategias, recuperamos el stockTypeId de los stocks para posteriormente recuperar el tipo de stock.
  const stockTypeIds = stockIdtoType?.map((stock) => stock.stockTypeId);

  // Finalmente tenemos el tipo de stock. StockType.
  const stockTypeByStrategy = allStockTypes?.filter((type) =>
    stockTypeIds?.includes(type.id)
  );
  console.log(stockTypeByStrategy);

  // Hemos utilizado takeProfit a modo de prueba, debera ser la suma o el total por meses en años.
  const takeProfit = operationsByStrategy?.map(
    (operation) => operation.takeProfit
  );

  // const stocks = operationsByStrategy?.map((stock) => stock.stockId);

  // const allStocksByStrategy = operationsByStrategy?.filter((stock) =>
  //   stock.includes(stock.stockId)
  // );

  // console.log(allStocksByStrategy);

  // Seleccionamos todas las operaciones por estrategia y de esas operaciones sacamos el stock id.

  // const stockId = operationsByStrategy?.filter(
  //   (operation) => operation.stockId === selectedStrategy
  // );

  // console.log(operationsByStrategy);

  // const operationByDate = operationsByStrategy?.map(
  //   (operation) => operation.operationDate
  // );

  // Aqui sumaremos el total de Euros por meses y años.
  // Tambien a la derecha % distribuido por tipo de activo.
  // const info = operationsByStrategy?.map((operation) => operation.takeProfit);

  const options = {
    scales: {
      x: {
        ticks: {
          color: chartColorsPalette.blue,
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
          color: chartColorsPalette.blue,
          padding: 10,
        },
      },
    },
  };

  const data = {
    labels: strategyLabel,
    datasets: [
      {
        label: "Total amount per month",
        data: takeProfit,
        // grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.blue,
        hoverBackgroundColor: chartColorsPalette.blueOpacity,
      },
    ],
  };

  return (
    <Box width={768}>
      <Bar data={data} options={options} />
    </Box>
  );
}
