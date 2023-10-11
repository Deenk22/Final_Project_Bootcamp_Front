import {Box, Grid, Typography} from "@mui/material";
import AddStockForm from "../../components/AddStockForm/AddStockForm";
import StockTable from "../../components/Tables/StockTable";
// import DetailCards from "../../components/InfoCards/DetailCards";

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
  blueOpacity: "rgba(22, 41, 56, 0.2)",
  skyBlue: "rgba(208, 228, 233)",
  skyBlueOpacity: "rgba(208, 228, 233, 0.2)",
};

export default function AddStockView({allStocks, stockDeleteMutation}) {
  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={8}
      >
        <Grid item mb={10} xs={10}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography color={chartColorsPalette.blue} variant="h3" mb={1}>
              Stock Control Panel
            </Typography>
            <AddStockForm />
          </Box>
        </Grid>
        <Grid item xs={10} mb={8}>
          <Box>
            <StockTable
              allStocks={allStocks}
              stockDeleteMutation={stockDeleteMutation}
            />
          </Box>
        </Grid>
      </Grid>
      {/* <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        spacing={2}
        mt={4}
        mb={8}
      >
        {allStocks
          ?.map((operationByType) => {
            const {id, name, sector, industry} = operationByType;
            return (
              <Grid item key={id} xs={10} sm={5} md={5} lg={3}>
                <DetailCards
                  type={"stock"}
                  id={id}
                  name={name}
                  sector={sector}
                  industry={industry}
                />
              </Grid>
            );
          })
          .toSpliced(4)}
      </Grid> */}
    </>
  );
}
