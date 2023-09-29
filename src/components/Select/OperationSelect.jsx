import {useState} from "react";
import Select from "react-select";
import {Box, Typography} from "@mui/material";

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

export default function OperationSelect({allOperations}) {
  const [operationSelected, setOperationSelected] = useState("");

  // const options = allOperations?.map((operation) => ({
  //   label: operation.operationType,
  //   value: operation.operationType,
  // }));

  const operationsType = allOperations?.map(
    (operation) => operation.operationType
  );
  const defaultValue = operationsType ? operationsType[0] : "";

  const handleSelectChange = (value) => {
    setOperationSelected(value);
    console.log(operationSelected);
  };

  return (
    <Box width={320}>
      <Typography
        variant="body2"
        mb={1}
        ml={0.5}
        color={chartColorsPalette.blue}
      >
        Operation Type
      </Typography>
      <Select
        defaultValue={{label: defaultValue}}
        options={allOperations?.map((operation) => ({
          label: operation.operationType,
          value: operation.id,
        }))}
        onChange={handleSelectChange}
      />
    </Box>
  );
}
