import {colorPalettes} from "../../const/colorPalettes";
import {Box, Grid, Typography} from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

// Pasar cantidades de la base de datos, reales.
// Iconos representativos y en sintonía con la información.
// Redactar texto relacionado e informativo con algunos ${}.
// Un Grid que solo envuelva otro Grid... creo que no tiene mucho sentido.

const smallCard = [
  {
    icon: <TimelineIcon fontSize="large" />,
    title: "Profits",
    title2: "+1652€",
  },
  // {
  //   icon: <DataUsageIcon fontSize="large" />,
  //   title: "02",
  //   title2: "-316€",
  // },
  // {
  //   icon: <AssessmentIcon fontSize="large" />,
  //   title: "03",
  //   title2: "3056€",
  // },
  {
    icon: <LeaderboardIcon fontSize="large" />,
    title: "Losses",
    title2: "- 305 €",
  },
];

export default function BarChartCards() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="left"
      alignItems="center"
      mt={2}
      gap={2}
    >
      {smallCard.map((card) => {
        return (
          <Grid key={card.title} item>
            <Box
              width={"200px"}
              height={"130px"}
              borderRadius={4}
              bgcolor={colorPalettes.blue}
              sx={{
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0px 16px 0px -8px " + colorPalettes.tealBlue,
                  borderTopLeftRadius: 32,
                },
              }}
            ></Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
