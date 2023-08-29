import {Box, Grid} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";

export default function Header() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Box
            width={"50vw"}
            height={"10vh"}
            bgcolor={colorPalettes.blue}
            sx={{
              borderTopLeftRadius: 64,
              borderTopRightRadius: 64,
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
