import {useFormik} from "formik";
import {initialValues} from "./utils/regFormIV";
import {regFormSchema} from "./regFormSchema";
import {Toaster} from "react-hot-toast";
import {Box, Grid, TextField, Typography, Button} from "@mui/material";
import {useUserRegisterContext} from "../../context/UserRegisterContext";

export default function RegForm() {
  const {signUp} = useUserRegisterContext();
  function onSubmit(values, actions) {
    signUp(values);
    console.log(values);
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
    validationSchema: regFormSchema,
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
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="name"
            label="Name"
            variant="filled"
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
            variant="filled"
            className={
              errors.surname && touched.surname ? "textfield-error" : ""
            }
          />
          {errors.surname && touched.surname && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.surname}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.regEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            id="regEmail"
            label="Email"
            variant="filled"
            className={
              errors.regEmail && touched.regEmail ? "textfield-error" : ""
            }
          />
          {errors.regEmail && touched.regEmail && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.regEmail}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.regPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            id="regPassword"
            label="Password"
            variant="filled"
            className={
              errors.regPassword && touched.regPassword ? "textfield-error" : ""
            }
          />
          {errors.regPassword && touched.regPassword && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.regPassword}
            </Typography>
          )}
          <TextField
            sx={{width: 250}}
            value={values.regConfirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            id="regConfirmPassword"
            label="Confirm Password"
            variant="filled"
            className={
              errors.regConfirmPassword && touched.regConfirmPassword
                ? "textfield-error"
                : ""
            }
          />
          {errors.regConfirmPassword && touched.regConfirmPassword && (
            <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
              {errors.regConfirmPassword}
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
