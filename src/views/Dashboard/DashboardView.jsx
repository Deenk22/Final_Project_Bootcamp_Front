import {useState} from "react";
import DoughnutData from "../../components/Charts/DoughnutData";
import BarData from "../../components/Charts/BarData";
import {Box, Grid, Typography} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styleDashboard.css";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function DashboardView({allOperations}) {
  const [operationSelected, setOperationSelected] = useState("");

  const handleChange = (event) => {
    const operationSelect = event.target.value;
    setOperationSelected(operationSelect);
  };

  return (
    <main>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <FormControl sx={{width: 350}}>
          <InputLabel id="demo-simple-select-label">Operations</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={operationSelected}
            label="Operation Type"
            onChange={handleChange}
          >
            {allOperations?.map((operation) => {
              const {id, operationType} = operation;
              return (
                <MenuItem key={id} value={operationType}>
                  {operationType}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems={"center"}
        mt={4}
        paddingY={16}
        bgcolor={colorPalettes.blue}
      >
        <Grid item xs={10} sm={10} md={10} lg={4}>
          <Box display={"flex"} justifyContent={"center"}>
            <BarData allOperations={allOperations} />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={4}>
          <Box display={"flex"} justifyContent={"center"}>
            <DoughnutData
              allOperations={allOperations}
              operationSelected={operationSelected}
            />
          </Box>
        </Grid>
      </Grid>
      {/* Este grid deberia ir en una section fuera de aqui */}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        bgcolor={colorPalettes.skyBlue}
      >
        <Grid item xs={10} sm={10} md={6} mb={4}>
          <Box mt={4} padding={16}>
            <Typography variant="h4" color={colorPalettes.blue}>
              Total Capital Invested
            </Typography>
            <Typography variant="body2" color={colorPalettes.blue}>
              Improve your investment strategy with our Doughnut charts.
              Streamline data management, merging key financial metrics to make
              informed decisions. These visualisations provide valuable insights
              for a data-driven investment approach.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={4}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={2}
            className="blur-effect-doughnut-chart-right"
          ></Box>
        </Grid>
      </Grid>
    </main>
  );
}
