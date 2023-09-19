import {Box, Grid, Typography} from "@mui/material";
import {useInView} from "react-intersection-observer";
import "./styleCardSection.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SavingsIcon from "@mui/icons-material/Savings";

// Arreglar o utilizar ternaria para realizar el cambio correctamente.

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

export default function CardsSections() {
  const {ref: myRef, inView: textVisible} = useInView({
    rootMargin: "8px",
    threshold: 0,
    triggerOnce: true,
  });
  const {ref: boxRef, inView: boxIsVisible} = useInView({
    rootMargin: "8px",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems={"center"}
      mt={14}
      mb={8}
    >
      <Grid item xs={10} sm={10} md={5}>
        <div ref={boxRef}>
          <div className={`${boxIsVisible ? "box" : ""}`}>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              gap={1}
              mb={4}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"600px"}
                height={"150px"}
                border={"2px solid " + chartColorsPalette.tealBlue}
                sx={{borderTopLeftRadius: 32, borderBottomRightRadius: 32}}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mb={1}
                  color={chartColorsPalette.tealBlue}
                >
                  <MonetizationOnIcon />
                  <Typography variant="body1">Profits</Typography>
                </Box>
                <Typography variant="h3" color={chartColorsPalette.tealBlue}>
                  + 9520$
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                width={"600px"}
                height={"150px"}
                borderRadius={4}
                gap={2}
                bgcolor={chartColorsPalette.blue}
              >
                <Typography
                  width={100}
                  ml={4}
                  variant="body2"
                  color={chartColorsPalette.skyBlue}
                  border={2}
                  padding={2}
                  borderRadius={2}
                >
                  Manage my Investment
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={0.5}
                  color={chartColorsPalette.skyBlue}
                >
                  <Typography
                    variant="body1"
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <PostAddIcon fontSize="large" />
                    Modifies Operations
                  </Typography>
                  <Typography
                    variant="body1"
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <SavingsIcon fontSize="large" />
                    Choose Strategy
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          height={"10vh"}
          boxShadow={"8px 8px 16px 4px rgba(22, 41, 56, 0.2)"}
          sx={{
            backgroundImage: `url('../src/assets/bannerOptimized.jpg')`,
            backgroundPosition: "top",
            borderRadius: 2,
          }}
        ></Box>
      </Grid>
      <Grid item xs={10} sm={10} md={3}>
        <div ref={myRef}>
          <div className={`${textVisible ? "text" : ""}`}>
            <Box width={"100%"} height={"20vh"} mt={4}>
              <Typography
                component={"h1"}
                variant="h3"
                color={chartColorsPalette.tealBlue}
                fontFamily={"Bebas Neue"}
              >
                Investment Management Solution
              </Typography>
              <Typography variant="body1" color={chartColorsPalette.blue}>
                Investment Management Solution is a comprehensive tool designed
                to streamline and optimize investment and portfolio management.
                This powerful solution empowers investors and financial
                professionals to track, analyze, and make informed decisions
                about their financial assets.
              </Typography>
            </Box>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
