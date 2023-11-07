import LandingCards from "../../components/InfoCards/LandingCards";
import CardsSections from "../../components/CardsSections/CardsSections";
import LandingTitle from "../../components/LandingTitle/LandingTitle";
import {Link} from "react-router-dom";
import {Box, Grid, Typography, useTheme} from "@mui/material";
import "./styleLanding.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Carrousel from "../../components/Carrousel/Carrousel";

export default function LandingPage() {
  const theme = useTheme();

  return (
    <>
      <ScrollToTop />
      <section className="split-background-colors">
        <Grid
          container
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          mt={14}
          mb={14}
        >
          <Grid item xs={10} sm={10} md={3} lg={2}>
            <Box>
              <LandingTitle />
              <Typography
                width={"100%"}
                variant="body2"
                mb={1}
                color={"primary"}
              >
                Discover the art of investment with Smart Financial Service. Our
                platform provides you with the tools and necessary information
                to make intelligent financial decisions.
              </Typography>
              <Link className="allLinks" to="/login">
                <Typography
                  component={"button"}
                  variant="body2"
                  className="to-login"
                  mt={2}
                  mb={4}
                  sx={{
                    textAlign: "center",
                    padding: 1,
                    width: "104px",
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                  }}
                  color={"secondary"}
                >
                  Get Started
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={10} sm={10} md={4} lg={4}>
            <Box
              width={"100%"}
              height={"30vh"}
              bgcolor={"primary"}
              sx={{
                backgroundImage: `url('../src/assets/buildings.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: 2,
                boxShadow: `4px 4px 8px 2px ${theme.palette.primary.main}`,
              }}
            ></Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"left"}
              mb={6}
            >
              <Typography
                variant="h4"
                color={"primary"}
                mt={4}
                sx={{wordSpacing: -2}}
              >
                Invest Today
              </Typography>
              <Typography variant="body2" color={"primary"}>
                From stocks to real estate, we are here to guide you on your
                journey towards a solid and prosperous financial future. Join us
                and start investing with confidence today.
              </Typography>
              <LandingCards />
            </Box>
          </Grid>
        </Grid>
        <CardsSections />
      </section>
      <section className="dahsboard-section">
        <Box mt={16}>
          <Typography variant="h2" component={"h1"} color={"primary"}>
            <span>Digitize </span>your financial
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center" mb={14}>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              border={`2px solid ${theme.palette.primary.main}`}
              paddingY={16}
              borderRadius={8}
              sx={{
                background: theme.palette.primary.main,
                backgroundImage: `url('../src/assets/svg/probando04.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                width: "100%",
              }}
            >
              <Typography
                textAlign="center"
                variant="body1"
                color={"secondary"}
              >
                Manage your Finances
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              border={`2px solid ${theme.palette.primary.main}`}
              paddingY={16}
              borderRadius={8}
              sx={{
                background: theme.palette.primary.main,
                backgroundImage: `url('../src/assets/svg/probando02.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                width: "100%",
              }}
            >
              <Typography textAlign="center" variant="body1" color="white">
                Outlines a Strategy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Box
              border={`2px solid ${theme.palette.primary.main}`}
              paddingY={16}
              borderRadius={8}
              sx={{
                background: theme.palette.primary.main,
                backgroundImage: `url('../src/assets/svg/probando03.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <Typography textAlign="center" variant="body1" color="white">
                Cosas que hacer
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Typography variant="h6" color={"primary"}>
          ©
        </Typography>
        <Typography
          variant="body2"
          fontSize={"0.75rem"}
          color={"primary"}
          paddingY={1}
        >
          2023 IM Investing / All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
