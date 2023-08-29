import {Box, Grid, Typography} from "@mui/material";

export default function NewsCards({
  author,
  title,
  url,
  publishedAt,
  urlToImage,
}) {
  return (
    <Grid>
      <Box display={"flex"} justifyContent={"center"}>
        <Typography>{title}</Typography>
      </Box>
    </Grid>
  );
}
