import {Box, Typography} from "@mui/material";

export default function HowItWorksSection({icon, text}) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={{xs: "top", sm: "center"}}
      gap={1}
    >
      {icon}
      <Typography
        variant="body2"
        textAlign={{xs: "center", sm: "left"}}
        color={"secondary"}
      >
        {text}
      </Typography>
    </Box>
  );
}
