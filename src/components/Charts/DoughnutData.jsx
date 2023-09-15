import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {Box, Typography} from "@mui/material";

const colorPalettes = {
  blue: "rgb(22, 41, 56)",
  green: "rgb(57, 112, 102)",
  skyBlue: "rgb(208, 228, 233)",
  tealBlue: "rgb(31, 115, 141)",
  orange: "rgb(223, 132, 79)",
  yellow: "rgb(236, 208, 111)",
  otro: "rgb(160, 207, 211)",
  otro1: "rgb(72, 130, 134)",
  otro3: "rgb(89, 95, 114)",
};

ChartJS.register(ArcElement, Tooltip, Legend);

// Podemos pasar una función, array con .map(), a las propiedades, bgColor por ejemplo y borderColor.

export default function DoughnutData({allOperations}) {
  // data.labels
  // const tipoActivos = databaseInfo.map((activo) => activo.model); Recorrer o imprimir en data.labels cada tipo de activo. new SET [...new SET() + .map()] para eliminar duplicidades. Leer e investigar si esto es correcto o hay mejores formas de hacerlo.

  //datasets.data
  // Utilizaremos el .map() y el .filter() para añadir a esta propiedad el valor invertido de cada activo.

  const data = {
    labels: allOperations?.map((type) => type.operationType).splice(0, 5),
    datasets: [
      {
        label: "Price Open",
        data: allOperations
          ?.map((priceOpen) => priceOpen.priceOpen)
          .splice(0, 5),
        backgroundColor: [
          colorPalettes.yellow,
          colorPalettes.tealBlue,
          colorPalettes.otro,
          colorPalettes.otro1,
          colorPalettes.green,
        ],
        borderColor: colorPalettes.blue,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 12,
          },
          padding: 16,
        },
        rtl: false,
      },
      tooltip: {
        borderColor: colorPalettes.skyBlue,
        borderWidth: 1,
      },
    },
  };

  return (
    <Box width={400}>
      <Typography
        textAlign={"center"}
        mb={2}
        variant="h5"
        color={colorPalettes.skyBlue}
      >
        Operations
      </Typography>
      <Doughnut data={data} options={options}></Doughnut>
    </Box>
  );
}
