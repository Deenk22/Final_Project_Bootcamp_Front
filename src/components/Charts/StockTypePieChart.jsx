import {Box, Grid} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {Pie} from "react-chartjs-2";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

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

const borderColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

export default function StockTypePieChart({
  totalStockTypesAmountPerYear,
  selectedYearStockType,
}) {
  // Dividimos por años.
  const groupedByYear = totalStockTypesAmountPerYear?.reduce((acc, total) => {
    const year = total.year.toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(total);
    return acc;
  }, {});

  // Cogemos lo que nos interesa cada vez que seleccionamos un año.
  const yearData = groupedByYear
    ? groupedByYear[selectedYearStockType]?.map((entry) => {
        return {
          strategyName: entry.strategyName,
          totalAmount: entry.totalAmount,
        };
      })
    : null;

  // Agrupamos por nombre de estrategia y sumamos el total de cada una de ellas.
  const groupedByStrategyName = yearData?.reduce((acc, entry) => {
    const {strategyName, totalAmount} = entry;
    if (!acc[strategyName]) {
      acc[strategyName] = 0;
    }
    acc[strategyName] += parseFloat(totalAmount);
    return acc;
  }, {});

  // Sumamos el total de los valores.
  const totalSum = groupedByStrategyName
    ? Object.values(groupedByStrategyName).reduce(
        (acc, value) => acc + value,
        0
      )
    : null;

  // Sacamos el % de cada estrategia usada con los tipos de stocks.
  const percentages = {};
  groupedByStrategyName
    ? Object.keys(groupedByStrategyName).forEach((key) => {
        const value = groupedByStrategyName[key];
        const percentage = (value / totalSum) * 100;
        percentages[key] = parseFloat(percentage.toFixed(2));
      })
    : null;

  const keyValues = percentages ? Object.keys(percentages) : null;
  const percentagesValue = percentages ? Object.values(percentages) : null;

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

  const data = {
    labels: keyValues,
    datasets: [
      {
        label: "Percentage",
        data: percentagesValue,
        backgroundColor: [
          chartColorsPalette.lightPink,
          chartColorsPalette.lightYellow,
          chartColorsPalette.orange,
          chartColorsPalette.tealBlue2,
          chartColorsPalette.shadowtealBlue2,
        ],
        hoverBorderColor: chartColorsPalette.skyBlue,
        borderColor: chartColorsPalette.blue,
        borderWidth: 2,
      },
    ],
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <Box width={488}>
          <Pie data={data} options={options} />
        </Box>
      </Grid>
      <Grid item>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
