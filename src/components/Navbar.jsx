import Button from "./Button";
import navLogo from "/assets/icons/logo-nav.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    isOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const [open, isOpen] = useState(false);

  return (
    <nav className="sticky flex items-center justify-between container py-[30px] body-text-1 font-medium z-[1000]">
      <Link to="/" className="flex-shrink-0">
        <img src={navLogo} alt="Logo" />
      </Link>

      <div
        onClick={() => isOpen(!open)}
        className={`items-center cursor-pointer lg:hidden transition-all duration-500 ${
          open ? "hidden" : ""
        }`}
      >
        <FaBars name={open ? "close" : "menu"} size={40} />
      </div>
      <div
        className={`items-center cursor-pointer lg:hidden z-10 transition-all duration-1000 ${
          open ? "z-10" : "hidden"
        }`}
        onClick={() => isOpen(!open)}
      >
        <RxCross1 size={40} />
      </div>
      <div
        className={`flex items-start flex-1 justify-end flex-col gap-8 lg:flex lg:flex-row lg:items-center absolute lg:static py-20 lg:py-0 bg-white lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-0 " : "top-[-490px]"
        }`}
      >
        <ul className="flex flex-col gap-8 items-start lg:flex lg:flex-row lg:gap-6 flex-1 justify-center">
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
              to="/bantuan"
              className={
                isActive("/bantuan") ? "text-primaryBlue" : "text-secGray"
              }
            >
              Bantuan
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Button onClick={() => navigate('?showDialog=y&type=signin')}>Masuk</Button>
        </div>
      </div>
    </nav>
  );
}
