import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

export default function NavListDrawer({navLinks, NavLink, setOpen}) {
  return (
    <Box sx={{width: 250}}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                {/* llamar al icono aqui  */}
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
