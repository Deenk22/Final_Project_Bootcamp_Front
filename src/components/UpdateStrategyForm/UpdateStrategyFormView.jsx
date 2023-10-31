import {Box, Button, TextField} from "@mui/material";
import {useFormik} from "formik";
import {initialValues} from "./utils/updateStrategyIV";
import {updateStrategySchema} from "./updateStrategySchema";

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

export default function UpdateStrategyFormView({onSubmit, setOpen}) {
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
    validationSchema: updateStrategySchema,
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
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="name"
            label={errors.name ? errors.name : "Strategy Name"}
            variant="filled"
            className={errors.name && touched.name ? "textfield-error" : ""}
          />
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="description"
            label="Description"
            multiline
            maxRows={6}
            variant="filled"
          />
          <TextField
            sx={{
              width: 250,
              bgcolor: chartColorsPalette.skyBlue,
            }}
            value={values.budget}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="budget"
            label="Budget"
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
