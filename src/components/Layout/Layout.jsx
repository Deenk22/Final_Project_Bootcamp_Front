import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Box} from "@mui/material";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <Box>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
