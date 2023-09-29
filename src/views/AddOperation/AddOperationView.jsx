import AddOperationForm from "../../components/AddOperationForm/AddOperationForm";
import OperationByTypeCard from "../../components/InfoCards/OperationByTypeCard";
import OperationTable from "../../components/Tables/OperationTable";
import OperationDateSearchCard from "../../components/InfoCards/OperationDateSearchCard";
import OperationDateSearch from "../../components/DateForm/OperationDateSearch";
import {Box, Grid, Typography} from "@mui/material";
import AddStrategyForm from "../../components/AddStrategyForm/AddStrategyForm";
import {useEffect, useState} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function AddOperationView({
  startDate,
  endDate,
  operationsByDate,
  allOperations,
  handleSearchByDate,
  handleEndDateChange,
  handleStartDateChange,
}) {
  const [isVisibleStrategyForm, setIsVisibleStrategyForm] = useState(false);
  const [message, setMessage] = useState("Perfecto!");

  useEffect(() => {
    if (isVisibleStrategyForm) {
      const timeout = setTimeout(() => {
        setMessage("¡Vamos allá!");
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isVisibleStrategyForm]);

  function handleChangeVisible() {
    setIsVisibleStrategyForm(!isVisibleStrategyForm);
  }

  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item mb={10} xs={10}>
          <Box>
            <Typography textAlign={"center"} variant="h3" mb={6}>
              Operation Control Panel
            </Typography>
            <AddOperationForm />
            {isVisibleStrategyForm ? (
              <Typography textAlign={"center"} mt={2}>
                {message}
              </Typography>
            ) : (
              <Typography textAlign={"center"} mt={2}>
                Aun no tienes la estrategia ni el stock? ¿Quieres crearlos?
                Modal o link to
              </Typography>
            )}
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Typography>Add Strategy</Typography>
              <AddCircleIcon onClick={handleChangeVisible} />
            </Box>

            {isVisibleStrategyForm ? (
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
              >
                <AddStrategyForm />
              </Box>
            ) : null}
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <OperationTable allOperations={allOperations} />
          </Box>
        </Grid>
      </Grid>
      {/* <Box color={chartColorsPalette.blue}>
        <Typography variant="h3" textAlign={"center"} mt={2}>
          Last Operation Added
        </Typography>
      </Box> */}

      <Box my={8}>
        <OperationDateSearch
          startDate={startDate}
          endDate={endDate}
          handleSearchByDate={handleSearchByDate}
          handleEndDateChange={handleEndDateChange}
          handleStartDateChange={handleStartDateChange}
        />
      </Box>
      <Grid
        container
        spacing={1}
        mt={4}
        mb={8}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          placeItems: "center",
          alignItems: "left",
          gap: 1,
        }}
      >
        {operationsByDate
          ?.map((operationBydate) => {
            const {id, operationType} = operationBydate;
            return (
              <Grid item key={id} xs={10} sm={5} md={5} lg={3}>
                <OperationDateSearchCard
                  id={id}
                  operationType={operationType}
                />
              </Grid>
            );
          })
          .toSpliced(8)}
      </Grid>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        spacing={2}
        mt={4}
        mb={8}
      >
        {allOperations
          ?.map((operationByType) => {
            const {...props} = operationByType;
            const {id} = props;
            return (
              <Grid item key={id} xs={10} sm={5} md={5} lg={3}>
                <OperationByTypeCard
                  props={props}
                  allOperations={allOperations}
                />
              </Grid>
            );
          })
          .toSpliced(4)}
      </Grid>
    </>
  );
}
