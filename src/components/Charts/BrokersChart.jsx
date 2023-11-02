import {Box, Button, Grid, Typography} from "@mui/material";
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

export default function BrokersChart({
  totalBrokerAmountPerYear,
  setSelectedYear,
  selectedYear,
}) {
  const uniqueYears = [
    ...new Set(totalBrokerAmountPerYear?.map((unique) => unique.yr)),
  ];

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

  const brokerName = yearData?.map((broker) => broker.brokerName);
  const totalAmount = yearData?.map((total) => total.totalAmount);

  const handleMouseEnter = (e) => {
    console.log("Mouse enter event:", e);
  };

  const handleMouseLeave = (e) => {
    console.log("Mouse leave event:", e);
  };

  const colorHover = () => {
    return (ctx) => {
      const standard = 0;
      const expenses = ctx.raw;
      const color =
        expenses > standard
          ? chartColorsPalette.lightPinkOpacity
          : expenses <= standard
          ? chartColorsPalette.lightPinkOpacity
          : "yellow";
      return color;
    };
  };

  const barColor = () => {
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
    labels: brokerName,

    datasets: [
      {
        label: "Total Amount / " + selectedYear,
        data: totalAmount,
        // grouped: isCompare ? false : true,
        borderRadius: 4,
        backgroundColor: barColor(),
        hoverBackgroundColor: colorHover(),
      },
    ],
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        mb={3}
        mt={-4}
        paddingY={2}
        textAlign={"center"}
        variant="body2"
        color={chartColorsPalette.skyBlue}
        borderBottom={"1px solid rgba(208, 228, 233, 0.5)"}
      >
        Total Amount By Broker
      </Typography>
      <Grid container direction={"column"}>
        <Grid item>
          <Box width={608}>
            <Bar
              data={data}
              options={options}
              onMouseEnter={handleMouseEnter}
              onMouseOut={handleMouseLeave}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box display={"flex"} justifyContent={"center"} gap={2} mt={2}>
            {uniqueYears?.map((year) => (
              <Typography
                key={year}
                variant="body2"
                borderRadius={1}
                component={"button"}
                paddingX={2}
                onClick={() => setSelectedYear(year)}
                bgcolor={chartColorsPalette.skyBlue}
                sx={{border: "none", cursor: "pointer"}}
              >
                {year}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
