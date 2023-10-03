import {Box, Grid, Typography} from "@mui/material";
import AddStockForm from "../../components/AddStockForm/AddStockForm";
import StockTable from "../../components/Tables/StockTable";

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
    </>
  );
}
