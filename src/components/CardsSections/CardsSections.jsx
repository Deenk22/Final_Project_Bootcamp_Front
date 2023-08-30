import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";

export default function CardsSections() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      padding={12}
      mt={16}
      mb={16}
    >
      <Grid item xs={12} sm={6} md={6}>
        <Box
          width={"100%"}
          height={"30vh"}
          mb={2}
          sx={{
            backgroundImage: `url('../src/assets/buildings.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: 64,
          }}
        ></Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          height={"10vh"}
          sx={{
            backgroundImage: `url('../src/assets/bannerOptimized.jpg')`,
            backgroundPosition: "top",
            borderRadius: 2,
          }}
        ></Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Box width={"100%"} height={"20vh"}>
          <Typography
            component={"h1"}
            variant="h2"
            color={colorPalettes.tealBlue}
          >
            Investing
          </Typography>
          <Typography variant="body1" color={colorPalettes.blue}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            debitis excepturi quaerat fugit blanditiis iusto quisquam impedit
            reprehenderit temporibus quo facilis incidunt, totam accusantium
            culpa cupiditate deleniti saepe voluptatibus corporis!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
