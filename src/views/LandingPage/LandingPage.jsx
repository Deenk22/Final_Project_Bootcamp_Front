import {Link} from "react-router-dom";
import GraphicIcons from "../../components/common/GraphicIcons/GraphicIcons";
import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";
// import HandshakeIcon from "@mui/icons-material/Handshake";
import "./styleLanding.css";

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
        <Grid item xs={12} md={5}>
          <Box
            className="blur-effect "
            position={"relative"}
            top={"23vh"}
            ml={1}
            mr={1}
            padding={4}
            border={"2px solid" + colorPalettes.blue}
            sx={{
              borderTopRightRadius: 32,
              borderBottomLeftRadius: 32,
              boxShadow: "0px 4px 2px 0px #162938",
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
        <Grid item md={4} mt={2}>
          <Box position={"relative"} top={"22vh"} ml={2} mr={2}>
            <Box display={"flex"} justifyContent={"center"} mb={2}>
              <img
                src="../src/assets/landingVector.png"
                alt="data-photo"
                width={165}
              />
            </Box>
            <GraphicIcons />
            <Typography
              variant="h4"
              textAlign={"center"}
              color={colorPalettes.green}
              borderRight={"2px solid" + colorPalettes.green}
              borderLeft={"2px solid" + colorPalettes.green}
              mb={2}
            >
              Makes Your Financial Goals Real
            </Typography>
            <Typography
              variant="body2"
              color={colorPalettes.green}
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
    </>
  );
}
