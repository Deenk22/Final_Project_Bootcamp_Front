import {Link} from "react-router-dom";
import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";
// import FitbitIcon from "@mui/icons-material/Fitbit";
import "./styleLanding.css";
import GraphicIcons from "../../components/common/GraphicIcons/GraphicIcons";

export default function LandingPage() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent={"space-evenly"}
        alignItems={"center"}
        className="landing"
      >
        <Grid item xs={10} sm={10} md={6}>
          <Box
            position={"relative"}
            top={"23vh"}
            ml={1}
            mr={1}
            padding={4}
            border={"2px solid" + colorPalettes.blue}
            sx={{
              borderTopRightRadius: 32,
              borderBottomLeftRadius: 32,
              boxShadow: "0px 4px 2px 0px" + colorPalettes.blue,
              backgroundColor: colorPalettes.skyBlue,
            }}
          >
            <Typography
              component={"h1"}
              variant="h2"
              color={colorPalettes.blue}
              overflow={"hidden"}
            >
              Smart Financial Service
            </Typography>
            <Typography variant="h5" color={colorPalettes.blue}>
              Financial Well-Being
            </Typography>
            <Typography variant="body2" color={colorPalettes.blue}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              reiciendis voluptate temporibus obcaecati maxime sed, qui
              distinctio adipisci, cumque repudiandae doloribus voluptatibus,
              optio dolore. Tempore vel eius officia quo sunt.
            </Typography>
            <Link className="allLinks" to="/login">
              <Typography
                component={"button"}
                variant="body2"
                className="to-login"
                mt={2}
                sx={{
                  textAlign: "center",
                  padding: 1,
                  width: "96px",
                  border: "2px solid " + colorPalettes.blue,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                }}
                color={colorPalettes.skyBlue}
              >
                Get Started
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={10} md={4} mt={2}>
          <Box position={"relative"} top={"22vh"} ml={2} mr={2} padding={2}>
            <Box display={"flex"} justifyContent={"center"} mb={2}></Box>
            <GraphicIcons />
            <Typography
              variant="h4"
              textAlign={"center"}
              color={colorPalettes.tealBlue}
              borderRight={"2px solid" + colorPalettes.tealBlue}
              borderLeft={"2px solid" + colorPalettes.tealBlue}
              mt={2}
              mb={2}
            >
              Makes Your Financial Goals Real
            </Typography>
            <Typography
              variant="body2"
              color={colorPalettes.blue}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              odit ipsum minus esse reiciendis natus, sunt dolor ducimus totam
              voluptates. Tenetur impedit quod autem ullam enim, veritatis ea
              nisi labore!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <Box position={"relative"} top={"27vh"}>
            <FitbitIcon fontSize="large" />
          </Box>
        </Grid>
        <Grid item>
          <Box position={"relative"} top={"28vh"}>
            <Typography
              variant="h2"
              component={"h1"}
              textAlign={"center"}
              mt={2}
              padding={4}
              border={"2px solid" + colorPalettes.skyBlue}
              color={colorPalettes.blue}
            >
              Smart Financial Service
            </Typography>
            <Typography variant="body2" textAlign={"center"} mt={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              dolor nisi et
            </Typography>
            <Typography
              variant="h5"
              textAlign={"center"}
              color={colorPalettes.blue}
              mt={2}
            >
              Financial Well-Being
            </Typography>
            <Box textAlign={"center"}>
              <Link className="allLinks" to="/login">
                <Typography
                  component={"button"}
                  variant="body2"
                  className="to-login"
                  mt={2}
                  sx={{
                    padding: 1,
                    width: "96px",
                    border: "2px solid " + colorPalettes.blue,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                  }}
                  color={colorPalettes.skyBlue}
                >
                  Get Started
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid> */}
    </>
  );
}
