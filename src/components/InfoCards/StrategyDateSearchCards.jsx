import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.6)",
  lightPink: "rgba(255, 99, 132, 0.9)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  blueOpacity: "rgba(22, 41, 56, 0.8)",
  skyBlue: "rgba(208, 228, 233)",
};

export default function StrategyDateSearchCard({name, id}) {
  return (
    <List disablePadding sx={{textAlign: "center"}}>
      <ListItem disablePadding>
        <Link className="allLinks" to={`strategydetails/${id}`}>
          <ListItemButton
            divider
            sx={{
              bgcolor: chartColorsPalette.blue,
              width: 200,
              borderRadius: 2,
              height: 64,
              "&:hover": {
                bgcolor: chartColorsPalette.blueOpacity,
              },
            }}
          >
            <ListItemIcon
              sx={{
                marginBottom: 1,
                marginTop: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ArrowRightOutlinedIcon
                sx={{color: chartColorsPalette.lightPink}}
              />

              <Typography variant="body2" color={chartColorsPalette.skyBlue}>
                {name}
              </Typography>
            </ListItemIcon>
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  );
}
