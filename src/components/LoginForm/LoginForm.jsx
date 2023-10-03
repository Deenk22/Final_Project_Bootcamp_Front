import {useFormik} from "formik";
import {initialValues} from "./utils/loginFormIV";
import {loginFormSchema} from "./loginFormSchema";
import {useUserLoginContext} from "../../context/UserLoginContext";
import {Box, TextField, Typography, Button} from "@mui/material";

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

export default function LoginForm() {
  const {signIn} = useUserLoginContext();
  function onSubmit(values, actions) {
    signIn(values);
    actions.resetForm();
  }
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: loginFormSchema,
    onSubmit,
  });

  // Dudas
  // Si utilizamos la propiedad helperText o no en los inputs.
  // Si utilizamos la propiedad disabled en los inputs.

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
          type="email"
          id="email"
          label="Email"
          variant="filled"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{width: 250, bgcolor: chartColorsPalette.skyBlue}}
          className={errors.email && touched.email ? "textfield-error" : ""}
        />

        {errors.email && touched.email && (
          <Typography
            color={chartColorsPalette.skyBlue}
            sx={{marginLeft: 4, marginRight: 4}}
            variant="body2"
          >
            {errors.email}
          </Typography>
        )}
        <TextField
          type="password"
          id="password"
          label="Password"
          variant="filled"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{width: 250, bgcolor: chartColorsPalette.skyBlue}}
          className={
            errors.password && touched.password ? "textfield-error" : ""
          }
        />

        {errors.password && touched.password && (
          <Typography
            color={chartColorsPalette.skyBlue}
            sx={{marginLeft: 4, marginRight: 4}}
            variant="body2"
          >
            {errors.password}
          </Typography>
        )}
      </Box>
      <Box textAlign="center">
        <Button
          variant="contained"
          sx={{
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
          Submit
        </Button>
      </Box>
      {/* <pre>{JSON.stringify({values, errors}, null, 1)}</pre> */}
    </form>
  );
}
