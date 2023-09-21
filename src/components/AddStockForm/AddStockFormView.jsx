import {useFormik} from "formik";
import {initialValues} from "./utils/addStockIV";
import {addStockSchema} from "./addStockSchema";
import {Button, TextField, Typography} from "@mui/material";

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

export default function AddStockFormView({postStock}) {
  function onSubmit(values, actions) {
    postStock(values);
    actions.resetForm();
  }

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: addStockSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        sx={{width: 250}}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="name"
        label="Strategy Name"
        variant="outlined"
        className={errors.name && touched.name ? "textfield-error" : ""}
      />
      {errors.name && touched.name && (
        <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
          {errors.name}
        </Typography>
      )}
      <TextField
        sx={{width: 250}}
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="country"
        label="Country"
        variant="outlined"
        className={errors.country && touched.country ? "textfield-error" : ""}
      />
      {errors.country && touched.country && (
        <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
          {errors.country}
        </Typography>
      )}
      <TextField
        sx={{width: 250}}
        value={values.ticker}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="ticker"
        label="Ticker"
        variant="outlined"
        className={errors.ticker && touched.ticker ? "textfield-error" : ""}
      />
      {errors.ticker && touched.ticker && (
        <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
          {errors.ticker}
        </Typography>
      )}
      <TextField
        sx={{width: 250}}
        value={values.type}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="type"
        label="Type"
        variant="outlined"
        className={errors.type && touched.type ? "textfield-error" : ""}
      />
      {errors.type && touched.type && (
        <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
          {errors.type}
        </Typography>
      )}
      <TextField
        sx={{width: 250}}
        value={values.sector}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="sector"
        label="Sector"
        variant="outlined"
        className={errors.sector && touched.sector ? "textfield-error" : ""}
      />
      {errors.sector && touched.sector && (
        <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
          {errors.sector}
        </Typography>
      )}
      <TextField
        sx={{width: 250}}
        value={values.industry}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="industry"
        label="Industry"
        variant="outlined"
        className={errors.industry && touched.industry ? "textfield-error" : ""}
      />
      {errors.industry && touched.industry && (
        <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
          {errors.industry}
        </Typography>
      )}
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
    </form>
  );
}
