import {Box, Typography, useTheme} from "@mui/material";

export default function Testimonials({props}) {
  const theme = useTheme();
  const {city, name, testimony, profession, img} = props;

  return (
    <>
      <Box textAlign={"center"}>
        <img
          className="user-testimonial-picture"
          src={img}
          alt={name}
          width={256}
        />
      </Box>
      <Box padding={4}>
        <Box>
          <Typography
            variant="h4"
            color={"paragraphs.main"}
            textAlign={{xs: "center", md: "left"}}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            mb={1}
            mt={-1}
            color={"primary"}
            textAlign={{xs: "center", md: "left"}}
          >
            {city} / {profession}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color={"primary"}
          padding={2}
          textAlign={{xs: "center", md: "left"}}
          border={`2px solid ${theme.palette.primary.main}`}
          borderRadius={2}
        >
          {testimony}
        </Typography>
      </Box>
    </>
  );
}
