import LoginForm from "../../components/LoginForm/LoginForm";
import RegForm from "../../components/RegForm/RegForm";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";
import "./styleLogin.css";

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
      className="bg-image"
    >
      <Box className={"wrapper-loginview"}>
        {isLoginVisible ? <LoginForm /> : <RegForm />}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={8}
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
              color={colorPalettes.blue}
              borderBottom={"1px solid" + colorPalettes.blue}
              padding={0.5}
            >
              {isLoginVisible ? "Register" : "Login"}
            </Typography>
          </Link>
        </Box>
      </Box>
      <Toaster />
    </Grid>
  );
}
