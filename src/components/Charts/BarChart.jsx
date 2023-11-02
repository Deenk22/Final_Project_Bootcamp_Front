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
import LensIcon from "@mui/icons-material/Lens";
import OperationsCard from "../InfoCards/OperationsCard";

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

export default function BarChart({allOperations, allStrategies}) {
  const strategies = allStrategies?.map((strategy) => strategy.name);
  const strategyId = allOperations?.map((id) => id.strategyId);

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
          </Box>
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
