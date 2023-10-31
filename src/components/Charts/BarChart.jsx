import {Box, Grid, Typography} from "@mui/material";
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
import OperationsCard from "../InfoCards/OperationsCard";
import LensIcon from "@mui/icons-material/Lens";

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
  tealBlue: "#367588",
};

// const statisticsInfo = [
//   {
//     icon: <LensIcon />,
//     title: <Typography>Titulo Para Mañana</Typography>
//   },
// ];

export default function BarChart({
  selectedStrategy,
  allOperations,
  allStockTypes,
  allStocks,
  allStrategies,
  // selectedStockType,
}) {
  // Seleccionamos una estrategia y como resultado <operationsByStrategy> todas las operaciones relacionadas.
  // const operationsByStrategy = allOperations?.filter(
  //   (operation) => operation.strategyId === selectedStrategy
  // );

  // const strategyLabel = operationsByStrategy?.map(
  //   (label) => label.operationType
  // );

  // Al seleccionar una estrategia y conseguir todas las operaciones relacionadas con dicha estrategia, recuperamos el stockId de cada operación. Solo recuperamos el ID del stock.
  // const stockIds = operationsByStrategy?.map((stock) => stock.stockId);

  // Aqui al recuperar el stockId de las operaciones relacionadas con la estrategia seleccinada, recuperamos toda la información de los stocks.
  // const stockIdtoType = allStocks?.filter((stock) =>
  //   stockIds.includes(stock.id)
  // );

  // Con toda la información ya recuperada de los stocks relacionados con las operaciones que a su vez, estas estan relacionadas con las estrategias, recuperamos el stockTypeId de los stocks para posteriormente recuperar el tipo de stock.
  // const stockTypeIds = stockIdtoType?.map((stock) => stock.stockTypeId);

  // Finalmente tenemos el tipo de stock. StockType.
  // const stockTypeByStrategy = allStockTypes?.filter((type) =>
  //   stockTypeIds?.includes(type.id)
  // );
  // console.log(stockTypeByStrategy);

  // Hemos utilizado takeProfit a modo de prueba, debera ser la suma o el total por meses en años.
  // const takeProfit = operationsByStrategy?.map(
  //   (operation) => operation.takeProfit
  // );

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

  const strategies = allStrategies?.map((strategy) => strategy.name);
  const strategyId = allOperations?.map((id) => id.strategyId);

  // Buscamos la estrategia mas usada y veremos si ha tenido rentabilidad o no.
  let countStrategyIds = {};
  if (strategyId && strategyId.length > 0) {
    countStrategyIds = strategyId.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
  }

  // Ordenamos y usamos Object.entries para obtener "clave-valor"
  const orderlyStrategies = Object.entries(countStrategyIds).sort(
    (most, least) => {
      return least[1] - most[1];
    }
  );

  // Conseguimos el id de la estrategia más usada.
  const mostUsedId =
    orderlyStrategies && orderlyStrategies[0] ? orderlyStrategies[0][0] : null;

  const strategyIdMostUsed = mostUsedId ? mostUsedId : null;
  console.log(strategyIdMostUsed);

  const getStrategyByIdMostUsed = allStrategies?.filter(
    (strategy) => strategy.id === parseInt(strategyIdMostUsed)
  );

  const nameStrategyMostUsed = getStrategyByIdMostUsed?.map(
    (strategy) => strategy.name
  );

  // Conseguimos todas las operaciones relacionadas con la estrategia ganadora! la más usada.
  const operationsByStrategyIdMostUsed = allOperations?.filter(
    (operation) => operation.strategyId === parseInt(mostUsedId)
  );

  // Total de estrategias usadas en las operaciones y le hemos cambiado el orden para sintonizarlas con la gráfica.
  const totalStrategiesByOperations = Object.values(countStrategyIds);
  const totalStrategiesReversed = totalStrategiesByOperations.reverse();

  // Conseguimos todas las operaciones relacionadas con la estrategia mas usada.
  // const operationsByStrategy = allOperations?.filter(
  //   (operation) => operation.strategyId === parseInt(mostUsedId)
  // );

  // Conseguimos priceClose y priceOpen de las operaciones relacionadas con la estrategia mas usada hasta el momento.
  // const priceOpen = operationsByStrategy?.map((o) => o.priceOpen);
  // console.log(priceOpen);
  // const priceClose = operationsByStrategy?.map((c) => c.priceClose);
  // console.log(priceClose);

  const options = {
    scales: {
      x: {
        ticks: {
          color: chartColorsPalette.blue,
        },
      },
      y: {
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
    labels: strategies,
    datasets: [
      {
        label: "Most Used Strategy",
        data: totalStrategiesReversed,
        // grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: chartColorsPalette.blue,
        hoverBackgroundColor: chartColorsPalette.blueOpacity,
      },
    ],
  };

  return (
    <section>
      <Grid container direction={"column"} mt={8}>
        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box width={768}>
            <Bar data={data} options={options} />
          </Box>
        </Grid>
        <Grid item>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            gap={4}
            mt={2}
          >
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
                color={chartColorsPalette.blue}
              >
                {nameStrategyMostUsed}
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
                color={chartColorsPalette.blue}
              >
                CrowdFunding
              </Typography>
            </Box>
            {/* <Typography textAlign={"center"} variant="h3">
              {nameStrategyMostUsed}
            </Typography> */}
          </Box>
          {/* <Box>
            <Box position={"relative"} right={240}>
              <Typography
                textAlign={"center"}
                variant="h3"
                position={"relative"}
                right={70}
              >
                Strategy
              </Typography>
          
            </Box>
          </Box> */}
        </Grid>
      </Grid>
      <Typography
        textAlign="center"
        variant="h4"
        color={chartColorsPalette.blue}
        mt={8}
      >
        Last operations added concerning the
        <span className="posicionamiento"> {nameStrategyMostUsed} </span>
        strategy
      </Typography>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        my={6}
        spacing={1}
      >
        {operationsByStrategyIdMostUsed
          ?.map((operation) => {
            const {id, operationType, priceClose, priceOpen} = operation;
            return (
              <Grid
                className="animation-operation-cards"
                item
                xs={10}
                sm={10}
                md={5}
                lg={3}
                xl={2}
                key={id}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
              >
                <OperationsCard
                  operationType={operationType}
                  id={id}
                  priceClose={priceClose}
                  priceOpen={priceOpen}
                />
              </Grid>
            );
          })

          .toSpliced(4)}
      </Grid>
    </section>
  );
}
