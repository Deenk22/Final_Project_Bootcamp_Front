import {Box, Grid} from "@mui/material";
// import OperationDetailsChart from "../../components/Charts/OperationDetailsChart";

export default function OperationDetailsView({operationDetailsInfo}) {
  console.log(operationDetailsInfo);
  return (
    <Grid container>
      <Grid item>
        {/* <Box>
          <OperationDetailsChart operationDetailsInfo={operationDetailsInfo} />
        </Box> */}
      </Grid>
      <Grid item>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
