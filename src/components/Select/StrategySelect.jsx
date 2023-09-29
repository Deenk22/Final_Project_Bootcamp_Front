import {Box, Typography} from "@mui/material";
import {useState} from "react";
import Select from "react-select";

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
};

export default function StrategySelect({allStrategies}) {
  const [strategySelected, setStrategySelected] = useState("");

  const strategyName = allStrategies?.map((strategy) => strategy.name);
  const defaultValue = strategyName ? strategyName[0] : "";

  const handleSelectChange = (value) => {
    setStrategySelected(value);
    console.log(strategySelected);
  };

  return (
    <Box width={320}>
      <Typography
        variant="body2"
        mb={1}
        ml={0.5}
        color={chartColorsPalette.blue}
      >
        Strategies Name
      </Typography>
      <Select
        defaultValue={{label: defaultValue}}
        options={allStrategies?.map((strategy) => ({
          label: strategy.name,
          value: strategy.id,
        }))}
        onChange={handleSelectChange}
      />
    </Box>
  );
}
