import {Box, List, ListItem, ListItemButton, Typography} from "@mui/material";
import ControlPanel from "../ControlPanel/ControlPanel";
import {useState} from "react";

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

export default function NavListDrawer({NavLink, setOpen, logout}) {
  const drawerLinks = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Manage Operations",
      path: "/addoperation",
    },
    {
      title: "Manage Stocks",
      path: "/addstock",
    },
    {
      title: "Manage Strategies",
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
        <ControlPanel setOpen={setOpen} />
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
