import AddOperationForm from "../../components/AddOperationForm/AddOperationForm";
import OperationTable from "../../components/Tables/OperationTable";
import OperationDateSearchCard from "../../components/InfoCards/OperationDateSearchCard";
import OperationDateSearch from "../../components/DateForm/OperationDateSearch";
import {Box, Grid, Typography} from "@mui/material";
import AddStrategyForm from "../../components/AddStrategyForm/AddStrategyForm";
import {useEffect, useState} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
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

export default function AddOperationView({
  endDate,
  mutation,
  startDate,
  allOperations,
  operationsByDate,
  handleSearchByDate,
  handleEndDateChange,
  handleStartDateChange,
  mutationDeleteMultiple,
}) {
  const [isVisibleStrategyForm, setIsVisibleStrategyForm] = useState(false);
  const [message, setMessage] = useState("Perfect!");

  useEffect(() => {
    if (isVisibleStrategyForm) {
      const timeout = setTimeout(() => {
        setMessage("¡Let's create it!");
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
        mt={8}
      >
        <Grid item mb={8} xs={10}>
          <Box>
            <Typography
              color={chartColorsPalette.blue}
              textAlign={"center"}
              variant="h3"
              mb={1}
            >
              Operation Control Panel
            </Typography>
            <AddOperationForm />
          </Box>
          <Box
            className="form-container"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            padding={2}
            paddingY={8}
            borderRadius={2}
            mt={4}
            bgcolor={chartColorsPalette.blueOpacity}
          >
            <Box>
              {isVisibleStrategyForm ? (
                <Typography textAlign={"center"} variant="body2">
                  {message}
                </Typography>
              ) : (
                <Box>
                  <Typography textAlign={"center"} variant="body2">
                    Can´t find the strategy you are looking for?
                  </Typography>
                </Box>
              )}
            </Box>
            {isVisibleStrategyForm ? (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
                mt={2}
              >
                <AddCircleIcon
                  onClick={handleChangeVisible}
                  sx={{cursor: "pointer"}}
                />
              </Box>
            ) : (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
                mt={2}
              >
                <AddCircleIcon
                  onClick={handleChangeVisible}
                  sx={{cursor: "pointer"}}
                />
                <Typography variant="body2">Add New Strategy</Typography>
              </Box>
            )}

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
            <OperationTable
              allOperations={allOperations}
              mutation={mutation}
              mutationDeleteMultiple={mutationDeleteMultiple}
            />
          </Box>
        </Grid>
      </Grid>
      <Box my={8}>
        <OperationDateSearch
          startDate={startDate}
          endDate={endDate}
          handleSearchByDate={handleSearchByDate}
          handleEndDateChange={handleEndDateChange}
          handleStartDateChange={handleStartDateChange}
        />
      </Box>
      <Grid container spacing={1} mb={8}>
        {operationsByDate
          ?.map((operationBydate) => {
            const {id, operationType} = operationBydate;
            return (
              <Grid
                display={"flex"}
                justifyContent={"center"}
                item
                key={id}
                xs={10}
                sm={5}
                md={4}
              >
                <OperationDateSearchCard
                  id={id}
                  operationType={operationType}
                />
              </Grid>
            );
          })
          .toSpliced(9)}
      </Grid>
      {/* <Box>
        <Box>
          <Typography
            textAlign={"center"}
            variant="h3"
            color={chartColorsPalette.blue}
            mb={4}
          >
            Last Operations Added
          </Typography>
        </Box>
      </Box> */}
      {/* <Grid container direction={"row"} mb={8} spacing={1}>
        {allOperations
          ?.map((operation) => {
            const {id, operationType, strategyName, brokerName, stockName} =
              operation;
            return (
              <Grid
                item
                key={id}
                xs={10}
                sm={5}
                md={5}
                lg={3}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <DetailCards
                  type={"operation"}
                  id={id}
                  operationType={operationType}
                  strategyName={strategyName}
                  brokerName={brokerName}
                  stockName={stockName}
                />
              </Grid>
            );
          })
          .toSpliced(4)}
      </Grid> */}
    </>
  );
}
