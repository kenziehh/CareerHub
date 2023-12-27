import Button from "./Button";
import navLogo from "/assets/icons/logo-nav.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky flex items-center justify-between container py-[30px] body-text-1 font-medium z-[1000]">
      <Link to="/" className="flex-shrink-0">
        <img src={navLogo} alt="Logo" />
      </Link>

      <div className="hidden lg:flex items-center flex-1 justify-end">
        <ul className="flex gap-6 flex-1 justify-center">
          <li>
            <Link
              to="/"
              className={isActive("/") ? "text-primaryBlue" : "text-secGray"}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                isActive("/about") ? "text-primaryBlue" : "text-secGray"
              }
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="/perusahaan"
              className={
                isActive("/perusahaan") ? "text-primaryBlue" : "text-secGray"
              }
            >
              Perusahaan
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={
                isActive("/bantuan") ? "text-primaryBlue" : "text-secGray"
              }
            >
              Bantuan
            </Link>
          </li>
        </ul>

        <Button>Masuk</Button>
      </div>
    </nav>
  );
}
