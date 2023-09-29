import {Box} from "@mui/material";
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

export default function StrategyIdSelect({strategies}) {
  console.log(strategies);
  const [strategySelected, setStrategySelected] = useState("");

  const strategyName = strategies?.map((strategy) => strategy.name);
  const defaultValue = strategyName ? strategyName[0] : "";

  const handleSelectChange = (value) => {
    setStrategySelected(value);
    console.log(strategySelected);
  };

  return (
    <Box width={320}>
      <Select
        defaultValue={{label: defaultValue}}
        options={strategies?.map((strategy) => ({
          label: strategy.name,
          value: strategy.id,
        }))}
        onChange={handleSelectChange}
      />
    </Box>
  );
}
