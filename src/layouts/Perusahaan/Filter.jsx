import Button from "../../components/Button";
import { IoChevronDown } from "react-icons/io5";
import { FiSliders } from "react-icons/fi";

export default function Filter() {
  return (
    <div className="flex gap-4 overflow-x-auto">
      <Button variant="disabled">
        Filter <FiSliders />
      </Button>

      <div className="flex gap-2">
        <Button>
          Tanggal Diposting <IoChevronDown />
        </Button>
        <Button>
          Pengalaman
          <IoChevronDown />
        </Button>
        <Button>
          Tipe Pekerjaan
          <IoChevronDown />
        </Button>
        <Button>
          Industri
          <IoChevronDown />
        </Button>
        <Button>
          Lokasi
          <IoChevronDown />
        </Button>
      </div>
    </div>
  );
}
