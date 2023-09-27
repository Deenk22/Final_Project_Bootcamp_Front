import {Box, Typography} from "@mui/material";
import {useState} from "react";
import Select from "react-select";

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
      <Typography variant="body2">Strategies by Name</Typography>
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
