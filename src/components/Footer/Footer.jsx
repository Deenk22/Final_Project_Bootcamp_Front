import {Box, Grid, Typography} from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function Footer() {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-evenly"}
      sx={{
        bgcolor: colorPalettes.blue,
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Box padding={8}>
          <Typography
            variant="h5"
            display={"flex"}
            alignItems={"center"}
            gap={1}
            mb={2}
            color={colorPalettes.skyBlue}
          >
            <BubbleChartIcon />
            IM Investing
          </Typography>
          <Typography color={colorPalettes.skyBlue} variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            consequuntur, error veniam illo ab quisquam, dolores alias
            dignissimos recusandae molestiae vel rerum. Voluptates facere
            doloremque provident maxime velit ipsam cumque!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box padding={8}>
          <Typography mb={2} variant="h5" color={colorPalettes.skyBlue}>
            Footer Info
          </Typography>
          <Typography color={colorPalettes.skyBlue} variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            consequuntur, error veniam illo ab quisquam, dolores alias
            dignissimos recusandae molestiae vel rerum. Voluptates facere
            doloremque provident maxime velit ipsam cumque!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
