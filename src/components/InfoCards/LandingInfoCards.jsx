import {Box, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import "./styleLandingCards.css";

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
      <Typography mt={4} mb={4} variant="h6">
        It´s Really Good
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
          <img src="./src/assets/controlPanel.png" width={"100px"} alt="" />
        </Box>
        <Box className="logo hidden">
          <img src="./src/assets/settings.png" width={"100px"} alt="" />
        </Box>
        <Box className="logo hidden">
          <img src="./src/assets/controlPanel.png" width={"100px"} alt="" />
        </Box>
        <Box className="logo hidden">
          <img src="./src/assets/settings.png" width={"100px"} alt="" />
        </Box>
      </Box>
    </section>
  );
}
