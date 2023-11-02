import {Box} from "@mui/material";
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
