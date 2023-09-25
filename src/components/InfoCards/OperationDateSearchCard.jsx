import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import TaskIcon from "@mui/icons-material/Task";

// const chartColorsPalette = {
//   tealBlue2: "rgba(75, 192, 192, 0.6)",
//   lightPink: "rgba(255, 99, 132, 0.6)",
//   lightYellow: "rgba(255, 205, 86, 0.6)",
//   tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
//   lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
//   lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
//   orange: "rgba(255, 159, 64, 0.7)",
//   shadowYellow: "rgba(255, 205, 86, 0.4)",
//   shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
//   blue: "rgba(22, 41, 56)",
//   skyBlue: "rgba(208, 228, 233)",
// };

export default function OperationDateSearchCard({operationType, id}) {
  return (
    <List disablePadding>
      <ListItem disablePadding>
        <Link to={`operationdetails/${id}`}>
          <ListItemButton>
            <ListItemIcon>
              <TaskIcon />
              <Typography>{operationType}</Typography>
            </ListItemIcon>
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  );
}
