import LoginForm from "../../components/LoginForm/LoginForm";
import RegForm from "../../components/RegForm/RegForm";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Box, Grid, Typography} from "@mui/material";
import "./styleLogin.css";

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

export default function LoginView() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const toggleForm = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight={"100vh"}
    >
      <Typography
        className="wrapper-title"
        variant="h5"
        color={chartColorsPalette.blue}
        mb={2}
      >
        {isLoginVisible ? "Sign in to IM Investing" : "Sign up to IM Investing"}
      </Typography>
      <Box
        className={"wrapper-loginview"}
        bgcolor={chartColorsPalette.blue}
        padding={4}
        borderRadius={4}
      >
        {isLoginVisible ? <LoginForm /> : <RegForm />}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={4}
          gap={1}
        >
          <Typography variant="body2" color={chartColorsPalette.skyBlue}>
            {isLoginVisible
              ? "Don't have an account?"
              : "Already have an account?"}
          </Typography>

          <Link className="allLinks">
            <Typography
              onClick={toggleForm}
              variant="body1"
              color={chartColorsPalette.lightPink}
              borderBottom={"2px solid" + chartColorsPalette.tealBlue2}
              padding={0.5}
            >
              {isLoginVisible ? "Sign up" : "Sign in"}
            </Typography>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
}
