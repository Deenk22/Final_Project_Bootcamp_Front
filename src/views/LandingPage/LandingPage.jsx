import {Link} from "react-router-dom";
import LandingCards from "../../components/InfoCards/LandingCards";
import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";
import "./styleLanding.css";

export default function LandingPage() {
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        gap={4}
        mt={16}
      >
        <Grid item xs={10} sm={10} md={4} lg={2}>
          <Box>
            <Typography
              component={"h1"}
              variant="h1"
              fontSize={"5.50rem"}
              color={colorPalettes.blue}
            >
              Smart Financial Service
            </Typography>
            <Typography
              width={"95%"}
              variant="body2"
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
                  width: "96px",
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
              rotate: "1.5deg",
              boxShadow: "4px 4px 8px 0px " + colorPalettes.blue,
              border: "1px solid" + colorPalettes.tealBlue,
              // borderTopRightRadius: 64,
            }}
          ></Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"left"}>
            <Typography
              variant="body1"
              fontSize={"1.70rem"}
              color={colorPalettes.blue}
              mt={4}
              // sx={{
              //   bgcolor: colorPalettes.blue,
              //   padding: 1,
              //   width: "180px",
              //   rotate: "-1.5deg",
              //   borderRadius: 2,
              // }}
            >
              Invest Today
            </Typography>
            <Typography
              variant="body2"
              color={colorPalettes.tealBlue}
              mt={-0.5}
            >
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
          mt={10}
          mb={4}
          bgcolor={colorPalettes.tealBlue}
        ></Box>
      </Grid>
    </>
  );
}
