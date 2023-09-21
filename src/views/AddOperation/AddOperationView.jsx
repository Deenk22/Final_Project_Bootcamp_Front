import {Box, Grid, Typography} from "@mui/material";
import AddOperationForm from "../../components/AddOperationForm/AddOperationForm";
import OperationByTypeCard from "../../components/InfoCards/OperationByTypeCard";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

export default function AddOperationView({operationTypeData}) {
  return (
    <>
      <Box color={chartColorsPalette.blue}>
        <Typography textAlign={"center"} variant="h3" mb={4}>
          Add New Operation
        </Typography>
        <AddOperationForm />
        <Typography variant="h3" textAlign={"center"} mt={4}>
          Last Operation Added
        </Typography>
      </Box>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        spacing={4}
        mt={2}
        mb={8}
      >
        {operationTypeData
          ?.map((operationByType) => {
            const {...props} = operationByType;
            const {id} = props;
            return (
              <Grid item key={id} xs={10} sm={5} md={5} lg={3}>
                <OperationByTypeCard props={props} />
              </Grid>
            );
          })
          .splice(0, 8)}
      </Grid>
    </>
  );
}
