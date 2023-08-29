import {Box, Grid, Typography} from "@mui/material";

export default function CardsSections() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      padding={16}
    >
      <Grid item xs={12} sm={6} md={6}>
        <Box
          display={"flex"}
          width={"100%"}
          height={"30vh"}
          margin={2}
          sx={{
            backgroundImage: `url('../src/assets/banner.jpg')`,
            borderTopLeftRadius: 64,
          }}
        >
          <Typography></Typography>
        </Box>
        <Box
          width={"100%"}
          height={"10vh"}
          margin={2}
          sx={{
            backgroundImage: `url('../src/assets/banner.jpg')`,
            backgroundPosition: "top",
          }}
        >
          <Typography></Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Box
          width={"100%"}
          height={"20vh"}
          margin={2}
          sx={{
            backgroundImage: `url('../src/assets/banner.jpg')`,
            backgroundPosition: "top",
            borderTopRightRadius: 64,
          }}
        >
          <Typography></Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
