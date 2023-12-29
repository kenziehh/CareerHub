import Button from "../../components/Button";
import Card from "../../components/Card";
import Filter from "./Filter";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import { FiCheckCircle, FiBook, FiGlobe, FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Perusahaan() {
  const [selectedId, setSelectedId] = useState(1);
  const navigate = useNavigate();

  return (
    <section className="space-y-4">
      <InputSearch />
      <section className="container space-y-8 h-screen pt-4">
        <Filter />
        <div className="flex flex-col h-full gap-6">
          <div className="flex gap-4 h-full py-4">
            <div className="lg:flex-[.8] grid gap-4 overflow-y-scroll">
              {dummyData.map((item) => (
                <PerusahaanCard
                  key={item.id}
                  data={item}
                  selectedId={selectedId}
                />
              ))}
            </div>

            <div className="hidden flex-1 lg:grid gap-4 overflow-y-scroll">
              <Card className="h-max">
                <div className="flex justify-between w-full">
                  <div className="flex gap-4 ">
                    <img
                      src={dummyData[selectedId].imgUrl}
                      alt=""
                      className="w-20 h-20"
                    />
                    <div className="w-[60%]">
                      <p>{dummyData[selectedId].companyName}</p>
                      <h3>{dummyData[selectedId].jobPosition}</h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Button variant="default" onClick={() => navigate("?showDialog=y&type=upload")}>
                      Lamar
                      <FiCheckCircle />
                    </Button>
                    <Button>
                      Panduan <FiBook />
                    </Button>
                  </div>
                </div>

                <ul>
                  <li className="flex items-center gap-2">
                    <SlLocationPin className="text-xl" />
                    {dummyData[selectedId].location}
                  </li>
                  <li className="flex items-center gap-2">
                    <FiBriefcase className="text-xl" />
                    {dummyData[selectedId].location}
                  </li>
                  <li className="flex items-center gap-2">
                    <FiGlobe className="text-xl" /> Advertising, Digital
                    Marketing, Social Media
                  </li>
                </ul>

                <div className="h-[1px] w-full bg-gray-300" />

                <p>
                  Anda akan memaparkan konten media sosial, strategi, dan
                  eksekusi untuk memastikan penyampaian yang sangat baik.
                  Mengolah data untuk mengumpulkan wawasan untuk perbaikan
                  tindakan selanjutnya. Bekerja sama dengan pemangku kepentingan
                  lainnya mulai dari pemasaran merek, produk, dan urusan
                  korporat hingga layanan pelanggan untuk mendukung kebutuhan
                  mereka melalui ranah media sosial. Anda akan menjadi orang
                  media sosial yang bertanggung jawab atas segala kebutuhan dan
                  mengukur dampak hasil ini terhadap OKR.
                </p>
                <p>
                  Apa yang akan kamu lakukan : Menjadi penanggung jawab
                  pembuatan kampanye dan konten media sosial; mulai dari
                  mengamati tren dan referensi, brainstorming, perencanaan
                  hingga pelaksanaan (termasuk jadwal dan pos) Mengembangkan
                  strategi kampanye media sosial berkolaborasi dengan pemangku
                  kepentingan lainnya Membuat strategi KOL berkolaborasi dengan
                  pemangku kepentingan dan pihak ketiga Memanfaatkan alat media
                  sosial untuk menganalisis kampanye media sosial, konten, dan
                  KOL untuk mengumpulkan wawasan dan rencana aksi Berkolaborasi
                  dengan pemasaran merek untuk menyampaikan/mendukung kebutuhan
                  pemasaran
                </p>
                <p>
                  Persyaratan : Setidaknya 2 tahun pengalaman kerja terkait di
                  biro iklan atau start-up Keterampilan menulis, mengedit, dan
                  membaca bukti yang kuat Kemampuan mengkomunikasikan ide dengan
                  jelas; pola pikir analitis dan berbasis data yang kuat
                  Pengetahuan luas tentang lanskap, platform, dan teknologi
                  media sosial Memiliki minat pada platform digital, khususnya
                  media sosial, dan kemauan untuk mempelajari lebih lanjut
                  tentang ruang digital ini Pemain tim yang kuat dengan sikap
                  proaktif dan pikiran kreatif/inovatif untuk berkolaborasi
                  dengan berbagai pemangku kepentingan Kemampuan analitis yang
                  kuat untuk membaca, menafsirkan, dan memanfaatkan data, dan
                  menghasilkan poin-poin yang dapat ditindaklanjuti untuk
                  pengoptimalan dan/atau eksperimen Kuat dan berorientasi pada
                  detail untuk menangani banyak pekerjaan
                </p>
                <div className="flex gap-4 items-center justify-between w-full">
                  <div className="flex gap-4 items-center">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="">
                      <h4>Namira Dinda.H</h4>
                      <p>Human Resources at Gojek</p>
                    </div>
                  </div>
                  <Button variant="default">Kontak</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

const PerusahaanCard = ({ data, selectedId }) => {
  const {
    id,
    location,
    postedAt,
    imgUrl,
    companyName,
    jobPosition,
    jobDescription,
    tags,
  } = data;

  return (
    <Card
      className={`gap-4 ${
        id == selectedId && "lg:border-primaryBlue lg:border-[2px]"
      }`}
    >
      <div className="flex justify-between w-full font-light">
        <span className="flex items-center gap-1">
          <SlLocationPin className="text-2xl" />
          {location}
        </span>
        <span>{postedAt}</span>
      </div>

      <div className="h-[1px] w-full bg-gray-300" />

      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <img src={imgUrl} alt="" className="w-20 h-20 object-cover" />
          <div>
            <p>{companyName}</p>
            <h3>{jobPosition}</h3>
          </div>
        </div>
        <p className="font-light">{jobDescription}</p>
      </div>

      <div className="flex gap-2 overflow-x-auto">
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
          <div className="flex items-center gap-4 w-full">
            <HiOutlineSearch className="text-gray-400 text-xl " />
            <input
              placeholder="Cari Lowongan"
              className="bg-transparent outline-0 w-full h-full"
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
    tags: ["Entry Level", "Hybrid", "Full time", "SMA/SMK"],
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
    tags: ["Mid Level", "On site", "Internship", "S1/D4"],
  },
  {
    id: 3,
    location: "Jakarta, Indonesia",
    postedAt: "5 Hari Lalu",
    imgUrl: "/assets/icons/tokopedia-icon.png",
    companyName: "Tokopedia",
    jobPosition: "Data Engineer",
    jobDescription:
      "Berpartisipasi dalam proses SDLC penuh pengembangan Platform Data mulai dari perancangan, pengembangan, pengujian, penerapan, pemeliharaan, pemantauan, dan peningkatan layanan. Membangun dan mengoptimalkan arsitektur jalur data, mulai dari menyerap berbagai data ke penyimpanan gudang data.",
    tags: ["Senior Level", "Hybrid", "Part time", "S2"],
  },
  // Add more data objects as needed
];
