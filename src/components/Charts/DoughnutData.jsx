import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {Box} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";

ChartJS.register(ArcElement, Tooltip, Legend);

// Podemos pasar una función, array con .map(), a las propiedades, bgColor por ejemplo y borderColor.

export default function DoughnutData() {
  ChartJS.defaults.color = colorPalettes.blue;

  // data.labels
  // const tipoActivos = databaseInfo.map((activo) => activo.model); Recorrer o imprimir en data.labels cada tipo de activo. new SET [...new SET() + .map()] para eliminar duplicidades. Leer e investigar si esto es correcto o hay mejores formas de hacerlo.

  //datasets.data
  // Utilizaremos el .map() y el .filter() para añadir a esta propiedad el valor invertido de cada activo.

  const data = {
    labels: ["Blue", "White", "Black", "Green", "Yellow"],
    datasets: [
      {
        label: "Capital Invested",
        data: [3, 6, 4, 6, 10],
        company: ["Shop1", "Shop2", "Shop3", "Shop4", "Shop5"],
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
    plugins: {
      legend: {
        position: "top",
      },
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
  };

  return (
    <Box width={320}>
      <Doughnut data={data} options={options}></Doughnut>
    </Box>
  );
}
