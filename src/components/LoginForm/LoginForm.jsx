import {useFormik} from "formik";
import {initialValues} from "./utils/loginFormIV";
import {loginFormSchema} from "./loginFormSchema";
import {Toaster} from "react-hot-toast";
import {notifySuccess} from "../../notifications/notificationService";
import {Box, Grid, TextField, Typography, Button} from "@mui/material";
import {useUserLoginContext} from "../../context/UserLoginContext";

export default function LoginForm() {
  const {signIn} = useUserLoginContext();
  function onSubmit(values, actions) {
    signIn(values);
    actions.resetForm();
    notifySuccess();
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
            gap: 2,
            alignItems: "center",
            marginTop: "25vh",
            border: "1px solid black",
            padding: 8,
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
          <Button disabled={isSubmitting} type="submit">
            Submit
          </Button>
        </Box>
        <Toaster />
        {/* <pre>{JSON.stringify({values, errors}, null, 1)}</pre> */}
      </form>
    </Grid>
  );
}
