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
  skyBlue: "rgba(208, 228, 233)",
  skyBlueOpacity: "rgba(208, 228, 233, 0.2)",
};

export default function StrategiesBarChart({totalPerStrategyByYearStockType}) {
  const labelYear = totalPerStrategyByYearStockType?.map(
    (strategy) => strategy.year
  );
  const strategiesTotalAmount = totalPerStrategyByYearStockType?.map(
    (strategy) => strategy.totalAmount
  );
  const strategyName = totalPerStrategyByYearStockType?.map(
    (strategy) => strategy.strategyName
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
    labels: labelYear ? labelYear : null,

    datasets: [
      {
        label: [strategyName ? strategyName[0] : null],
        data: strategiesTotalAmount ? strategiesTotalAmount : null,
        // grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: barColor(),
        hoverBackgroundColor: colorHover(),
      },
    ],
  };
  return (
    <Box width={608}>
      <Bar
        data={data}
        options={options}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      />
    </Box>
  );
}
