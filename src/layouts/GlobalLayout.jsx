import Dialog from "../components/Dialog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export default function GlobalLayout() {
  return (
    <>
      <Navbar />
      <Dialog />
      <Outlet />
      <Footer />
    </>
  );
}
