import {Box, Grid, Typography} from "@mui/material";
import OperationDetailCard from "../../components/InfoCards/OperationDetailsCard";

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

export default function OperationDetailsView({operationDetailsInfo}) {
  console.log(operationDetailsInfo);
  return (
    <>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Grid item xs={10} sm={10} md={5}>
          <Box>
            <Typography
              color={chartColorsPalette.blue}
              variant="h2"
              component={"h1"}
            >
              Operation Details
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              consectetur deleniti, quo obcaecati tenetur nulla velit voluptate
              quam illo beatae accusantium hic, reiciendis aspernatur natus quod
              nemo quae. Numquam, officia.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={5}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <img
              src="../src/assets/dashboard.png"
              alt="controlPanel"
              width={160}
            />
            {/* <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="body1">
                Interacted with the charts
              </Typography>
              <Typography variant="body1">
                Quickly find what you need
              </Typography>
              <Typography variant="body1">
                Manage your transactions meticulously
              </Typography>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
      {operationDetailsInfo?.map((operation) => {
        const {
          id,
          brokerName,
          strategyName,
          stockTypeName,
          stockName,
          priceClose,
          priceOpen,
          commission,
          swap,
          operationDate,
          operationType,
        } = operation;
        return (
          <OperationDetailCard
            key={id}
            swap={swap}
            priceOpen={priceOpen}
            stockName={stockName}
            commission={commission}
            priceClose={priceClose}
            brokerName={brokerName}
            strategyName={strategyName}
            stockTypeName={stockTypeName}
            operationDate={operationDate}
            operationType={operationType}
          />
        );
      })}
    </>
  );
}
