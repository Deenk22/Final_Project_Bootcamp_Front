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

export default function StrategiesPieChart({totalPerStrategyByYearStockType}) {
  const totalsByStockType = {};
  totalPerStrategyByYearStockType
    ? Object.values(totalPerStrategyByYearStockType)?.forEach((item) => {
        const {totalAmount, stockType} = item;
        if (totalsByStockType[stockType]) {
          totalsByStockType[stockType] = (
            parseFloat(totalsByStockType[stockType]) + parseFloat(totalAmount)
          ).toFixed(3);
        } else {
          totalsByStockType[stockType] = totalAmount;
        }
      })
    : null;

  const totalSum = Object.values(totalsByStockType).reduce((acc, value) => {
    return acc + parseFloat(value);
  }, 0);

  const percentagesByStockType = {};
  Object.keys(totalsByStockType).forEach((stockType) => {
    const totalAmount = parseFloat(totalsByStockType[stockType]);
    const percentage = ((totalAmount / totalSum) * 100).toFixed(2);
    percentagesByStockType[stockType] = percentage;
  });

  const stockType = Object.keys(totalsByStockType);
  const percentageValues = Object.values(percentagesByStockType);

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
    labels: stockType,
    datasets: [
      {
        label: ["percentage"],
        data: percentageValues,
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
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <Box width={504}>
          <Pie data={data} options={options} />
        </Box>
      </Grid>
      <Grid item>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
