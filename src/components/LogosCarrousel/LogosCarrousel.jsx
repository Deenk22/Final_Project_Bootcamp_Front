import {Box} from "@mui/material";
import {Link} from "react-router-dom";

export default function LogosCarrousel({alt, src, link}) {
  return (
    <Box display={"flex"} justifyContent={"space-evenly"}>
      <Link to={link}>
        <img src={src} alt={alt} width={128} />
      </Link>
    </Box>
  );
}
