import {Box, List, ListItem, ListItemButton, Typography} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import {useUserLoginContext} from "../../context/UserLoginContext";
// import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";

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

export default function NavListDrawer({navLinks, NavLink, setOpen, logout}) {
  const drawerLinks = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    // {
    //   title: "Strategies",
    //   path: "/strategies",
    // },
    {
      title: "Add Operation",
      path: "/addoperation",
    },
    {
      title: "Add Stock",
      path: "/addstock",
    },
    {
      title: "Add Strategy",
      path: "/addstrategy",
    },
    {
      title: "My Account",
      path: "/account",
    },
  ];

  return (
    <Box
      sx={{
        width: 300,
        height: "100%",
      }}
      bgcolor={chartColorsPalette.blue}
    >
      <nav>
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
            boxShadow={"0px 0px 32px rgba(75, 192, 192, 0.4)"}
            mt={4}
            sx={{
              backgroundImage: `url('../src/assets/landingVector.png')`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Typography mt={2} variant="h6" color={chartColorsPalette.skyBlue}>
            Control Panel
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            mt={2}
            padding={2}
            gap={1}
          ></Box>
        </Box>
        <List sx={{color: chartColorsPalette.skyBlue, marginTop: 4}}>
          {drawerLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <Typography variant="body2" color={chartColorsPalette.skyBlue}>
                  {item.title}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItemButton onClick={() => logout()}>
            <Typography variant="body2" color={chartColorsPalette.skyBlue}>
              Logout
            </Typography>
          </ListItemButton>
        </List>
      </nav>
    </Box>
  );
}
