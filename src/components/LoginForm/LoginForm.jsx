import {useFormik} from "formik";
import {initialValues} from "./utils/loginFormIV";
import {loginFormSchema} from "./loginFormSchema";
import {useUserLoginContext} from "../../context/UserLoginContext";
import {Box, TextField, Typography, Button} from "@mui/material";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
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
          sx={{width: 220}}
          className={errors.email && touched.email ? "textfield-error" : ""}
        />

        {errors.email && touched.email && (
          <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
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
          sx={{width: 220}}
          className={
            errors.password && touched.password ? "textfield-error" : ""
          }
        />

        {errors.password && touched.password && (
          <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
            {errors.password}
          </Typography>
        )}
      </Box>
      <Box textAlign="center">
        <Button
          variant="contained"
          sx={{
            color: colorPalettes.skyBlue,
            bgcolor: colorPalettes.blue,
            border: "2px solid " + colorPalettes.blue,
            borderTopLeftRadius: 16,
            borderBottomRightRadius: 16,
            transition: "0.2s",
            ":hover": {
              color: colorPalettes.blue,
              bgcolor: colorPalettes.skyBlue,
              boxShadow: "0px 5px 0px 0px" + colorPalettes.blue,
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
