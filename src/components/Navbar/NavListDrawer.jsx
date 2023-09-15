import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const colorPalettes = {
  blue: "#162938",
  green: "#49726B",
  skyBlue: "#D0E4E9",
  tealBlue: "#367588",
  yellow: "#eab308",
  indigo: "#6366f1",
};

export default function NavListDrawer({navLinks, NavLink, setOpen, logout}) {
  return (
    <Box sx={{width: 250, height: "100vh"}} bgcolor={colorPalettes.skyBlue}>
      <nav>
        <List sx={{color: colorPalettes.blue}}>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                {/* ListIcon Aqui */}
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItemButton onClick={() => logout()}>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </List>
      </nav>
    </Box>
  );
}
