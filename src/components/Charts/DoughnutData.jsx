import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {Box} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";

ChartJS.register(ArcElement, Tooltip, Legend);

// Podemos pasar una función, array con .map(), a las propiedades, bgColor por ejemplo y borderColor.

export default function DoughnutData({dataDemo}) {
  // data.labels
  // const tipoActivos = databaseInfo.map((activo) => activo.model); Recorrer o imprimir en data.labels cada tipo de activo. new SET [...new SET() + .map()] para eliminar duplicidades. Leer e investigar si esto es correcto o hay mejores formas de hacerlo.

  //datasets.data
  // Utilizaremos el .map() y el .filter() para añadir a esta propiedad el valor invertido de cada activo.

  const data = {
    labels: dataDemo?.map((item) => item.name).splice(0, 5),
    datasets: [
      {
        label: "Beneficios",
        data: dataDemo?.map((beneficio) => beneficio.beneficios).splice(0, 5),
        backgroundColor: [
          colorPalettes.tealBlue,
          colorPalettes.blue,
          colorPalettes.green,
        ],
        borderColor: colorPalettes.skyBlue,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        // title: {
        //   display: true,
        //   text: "Activos",
        // },
        position: "left",
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
    <Box width={360}>
      <Doughnut data={data} options={options}></Doughnut>
    </Box>
  );
}
