import {Link} from "react-router-dom";
import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";
import "./styleLanding.css";

export default function LandingPage() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="landing"
      >
        <Box display={"flex"} flexDirection={"column"} className="blur-effect">
          <Typography
            variant="h2"
            position={"relative"}
            top={"30vh"}
            padding={2}
            ml={1}
            mr={1}
            border={"1px solid #222"}
            color={colorPalettes.blue}
            fontSize={"4rem"}
            sx={{
              borderTopRightRadius: 24,
              borderBottomLeftRadius: 24,
            }}
          >
            Investing in your Financial
          </Typography>
          <Typography
            variant="h4"
            position={"relative"}
            top={"31.2vh"}
            mt={-1}
            ml={2}
            mr={2}
            color={colorPalettes.blue}
          >
            well-being
          </Typography>
          <Link className="allLinks" to="/login">
            <Typography
              className="to-login"
              ml={2}
              mr={2}
              sx={{
                position: "relative",
                top: "31.5vh",
                textAlign: "center",
                padding: 0.5,
                width: "100px",
                border: "1px solid #162938",
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                fontWeight: 550,
              }}
            >
              Login
            </Typography>
          </Link>
        </Box>
      </Grid>
    </>
  );
}
