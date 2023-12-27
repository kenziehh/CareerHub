import Button from "./Button";
import navLogo from "/assets/icons/logo-nav.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="sticky flex items-center justify-between container py-[30px] body-text-1 font-medium z-[1000]">
      <Link to="/" className="flex-shrink-0 ">
        <img src={navLogo} />
      </Link>

      <div className="hidden lg:flex items-center flex-1 justify-end">
        <ul className="flex gap-6 flex-1 justify-center">
          <li>
            <Link to="/" className="text-primaryBlue">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-secGray">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/perusahaan" className="text-secGray">
              Perusahaan
            </Link>
          </li>
          <li>
            <Link to="/" className="text-secGray">
              Bantuan
            </Link>
          </li>
        </ul>

        <Button>Masuk</Button>
      </div>
    </nav>
  );
}
