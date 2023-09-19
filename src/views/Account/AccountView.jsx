import {Box, Grid, Typography} from "@mui/material";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import UpdatePassForm from "../../components/UpdatePassForm/UpdatePassForm";
import {useState} from "react";

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

export default function AccountView() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Grid item xs={3}>
          <Box>
            <Typography
              component={"button"}
              variant="body2"
              fontSize={"0.65rem"}
              mb={2}
              padding={1}
              borderRadius={2}
              border={"none"}
              bgcolor={chartColorsPalette.blue}
              color={chartColorsPalette.skyBlue}
              onClick={() => setIsSettingsVisible(!isSettingsVisible)}
              sx={{}}
            >
              Change View
            </Typography>
            {isSettingsVisible ? (
              <Typography variant="h4">Change Your Password</Typography>
            ) : (
              <Typography variant="h4">Account Settings</Typography>
            )}
            {isSettingsVisible ? (
              <Typography variant="body2">
                For your security, we highly recommend that you choose a unique
                password.
              </Typography>
            ) : (
              <Typography variant="body2">
                Manage your account´s details.
              </Typography>
            )}
            {isSettingsVisible ? <UpdatePassForm /> : <UpdateForm />}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            width={600}
            height={300}
            sx={{
              backgroundImage: `url('../src/assets/buildings.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
