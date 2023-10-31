import {useFormik} from "formik";
import {initialValues} from "./utils/updateOperationIV";
import {updateFormSchema} from "./updateOperationSchema";
import {Box, Button, TextField} from "@mui/material";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
  tealBlue: "#367588",
};

export default function UpdateOperationFormView({
  onSubmit,
  setOpen,
  operation,
}) {
  const {operationType, volume, priceOpen, priceClose} = operation;

  const {values, handleChange, handleBlur, handleSubmit, isSubmitting} =
    useFormik({
      initialValues,
      validationSchema: updateFormSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={2}
        padding={2}
      >
        <Box display={"flex"} justifyContent={"center"} gap={2}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              sx={{
                width: 250,
                bgcolor: chartColorsPalette.skyBlue,
              }}
              value={values.operationType}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              id="operationType"
              label={operationType ? operationType : "Operation Type"}
              variant="filled"
            />
          </Box>
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.volume}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="volume"
            label="Volume"
            variant="filled"
          />
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.priceOpen}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="priceOpen"
            label="Price Open"
            variant="filled"
          />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={2}>
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.stopLoss}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="stopLoss"
            label="Stop Loss"
            variant="filled"
          />
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.takeProfit}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="takeProfit"
            label="Take Profit"
            variant="filled"
          />
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.priceClose}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="priceClose"
            label="Price Close"
            variant="filled"
          />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={2}>
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.commission}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="commission"
            label="Commission"
            variant="filled"
          />
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.swap}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="swap"
            label="Swap"
            variant="filled"
          />
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.changeRate}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="changeRate"
            label="ChangeRate"
            variant="filled"
          />
        </Box>
        <Box textAlign={"center"}>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            sx={{
              marginTop: 3,
              color: chartColorsPalette.blue,
              bgcolor: chartColorsPalette.skyBlue,
              ":hover": {
                color: chartColorsPalette.skyBlue,
                bgcolor: chartColorsPalette.lightPink,
              },
            }}
            disabled={isSubmitting}
            type="submit"
          >
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
}
