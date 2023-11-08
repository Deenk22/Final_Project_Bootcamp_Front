import {Box, Grid, Typography, useTheme} from "@mui/material";
import "./styleCardSection.css";

export default function CardsSections() {
  const theme = useTheme();
  return (
    <div className="bg-section-card">
      <section>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems={"center"}
          mt={8}
          mb={8}
        >
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            xs={10}
            sm={10}
            md={10}
            lg={4}
          >
            <Box
              width={384}
              height={384}
              bgcolor={"secondary.main"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              zIndex={1}
              sx={{
                borderBottomLeftRadius: 32,
              }}
            >
              <Box
                width={352}
                height={256}
                position={"relative"}
                right={{xs: 0, sm: 96}}
                border={`2px solid ${theme.palette.primary.main}`}
                zIndex={1}
                sx={{
                  background: `url('./src/assets/photo01C.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderTopLeftRadius: 64,
                  borderBottomLeftRadius: 64,
                  borderTopRightRadius: 64,
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={5}>
            <Box
              width={"100%"}
              mt={4}
              className="animation-cards-right"
              border={"2px solid rgba(22, 41, 56, 0.1)"}
              padding={4}
            >
              <Typography
                component={"h1"}
                variant="h3"
                color={"secondary"}
                fontFamily={"Bebas Neue"}
                textAlign={"left"}
                mb={1}
              >
                Investment Management Solution
              </Typography>
              <Typography
                variant="body1"
                color={"secondary"}
                textAlign={"left"}
                className="strong-label"
              >
                <strong>Investment Management Solution </strong>
                is a comprehensive tool designed to streamline and optimize
                investment and <strong>portfolio management</strong>. This
                <strong> powerful solution</strong> empowers investors and
                financial professionals to track, analyze, and make informed
                decisions about their financial assets.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems={"center"}
          mb={8}
        >
          <Grid item xs={10} sm={10} md={10} lg={5}>
            <Box
              width={"100%"}
              mt={4}
              className="animation-cards-left"
              border={"2px solid rgba(22, 41, 56, 0.1)"}
              padding={4}
            >
              <Typography
                component={"h1"}
                variant="h3"
                color={"secondary"}
                fontFamily={"Bebas Neue"}
                textAlign={"left"}
                mb={1}
              >
                Harness the Power of Data
              </Typography>
              <Typography
                variant="body1"
                color={"secondary"}
                textAlign={"left"}
                className="strong-label"
              >
                Our application provides you with an
                <strong> incredible dashboard</strong> and intuitive graphs that
                give you a comprehensive overview of your financial landscape.
                With <strong>real-time</strong> data at your fingertips, you can
                <strong> identify trends, spot opportunities,</strong> and
                <strong> anticipate challenges</strong> before they arise.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={4}
            xs={10}
            sm={10}
            md={10}
            lg={4}
          >
            <Box
              width={384}
              height={384}
              bgcolor={"secondary.main"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              zIndex={1}
              sx={{
                borderTopRightRadius: 32,

                borderTopLeftRadius: 64,
              }}
            >
              <Box
                width={352}
                height={256}
                position={"relative"}
                left={{xs: 0, sm: 96}}
                border={`2px solid ${theme.palette.primary.main}`}
                zIndex={1}
                sx={{
                  background: `url('./src/assets/photo02C.jpg')`,
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
    </div>
  );
}
