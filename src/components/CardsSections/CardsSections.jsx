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
    <>
      <section>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems={"center"}
          mt={12}
          mb={16}
        >
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              className="animation-cards-left"
              width={400}
              height={400}
              bgcolor={chartColorsPalette.blue}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              zIndex={1}
              sx={{
                borderTopLeftRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopRightRadius: 64,
              }}
            >
              <Box
                width={350}
                height={250}
                position={"relative"}
                right={120}
                bgcolor={chartColorsPalette.skyBlue}
                border={"2px solid " + chartColorsPalette.tealBlue}
                zIndex={1}
                sx={{
                  background: `url('./src/assets/buildings.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderTopLeftRadius: 64,
                  borderBottomLeftRadius: 64,
                  borderTopRightRadius: 64,
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={3} position={"relative"}>
            <Box width={"100%"} mt={4}>
              <Typography
                component={"h1"}
                variant="h3"
                color={chartColorsPalette.tealBlue}
                fontFamily={"Bebas Neue"}
                textAlign={"left"}
                mb={1}
              >
                Investment Management Solution
              </Typography>
              <Typography
                variant="body1"
                color={chartColorsPalette.blue}
                textAlign={"left"}
              >
                Investment Management Solution is a comprehensive tool designed
                to streamline and optimize investment and portfolio management.
                This powerful solution empowers investors and financial
                professionals to track, analyze, and make informed decisions
                about their financial assets.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>
      {/* // Segunda Section */}
      <section>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems={"center"}
          mb={16}
        >
          <Grid item xs={10} sm={10} md={10} lg={3}>
            <Box width={"100%"}>
              <Typography
                component={"h1"}
                variant="h3"
                color={chartColorsPalette.tealBlue}
                fontFamily={"Bebas Neue"}
                textAlign={"left"}
                mb={1}
              >
                Harness the Power of Data
              </Typography>
              <Typography
                variant="body1"
                color={chartColorsPalette.blue}
                textAlign={"left"}
              >
                Our application provides you with an incredible dashboard and
                intuitive graphs that give you a comprehensive overview of your
                financial landscape. With real-time data at your fingertips, you
                can identify trends, spot opportunities, and anticipate
                challenges before they arise.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={4}
          >
            <Box
              className="animation-cards-right"
              width={400}
              height={400}
              bgcolor={chartColorsPalette.blue}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              zIndex={1}
              sx={{
                borderTopRightRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 64,
              }}
            >
              <Box
                width={350}
                height={250}
                position={"relative"}
                left={120}
                bgcolor={chartColorsPalette.skyBlue}
                border={"2px solid " + chartColorsPalette.tealBlue}
                zIndex={1}
                sx={{
                  background: `url('./src/assets/buildings.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderTopLeftRadius: 64,
                  borderBottomRightRadius: 64,
                  borderTopRightRadius: 64,
                }}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
