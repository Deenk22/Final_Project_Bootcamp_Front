import {useState} from "react";
import {NavLink} from "react-router-dom";
import NavListDrawer from "./NavListDrawer";
import {useUserLoginContext} from "../../context/UserLoginContext";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

const navLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "",
  },
  {
    title: "Stock",
    path: "/stocks",
    icon: "icon",
  },
  {
    title: "Strategies",
    path: "/strategies",
    icon: "icon",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "icon",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "icon",
  },
];

// Intentar activar y desactivar el panel lateral (Navbar) para hacer que solo este activo cuando el viewport cumpla con las medidas.

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {logout} = useUserLoginContext();

  return (
    <>
      <AppBar
        sx={{background: "transparent", boxShadow: "none"}}
        position="static"
      >
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            // sx={{display: {xs: "flex", sm: "none"}}}
          >
            <MenuIcon sx={{color: colorPalettes.blue}} />
          </IconButton>
          {/* <Box
            color={colorPalettes.blue}
            sx={{flexGrow: 1}}
            display={"flex"}
            gap={1}
          >
            <BubbleChartIcon />
          </Box>
          <Box
            mr={1.5}
            sx={{
              display: {xs: "none", sm: "flex"},
              gap: 2,
            }}
          >
            {navLinks.map((item) => (
              <Typography
                variant="body2"
                key={item.title}
                component={NavLink}
                to={item.path}
                color={colorPalettes.blue}
                sx={{textDecoration: "none"}}
              >
                {item.title}
              </Typography>
            ))}
          </Box> */}
          <Typography
            variant="body2"
            component={NavLink}
            padding={1}
            color={colorPalettes.blue}
            sx={{
              textDecoration: "none",
              display: {xs: "none", sm: "flex"},
              transition: "0.2s",
              "&:hover": {
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                color: colorPalettes.skyBlue,
                bgcolor: colorPalettes.blue,
              },
            }}
            onClick={() => logout()}
          >
            Logout
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        // sx={{display: {xs: "flex", sm: "none"}}}
      >
        <NavListDrawer
          navLinks={navLinks}
          NavLink={NavLink}
          setOpen={setOpen}
          logout={logout}
        />
      </Drawer>
    </>
  );
}
