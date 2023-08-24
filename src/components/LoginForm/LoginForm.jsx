import {useFormik} from "formik";
import {initialValues} from "./utils/loginFormIV";
import {loginFormSchema} from "./loginFormSchema";
import {useUserLoginContext} from "../../context/UserLoginContext";
import {Box, Grid, TextField, Typography, Button} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";

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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 8,
            gap: 2,
            border: "1px solid black",
          }}
        >
          <TextField
            sx={{width: 250}}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            id="email"
            label="Email"
            variant="filled"
            className={errors.email && touched.email ? "textfield-error" : ""}
          />

          {errors.email && touched.email && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.email}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            id="password"
            label="Password"
            variant="filled"
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
              marginTop: 2,
              color: colorPalettes.grey,
              bgcolor: colorPalettes.blue,
              border: "1px solid #162938",
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              transition: "0.2s",
              ":hover": {
                color: colorPalettes.blue,
                bgcolor: colorPalettes.grey,
                boxShadow: "0px 5px 0px 0px" + colorPalettes.blue,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
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
    </Grid>
  );
}
