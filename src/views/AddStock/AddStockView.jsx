import {Box, Grid, Typography} from "@mui/material";
import AddStockForm from "../../components/AddStockForm/AddStockForm";
import StockTable from "../../components/Tables/StockTable";
// import DetailCards from "../../components/InfoCards/DetailCards";

export default function AddStockView({allStocks, stockDeleteMutation}) {
  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item mb={10} xs={10}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography variant="h3" mb={6}>
              Stock Control Panel
            </Typography>
            <AddStockForm />
          </Box>
        </Grid>
        <Grid item xs={10}>
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
