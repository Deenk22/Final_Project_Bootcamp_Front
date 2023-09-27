import {useState} from "react";
import Select from "react-select";
import {Box, Typography} from "@mui/material";

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
      <Typography variant="body2">Operations by Type</Typography>
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
