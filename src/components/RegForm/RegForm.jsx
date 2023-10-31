import {useFormik} from "formik";
import {initialValues} from "./utils/regFormIV";
import {regFormSchema} from "./regFormSchema";
import {useUserRegisterContext} from "../../context/UserRegisterContext";

import {Box, TextField, Typography, Button} from "@mui/material";
import DropZone from "../Dropzone/Dropzone";
import {useState} from "react";
import ErrorIcon from "@mui/icons-material/Error";

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
export default function RegForm() {
  const [avatar, setavatar] = useState(null);
  const {signUp} = useUserRegisterContext();

  function onSubmit(values, actions) {
    values.avatar = avatar;
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
          flexDirection: "row",
          alignItems: "center",
          paddingY: 2,
          gap: 2,
        }}
      >
        <TextField
          sx={{width: 250, bgcolor: chartColorsPalette.skyBlue}}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="name"
          label="Name"
          variant="filled"
          className={errors.name && touched.name ? "textfield-error" : ""}
        />
        {/* <TextField
          sx={{width: 250, bgcolor: chartColorsPalette.skyBlue}}
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="surname"
          label="Surname"
          variant="filled"
          className={errors.surname && touched.surname ? "textfield-error" : ""}
        /> */}
        <TextField
          sx={{width: 250, bgcolor: chartColorsPalette.skyBlue}}
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          sx={{width: 250, bgcolor: chartColorsPalette.skyBlue}}
          value={values.regPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="regPassword"
          variant="filled"
          className={
            errors.regPassword && touched.regPassword ? "textfield-error" : ""
          }
          label="password"
        />
        <TextField
          sx={{width: 250, bgcolor: chartColorsPalette.skyBlue}}
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
      </Box>
      <DropZone
        id="avatar"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.avatar}
        onImagenSeleccionada={(avatar) => setavatar(avatar)}
      />
      <Box textAlign="center">
        <Button
          variant="contained"
          sx={{
            marginTop: 2,
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
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        textAlign={"center"}
        mt={4}
        height={16}
      >
        {errors.name && touched.name && (
          <Typography
            color={chartColorsPalette.skyBlue}
            sx={{marginLeft: 4, marginRight: 4}}
            variant="body2"
            fontSize={"0.75rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            mb={1}
          >
            <ErrorIcon fontSize="small" />
            {errors.name}
          </Typography>
        )}
        {errors.regEmail && touched.regEmail && (
          <Typography
            color={chartColorsPalette.skyBlue}
            sx={{marginLeft: 4, marginRight: 4}}
            variant="body2"
            fontSize={"0.75rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            mb={1}
          >
            <ErrorIcon fontSize="small" />
            {errors.regEmail}
          </Typography>
        )}
        {errors.regPassword && touched.regPassword && (
          <Typography
            color={chartColorsPalette.skyBlue}
            sx={{marginLeft: 4, marginRight: 4}}
            variant="body2"
            fontSize={"0.75rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            mb={1}
          >
            <ErrorIcon fontSize="small" />
            {errors.regPassword}
          </Typography>
        )}
        {errors.regConfirmPassword && touched.regConfirmPassword && (
          <Typography
            color={chartColorsPalette.skyBlue}
            sx={{marginLeft: 4, marginRight: 4}}
            variant="body2"
            fontSize={"0.75rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            mb={1}
          >
            <ErrorIcon fontSize="small" />
            {errors.regConfirmPassword}
          </Typography>
        )}
      </Box>
      {/* <pre>{JSON.stringify({values, errors}, null, 1)}</pre> */}
    </form>
  );
}
