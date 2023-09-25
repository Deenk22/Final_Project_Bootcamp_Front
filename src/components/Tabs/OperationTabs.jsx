import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DangerousIcon from '@mui/icons-material/Dangerous';
import SavingsIcon from '@mui/icons-material/Savings';
import { Typography } from '@mui/material';

const chartColorsPalette = {
  tealBlue2: 'rgba(75, 192, 192, 0.6)',
  lightPink: 'rgba(255, 99, 132, 0.6)',
  lightYellow: 'rgba(255, 205, 86, 0.6)',
  tealBlueOpacity: 'rgba(75, 192, 192, 0.2)',
  lightPinkOpacity: 'rgba(255, 99, 132, 0.2)',
  lightYellowOpacity: 'rgba(255, 205, 86, 0.2)',
  orange: 'rgba(255, 159, 64, 0.7)',
  shadowYellow: 'rgba(255, 205, 86, 0.4)',
  shadowtealBlue2: 'rgba(75, 192, 192, 0.4)',
  blue: 'rgba(22, 41, 56)',
  skyBlue: 'rgba(208, 228, 233)',
};

export default function OperationTabs({ allOperations }) {
  const operation = allOperations ? allOperations[0] : null;

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ typography: 'body1' }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        border={'2px solid ' + chartColorsPalette.skyBlue}
        padding={2}
        borderRadius={2}
      >
        <Typography
          textAlign={'center'}
          variant="h4"
          color={chartColorsPalette.skyBlue}
          mb={2}
        >
          Quick View
        </Typography>
        <Typography
          textAlign={'center'}
          variant="body2"
          color={chartColorsPalette.skyBlue}
          mb={2}
          mt={-2}
        >
          Last Operation Added
        </Typography>
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} width={'78%'}>
          <TabList
            aria-label="lab API tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              sx={{ color: chartColorsPalette.skyBlue, marginBottom: 1 }}
              label="Operation Type"
              value="1"
              icon={
                <QueryStatsIcon sx={{ color: chartColorsPalette.skyBlue }} />
              }
              iconPosition="start"
            />
            <Tab
              sx={{ color: chartColorsPalette.skyBlue, marginBottom: 1 }}
              label="Volume"
              value="2"
              icon={
                <AccountBalanceWalletIcon
                  sx={{ color: chartColorsPalette.skyBlue }}
                />
              }
              iconPosition="start"
            />
            <Tab
              sx={{ color: chartColorsPalette.skyBlue, marginBottom: 1 }}
              label="PriceOpen"
              value="3"
              icon={
                <MonetizationOnIcon
                  sx={{ color: chartColorsPalette.skyBlue }}
                />
              }
              iconPosition="start"
            />
            <Tab
              sx={{ color: chartColorsPalette.skyBlue, marginBottom: 1 }}
              label="Stop Loss"
              value="4"
              icon={
                <DangerousIcon sx={{ color: chartColorsPalette.skyBlue }} />
              }
              iconPosition="start"
            />
            <Tab
              sx={{ color: chartColorsPalette.skyBlue, marginBottom: 1 }}
              label="Take Profit"
              value="5"
              icon={<SavingsIcon sx={{ color: chartColorsPalette.skyBlue }} />}
              iconPosition="start"
            />
          </TabList>
        </Box>
        <TabPanel sx={{ color: chartColorsPalette.skyBlue }} value="1">
          {operation?.operationType}
        </TabPanel>
        <TabPanel sx={{ color: chartColorsPalette.skyBlue }} value="2">
          {operation?.volume}
        </TabPanel>
        <TabPanel sx={{ color: chartColorsPalette.skyBlue }} value="3">
          {operation?.priceOpen}
        </TabPanel>
        <TabPanel sx={{ color: chartColorsPalette.skyBlue }} value="4">
          {operation?.stopLoss}
        </TabPanel>
        <TabPanel sx={{ color: chartColorsPalette.skyBlue }} value="5">
          {operation?.takeProfit}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
