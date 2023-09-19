import {useFormik} from "formik";
import {initialValues} from "./utils/updatePassIV";
import {updatePassSchema} from "./updatePassSchema";
import {Box, Button, TextField, Typography} from "@mui/material";
// import {useState} from "react";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
// import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

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

export default function UpdatePassFormView({passPatch}) {
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function onSubmit(values, actions) {
    passPatch(values);
    actions.resetForm();
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: updatePassSchema,
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
          value={values.currentPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="currentPassword"
          label="Current Password"
          variant="outlined"
          className={
            errors.currentPassword && touched.currentPassword
              ? "textfield-error"
              : ""
          }
        />
        {errors.currentPassword && touched.currentPassword && (
          <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
            {errors.currentPassword}
          </Typography>
        )}
        <TextField
          sx={{width: 250}}
          value={values.newPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="newPassword"
          label="New Password"
          variant="outlined"
          className={
            errors.newPassword && touched.newPassword ? "textfield-error" : ""
          }
        />
        {/* {isPasswordVisible ? (
          <LockOpenIcon
            sx={{position: "relative", top: -58, left: 90}}
            onClick={() =>
              setIsPasswordVisible((currentState) => !currentState)
            }
          />
        ) : (
          <LockPersonOutlinedIcon
            sx={{position: "relative", top: -58, left: 90}}
            onClick={() =>
              setIsPasswordVisible((currentState) => !currentState)
            }
          />
        )}
        {errors.newPassword && touched.newPassword && (
          <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
            {errors.newPassword}
          </Typography>
        )} */}
        <TextField
          sx={{width: 250}}
          value={values.retypePassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="retypePassword"
          label="Retype Password"
          variant="outlined"
          className={
            errors.retypePassword && touched.retypePassword
              ? "textfield-error"
              : ""
          }
        />
        {errors.retypePassword && touched.retypePassword && (
          <Typography sx={{marginLeft: 4, marginRight: 4}} variant="body2">
            {errors.retypePassword}
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
