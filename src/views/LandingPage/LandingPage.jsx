import {Link} from "react-router-dom";
import LandingCards from "../../components/InfoCards/LandingCards";
import CardsSections from "../../components/CardsSections/CardsSections";
import {Box, Grid, Typography, useTheme} from "@mui/material";
import LandingTitle from "../../components/LandingTitle/LandingTitle";
import "./styleLanding.css";

export default function LandingPage() {
  const theme = useTheme();
  return (
    <section className="split-background-colors">
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        gap={2}
        mt={16}
        mb={32}
      >
        <Grid item xs={10} sm={10} md={3} lg={2}>
          <Box>
            <LandingTitle />
            <Typography width={"100%"} variant="body2" mb={1} color={"primary"}>
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
            <Typography variant="h4" color={"primary"} mt={4}>
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
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Typography variant="h6" color={"secondary"}>
          ©
        </Typography>
        <Typography
          variant="body2"
          fontSize={"0.75rem"}
          color={"secondary"}
          paddingY={1}
        >
          2023 IM Investing / All rights reserved.
        </Typography>
      </Box>
    </section>
  );
}
