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

export default function UpdateOperationFormView({onSubmit}) {
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
        padding={4}
      >
        <Box display={"flex"} justifyContent={"center"} gap={4}>
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
              label="Operation Type"
              variant="outlined"
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
            variant="outlined"
          />
          <TextField
            sx={{width: 250}}
            value={values.priceOpen}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="priceOpen"
            label="Price Open"
            variant="outlined"
          />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={4}>
          <TextField
            sx={{width: 250}}
            value={values.stopLoss}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="stopLoss"
            label="Stop Loss"
            variant="outlined"
          />
          <TextField
            sx={{width: 250}}
            value={values.takeProfit}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="takeProfit"
            label="Take Profit"
            variant="outlined"
          />
          <TextField
            sx={{width: 250}}
            value={values.priceClose}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="priceClose"
            label="Price Close"
            variant="outlined"
          />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={4}>
          <TextField
            sx={{width: 250}}
            value={values.commission}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="commission"
            label="Commission"
            variant="outlined"
          />
          <TextField
            sx={{width: 250}}
            value={values.swap}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="swap"
            label="Swap"
            variant="outlined"
          />
          <TextField
            sx={{width: 250}}
            value={values.changeRate}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="changeRate"
            label="ChangeRate"
            variant="outlined"
          />
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
