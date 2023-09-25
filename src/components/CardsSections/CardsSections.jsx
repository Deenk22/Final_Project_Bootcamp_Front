import {Box, Grid, Typography} from "@mui/material";
import "./styleCardSection.css";

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
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems={"center"}
      mt={12}
      mb={16}
    >
      <Grid item xs={10} sm={10} md={10} lg={5}>
        <Box className="animation-cards" display={"flex"} gap={1} mb={4}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"400px"}
            height={"150px"}
            padding={1}
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
              <Typography variant="body1">Profits</Typography>
            </Box>
            <Typography variant="h3" color={chartColorsPalette.tealBlue}>
              9520$
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            width={"400px"}
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
          </Box>
        </Box>
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
      <Grid item xs={10} sm={10} md={10} lg={3}>
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
            Investment Management Solution is a comprehensive tool designed to
            streamline and optimize investment and portfolio management. This
            powerful solution empowers investors and financial professionals to
            track, analyze, and make informed decisions about their financial
            assets.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
