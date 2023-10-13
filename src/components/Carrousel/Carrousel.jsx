import { Box, Grid, Typography } from '@mui/material';
import './Style.css';

const chartColorsPalette = {
  tealBlue: '#367588',
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
  skyBlueOpacity: 'rgba(208, 228, 233, 0.1)',
};

export default function Carrousel() {
  return (
    <Grid
      container
      display={'flex'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      mb={8}
    >
      <Grid item xs={10} sm={10} md={3} lg={4}>
        <Box>
          <Typography variant="h2">Best Operations</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            blanditiis reiciendis laboriosam eveniet enim quo nisi, laborum
            illum earum optio corrupti quaerat obcaecati ex dicta officia velit
            provident tenetur sit!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={10} sm={10} md={3} lg={4}>
        <Box class="container up-transition">
          <Box mb={8}>
            <Box class="content">
              <Typography variant="h5">Jane Doe</Typography>
              <Typography variant="body2">UI & UX Designer</Typography>
            </Box>
          </Box>
          <Box mb={8}>
            <Box class="content">
              <Typography variant="h5">Alex Smith</Typography>
              <Typography variant="body2">CEO Expert</Typography>
            </Box>
          </Box>
          <Box mb={8}>
            <Box class="content">
              <Typography variant="h5">Emily New</Typography>
              <Typography variant="body2">Web Designer</Typography>
            </Box>
          </Box>
          <Box mb={8}>
            <Box class="content">
              <Typography variant="h5">Lisa Boley</Typography>
              <Typography variant="body2">Marketing Coordinator</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
