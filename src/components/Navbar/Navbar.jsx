import {useState} from "react";
import {NavLink} from "react-router-dom";
import NavListDrawer from "./NavListDrawer";
import {navLinks} from "../../const/navLinks";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{display: {xs: "flex", sm: "none"}}}
          >
            <MenuIcon sx={{flexGrow: 1}} />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            IM Investing
          </Typography>
          <Box sx={{display: {xs: "none", sm: "flex"}}}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{display: {xs: "flex", sm: "none"}}}
      >
        <NavListDrawer
          navLinks={navLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}
