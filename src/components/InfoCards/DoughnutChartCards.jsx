import {colorPalettes} from "../../const/colorPalettes";
import {Box, Grid, Typography} from "@mui/material";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import TimelineIcon from "@mui/icons-material/Timeline";
import AssessmentIcon from "@mui/icons-material/Assessment";
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
  {
    icon: <DataUsageIcon fontSize="large" />,
    title: "Losses",
    title2: "-316€",
  },
  {
    icon: <AssessmentIcon fontSize="large" />,
    title: "investment",
    title2: "3056€",
  },
  {
    icon: <LeaderboardIcon fontSize="large" />,
    title: "Prospects",
    title2: "11390€",
  },
];

export default function DoughnutChartCards() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={4}
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
                  borderTopLeftRadius: 32,
                },
              }}
            >
              <Box padding={1} color={colorPalettes.skyBlue}>
                {card.icon}
                <Typography variant="body1">{card.title}</Typography>
                <Typography variant="body2" mt={1}>
                  {card.title2}
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
