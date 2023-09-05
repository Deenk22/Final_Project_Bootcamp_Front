import {colorPalettes} from "../../const/colorPalettes";
import {Box, Grid, Typography} from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
// import LeaderboardIcon from "@mui/icons-material/Leaderboard";

// Pasar cantidades de la base de datos, reales.
// Iconos representativos y en sintonía con la información.
// Redactar texto relacionado e informativo con algunos ${}.
// Un Grid que solo envuelva otro Grid... creo que no tiene mucho sentido.

// const smallCard = [
//   {
//     icon: <TimelineIcon fontSize="large" />,
//     title: "Profits",
//     title2: "+ 1652 €",
//   },
//   // {
//   //   icon: <DataUsageIcon fontSize="large" />,
//   //   title: "Losses",
//   //   title2: "-316€",
//   // },
//   // {
//   //   icon: <AssessmentIcon fontSize="large" />,
//   //   title: "investment",
//   //   title2: "3056€",
//   // },
//   {
//     icon: <LeaderboardIcon fontSize="large" />,
//     title: "Losses",
//     title2: "- 305 €",
//   },
// ];

export default function DoughnutChartCards({}) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="left"
      alignItems="center"
      mt={2}
      gap={2}
    >
      {/* {dataDemo?.map((card) => {
        return (
          <Grid
            key={card.title}
            item
            justifyContent="center"
            textAlign={"center"}
          >
            <Box
              width={"190px"}
              height={"130px"}
              borderRadius={4}
              bgcolor={colorPalettes.blue}
              sx={{
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0px 16px 4px -8px " + colorPalettes.tealBlue,
                },
              }}
            >
              <Typography>{}</Typography>
            </Box>
          </Grid>
        );
      })} */}
      <Grid item>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          width={"190px"}
          height={"130px"}
          borderRadius={4}
          bgcolor={colorPalettes.skyBlue}
          mt={2}
          sx={{
            transition: "0.2s",
            "&:hover": {
              boxShadow: "0px 16px 4px -8px " + colorPalettes.tealBlue,
            },
          }}
        >
          <Box
            border={"2px solid" + colorPalettes.tealBlue}
            position={"relative"}
            top={-35}
            left={80}
            padding={1}
            borderRadius={8}
          >
            <TimelineIcon fontSize="large" />
          </Box>
          <Typography variant="body2">Beneficios</Typography>
          <Typography variant="h5">+36090</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
