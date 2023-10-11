import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Select from "react-select";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.1)",
  lightPink: "rgba(255, 99, 132, 0.1)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  blueOpacity: "rgba(22, 41, 56, 0.1)",
  skyBlue: "rgba(208, 228, 233)",
};

export default function StrategySelect({allStrategies, onStrategyChange}) {
  const [strategySelected, setStrategySelected] = useState("");

  useEffect(() => {
    if (allStrategies && allStrategies.length > 0) {
      setStrategySelected(allStrategies[0].label);
    }
  }, [allStrategies]);

  const handleSelectChange = (selectedOption) => {
    setStrategySelected(selectedOption.value);
    onStrategyChange(selectedOption.value);
  };

  const options =
    allStrategies?.map((strategy) => ({
      label: strategy.name,
      value: strategy.id,
    })) || [];

  return (
    <Box width={256} position={"relative"} bottom={16}>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused
              ? chartColorsPalette.skyBlue
              : chartColorsPalette.skyBlue,
            fontSize: "14px",
            fontFamily: "Roboto, sans-serif",
            border: "1px solid " + chartColorsPalette.blue,
            borderRadius: "8px",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: "14px",
            fontFamily: "Roboto, sans-serif",
            color: state.isSelected
              ? chartColorsPalette.skyBlue
              : baseStyles.color,
            backgroundColor: state.isSelected
              ? chartColorsPalette.blue
              : state.isFocused
              ? chartColorsPalette.blueOpacity
              : baseStyles.backgroundColor,
          }),
        }}
        defaultValue={{label: "Select Strategy"}}
        options={options}
        onChange={handleSelectChange}
      />
    </Box>
  );
}
