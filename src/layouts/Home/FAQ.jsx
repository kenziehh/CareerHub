import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

export default function FAQ() {
  const [isActive, setIsActive] = React.useState(1);
  return (
    <div className="container flex py-12 gap-8 items-center">
      <img src="/assets/images/faq-img.png" alt="" className="hidden md:block"/>

      <div className="space-y-2 flex-1 flex flex-col pt-[5%] gap-8 items-center">
        <h2>FAQ</h2>

        <img src="/assets/images/faq-img.png" alt="" className="md:hidden max-h-[30vh]"/>

        <div className="space-y-2">
          {faqData.map((items) => (
            <React.Fragment key={items.id}>
              <button
                onClick={() =>
                  setIsActive(isActive == items.id ? -1 : items.id)
                }
                className={`cursor-pointer text-start bg-white w-full border p-4 rounded-xl space-y-4 transition-all`}
              >
                <div className="flex gap-4 md:gap-16 items-center justify-between">
                  <span className="h5 lg:h4">{items.question}</span>
                  {isActive == items.id ? (
                    <BsArrowDownCircle className="rotate-180 text-2xl flex-shrink-0 mr-2" />
                  ) : (
                    <BsArrowDownCircle className="text-2xl flex-shrink-0 mr-2" />
                  )}
                </div>
                <p
                  className={`bodytext-3 lg:bodytext-2 ${
                    isActive == items.id ? "block" : "hidden"
                  }`}
                >
                  {items.answer}
                </p>
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    id: 1,
    question: "Bagaimana cara melamar Pekerjaan di situs ini?",
    answer:
      "Untuk melamar pekerjaan, Pergi ke halaman perusahaan. Pilih perusahaan sesuai dengan kriteria dan minat Anda. Baca panduan sebelum melamar, lalu klik tombol Lamar untuk melamar pekerjaan.",
  },
  {
    id: 2,
    question: "Bagaimana saya dapat mengetahui status lamaran kerja saya?",
    answer:
      "Untuk mengetahui status lamaran kerja, nantinya perusahaan terkait akan mengirimkan email kepada masing-masing pelamar secara pribadi.",
  },
  {
    id: 3,
    question: "Bagaimana website ini dapat mengembangkan karir saya?",
    answer:
      "Pada halaman bantuan, terdapat banyak fitur untuk mengembangkan skill anda mulai dari tips dan tatacara interview, membuat CV, membuat surat lamaran, dan juga terdapat workshop untuk pengembangan skill.",
  },
  {
    id: 4,
    question:
      "Apakah sebagai mahasiswa dan alumni dapat melamar magang secara online melalui portal Universitas?",
    answer:
      "Ya, akan tetapi hanya Universitas yang sudah bekerjasama dengan kami saja yang memiliki fitur melamar magang melalui website Universitas masing-masing.",
  },
  {
    id: 5,
    question: "Apakah seseorang tanpa pengalaman dapat mendaftar?",
    answer:
      "Ya, tergantung persyaratan dari perusahaan yang anda ingin lamar. Anda bisa mengeceknya dengan melihat pada persyaratan yang tertera pada lowongan yang dibuat oleh perusahaan tersebut.",
  },
];
