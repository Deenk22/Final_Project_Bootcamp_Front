import {useFormik} from "formik";
import {initialValues} from "./utils/addStrategy";
import {addStrategySchema} from "./addStrategySchema";
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

export default function AddStrategyFormView({onSubmit}) {
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
    validationSchema: addStrategySchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box display={"flex"} flexDirection={"column"} gap={2} padding={2}>
        <TextField
          sx={{width: 250}}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="name"
          label={errors.name ? errors.name : "Strategy Name"}
          variant="outlined"
          className={errors.name && touched.name ? "textfield-error" : ""}
        />
        <TextField
          sx={{width: 250}}
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="description"
          label="Description"
          variant="outlined"
          multiline
          maxRows={5}
        />
        <TextField
          sx={{width: 250}}
          value={values.budget}
          onChange={handleChange}
          onBlur={handleBlur}
          type="number"
          id="budget"
          label="Budget"
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
    </form>
  );
}
