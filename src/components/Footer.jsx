export default function Footer() {
  return (
    <footer className="bg-darkBlue flex justify-center py-[6rem] body-text-1">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between md:w-4/5 max-w-[850px] mx-auto gap-12">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <img src="./../assets/icons/logo-web.png" />
              <p className="text-p font-semibold text-white">CareerHub</p>
            </div>
            <p className="text-white max-w-[432px]" style={{
                color: "#FFF",
                textAlign: "justify",
                fontSize: "1.125rem",
                fontWeight: 400,
                lineHeight: "1.375rem" /* 122.222% */,
                letterSpacing: "-0.0045rem",
              }}>
              CarrerHub akan memenuhi kebutuhan mahasiswa dalam mencari magang
              dan pekerjaan, serta memberikan dukungan dalam persiapan karir
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-p text-white font-semibold">Navigasi</div>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-[#ffffff70] text-p font-medium">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ffffff70] text-p font-medium">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ffffff70] text-p font-medium">
                  Program
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ffffff70] text-p font-medium">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
