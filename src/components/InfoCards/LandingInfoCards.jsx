import {Box, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import "./styleLandingCards.css";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function LandingInfoCards() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [location]);

  return (
    <section className="hidden">
      <Typography mt={8} mb={4} variant="h4" color={colorPalettes.tealBlue}>
        Companies
      </Typography>
      <Box
        className="logos query"
        display={"flex"}
        justifyContent={"center"}
        gap={16}
        mb={16}
        mt={2}
      >
        <Box className="logo hidden">
          <img src="./src/assets/svg/api.svg" width={"100px"} alt="" />
        </Box>
        <Box className="logo hidden">
          <img src="./src/assets/svg/elliott.svg" width={"100px"} alt="" />
        </Box>
        <Box className="logo hidden">
          <img src="./src/assets/svg/enron.svg" width={"100px"} alt="" />
        </Box>
        <Box className="logo hidden">
          <img src="./src/assets/svg/fnaim.svg" width={"100px"} alt="" />
        </Box>
      </Box>
    </section>
  );
}
