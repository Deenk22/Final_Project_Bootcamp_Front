import {Box, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import "./styleLandingCards.css";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.6)",
  lightPink: "rgba(255, 99, 132, 0.6)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
  skyBlueOpacity: "rgba(208, 228, 233, 0.5)",
};

// Estas Cards hacen un efecto de transición justo al final de la landingPage
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
    <section className="bg-color">
      <Box className="hidden">
        <Box
          className="logos query"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          paddingY={4}
        >
          <Box className="logo hidden">
            <img
              src="./src/assets/svg/icons/Logo.svg"
              width={"108px"}
              alt="Logo01"
            />
          </Box>
          <Box className="logo hidden">
            <img
              src="./src/assets/svg/icons/inbestMe_logo-black.svg"
              width={"108px"}
              alt="Logo02"
            />
          </Box>
          <Box className="logo hidden">
            <img
              src="./src/assets/svg/icons/logo.8ba43bf4.svg"
              width={"88px"}
              alt="Logo03"
            />
          </Box>
          <Box className="logo hidden">
            <img
              src="./src/assets/svg/icons/urbanitae-logo-verde.svg"
              width={"108px"}
              alt="Logo04"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}
