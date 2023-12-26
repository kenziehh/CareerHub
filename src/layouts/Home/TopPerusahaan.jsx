import ReusableCard from "../../components/TopPerusahaanCard";

const companyData = [
  {
    id: 1,
    logoSrc: "/assets/icons/gojek-icon.png",
    companyName: "Gojek",
    applicants: "Lebih dari 12K pendaftar",
    buttonLabel: "Lihat Lowongan",
  },
  {
    id: 2,
    logoSrc: "/assets/icons/tokopedia-icon.png",
    companyName: "Tokopedia",
    applicants: "Lebih dari 12K pendaftar",
    buttonLabel: "Lihat Lowongan",
  },
  {
    id: 3,
    logoSrc: "/assets/icons/shopee-icon.png",
    companyName: "Shopee",
    applicants: "Lebih dari 12K pendaftar",
    buttonLabel: "Lihat Lowongan",
  },
  {
    id: 4,
    logoSrc: "/assets/icons/traveloka-icon.png",
    companyName: "Traveloka",
    applicants: "Lebih dari 12K pendaftar",
    buttonLabel: "Lihat Lowongan",
  },
];

export default function TopPerusahaan() {
  return (
    <div className="container space-y-[3rem] py-16">
      <div>
        <h2>
          Perusahaan yang <br /> Paling Diminati
        </h2>
      </div>
      <div className="flex gap-4 items-center overflow-x-auto pb-1">
        {companyData.map((company) => (
          <ReusableCard
            key={company.id}
            logoSrc={company.logoSrc}
            companyName={company.companyName}
            applicants={company.applicants}
            buttonLabel={company.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
}
