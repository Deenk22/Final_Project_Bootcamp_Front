import {useFormik} from "formik";
import {initialValues} from "./utils/addOperationIV";
import {addOperationSchema} from "./addOperationSchema";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

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

export default function AddOperationView({
  onSubmit,
  strategies,
  stocks,
  brokers,
}) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: addOperationSchema,
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
              sx={{width: 250}}
              value={values.operationType}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              id="operationType"
              label={
                errors.operationType ? errors.operationType : "Operation Type"
              }
              variant="filled"
              className={
                errors.operationType && touched.operationType
                  ? "textfield-error"
                  : ""
              }
            />
          </Box>
          <TextField
            sx={{width: 250}}
            value={values.volume}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="volume"
            label="Volume"
            variant="filled"
          />
          <TextField
            sx={{width: 250}}
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
            sx={{width: 250}}
            value={values.stopLoss}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="stopLoss"
            label="Stop Loss"
            variant="filled"
          />
          <TextField
            sx={{width: 250}}
            value={values.takeProfit}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="takeProfit"
            label="Take Profit"
            variant="filled"
          />
          <TextField
            sx={{width: 250}}
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
            sx={{width: 250}}
            value={values.commission}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="commission"
            label="Commission"
            variant="filled"
          />
          <TextField
            sx={{width: 250}}
            value={values.swap}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="swap"
            label="Swap"
            variant="filled"
          />
          <TextField
            sx={{width: 250}}
            value={values.changeRate}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="changeRate"
            label="ChangeRate"
            variant="filled"
          />
        </Box>
        <Box
          sx={{minWidth: 250}}
          display={"flex"}
          justifyContent={"center"}
          gap={2}
        >
          <FormControl fullWidth variant="filled">
            <InputLabel id="strategyId">Strategy</InputLabel>
            <Select
              labelId="strategyId"
              id="strategyId"
              name="strategyId"
              label="Strategy"
              value={values.strategyId}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {strategies?.map((strategy) => {
                return (
                  <MenuItem
                    key={strategy.id}
                    value={strategy.id ? strategy.id : null}
                  >
                    {strategy.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="filled">
            <InputLabel id="stockId">Stock</InputLabel>
            <Select
              labelId="stockId"
              id="stockId"
              name="stockId"
              label="Stock"
              value={values.stockId}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {stocks?.map((stock) => {
                return (
                  <MenuItem key={stock.id} value={stock.id ? stock.id : null}>
                    {stock.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="filled">
            <InputLabel id="brokerId">Broker</InputLabel>
            <Select
              labelId="brokerId"
              id="brokerId"
              name="brokerId"
              label="Broker"
              value={values.brokerId}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {brokers?.map((broker) => {
                return (
                  <MenuItem
                    key={broker.id}
                    value={broker.id ? broker.id : null}
                  >
                    {broker.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box textAlign={"center"}>
          <Button
            variant="contained"
            sx={{
              marginTop: 4,
              color: chartColorsPalette.skyBlue,
              bgcolor: chartColorsPalette.blue,
              border: "2px solid " + chartColorsPalette.blue,
              borderTopLeftRadius: 16,
              borderBottomRightRadius: 16,
              transition: "0.2s",
              ":hover": {
                color: chartColorsPalette.blue,
                bgcolor: chartColorsPalette.skyBlue,
                boxShadow: "0px 5px 0px 0px" + chartColorsPalette.blue,
              },
            }}
            disabled={isSubmitting}
            type="submit"
          >
            Add
          </Button>
        </Box>
      </Box>
    </form>
  );
}
