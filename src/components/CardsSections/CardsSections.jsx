import { Box, Grid, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import './styleCardSection.css';

const chartColorsPalette = {
  orange: 'rgba(255, 159, 64, 0.7)',
  lightPink: 'rgba(255, 99, 132, 0.7)',
  lightYellow: 'rgba(255, 205, 86, 0.7)',
  shadowYellow: 'rgba(255, 205, 86, 0.4)',
  tealBlue2: 'rgba(75, 192, 192, 0.7)',
  shadowtealBlue2: 'rgba(75, 192, 192, 0.4)',
  blue: 'rgba(22, 41, 56)',
  skyBlue: 'rgba(208, 228, 233)',
  tealBlue: '#367588',
};

export default function CardsSections() {
  return (
    <>
      <section>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems={'center'}
          mt={12}
          mb={16}
        >
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              className="animation-cards-left"
              width={400}
              height={400}
              bgcolor={chartColorsPalette.blue}
              borderRadius={8}
            >
              <Typography
                variant="h4"
                textAlign={'center'}
                color={chartColorsPalette.skyBlue}
                mt={2}
                mb={-1}
              >
                Structure Your Investments
              </Typography>{' '}
              <Typography
                variant="body2"
                textAlign={'left'}
                color={chartColorsPalette.skyBlue}
                padding={2}
              >
                Investment Management Solution is a comprehensive tool designed
                to streamline and optimize investment and portfolio management.
              </Typography>
              <Box
                width={'50%'}
                height={80}
                bgcolor={chartColorsPalette.skyBlue}
                position={'relative'}
                top={64}
                left={32}
                display={'flex'}
                flexDirection={'row'}
                borderRadius={4}
                // sx={{ borderTopLeftRadius: 32, borderBottomRightRadius: 32 }}
              >
                <Box display={'flex'} flexDirection={'row'}>
                  <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    width={32}
                    height={32}
                    borderRadius={50}
                    position={'relative'}
                    top={22}
                    left={24}
                    bgcolor={chartColorsPalette.tealBlue}
                  >
                    <MonetizationOnIcon
                      fontSize="large"
                      sx={{
                        marginLeft: 2,
                        position: 'relative',
                        left: -8,
                        color: chartColorsPalette.skyBlue,
                      }}
                    />
                  </Box>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'left'}
                    position={'relative'}
                    left={56}
                    top={12}
                  >
                    <Typography
                      position={'relative'}
                      left={6}
                      variant="body2"
                      mb={-0.8}
                      color={chartColorsPalette.blue}
                    >
                      Benefits
                    </Typography>
                    <Typography
                      variant="h4"
                      color={chartColorsPalette.tealBlue}
                    >
                      18900 €
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={3}>
            <Box width={'100%'} mt={4}>
              <Typography
                component={'h1'}
                variant="h3"
                color={chartColorsPalette.tealBlue}
                fontFamily={'Bebas Neue'}
                textAlign={'left'}
              >
                Investment Management Solution
              </Typography>
              <Typography
                variant="body1"
                color={chartColorsPalette.blue}
                textAlign={'left'}
              >
                Investment Management Solution is a comprehensive tool designed
                to streamline and optimize investment and portfolio management.
                This powerful solution empowers investors and financial
                professionals to track, analyze, and make informed decisions
                about their financial assets.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>
      {/* // Segunda Section */}
      <section>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems={'center'}
          mt={12}
          mb={16}
        >
          <Grid item xs={10} sm={10} md={10} lg={3}>
            <Box width={'100%'} mt={4}>
              <Typography
                component={'h1'}
                variant="h3"
                color={chartColorsPalette.tealBlue}
                fontFamily={'Bebas Neue'}
                textAlign={'left'}
              >
                Investment Management Solution
              </Typography>
              <Typography
                variant="body1"
                color={chartColorsPalette.blue}
                textAlign={'left'}
              >
                Investment Management Solution is a comprehensive tool designed
                to streamline and optimize investment and portfolio management.
                This powerful solution empowers investors and financial
                professionals to track, analyze, and make informed decisions
                about their financial assets.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              className="animation-cards-right"
              width={400}
              height={400}
              bgcolor={chartColorsPalette.blue}
              borderRadius={8}
            ></Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
