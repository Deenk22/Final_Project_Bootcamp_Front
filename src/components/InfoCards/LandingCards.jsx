import {colorPalettes} from "../../const/colorPalettes";
import {Box, Grid, Typography} from "@mui/material";
import AddchartIcon from "@mui/icons-material/Addchart";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

// Pasar cantidades de la base de datos, reales.
// Iconos representativos y en sintonía con la información.
// Redactar texto relacionado e informativo con algunos ${}.
// Un Grid que solo envuelva otro Grid... creo que no tiene mucho sentido.

const smallCard = [
  {
    icon: <AddchartIcon fontSize="medium" />,
    title: "Add custom graphics",
    title2: "+1652€",
  },
  {
    icon: <QueryStatsIcon fontSize="medium" />,
    title: "Customized data analysis",
    title2: "-316€",
  },
  {
    icon: <TrendingUpIcon fontSize="medium" />,
    title: "Achieve your ambitious goals",
    title2: "3056€",
  },
  {
    icon: <AssuredWorkloadIcon fontSize="medium" />,
    title: "Financial well-being assured",
    title2: "11390€",
  },
];

export default function LandingCards() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={3}
      gap={2}
    >
      {smallCard.map((card) => {
        return (
          <Grid
            key={card.title}
            item
            justifyContent="center"
            textAlign={"center"}
            m={1}
          >
            <Box
              width={"120px"}
              height={"130px"}
              borderRadius={4}
              bgcolor={colorPalettes.blue}
              sx={{
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0px 16px 0px -8px " + colorPalettes.tealBlue,
                  // borderTopLeftRadius: 32,
                  // borderBottomRightRadius: 32,
                },
              }}
            >
              <Box
                position={"relative"}
                top={-16}
                left={64}
                width={"64px"}
                bgcolor={colorPalettes.tealBlue}
                color={colorPalettes.skyBlue}
                padding={1}
                borderRadius={4}
              >
                {card.icon}
              </Box>
              <Box color={colorPalettes.skyBlue} padding={1}>
                <Typography variant="body2" fontSize={"0.85rem"}>
                  {card.title}
                </Typography>
                {/* <Typography variant="h5">{card.title2}</Typography> */}
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
