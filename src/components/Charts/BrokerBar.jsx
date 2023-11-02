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

export default function BrokerBar({
  totalBrokerBenefitsPerYear,
  totalStrategyBenefitsPerYear,
  totalAmountByBroker,
  isBrokerGraphicSelected,
}) {
  // TOTAL BROKER
  const totalAmount = totalAmountByBroker?.map((total) => total.totalAmount);
  console.log(totalAmount);

  // BROKER
  const brokerName = totalBrokerBenefitsPerYear?.map((broker) => broker.name);
  const totalPerYearAndBroker = totalBrokerBenefitsPerYear?.map(
    (total) => total.totalBenefits
  );

  // STRATEGY
  const strategyName = totalStrategyBenefitsPerYear?.map(
    (strategy) => strategy.strategyName
  );
  const totalPerYearAndStrategy = totalStrategyBenefitsPerYear?.map(
    (total) => total.totalBenefits
  );

  const handleMouseEnter = (e) => {
    console.log("Mouse enter event:", e);
  };

  const handleMouseLeave = (e) => {
    console.log("Mouse leave event:", e);
  };

  const colorHover = () => {
    return (ctx) => {
      // console.log(ctx.raw);
      const standard = 0;
      const expenses = ctx.raw;
      const color =
        expenses > standard
          ? chartColorsPalette.lightPink
          : expenses <= standard
          ? chartColorsPalette.lightPinkOpacity
          : "yellow";
      return color;
    };
  };

  const barColor = () => {
    return (ctx) => {
      // console.log(ctx.raw);
      const standard = 0;
      const expenses = ctx.raw;
      const color =
        expenses > standard
          ? chartColorsPalette.skyBlue
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
        min: -50,
        max: 50,
        beginAtZero: true,
        grid: {
          color: (context) => {
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

  const brokerData = {
    labels: brokerName ? brokerName : null,

    datasets: [
      {
        label: ["Broker"],
        data: totalPerYearAndBroker ? totalPerYearAndBroker : null,
        // grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: barColor(),
        hoverBackgroundColor: colorHover(),
      },
    ],
  };

  const strategyData = {
    labels: strategyName ? strategyName : null,

    datasets: [
      {
        label: ["Strategy"],
        data: totalPerYearAndStrategy ? totalPerYearAndStrategy : null,
        // grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: barColor(),
        hoverBackgroundColor: colorHover(),
      },
    ],
  };

  return (
    <Grid container>
      <Typography variant="h3">Benefits per year</Typography>
      <Grid item>
        {isBrokerGraphicSelected ? (
          <Box width={704}>
            <Bar
              data={brokerData}
              options={options}
              onMouseEnter={handleMouseEnter}
              onMouseOut={handleMouseLeave}
            />
          </Box>
        ) : (
          <Box width={704}>
            <Bar
              data={strategyData}
              options={options}
              onMouseEnter={handleMouseEnter}
              onMouseOut={handleMouseLeave}
            />
          </Box>
        )}
      </Grid>
      <Grid item>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
