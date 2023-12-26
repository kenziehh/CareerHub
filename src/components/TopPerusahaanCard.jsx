import Card from "./Card";

const ReusableCard = ({ logoSrc, companyName, applicants, buttonLabel }) => {
  const applicantImages = [
    "/assets/icons/people-icon1.svg",
    "/assets/icons/people-icon2.svg",
    "/assets/icons/people-icon3.svg",
    "/assets/icons/people-icon4.svg",
    "/assets/icons/people-icon5.svg",
  ];

  return (
    <Card className="p-[30px] rounded-[20px] border border-gray-300 flex-col justify-start items-start gap-10 inline-flex">
      <div className="flex-col justify-start items-start gap-10 flex">
        <div className="w-60 justify-start items-center inline-flex">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 left-0 top-0 absolute bg-white rounded-full flex items-center">
              <img
                src={logoSrc}
                alt={`logo-${companyName}`}
                className="w-14 h-14"
              />
            </div>
          </div>
          <h3 className="text-h3 font-semibold">{companyName}</h3>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="w-[170px] h-[50px] relative">
            {applicantImages.map((imageSrc, index) => (
              <img
                key={index}
                className="w-[50px] h-[50px] absolute rounded-full hover:scale-105 transition-all"
                style={{ left: `${30 * index}px`, top: 0 }}
                src={imageSrc}
                alt={`applicant-${index}`}
              />
            ))}
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="flex-col justify-start items-start flex">
              <div className="text-p2 text-primaryGray">{applicants}</div>
            </div>
          </div>
        </div>
      </div>
      <button className="text-center text-primaryBlue font-semibold self-stretch px-[25px] py-[15px] rounded-[10px] border border-blue-700 justify-center items-center gap-2 inline-flex">
        {buttonLabel}
      </button>
    </Card>
  );
};

export default ReusableCard;
