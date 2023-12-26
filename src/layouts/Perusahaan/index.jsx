import Button from "../../components/Button";
import Card from "../../components/Card";
import Filter from "./Filter";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";

export default function Perusahaan() {
  return (
    <section className="space-y-4">
      <InputSearch />
      <section className="container space-y-8 h-screen">
        <Filter />
        <div className="flex flex-col h-full gap-6">
          <div className="flex gap-4 h-full py-4">
            <div className="flex-[.8] grid gap-4 overflow-y-scroll">
              {dummyData.map((item) => (
                <PerusahaanCard data={item}/>
              ))}
            </div>
            <Card className="flex-1 h-max">
              
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
}

const PerusahaanCard = ({ data }) => {
  const {
    location,
    postedAt,
    imgUrl,
    companyName,
    jobPosition,
    jobDescription,
    tags,
  } = data;

  return (
    <Card className="gap-4">
      <div className="flex justify-between w-full font-light">
        <span className="flex items-center gap-1">
          <SlLocationPin className="text-2xl" />
          {location}
        </span>
        <span>{postedAt}</span>
      </div>
      <div className="h-[1px] w-full bg-gray-300" />

      <div className="space-y-4">
        <div className="flex gap-4 ">
          <img src={imgUrl} alt="" className="w-20 h-20" />
          <div>
            <p>{companyName}</p>
            <h3>{jobPosition}</h3>
          </div>
        </div>
        <p className="font-light">{jobDescription}</p>
      </div>

      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <Button key={index} variant="disabled">
            {tag}
          </Button>
        ))}
      </div>
    </Card>
  );
};

const InputSearch = () => {
  return (
    <div
      className="w-full py-[3rem]"
      style={{
        backgroundImage: "url(/assets/images/search-input-bg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="rounded-xl p-2 pl-12 bg-white flex justify-between">
          <div className="flex items-center gap-4">
            <HiOutlineSearch className="text-gray-400 text-xl" />
            <input
              placeholder="Cari Lowongan"
              className="bg-transparent outline-0"
            />
          </div>

          <Button variant="default" className="px-8">
            Cari
          </Button>
        </div>
      </div>
    </div>
  );
};

const dummyData = [
  {
    id: 1,
    location: "Jakarta, Indonesia",
    postedAt: "5 Jam Lalu",
    imgUrl: "/assets/icons/gojek-icon.png",
    companyName: "Gojek",
    jobPosition: "Social Media Specialist",
    jobDescription:
      "Jika Anda ingin menjadi bagian dari tim yang gesit, dinamis, menyenangkan, berbasis data, dan peluang untuk mempertajam keterampilan pemasaran media sosial Anda, tidak perlu mencari lagi. Sebagai Spesialis Media Sosial kami, Anda akan mengendalikan salah satu halaman media sosial Gojek.",
    tags: ["Entry Level", "Hybrid", "Full time"],
  },
  {
    id: 2,
    location: "Jakarta, Indonesia",
    postedAt: "2 Hari Lalu",
    imgUrl: "/assets/icons/traveloka-icon.png",
    companyName: "Traveloka",
    jobPosition: "Product Copywriter",
    jobDescription:
      "Membuat salinan atau konten untuk pengguna saat menggunakan produk digital kami. Ia menganjurkan pentingnya memanusiakan produk digital melalui kata-kata, bahwa kata-kata memiliki nuansa, dan tanpa kata-kata, produk kita akan menjadi bentuk tanpa wajah, tanpa suasana hati atau nada suara.",
    tags: ["Mid Level", "On site", "Internship"],
  },
  {
    id: 1,
    location: "Jakarta, Indonesia",
    postedAt: "5 Hari Lalu",
    imgUrl: "/assets/icons/tokopedia-icon.png",
    companyName: "Tokopedia",
    jobPosition: "Data Engineer",
    jobDescription:
      "Berpartisipasi dalam proses SDLC penuh pengembangan Platform Data mulai dari perancangan, pengembangan, pengujian, penerapan, pemeliharaan, pemantauan, dan peningkatan layanan. Membangun dan mengoptimalkan arsitektur jalur data, mulai dari menyerap berbagai data ke penyimpanan gudang data.",
    tags: ["Senior Level", "Hybrid", "Part time"],
  },
  // Add more data objects as needed
];
