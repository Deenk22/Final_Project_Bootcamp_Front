import {useFormik} from "formik";
import {initialValues} from "./utils/regFormIV";
import {regFormSchema} from "./regFormSchema";
import {Box, TextField, Typography, Button} from "@mui/material";
import {useUserRegisterContext} from "../../context/UserRegisterContext";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function RegForm() {
  const {signUp} = useUserRegisterContext();
  function onSubmit(values, actions) {
    signUp(values);
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
          sx={{width: 220}}
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
          sx={{width: 220}}
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="surname"
          label="Surname"
          variant="filled"
          className={errors.surname && touched.surname ? "textfield-error" : ""}
        />
        {errors.surname && touched.surname && (
          <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
            {errors.surname}
          </Typography>
        )}
        <TextField
          sx={{width: 220}}
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
          sx={{width: 220}}
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
          sx={{width: 220}}
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
