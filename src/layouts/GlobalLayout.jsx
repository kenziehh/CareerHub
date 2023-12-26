import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export default function GlobalLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
