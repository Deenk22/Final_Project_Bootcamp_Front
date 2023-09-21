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

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {logout} = useUserLoginContext();

  const navLinks = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    // {
    //   title: "Strategies",
    //   path: "/strategies",
    // },
    {
      title: "My Account",
      path: "/account",
    },
  ];

  return (
    <>
      <AppBar
        sx={{background: "transparent", boxShadow: "none"}}
        position="static"
      >
        <Toolbar>
          <IconButton
            onMouseEnter={() => setOpen(true)}
            onClick={() => setOpen(true)}
            // sx={{display: {xs: "flex", sm: "none"}}}
          >
            <MenuIcon sx={{color: colorPalettes.blue}} />
          </IconButton>
          <Box
            color={colorPalettes.blue}
            sx={{flexGrow: 1}}
            display={"flex"}
            gap={1}
          >
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
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
