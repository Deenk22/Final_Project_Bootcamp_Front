// import {Box, Grid, Typography} from "@mui/material";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import {useState} from "react";
// import {Bar} from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const chartColorsPalette = {
//   tealBlue2: "rgba(75, 192, 192, 0.6)",
//   lightPink: "rgba(255, 99, 132, 0.6)",
//   lightYellow: "rgba(255, 205, 86, 0.6)",
//   tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
//   lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
//   lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
//   orange: "rgba(255, 159, 64, 0.7)",
//   shadowYellow: "rgba(255, 205, 86, 0.4)",
//   shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
//   blue: "rgba(22, 41, 56)",
//   skyBlue: "rgba(208, 228, 233)",
//   skyBlueOpacity: "rgba(208, 228, 233, 0.2)",
// };

// // Si tengo tiempo eliminar código y hacer con MySQL la ordenacion descendente.
// export default function BrokersBarChart({
//   brokersJoinOperationsData,
//   strategyJoinOperationData,
//   allStrategies,
//   isBrokerGraphicSelected,
// }) {
//   const [isCompare, setIsCompare] = useState(null);

//   // Para saber si una operacion tipo SELL ha generado beneficios (priceClose - priceOpen) * volume / El resultado debe ser positivo para ello.

//   // Para saber si una operacion tipo BUY ha sido generosa jeje si el priceOpen es menor que priceClose entonces hubo beneficios, pero, si el priceOpen es mayor que priceClose entonces hay perdidas y se calcula asi (priceOpen - priceClose) * volume. Hacer esto en operaciones individuales.

//   // FILTRO POR TIPO DE OPERACION SELL (BY BROKERS). No estoy seguro si hacerlo asi o cambiarlo por todas las operaciones.
//   // const brokerOperationTypeSell = brokersJoinOperationsData?.filter(
//   //   (operation) => operation.operationType === "Sell"
//   // );

//   // De las operaciones tipo SELL hacemos la siguiente operacion para saber si hemos obtenido ganancias, si el resultado es negativo... mal vamos! jeje
//   const profitsAndLossesBroker = brokersJoinOperationsData?.map((operation) => {
//     const {priceOpen, priceClose, volume, strategyId, stockId} = operation;
//     const brokerProfitOrLossesResults = (priceClose - priceOpen) * volume;
//     return {
//       strategyId,
//       stockId,
//       brokerProfitOrLossesResults,
//     };
//   });

//   console.log(profitsAndLossesBroker);

//   // Conseguimos el resultado de profitOrLosses.
//   const profitOrLossesBrokerArrayResults = profitsAndLossesBroker?.map(
//     (operation) => operation.brokerProfitOrLossesResults
//   );

//   // Ordenamos de mayor a menor.
//   const sortedBrokerProfitsAndLosses =
//     profitOrLossesBrokerArrayResults?.toSorted((max, min) => {
//       return min - max;
//     });

//   // Cogemos la operacion con mas beneficios.
//   const maxBrokerProfit = sortedBrokerProfitsAndLosses
//     ? sortedBrokerProfitsAndLosses[0]
//     : null;

//   // Estrategia mas usada en el broker seleccionado y si ha sido rentable o no comparando priceClose y priceOpen

//   // Empezamos a conseguir datos de las estrategias usadas.
//   const allStrategiesId = profitsAndLossesBroker?.map(
//     (strategy) => strategy.strategyId
//   );

//   // Agrupamos el numero de veces que se han usado las estrategias por id.
//   const strategyCounts = allStrategiesId?.reduce((acc, strategyId) => {
//     if (acc[strategyId]) {
//       acc[strategyId]++;
//     } else {
//       acc[strategyId] = 1;
//     }
//     return acc;
//   }, {});

//   const mostUsedStrategyId = strategyCounts
//     ? Object.keys(strategyCounts).reduce((a, b) =>
//         strategyCounts[a] > strategyCounts[b] ? a : b
//       )
//     : null;

//   const mostUsedStrategyName = allStrategies?.find(
//     (strategy) => strategy.id === parseInt(mostUsedStrategyId)
//   );
//   const {name, description, budget} = mostUsedStrategyName ?? {};

//   const brokerName = [
//     ...new Set(brokersJoinOperationsData?.map((operation) => operation.name)),
//   ];

//   // BROKERS POR AÑO
//   // Año 2019
//   const operationsByBroker2019 = brokersJoinOperationsData?.filter(
//     (operation) => operation.operationDate.includes("2019")
//   );
//   const totalAmount2019 = operationsByBroker2019?.reduce((total, operation) => {
//     const operationAmount2019 =
//       (operation.priceClose - operation.priceOpen) * operation.volume -
//       operation.commission -
//       operation.swap;
//     return total + operationAmount2019;
//   }, 0);
//   console.log(totalAmount2019);

//   // Año 2020
//   const operationsByBroker2020 = brokersJoinOperationsData?.filter(
//     (operation) => operation.operationDate.includes("2020")
//   );
//   const totalAmount2020 = operationsByBroker2020?.reduce((total, operation) => {
//     const operationAmount2020 =
//       (operation.priceClose - operation.priceOpen) * operation.volume -
//       operation.commission -
//       operation.swap;
//     return total + operationAmount2020;
//   }, 0);

//   // Año 2021
//   const operationsByBroker2021 = brokersJoinOperationsData?.filter(
//     (operation) => operation.operationDate.includes("2021")
//   );
//   const totalAmount2021 = operationsByBroker2021?.reduce((total, operation) => {
//     const operationAmount2021 =
//       (operation.priceClose - operation.priceOpen) * operation.volume -
//       operation.commission -
//       operation.swap;
//     return total + operationAmount2021;
//   }, 0);

//   // Año 2022
//   const operationsByBroker2022 = brokersJoinOperationsData?.filter(
//     (operation) => operation.operationDate.includes("2022")
//   );
//   const totalAmount2022 = operationsByBroker2022?.reduce((total, operation) => {
//     const operationAmount2022 =
//       (operation.priceClose - operation.priceOpen) * operation.volume -
//       operation.commission -
//       operation.swap;
//     return total + operationAmount2022;
//   }, 0);

//   // Año 2023
//   const operationsByBroker2023 = brokersJoinOperationsData?.filter(
//     (operation) => operation.operationDate.includes("2023")
//   );

//   const totalAmount2023 = operationsByBroker2023?.reduce((total, operation) => {
//     const operationAmount2023 =
//       (operation.priceClose - operation.priceOpen) * operation.volume -
//       operation.commission -
//       operation.swap;
//     return total + operationAmount2023;
//   }, 0);

//   // STRATEGIES
//   const strategyOperationTypeSell = strategyJoinOperationData?.filter(
//     (operation) => operation.operationType === "Sell"
//   );

//   const profitsAndLossesStrategy = strategyOperationTypeSell?.map(
//     (operation) => {
//       const {priceOpen, priceClose, volume, strategyId, stockId} = operation;
//       const strategyProfitOrLossesResults = (priceClose - priceOpen) * volume;
//       return {
//         priceOpen,
//         priceClose,
//         volume,
//         strategyId,
//         stockId,
//         strategyProfitOrLossesResults,
//       };
//     }
//   );
//   const profitOrLossesStrategyArrayResults = profitsAndLossesStrategy?.map(
//     (operation) => operation.strategyProfitOrLossesResults
//   );

//   const sortedStrategtProfitsAndLosses =
//     profitOrLossesStrategyArrayResults?.toSorted((max, min) => {
//       return min - max;
//     });

//   const maxStrategyProfit = sortedStrategtProfitsAndLosses
//     ? sortedStrategtProfitsAndLosses[0]
//     : null;

//   const strategyName = [
//     ...new Set(strategyJoinOperationData?.map((operation) => operation.name)),
//   ];

//   // ESTRATEGIAS POR AÑO
//   // 2019
//   const operationsByStrategy2019 = strategyJoinOperationData?.filter(
//     (operation) => operation.operationDate.includes("2019")
//   );
//   const totalAmountByStrategy2019 = operationsByStrategy2019?.reduce(
//     (total, operation) => {
//       const operationAmountByStrategy2019 =
//         (operation.priceClose - operation.priceOpen) * operation.volume -
//         operation.commission -
//         operation.swap;
//       return total + operationAmountByStrategy2019;
//     },
//     0
//   );

//   // 2020
//   const operationsByStrategy2020 = strategyJoinOperationData?.filter(
//     (operation) => operation.operationDate.includes("2020")
//   );
//   const totalAmountByStrategy2020 = operationsByStrategy2020?.reduce(
//     (total, operation) => {
//       const operationAmountByStrategy2020 =
//         (operation.priceClose - operation.priceOpen) * operation.volume -
//         operation.commission -
//         operation.swap;
//       return total + operationAmountByStrategy2020;
//     },
//     0
//   );
//   // 2021
//   const operationsByStrategy2021 = strategyJoinOperationData?.filter(
//     (operation) => operation.operationDate.includes("2021")
//   );
//   const totalAmountByStrategy2021 = operationsByStrategy2021?.reduce(
//     (total, operation) => {
//       const operationAmountByStrategy2021 =
//         (operation.priceClose - operation.priceOpen) * operation.volume -
//         operation.commission -
//         operation.swap;
//       return total + operationAmountByStrategy2021;
//     },
//     0
//   );

//   // 2022
//   const operationsByStrategy2022 = strategyJoinOperationData?.filter(
//     (operation) => operation.operationDate.includes("2022")
//   );
//   const totalAmountByStrategy2022 = operationsByStrategy2022?.reduce(
//     (total, operation) => {
//       const operationAmountByStrategy2022 =
//         (operation.priceClose - operation.priceOpen) * operation.volume -
//         operation.commission -
//         operation.swap;
//       return total + operationAmountByStrategy2022;
//     },
//     0
//   );

//   // 2023
//   const operationsByStrategy2023 = strategyJoinOperationData?.filter(
//     (operation) => operation.operationDate.includes("2023")
//   );
//   const totalAmountByStrategy2023 = operationsByStrategy2023?.reduce(
//     (total, operation) => {
//       const operationAmountByStrategy2023 =
//         (operation.priceClose - operation.priceOpen) * operation.volume -
//         operation.commission -
//         operation.swap;
//       return total + operationAmountByStrategy2023;
//     },
//     0
//   );

//   // FUNCIONALIDADES
//   const handleMouseEnter = (e) => {
//     console.log("Mouse enter event:", e);
//   };

//   const handleMouseLeave = (e) => {
//     console.log("Mouse leave event:", e);
//   };

//   function toggleCompareBar() {
//     setIsCompare(!isCompare);
//   }

//   const colorHover = () => {
//     return (ctx) => {
//       // console.log(ctx.raw);
//       const standard = 0;
//       const expenses = ctx.raw;
//       const color =
//         expenses > standard
//           ? chartColorsPalette.blueOpacity
//           : expenses <= standard
//           ? chartColorsPalette.lightPinkOpacity
//           : "yellow";
//       return color;
//     };
//   };

//   const barColor = () => {
//     return (ctx) => {
//       // console.log(ctx.raw);
//       const standard = 0;
//       const expenses = ctx.raw;
//       const color =
//         expenses > standard
//           ? chartColorsPalette.skyBlue
//           : expenses <= standard
//           ? chartColorsPalette.lightPink
//           : chartColorsPalette.blueOpacity;
//       return color;
//     };
//   };

//   const options = {
//     scales: {
//       x: {
//         position: "bottom",
//         ticks: {
//           color: chartColorsPalette.skyBlue,
//         },
//       },
//       y: {
//         min: -50,
//         max: 50,
//         beginAtZero: true,
//         grid: {
//           color: (context) => {
//             // console.log(context);
//             const zeroLine = context.tick.value;
//             const barColor =
//               zeroLine === 0
//                 ? chartColorsPalette.lightPink
//                 : chartColorsPalette.skyBlueOpacity;
//             return barColor;
//           },
//         },
//         ticks: {
//           color: chartColorsPalette.skyBlue,
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           font: {
//             size: 12,
//           },
//           color: chartColorsPalette.skyBlue,
//           padding: 10,
//         },
//       },
//     },
//   };

//   // Coger los años de la base de datos.
//   const brokerData = {
//     labels: ["2019", "2020", "2021", "2022", "2023"],

//     datasets: [
//       {
//         label: brokerName,
//         data: [
//           totalAmount2019,
//           totalAmount2020,
//           totalAmount2021,
//           totalAmount2022,
//           totalAmount2023,
//         ],
//         // grouped: isCompare ? false : true,
//         borderRadius: 4,
//         backgroundColor: barColor(),
//         hoverBackgroundColor: colorHover(),
//       },
//     ],
//   };

//   const strategyData = {
//     labels: ["2019", "2020", "2021", "2022", "2023"],
//     datasets: [
//       {
//         label: strategyName,
//         data: [
//           totalAmountByStrategy2019,
//           totalAmountByStrategy2020,
//           totalAmountByStrategy2021,
//           totalAmountByStrategy2022,
//           totalAmountByStrategy2023,
//         ],
//         // grouped: isCompare ? false : true,
//         borderRadius: 4,
//         backgroundColor: barColor(),
//         hoverBackgroundColor: colorHover(),
//       },
//     ],
//   };

//   return (
//     <Grid container direction={"column"}>
//       <Grid item>
//         {isBrokerGraphicSelected ? (
//           <Box width={608}>
//             <Bar
//               data={brokerData}
//               options={options}
//               onMouseEnter={handleMouseEnter}
//               onMouseOut={handleMouseLeave}
//             />
//           </Box>
//         ) : (
//           <Box width={608}>
//             <Bar
//               data={strategyData}
//               options={options}
//               onMouseEnter={handleMouseEnter}
//               onMouseOut={handleMouseLeave}
//             />
//           </Box>
//         )}
//       </Grid>
//       <Grid item>
//         <Box>
//           {/* <Typography
//             variant="body2"
//             textAlign={"center"}
//             color={chartColorsPalette.skyBlue}
//             mt={2}
//           >
//             Beneficios Generales Operacion Tipo Sell por broker
//             {maxBrokerProfit
//               ? ` ${parseFloat(maxBrokerProfit).toFixed(2)}`
//               : null}
//           </Typography>
//           <Typography
//             variant="body2"
//             textAlign={"center"}
//             color={chartColorsPalette.skyBlue}
//             mt={2}
//           >
//             Beneficios Generales Operacion Tipo Sell por Estrategia
//             {maxStrategyProfit
//               ? ` ${parseFloat(maxStrategyProfit).toFixed(2)}`
//               : null}
//           </Typography>
//           <Typography>Estrategia mas usada {name}</Typography>
//           <Typography>Presupuesto {budget}</Typography>
//           <Typography>{description}</Typography> */}
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }
