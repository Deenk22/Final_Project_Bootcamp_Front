import {useFormik} from "formik";
import {initialValues} from "./utils/addOperationIV";
import {addOperationSchema} from "./addOperationSchema";
import {TextField, Typography, Button, Box} from "@mui/material";

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

export default function AddOperationView({postOperation}) {
  function onSubmit(values, actions) {
    postOperation(values);
    actions.resetForm();
  }

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
        padding={4}
      >
        <Box display={"flex"} justifyContent={"center"} gap={4}>
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
          {errors.operationType && touched.operationType && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.operationType}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.volume}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="volume"
            label="Volume"
            variant="outlined"
            className={errors.volume && touched.volume ? "textfield-error" : ""}
          />
          {errors.volume && touched.volume && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.volume}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.priceOpen}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="priceOpen"
            label="Price Open"
            variant="outlined"
            className={
              errors.priceOpen && touched.priceOpen ? "textfield-error" : ""
            }
          />
          {errors.priceOpen && touched.priceOpen && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.priceOpen}
            </Typography>
          )}
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
            className={
              errors.stopLoss && touched.stopLoss ? "textfield-error" : ""
            }
          />
          {errors.stopLoss && touched.stopLoss && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.stopLoss}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.takeProfit}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="takeProfit"
            label="Take Profit"
            variant="outlined"
            className={
              errors.takeProfit && touched.takeProfit ? "textfield-error" : ""
            }
          />
          {errors.takeProfit && touched.takeProfit && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.takeProfit}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.priceClose}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="priceClose"
            label="Price Close"
            variant="outlined"
            className={
              errors.priceClose && touched.priceClose ? "textfield-error" : ""
            }
          />
          {errors.priceClose && touched.priceClose && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.priceClose}
            </Typography>
          )}
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
            className={
              errors.commission && touched.commission ? "textfield-error" : ""
            }
          />
          {errors.commission && touched.commission && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.commission}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.swap}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="swap"
            label="Swap"
            variant="outlined"
            className={
              errors.swap && touched.commiswapssion ? "textfield-error" : ""
            }
          />
          {errors.swap && touched.swap && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.swap}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.changeRate}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="changeRate"
            label="ChangeRate"
            variant="outlined"
            className={
              errors.changeRate && touched.changeRate ? "textfield-error" : ""
            }
          />
          {errors.changeRate && touched.changeRate && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.changeRate}
            </Typography>
          )}
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
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
}
