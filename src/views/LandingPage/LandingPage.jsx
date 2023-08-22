import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <h1>Landing</h1>
      <Link to="/login">
        <Button variant="contained" color="secondary">
          Go
        </Button>
      </Link>
    </>
  );
}
