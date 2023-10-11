import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import {Box, Typography} from "@mui/material";
import {useUserLoginContext} from "../../context/UserLoginContext";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

export default function ControlPanel({setOpen}) {
  const {user} = useUserLoginContext();
  return (
    <>
      <ArrowLeftIcon
        onClick={() => setOpen(false)}
        fontSize="large"
        sx={{
          position: "relative",
          left: 260,
          top: 8,
          color: chartColorsPalette.skyBlue,
          transition: "0.4s",
          transform: "rotate(180deg)",
          "&:hover": {
            transform: "rotate(0deg)",
            color: chartColorsPalette.skyBlue,
          },
        }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          bgcolor={chartColorsPalette.tealBlue2}
          width={120}
          height={120}
          borderRadius={4}
          border={"1px solid rgba(208, 228, 233)"}
          boxShadow={"0px 0px 16px 4px rgba(208, 228, 233, 0.4)"}
          mt={4}
          sx={{
            backgroundImage: `url('../src/assets/avatarControlPanel.jpg')`,
            backgroundSize: "cover",
          }}
        ></Box>
        <Typography
          mt={2}
          mb={4}
          variant="h6"
          color={chartColorsPalette.skyBlue}
        >
          {user.name}
        </Typography>
        {/* <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"left"}
          mt={2}
          padding={2}
          gap={1}
        ></Box> */}
      </Box>
    </>
  );
}
