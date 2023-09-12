import {useFormik} from "formik";
import {initialValues} from "./utils/updateUserIV";
import {updateUserSchema} from "./updateUserSchema";
import {Box, Button, TextField, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";

export default function UpdateUserDataView({updateUser}) {
  function onSubmit(values, actions) {
    updateUser(values);
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
        <Button
          variant="contained"
          sx={{
            marginTop: 4,
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
          Update
        </Button>
      </Box>
    </form>
  );
}
