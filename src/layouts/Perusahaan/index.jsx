import Button from "../../components/Button";
import Card from "../../components/Card";
import Filter from "./Filter";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import { FiCheckCircle, FiBook, FiGlobe, FiBriefcase } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { dummyData } from "./constant";

export default function Perusahaan() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <section className="space-y-4">
      <InputSearch />
      <div className="container space-y-8 h-screen pt-4">
        <Filter />
        <div className="flex gap-4 h-full py-4">
          <div className="xl:flex-[.8] flex flex-col gap-4 overflow-y-scroll">
            {dummyData.map((item) => (
              <PerusahaanCard
                key={item.id}
                data={item}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            ))}
          </div>

          <DetailLowongan selectedId={selectedId} />
          {/* <PanduanLowongan selectedId={selectedId} /> */}
        </div>
      </div>
    </section>
  );
}

const PerusahaanCard = ({ data, selectedId, setSelectedId }) => {
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
    <Link onClick={() => setSelectedId(id)}>
      <Card
        className={`gap-4 w-[100%] ${
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
    </Link>
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

const DetailLowongan = ({ selectedId }) => {
  const navigate = useNavigate();
  return (
    <div className="hidden flex-1 xl:grid gap-4 overflow-y-scroll">
      <Card className="h-max">
        <div className="flex justify-between w-full">
          <div className="flex gap-4 ">
            <img
              src={dummyData[selectedId - 1].imgUrl}
              alt=""
              className="w-20 h-20"
            />
            <div className="w-[60%]">
              <p>{dummyData[selectedId - 1].companyName}</p>
              <h3>{dummyData[selectedId - 1].jobPosition}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Button
              variant="default"
              onClick={() => navigate("?showDialog=y&type=upload")}
            >
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
            {dummyData[selectedId - 1].location}
          </li>
          <li className="flex items-center gap-2">
            <FiBriefcase className="text-xl" />
            {dummyData[selectedId - 1].tags + ""}
          </li>
          <li className="flex items-center gap-2">
            <FiGlobe className="text-xl" /> Advertising, Digital Marketing,
            Social Media
          </li>
        </ul>

        <div className="h-[1px] w-full bg-gray-300" />

        <p>
          <strong>Deskripsi Pekerjaan:</strong>
        </p>
        <p>
          Anda akan memaparkan konten media sosial, strategi, dan eksekusi untuk
          memastikan penyampaian yang sangat baik. Mengolah data untuk
          mengumpulkan wawasan untuk perbaikan tindakan selanjutnya. Bekerja
          sama dengan pemangku kepentingan lainnya mulai dari pemasaran merek,
          produk, dan urusan korporat hingga layanan pelanggan untuk mendukung
          kebutuhan mereka melalui ranah media sosial. Anda akan menjadi orang
          media sosial yang bertanggung jawab atas segala kebutuhan dan mengukur
          dampak hasil ini terhadap OKR.
        </p>

        <p>
          <strong>Apa yang akan kamu lakukan:</strong>
        </p>
        <ul className="list-disc px-4">
          <li>
            Menjadi penanggung jawab pembuatan kampanye dan konten media sosial;
            mulai dari mengamati tren dan referensi, brainstorming, perencanaan
            hingga pelaksanaan (termasuk jadwal dan pos)
          </li>
          <li>
            Mengembangkan strategi kampanye media sosial berkolaborasi dengan
            pemangku kepentingan lainnya
          </li>
          <li>
            Membuat strategi KOL berkolaborasi dengan pemangku kepentingan dan
            pihak ketiga
          </li>
          <li>
            Memanfaatkan alat media sosial untuk menganalisis kampanye media
            sosial, konten, dan KOL untuk mengumpulkan wawasan dan rencana aksi
          </li>
          <li>
            Berkolaborasi dengan pemasaran merek untuk menyampaikan/mendukung
            kebutuhan pemasaran
          </li>
        </ul>

        <p>
          <strong>Persyaratan:</strong>
        </p>
        <ul className="list-disc pl-4">
          <li>
            Setidaknya 2 tahun pengalaman kerja terkait di biro iklan atau
            start-up
          </li>
          <li>Keterampilan menulis, mengedit, dan membaca bukti yang kuat</li>
          <li>
            Kemampuan mengkomunikasikan ide dengan jelas; pola pikir analitis
            dan berbasis data yang kuat
          </li>
          <li>
            Pengetahuan luas tentang lanskap, platform, dan teknologi media
            sosial
          </li>
          <li>
            Memiliki minat pada platform digital, khususnya media sosial, dan
            kemauan untuk mempelajari lebih lanjut tentang ruang digital ini
          </li>
          <li>
            Pemain tim yang kuat dengan sikap proaktif dan pikiran
            kreatif/inovatif untuk berkolaborasi dengan berbagai pemangku
            kepentingan
          </li>
          <li>
            Kemampuan analitis yang kuat untuk membaca, menafsirkan, dan
            memanfaatkan data, dan menghasilkan poin-poin yang dapat
            ditindaklanjuti untuk pengoptimalan dan/atau eksperimen
          </li>
          <li>
            Kuat dan berorientasi pada detail untuk menangani banyak pekerjaan
          </li>
        </ul>

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
  );
};

const PanduanLowongan = ({ selectedId }) => {
  return (
    <div className="hidden flex-1 xl:grid gap-4 overflow-y-scroll">
      <Card className="h-max">
        <div className="flex justify-between w-full">
          <div className="flex gap-4 ">
            <img
              src={dummyData[selectedId - 1].imgUrl}
              alt=""
              className="w-20 h-20"
            />
            <div className="w-[60%]">
              <p>{dummyData[selectedId - 1].jobPosition}</p>
              <h3>Panduan Magang</h3>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-300" />

        <p>
          <strong>Deskripsi Pekerjaan:</strong>
        </p>
        <p>
          Anda akan memaparkan konten media sosial, strategi, dan eksekusi untuk
          memastikan penyampaian yang sangat baik. Mengolah data untuk
          mengumpulkan wawasan untuk perbaikan tindakan selanjutnya. Bekerja
          sama dengan pemangku kepentingan lainnya mulai dari pemasaran merek,
          produk, dan urusan korporat hingga layanan pelanggan untuk mendukung
          kebutuhan mereka melalui ranah media sosial. Anda akan menjadi orang
          media sosial yang bertanggung jawab atas segala kebutuhan dan mengukur
          dampak hasil ini terhadap OKR.
        </p>

        <p>
          <strong>Apa yang akan kamu lakukan:</strong>
        </p>
        <ul className="list-disc pl-4">
          <li>
            Menjadi penanggung jawab pembuatan kampanye dan konten media sosial;
            mulai dari mengamati tren dan referensi, brainstorming, perencanaan
            hingga pelaksanaan (termasuk jadwal dan pos)
          </li>
          <li>
            Mengembangkan strategi kampanye media sosial berkolaborasi dengan
            pemangku kepentingan lainnya
          </li>
          <li>
            Membuat strategi KOL berkolaborasi dengan pemangku kepentingan dan
            pihak ketiga
          </li>
          <li>
            Memanfaatkan alat media sosial untuk menganalisis kampanye media
            sosial, konten, dan KOL untuk mengumpulkan wawasan dan rencana aksi
          </li>
          <li>
            Berkolaborasi dengan pemasaran merek untuk menyampaikan/mendukung
            kebutuhan pemasaran
          </li>
        </ul>

        <p>
          <strong>Persyaratan:</strong>
        </p>
        <ul className="list-disc pl-4">
          <li>
            Setidaknya 2 tahun pengalaman kerja terkait di biro iklan atau
            start-up
          </li>
          <li>Keterampilan menulis, mengedit, dan membaca bukti yang kuat</li>
          <li>
            Kemampuan mengkomunikasikan ide dengan jelas; pola pikir analitis
            dan berbasis data yang kuat
          </li>
          <li>
            Pengetahuan luas tentang lanskap, platform, dan teknologi media
            sosial
          </li>
          <li>
            Memiliki minat pada platform digital, khususnya media sosial, dan
            kemauan untuk mempelajari lebih lanjut tentang ruang digital ini
          </li>
          <li>
            Pemain tim yang kuat dengan sikap proaktif dan pikiran
            kreatif/inovatif untuk berkolaborasi dengan berbagai pemangku
            kepentingan
          </li>
          <li>
            Kemampuan analitis yang kuat untuk membaca, menafsirkan, dan
            memanfaatkan data, dan menghasilkan poin-poin yang dapat
            ditindaklanjuti untuk pengoptimalan dan/atau eksperimen
          </li>
          <li>
            Kuat dan berorientasi pada detail untuk menangani banyak pekerjaan
          </li>
        </ul>

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
  );
};
