import LoginForm from "../../components/LoginForm/LoginForm";
import RegForm from "../../components/RegForm/RegForm";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Box, Grid, Typography} from "@mui/material";
import "./styleLogin.css";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
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
        color={colorPalettes.blue}
      >
        {isLoginVisible ? "Sign in to IM Investing" : "Sign up to IM Investing"}
      </Typography>
      <Box className={"wrapper-loginview"}>
        {isLoginVisible ? <LoginForm /> : <RegForm />}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={4}
          gap={1}
        >
          <Typography variant="body2">
            {isLoginVisible
              ? "Don't have an account?"
              : "Already have an account?"}
          </Typography>
          <Link className="allLinks">
            <Typography
              onClick={toggleForm}
              variant="body1"
              color={colorPalettes.tealBlue}
              borderBottom={"2px solid" + colorPalettes.tealBlue}
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
