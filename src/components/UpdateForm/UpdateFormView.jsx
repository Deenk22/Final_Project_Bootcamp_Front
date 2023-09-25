import {useFormik} from "formik";
import {initialValues} from "./utils/updateUserIV";
import {updateUserSchema} from "./updateUserSchema";
import {Box, Button, TextField, Typography} from "@mui/material";

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

export default function UpdateFormView({onSubmit}) {
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
    validationSchema: updateUserSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 8,
          gap: 2,
        }}
      >
        <TextField
          sx={{width: 250}}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="name"
          label="Name"
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
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="surname"
          label="Surname"
          variant="outlined"
          className={errors.surname && touched.surname ? "textfield-error" : ""}
        />
        {errors.surname && touched.surname && (
          <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
            {errors.surname}
          </Typography>
        )}
        <TextField
          sx={{width: 250}}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          id="email"
          label="Email"
          variant="outlined"
          className={errors.email && touched.email ? "textfield-error" : ""}
        />
        {errors.email && touched.email && (
          <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
            {errors.email}
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
      </Box>
    </form>
  );
}
