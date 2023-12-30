import Dialog from "../components/Dialog";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { CheckUser } from "../utils/sessionHelper";

export default function NonFooter() {
  return (
    <>
      <CheckUser red>
        <Navbar />
        <Dialog />
        <Outlet />
      </CheckUser>
    </>
  );
}
