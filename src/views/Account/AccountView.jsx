import {Box, Grid, Typography} from "@mui/material";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import UpdatePassForm from "../../components/UpdatePassForm/UpdatePassForm";
import {useState} from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import "./Style.css";

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

export default function AccountView({
  name,
  surname,
  correctDate,
  avatar,
  email,
}) {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Grid item xs={10} sm={10} md={3} textAlign={"center"}>
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
                We recommend that you choose a unique password.
              </Typography>
            ) : (
              <Typography variant="body2">
                Manage your account´s details.
              </Typography>
            )}
            {isSettingsVisible ? <UpdatePassForm /> : <UpdateForm />}
          </Box>
        </Grid>
        <Grid
          item
          xs={10}
          sm={10}
          md={5}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={4}
            padding={2}
            bgcolor={chartColorsPalette.tealBlueOpacity}
            boxShadow={"8px 4px 8px 2px rgba(54, 117, 136, 0.2)"}
            border={"1px solid rgba(54, 117, 136, 0.2)"}
            sx={{
              borderBottomLeftRadius: 16,
              borderTopLeftRadius: 16,
              borderBottomRightRadius: 64,
            }}
          >
            <img
              className="img-avatar"
              src="./src/assets/avatarControlPanel.jpg"
              alt=""
              width={224}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"left"}
              gap={1}
            >
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={1}
                variant="body2"
              >
                <AccountBoxIcon />
                Name: {name} {surname}
              </Typography>
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={1}
                variant="body2"
              >
                <EmailIcon />
                Email: {email}
              </Typography>
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={1}
                variant="body2"
              >
                <EditCalendarIcon />
                Register Date: {correctDate}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
