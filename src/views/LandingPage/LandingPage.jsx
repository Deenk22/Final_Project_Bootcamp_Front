import LandingCards from "../../components/InfoCards/LandingCards";
import CardsSections from "../../components/CardsSections/CardsSections";
import LandingTitle from "../../components/LandingTitle/LandingTitle";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import {Link} from "react-router-dom";
import {Box, Grid, Typography, useTheme} from "@mui/material";
import "./styleLanding.css";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import LogosCarrousel from "../../components/LogosCarrousel/LogosCarrousel";
import HelpIcon from "@mui/icons-material/Help";

const logosCarrousel = [
  {
    alt: "",
    src: "../src/assets/svg/icons/logo.8ba43bf4.svg",
    link: "https://www.xtb.com/es",
    id: 2,
  },
  {
    alt: "",
    src: "../src/assets/svg/icons/Logo.svg",
    link: "https://www.ibroker.es/",
    id: 3,
  },
  {
    alt: "",
    src: "../src/assets/svg/icons/urbanitae-logo-verde.svg",
    link: "https://urbanitae.com/es/",
    id: 4,
  },
];

const testimonials = [
  {
    name: "James Thompson",
    profession: "Financial Consultant",
    city: "New York City, USA",
    img: "./src/assets/user-testimonial-picture.jpg",
    id: 1,
    testimony:
      "I've worked in the financial world for years and tried many investment management apps, but this one stands out by far. The amount of detailed information it provides on each trade and strategy is amazing. The platform is highly customizable and perfectly caters to the needs of any investor, from beginners to experts. I'm highly impressed by the attention to detail and reliability of this app. It has been an invaluable tool in my daily work.",
  },
  {
    name: "Carlos Martinez",
    profession: "Entrepreneur",
    city: "Mexico City, Mexico",
    img: "./src/assets/avatarControlPanel.jpg",
    id: 2,
    testimony:
      "As a financial consultant, I'm always on the lookout for tools that can give my clients a competitive edge in the market. This investment management app has exceeded all my expectations. The data accuracy, execution speed, and variety of available tools are unmatched. My clients have experienced steady growth in their portfolios since they started using this app. I can't recommend it enough for anyone serious about their investments.",
  },
];

const howItWorks = [
  {
    icon: <LooksOneIcon color="secondary" fontSize="large" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod, in aliquid commodi numquam expedita illo voluptatum consectetur et omnis ut repellat mollitia nobis reprehenderit cumque, inventore natus officia consequuntur?",
    id: 1,
  },
  {
    icon: <LooksTwoIcon color="secondary" fontSize="large" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod, in aliquid commodi numquam expedita illo voluptatum consectetur et omnis ut repellat mollitia nobis reprehenderit cumque, inventore natus officia consequuntur?",
    id: 2,
  },
  {
    icon: <Looks3Icon color="secondary" fontSize="large" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod, in aliquid commodi numquam expedita illo voluptatum consectetur et omnis ut repellat mollitia nobis reprehenderit cumque, inventore natus officia consequuntur?",
    id: 3,
  },
];

export default function LandingPage() {
  const theme = useTheme();

  return (
    <>
      <ScrollToTop />
      <section className="split-background-colors">
        <Grid
          container
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          mt={14}
          mb={14}
        >
          <Grid item xs={10} sm={10} md={3} lg={2}>
            <Box>
              <LandingTitle />
              <Typography
                width={"100%"}
                variant="body2"
                mb={1}
                color={"primary"}
              >
                Discover the art of investment with Smart Financial Service. Our
                platform provides you with the tools and necessary information
                to make intelligent financial decisions.
              </Typography>
              <Link className="allLinks" to="/login">
                <Typography
                  component={"button"}
                  variant="body2"
                  className="to-login"
                  mt={2}
                  mb={4}
                  sx={{
                    textAlign: "center",
                    padding: 1,
                    width: "104px",
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                  }}
                  color={"secondary"}
                >
                  Get Started
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={10} sm={10} md={4} lg={4}>
            <Box
              width={"100%"}
              height={"30vh"}
              bgcolor={"primary"}
              sx={{
                backgroundImage: `url('../src/assets/buildings.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: 2,
                boxShadow: `4px 4px 8px 2px ${theme.palette.primary.main}`,
              }}
            ></Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"left"}
              mb={6}
            >
              <Typography variant="h4" color={"primary"} mt={4}>
                Invest Today
              </Typography>
              <Typography variant="body2" color={"primary"}>
                From stocks to real estate, we are here to guide you on your
                journey towards a solid and prosperous financial future. Join us
                and start investing with confidence today.
              </Typography>
              <LandingCards />
            </Box>
          </Grid>
        </Grid>
        <CardsSections />
      </section>
      <section className="dahsboard-section">
        <Box mt={12}>
          <Typography variant="h2" component={"h1"} color={"primary"}>
            <span>Digitize </span>your financial
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} lg={6}>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              border={`2px solid ${theme.palette.primary.main}`}
              paddingY={16}
              borderRadius={8}
              sx={{
                background: theme.palette.primary.main,
                backgroundImage: `url('../src/assets/svg/probando04.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                width: "100%",
              }}
            >
              <Typography
                textAlign="center"
                variant="body1"
                color={"secondary"}
              >
                Manage your Finances
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              border={`2px solid ${theme.palette.primary.main}`}
              paddingY={16}
              borderRadius={8}
              sx={{
                background: theme.palette.primary.main,
                backgroundImage: `url('../src/assets/svg/probando02.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                width: "100%",
              }}
            >
              <Typography textAlign="center" variant="body1" color="white">
                Outlines a Strategy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} mb={4}>
            <Box
              border={`2px solid ${theme.palette.primary.main}`}
              paddingY={16}
              borderRadius={8}
              sx={{
                background: theme.palette.primary.main,
                backgroundImage: `url('../src/assets/svg/probando03.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <Typography textAlign="center" variant="body1" color="white">
                Cosas que hacer
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>
      <section className="photo-how-it-works-sections">
        <Grid
          container
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          mt={16}
          paddingY={8}
        >
          <Grid item xs={10} sm={10} md={10} lg={5}>
            <img
              className="img-how-it-works"
              src="./src/assets/c02.jpg"
              width={"100%"}
              alt="Una persona gestionando y estudiando el resultado de sus inversiones"
            />
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={5}>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Typography
                textAlign={{xs: "center", md: "left"}}
                className="fx-movement"
                variant="h4"
                fontSize={{xs: "7.50rem", sm: "8rem"}}
                color={"secondary"}
                position={"relative"}
                top={92}
                mt={-12}
                zIndex={0}
                sx={{opacity: 0.1}}
              >
                How it Works
              </Typography>
              <Typography
                variant="h4"
                textAlign={{xs: "center", sm: "left"}}
                color={"secondary"}
                zIndex={1}
              >
                How does IM Investing work?
              </Typography>
              {howItWorks.map((item) => {
                const {icon, text, id} = item;
                return <HowItWorksSection key={id} icon={icon} text={text} />;
              })}
            </Box>
            <Box textAlign={{xs: "center", sm: "left"}}>
              <img
                src="./src/assets/logo-fonto-transparente.png"
                alt="Logo de IM Investing"
                width={144}
              />
            </Box>
          </Grid>
        </Grid>
      </section>
      <section className="testimonials-section">
        <Box paddingX={4} className="text-testimonial-animation">
          <Typography
            variant="h3"
            textAlign={"center"}
            mt={8}
            color={"primary"}
          >
            More than 10,000
            <strong> investors</strong> reflect their confidence in our platform
          </Typography>
          <Typography variant="h3" textAlign={"center"} color={"primary"}>
            Join <strong> IM Investing</strong> and organise your{" "}
            <strong>investments</strong>
          </Typography>
          <Box textAlign={"center"} mt={2} mb={8}>
            <Link to={"/login"}>
              <Typography
                component={"button"}
                variant="body2"
                className="to-login"
                sx={{
                  textAlign: "center",
                  padding: 1,
                  width: "104px",
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                }}
                color={"secondary"}
              >
                Join Us
              </Typography>
            </Link>
          </Box>
        </Box>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-evenly"}
          spacing={4}
        >
          {testimonials.map((user) => {
            const {id, ...props} = user;
            return (
              <Grid item key={id} xs={10} sm={10} md={10} lg={4} xl={5}>
                <Testimonials props={props} />
              </Grid>
            );
          })}
        </Grid>
      </section>
      <section className="logos-carrousel">
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
          paddingY={8}
        >
          <Box>
            <Typography variant="h4" color={"secondary"}>
              Investing in the best platforms
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <HelpIcon color="secondary" />
              <Typography variant="body2" color={"secondary"}>
                Click on the logos to visit their website.
              </Typography>
            </Box>
          </Box>
          {logosCarrousel.map((img) => {
            const {alt, src, link} = img;
            return (
              <Grid key={img.id} item xs={10} sm={1}>
                <LogosCarrousel alt={alt} src={src} link={link} />
              </Grid>
            );
          })}
        </Grid>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <Typography variant="h6" color={"secondary"}>
            ©
          </Typography>
          <Typography
            variant="body2"
            fontSize={"0.75rem"}
            color={"secondary"}
            paddingY={1}
          >
            2023 IM Investing / All rights reserved.
          </Typography>
        </Box>
      </section>
    </>
  );
}
