import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import ControlPanel from '../ControlPanel/ControlPanel';
// import {useState} from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// import {useUserLoginContext} from "../../context/UserLoginContext";
// import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";

const chartColorsPalette = {
  orange: 'rgba(255, 159, 64, 0.7)',
  lightPink: 'rgba(255, 99, 132, 0.7)',
  lightYellow: 'rgba(255, 205, 86, 0.7)',
  shadowYellow: 'rgba(255, 205, 86, 0.4)',
  tealBlue2: 'rgba(75, 192, 192, 0.7)',
  shadowtealBlue2: 'rgba(75, 192, 192, 0.4)',
  blue: 'rgba(22, 41, 56)',
  skyBlue: 'rgba(208, 228, 233)',
};

export default function NavListDrawer({ NavLink, setOpen, logout }) {
  const drawerLinks = [
    {
      icon: <DashboardIcon />,
      title: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: <DataThresholdingIcon />,
      title: 'Manage Operations',
      path: '/addoperation',
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Manage Stocks',
      path: '/addstock',
    },
    {
      icon: <PsychologyAltIcon />,
      title: 'Manage Strategies',
      path: '/addstrategy',
    },
    {
      icon: <AccountBoxIcon />,
      title: 'My Account',
      path: '/account',
    },
  ];

  return (
    <Box
      sx={{
        width: 300,
        height: '100%',
      }}
      bgcolor={chartColorsPalette.blue}
    >
      <nav>
        <ControlPanel setOpen={setOpen} />
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            color: chartColorsPalette.skyBlue,
            marginTop: 4,
          }}
        >
          {drawerLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: chartColorsPalette.skyBlue,
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="body2"
                    color={chartColorsPalette.skyBlue}
                  >
                    {item.title}
                  </Typography>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItemButton onClick={() => logout()}>
            <ListItemIcon
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: chartColorsPalette.skyBlue,
              }}
            >
              <ExitToAppIcon />
              <Typography variant="body2" color={chartColorsPalette.skyBlue}>
                Logout
              </Typography>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </nav>
    </Box>
  );
}
