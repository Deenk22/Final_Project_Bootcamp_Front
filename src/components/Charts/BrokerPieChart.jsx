import {Box, Button, Grid} from "@mui/material";
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

// GRÁFICA QUE MUESTRA EL TOTAL DE EUROS POR BROKER AGRUPADOS POR AÑO. DE INICIO MUESTRA EL TOAL DE EUROS DE TOOS LOS AÑOS.
export default function BrokerPieChart({
  toggleChangeTotalAmountPerBroker,
  totalBrokerAmountPerYear,
  isTotalPerBrokerVisible,
  totalAmountByBroker,
  selectedYear,
}) {
  // Total por Broker en %.
  const brokerNamePercentage = totalAmountByBroker?.map(
    (operation) => operation.brokerName
  );

  const totalAmount = totalAmountByBroker?.reduce(
    (total, operation) => total + parseFloat(operation.totalAmount),
    0
  );

  const percentages = totalAmountByBroker?.map((operation) =>
    parseFloat(((operation.totalAmount / totalAmount) * 100).toFixed(2))
  );

  const groupedByYear = totalBrokerAmountPerYear?.reduce((acc, total) => {
    const year = total.yr.toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(total);
    return acc;
  }, {});

  const yearData = groupedByYear
    ? groupedByYear[selectedYear]?.map((entry) => {
        return {
          brokerName: entry.brokerName,
          totalAmount: entry.totalAmount,
        };
      })
    : null;

  // Total por Broker en % por años.
  const brokerNamePerYear = yearData?.map((broker) => broker.brokerName);
  const totalAmountPerYear = yearData?.map((total) =>
    parseFloat(total.totalAmount)
  );

  const totalPerYear = totalAmountPerYear?.reduce(
    (sum, valor) => sum + valor,
    0
  );

  const percentagesPerYear = totalAmountPerYear?.map((total) =>
    parseFloat(((total / totalPerYear) * 100).toFixed(2))
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

  const data = {
    labels: isTotalPerBrokerVisible ? brokerNamePercentage : brokerNamePerYear,
    datasets: [
      {
        label: "Percentage",
        data: isTotalPerBrokerVisible ? percentages : percentagesPerYear,
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
        <Box>
          <Button onClick={toggleChangeTotalAmountPerBroker}>
            Total Amount Per Broker
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
