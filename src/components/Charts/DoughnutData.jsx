import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {Box} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutData() {
  const data = {
    labels: [
      "Blue",
      "White",
      "Black",
      "Green",
      "Yellow",
      "Grey",
      "Brown",
      "Orange",
    ],
    datasets: [
      {
        label: "Poll",
        data: [3, 6, 4, 6, 10, 20, 10, 8],
        company: [
          "Shop1",
          "Shop2",
          "Shop3",
          "Shop4",
          "Shop5",
          "Shop6",
          "Shop7",
          "Shop8",
        ],
        backgroundColor: [
          colorPalettes.tealBlue,
          colorPalettes.blue,
          colorPalettes.green,
        ],
        borderColor: colorPalettes.skyBlue,
        borderWidth: 2,
        // circumference: 180,
        // rotation: 270,
      },
    ],
  };

  const options = {
    type: "doughnut",
    data,
    plugins: [
      {
        tooltip: {
          callbacks: {
            label: (context) => {
              console.log(context);
              const dataPoint = context.dataIndex;
              return `${context.label}: ${context.dataset.data[dataPoint]} Invested: ${context.dataset.company[dataPoint]}`;
            },
          },
          borderColor: colorPalettes.skyBlue,
          borderWidth: 1,
        },
      },
    ],
  };

  return (
    <Box width={320}>
      <Doughnut data={data} options={options}></Doughnut>
    </Box>
  );
}
