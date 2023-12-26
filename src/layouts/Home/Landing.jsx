import Button from "../../components/Button";
import CircularIcon from "../../components/CircularIcon";

export default function Landing() {
  return (
    <div className="container flex flex-col gap-14 items-center h-[744px] p-10 pt-0">
      <div
        className="relative flex flex-col gap-14 items-center w-full h-full bg-secBlue rounded-3xl overflow-hidden "
        style={{
          backgroundImage: "url(/assets/images/ellipse-bg.png)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="w-[110%] aspect-square bg-white rounded-full absolute -top-[140%]" /> */}
        <div className="hidden md:block">
          <CircularIcon
            src="/assets/icons/gojek-icon.png"
            className="scale-[1.8] absolute left-[10%] top-[45%]"
          />
          <CircularIcon
            src="/assets/icons/tokopedia-icon.png"
            className="absolute right-[22%] top-[10%] p-2 scale-150"
          />
          <CircularIcon
            src="/assets/icons/traveloka-icon.png"
            className="absolute left-[25%] top-[10%] p-1 scale-150"
          />
          <CircularIcon
            src="/assets/icons/blibli-icon.png"
            className="absolute bottom-[50%] right-[15%] p-1 scale-150"
          />
          <CircularIcon
            src="/assets/icons/grab-icon.png"
            className="absolute bottom-[25%] right-[35%] scale-[1.8] p-1"
          />
        </div>
        <div className="absolute flex flex-col items-center gap-8 top-[15%] ">
          <h1 className="text-center font-semibold w-2/3">
            Langkah Pertama Menuju Karir Impian
          </h1>
          <p className="text-p text-primaryGray w-2/3 text-center">
            Dapatkan akses ke panduan, tips wawancara, dan sumber daya karir
            membantu Anda meraih sukses dalam dunia kerja
          </p>
          <Button variant="default" className="px-8">
            Cari Perusahaan
          </Button>
        </div>
      </div>
    </div>
  );
}
