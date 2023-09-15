import {Outlet} from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MiniDrawer from "../Navbar/NavbarDrawer";

export default function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      <MiniDrawer />
      <Outlet />
      <Footer />
    </>
  );
}
