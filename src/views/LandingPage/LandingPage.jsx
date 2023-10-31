import {Link} from "react-router-dom";
import LandingCards from "../../components/InfoCards/LandingCards";
import CardsSections from "../../components/CardsSections/CardsSections";
import {Box, Grid, Typography} from "@mui/material";
import LandingInfoCards from "../../components/InfoCards/LandingInfoCards";
import "./styleLanding.css";
import LandingTitle from "../../components/LandingTitle/LandingTitle";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

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
  skyBlueOpacity: "rgba(208, 228, 233, 0.1)",
};

export default function LandingPage() {
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        gap={2}
        mt={16}
      >
        <Grid item xs={10} sm={10} md={3} lg={2}>
          <Box>
            {/* <Typography
              component={"h1"}
              variant="h1"
              color={colorPalettes.blue}
            >
              Smart Financial Service
            </Typography> */}
            <LandingTitle />
            <Typography
              width={"100%"}
              variant="body2"
              mb={1}
              color={colorPalettes.tealBlue}
            >
              Discover the art of investment with Smart Financial Service. Our
              platform provides you with the tools and necessary information to
              make intelligent financial decisions.
            </Typography>
            <Link className="allLinks" to="/login">
              <Typography
                component={"button"}
                variant="body2"
                className="to-login"
                mt={2}
                sx={{
                  textAlign: "center",
                  padding: 1,
                  width: "104px",
                  border: "2px solid " + colorPalettes.blue,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                }}
                color={colorPalettes.skyBlue}
              >
                Get Started
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={5}>
          <Box
            width={"100%"}
            height={"30vh"}
            bgcolor={colorPalettes.blue}
            sx={{
              backgroundImage: `url('../src/assets/buildings.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: 2,
              // rotate: "1.5deg",
              boxShadow: "4px 4px 8px 0px " + colorPalettes.blue,
              border: "1px solid" + colorPalettes.tealBlue,
              // borderTopRightRadius: 64,
            }}
          ></Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"left"}
            mb={6}
          >
            <Typography variant="h4" color={colorPalettes.blue} mt={4}>
              Invest Today
            </Typography>
            <Typography variant="body2" color={colorPalettes.tealBlue}>
              From stocks to real estate, we are here to guide you on your
              journey towards a solid and prosperous financial future. Join us
              and start investing with confidence today.
            </Typography>
            <LandingCards />
          </Box>
        </Grid>
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"80%"}
          height={"2px"}
          mt={8}
          mb={8}
          bgcolor={colorPalettes.blue}
        ></Box>
      </Grid>
      <CardsSections />
      <LandingInfoCards />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Typography variant="h6" color={chartColorsPalette.blue}>
          ©
        </Typography>
        <Typography
          variant="body2"
          fontSize={"0.75rem"}
          color={chartColorsPalette.blue}
          paddingY={1}
        >
          2023 IM Investing / All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
